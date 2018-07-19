namespace Crouch.Core.Controllers
{
	using System.Linq;
	using Model;
	using Microsoft.AspNetCore.Mvc;
	using Crouch.Core.Content;
	using Microsoft.EntityFrameworkCore;

	[Route("api/[controller]/[action]")]
	public class CustomerController : Controller
	{
		private readonly CrouchContext _context;

		public CustomerController(CrouchContext context)
		{
			_context = context;
		}

		// GET: api/Customer
		[HttpPost]
		public IQueryable<Customer> GetCustomers(PagedRequest pagedRequest)
		{
			var customers = _context.Customer.OrderBy(c => c.CustomerId);
			return customers.Skip(pagedRequest.PageNumber * pagedRequest.PageSize).Take(pagedRequest.PageSize);
		}

		[HttpGet]
		public IQueryable<Customer> GetAllCustomers()
		{
			return _context.Customer;
		}

		// GET: api/Customer/5
		[HttpGet]
		public Customer GetCustomer(int id)
		{
			Customer customer = _context.Customer.Find(id);
			if (customer == null)
			{
			}

			return customer;
		}

		// PUT: api/Customer/5
		[HttpPut]
		public IActionResult PutCustomer(int id, Customer customer)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			if (id != customer.CustomerId)
			{
				return BadRequest();
			}

			_context.Entry(customer).State = EntityState.Modified;

			try
			{
				_context.SaveChanges();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!CustomerExists(id))
				{
					return NotFound();
				}
				throw;
			}

			return NoContent();
		}

		// POST: api/Customer
		[HttpPost]
		public IActionResult PostCustomer(Customer customer)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			_context.Customer.Add(customer);
			_context.SaveChanges();

			return CreatedAtRoute("DefaultApi", new { id = customer.CustomerId }, customer);
		}

		// DELETE: api/Customer/5
		[HttpDelete]
		public IActionResult DeleteCustomer(int id)
		{
			Customer customer = _context.Customer.Find(id);
			if (customer == null)
			{
				return NotFound();
			}

			_context.Customer.Remove(customer);
			_context.SaveChanges();

			return Ok(customer);
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				_context.Dispose();
			}
			base.Dispose(disposing);
		}

		bool CustomerExists(int id)
		{
			return _context.Customer.Count(e => e.CustomerId == id) > 0;
		}
	}
}