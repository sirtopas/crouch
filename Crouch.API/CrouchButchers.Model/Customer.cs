namespace CrouchButchers.Model
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Diagnostics.CodeAnalysis;

    [Table("Customer")]
    public partial class Customer
    {
        [SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Customer()
        {
            CustomerNote = new HashSet<CustomerNote>();
            Order = new HashSet<Order>();
        }

        public int CustomerId { get; set; }

        [StringLength(50)]
        public string Title { get; set; }

        [StringLength(50)]
        [DisplayName("First Name")]
        public string FirstName { get; set; }

        [StringLength(50)]
        [DisplayName("Last Name")]
        public string LastName { get; set; }

        [StringLength(50)]
        [DisplayName("Address 1")]
        public string Address1 { get; set; }

        [StringLength(50)]
        [DisplayName("Address 2")]
        public string Address2 { get; set; }

        [StringLength(50)]
        public string Town { get; set; }

        [StringLength(50)]
        public string County { get; set; }

        [StringLength(10)]
        [DisplayName("Post Code")]
        public string PostCode { get; set; }

        [StringLength(15)]
        [DisplayName("Phone")]
        public string PhoneNumber { get; set; }

        [StringLength(15)]
        [DisplayName("Mobile")]
        public string MobileNumber { get; set; }

        [StringLength(250)]
        [DisplayName("Email")]
        public string EmailAddress { get; set; }

        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<CustomerNote> CustomerNote { get; set; }

        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<Order> Order { get; set; }
    }
}
