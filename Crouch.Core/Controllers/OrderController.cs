namespace Crouch.Core.Controllers
{
    using System.Linq;
    using Model;
    using Microsoft.AspNetCore.Mvc;
    using Crouch.Core.Content;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;

    [Route("api/[controller]/[action]")]
    public class OrderController : Controller
    {
        private readonly CrouchContext _context;

        public OrderController(CrouchContext context)
        {
            _context = context;
        }

        // GET: api/Order
        [HttpGet]
        public IQueryable<Order> GetAllOrders()
        {
            return _context.Order;
        }

        // GET: api/Order/5
        [HttpGet]
        public IActionResult GetOrder(int id)
        {
            Order order = _context.Order.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        [HttpGet]
        public IEnumerable<Order> GetCustomerOrders(int id)
        {
            return _context.Order.Where(order => order.CustomerId == id);
        }

        // PUT: api/Order/5
        [HttpPut]
        public IActionResult PutOrder(int id, Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Order
        [HttpPost]
        public IActionResult PostOrder(Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Order.Add(order);
            _context.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = order.OrderId }, order);
        }

        // DELETE: api/Order/5
        [HttpDelete]
        public IActionResult DeleteOrder(int id)
        {
            Order order = _context.Order.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            _context.Order.Remove(order);
            _context.SaveChanges();

            return Ok(order);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        bool OrderExists(int id)
        {
            return _context.Order.Count(e => e.OrderId == id) > 0;
        }
    }
}