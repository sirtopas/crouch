namespace CrouchButchers.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Diagnostics.CodeAnalysis;

    [Table("Order")]
    public partial class Order
    {
        [SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Order()
        {
            OrderItems = new HashSet<OrderItems>();
        }

        [DisplayName("Order ID")]
        public int OrderId { get; set; }

        [DisplayName("Order Status")]
        public int OrderStatusId { get; set; }

        [DisplayName("Customer ID")]
        public int CustomerId { get; set; }

        [StringLength(150)]
        [DisplayName("Order Title")]
        public string OrderTitle { get; set; }

        [Display(Name = "Order Date")]
        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime OrderDate { get; set; }

        [Display(Name = "Collection Date")]
        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CollectionDate { get; set; }

        [Column(TypeName = "money")]
        [DisplayName("Deposit")]
        public decimal OrderDeposit { get; set; }

        [Column(TypeName = "money")]
        [DisplayName("Order Value")]
        public decimal? OrderValue { get; set; }

        [StringLength(8000)]
        [DisplayName("Order Note")]
        public string OrderNote { get; set; }

        public virtual Customer Customer { get; set; }

        public virtual OrderStatus OrderStatus { get; set; }

        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OrderItems> OrderItems { get; set; }
    }
}
