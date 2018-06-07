namespace Crouch.Core.Model
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Diagnostics.CodeAnalysis;

    public partial class Product
    {
        [SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Product()
        {
            OrderItems = new HashSet<OrderItems>();
        }

        [DisplayName("Product ID")]
        public int ProductId { get; set; }

        [DisplayName("Category ID")]
        public int ProductCategoryId { get; set; }

        [DisplayName("Product Title")]
        public string ProductTitle { get; set; }

        [DisplayName("Product Description")]
        public string ProductDescription { get; set; }

        [DisplayName("Price / Kg")]
        public decimal? PricePerKg { get; set; }

        [DisplayName("Active")]
        public bool IsActive { get; set; }

        [DisplayName("Sum By Weight")]
        public bool SumByWeight { get; set; }

        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<OrderItems> OrderItems { get; set; }

        public ProductCategory ProductCategory { get; set; }
    }
}