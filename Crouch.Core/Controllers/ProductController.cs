namespace CrouchButchers.Api.Controllers
{
    using System.Linq;
    using System.Collections.Generic;
    using Crouch.Core.Content;
    using Crouch.Core.Model;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    [Route("api/[controller]/[action]")]
    public class ProductController : Controller
    {
        readonly CrouchContext _context;

        public ProductController(CrouchContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IQueryable<Product> GetAllProducts()
        {
            return _context.Product;
        }

        [HttpGet]
        public IEnumerable<Product> GetProductsInCategory(int id)
        {
            return _context.Product.Where(product => product.ProductCategoryId == id);
        }

        [HttpGet]
        public IActionResult GetProduct(int id)
        {
            Product product = _context.Product.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        [HttpPut]
        public IActionResult PutProduct(int id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.ProductId)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        [HttpPost]
        public IActionResult PostProduct(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Product.Add(product);
            _context.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = product.ProductId }, product);
        }

        [HttpDelete]
        public IActionResult DeleteProduct(int id)
        {
            Product product = _context.Product.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Product.Remove(product);
            _context.SaveChanges();

            return Ok(product);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        bool ProductExists(int id)
        {
            return _context.Product.Count(e => e.ProductId == id) > 0;
        }
    }
}