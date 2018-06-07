namespace Crouch.Core.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    public partial class ProductCategory
    {
        public ProductCategory()
        {
            Product = new HashSet<Product>();
        }

        public int ProductCategoryId { get; set; }

        [DisplayName("Category Name")]
        public string CategoryName { get; set; }

        [DisplayName("Created Date")]
        public DateTime CreatedDate { get; set; }

        [DisplayName("Last Changed Date")]
        public DateTime LastEditedDate { get; set; }

        public virtual ICollection<Product> Product { get; set; }
    }
}
