namespace Crouch.Core.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Diagnostics.CodeAnalysis;

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

        [DisplayName("Order Title")]
        public string OrderTitle { get; set; }

        public DateTime OrderDate { get; set; }

        public DateTime CollectionDate { get; set; }

        [DisplayName("Deposit")]
        public decimal OrderDeposit { get; set; }

        [DisplayName("Order Value")]
        public decimal? OrderValue { get; set; }

        [DisplayName("Order Note")]
        public string OrderNote { get; set; }

        public virtual Customer Customer { get; set; }

        public virtual OrderStatus OrderStatus { get; set; }

        public virtual ICollection<OrderItems> OrderItems { get; set; }
    }
}