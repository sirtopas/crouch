namespace CrouchButchers.Api.Controllers
{
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Linq;
    using System.Net;
    using System.Web.Http;
    using System.Web.Http.Description;
    using Model;
    using System.Web.Http.Cors;

    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CustomerController : ApiController
    {
        private CrouchContext db = new CrouchContext();

        // GET: api/Customer
        public IQueryable<Customer> GetCustomer()
        {
            return db.Customer.Take(50);
        }

        // GET: api/Customer/5
        public Customer GetCustomer(int id)
        {
            Customer customer = db.Customer.Find(id);
            if (customer == null)
            {
            }

            return customer;
        }

        // PUT: api/Customer/5
        [ResponseType(typeof(void))]
        [HttpPut]
        public IHttpActionResult PutCustomer(int customerId, Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (customerId != customer.CustomerId)
            {
                return BadRequest();
            }

            db.Entry(customer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(customerId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Customer
        [ResponseType(typeof(Customer))]
        public IHttpActionResult PostCustomer(Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Customer.Add(customer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = customer.CustomerId }, customer);
        }

        // DELETE: api/Customer/5
        [ResponseType(typeof(Customer))]
        public IHttpActionResult DeleteCustomer(int id)
        {
            Customer customer = db.Customer.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            db.Customer.Remove(customer);
            db.SaveChanges();

            return Ok(customer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerExists(int id)
        {
            return db.Customer.Count(e => e.CustomerId == id) > 0;
        }
    }
}