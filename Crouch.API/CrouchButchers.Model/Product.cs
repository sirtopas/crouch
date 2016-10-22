namespace CrouchButchers.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Product")]
    public partial class Product
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Product()
        {
            OrderItems = new HashSet<OrderItems>();
        }

        [DisplayName("Product ID")]
        public int ProductId { get; set; }

        [DisplayName("Category ID")]
        public int ProductCategoryId { get; set; }

        [Required]
        [StringLength(100)]
        [DisplayName("Product Title")]
        public string ProductTitle { get; set; }

        [StringLength(2000)]
        [DisplayName("Product Description")]
        public string ProductDescription { get; set; }

        [DisplayName("Price / Kg")]
        public decimal? PricePerKg { get; set; }

        [DisplayName("Active")]
        public bool IsActive { get; set; }

        [DisplayName("Sum By Weight")]
        public bool SumByWeight { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<OrderItems> OrderItems { get; set; }

        public ProductCategory ProductCategory { get; set; }
    }
}
