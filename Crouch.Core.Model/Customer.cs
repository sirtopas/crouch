namespace Crouch.Core.Model
{
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Diagnostics.CodeAnalysis;

    public partial class Customer
    {
        public Customer()
        {
            CustomerNote = new HashSet<CustomerNote>();
            Order = new HashSet<Order>();
        }

        public int CustomerId { get; set; }

        public string Title { get; set; }

        [DisplayName("First Name")]
        public string FirstName { get; set; }

        [DisplayName("Last Name")]
        public string LastName { get; set; }

		[DisplayName("Address 1")]
        public string Address1 { get; set; }

        [DisplayName("Address 2")]
        public string Address2 { get; set; }

        public string Town { get; set; }

        public string County { get; set; }

        [DisplayName("Post Code")]
        public string PostCode { get; set; }

        [DisplayName("Phone")]
        public string PhoneNumber { get; set; }

        [DisplayName("Mobile")]
        public string MobileNumber { get; set; }

        [DisplayName("Email")]
        public string EmailAddress { get; set; }

        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<CustomerNote> CustomerNote { get; set; }

        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<Order> Order { get; set; }
    }
}
