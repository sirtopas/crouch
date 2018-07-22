namespace CrouchButchers.Api.Controllers
{
    using System.Linq;
    using System;
    using Microsoft.AspNetCore.Mvc;
    using Crouch.Core.Content;
    using Crouch.Core.Model;
    using Microsoft.EntityFrameworkCore;

    [Route("api/[controller]/[action]")]
    public class ProductCategoryController : Controller
    {
        readonly CrouchContext _context;

        public ProductCategoryController(CrouchContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IQueryable<ProductCategory> GetAllProductCategories()
        {
            return _context.ProductCategory;
        }

        [HttpGet]
        public IActionResult GetProductCategory(int id)
        {
            ProductCategory productCategory = _context.ProductCategory.Find(id);
            if (productCategory == null)
                return NotFound();

            return Ok(productCategory);
        }

        [HttpPut]
        public IActionResult PutProductCategory(int id, ProductCategory productCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productCategory.ProductCategoryId)
            {
                return BadRequest();
            }

            _context.Entry(productCategory).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductCategoryExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        [HttpPost]
        public IActionResult PostProductCategory(ProductCategory productCategory)
        {
            productCategory.CreatedDate = DateTime.Now;
            productCategory.LastEditedDate = DateTime.Now;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ProductCategory.Add(productCategory);
            _context.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = productCategory.ProductCategoryId }, productCategory);
        }

        [HttpDelete]
        public IActionResult DeleteProductCategory(int id)
        {
            ProductCategory productCategory = _context.ProductCategory.Find(id);
            if (productCategory == null)
            {
                return NotFound();
            }

            _context.ProductCategory.Remove(productCategory);
            _context.SaveChanges();

            return Ok(productCategory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        bool ProductCategoryExists(int id)
        {
            return _context.ProductCategory.Count(e => e.ProductCategoryId == id) > 0;
        }
    }
}