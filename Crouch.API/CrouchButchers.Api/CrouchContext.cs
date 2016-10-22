namespace CrouchButchers.Api
{
    using System.Data.Entity;
    using Model;

    public partial class CrouchContext : DbContext
    {
        public CrouchContext()
            : base("name=CrouchContext")
        {
        }

        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<CustomerNote> CustomerNote { get; set; }
        public virtual DbSet<Order> Order { get; set; }
        public virtual DbSet<OrderItems> OrderItems { get; set; }
        public virtual DbSet<OrderStatus> OrderStatus { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductCategory> ProductCategory { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>()
                .Property(e => e.Title)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.FirstName)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.LastName)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.Address1)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.Address2)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.Town)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.County)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.PostCode)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.PhoneNumber)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.MobileNumber)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.EmailAddress)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .HasMany(e => e.CustomerNote)
                .WithRequired(e => e.Customer)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Customer>()
                .HasMany(e => e.Order)
                .WithRequired(e => e.Customer)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CustomerNote>()
                .Property(e => e.NoteText)
                .IsUnicode(false);

            modelBuilder.Entity<Order>()
                .Property(e => e.OrderTitle)
                .IsUnicode(false);

            modelBuilder.Entity<Order>()
                .Property(e => e.OrderDeposit)
                .HasPrecision(19, 4);

            modelBuilder.Entity<Order>()
                .Property(e => e.OrderValue)
                .HasPrecision(19, 4);

            modelBuilder.Entity<Order>()
                .Property(e => e.OrderNote)
                .IsUnicode(false);

            modelBuilder.Entity<Order>()
                .HasMany(e => e.OrderItems)
                .WithRequired(e => e.Order)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<OrderStatus>()
                .HasMany(e => e.Order)
                .WithRequired(e => e.OrderStatus)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Product>()
                .Property(e => e.ProductTitle)
                .IsUnicode(false);

            modelBuilder.Entity<Product>()
                .Property(e => e.ProductDescription)
                .IsUnicode(false);

            modelBuilder.Entity<Product>()
                .Property(e => e.PricePerKg)
                .HasPrecision(19, 2);

            modelBuilder.Entity<Product>()
                .HasMany(e => e.OrderItems)
                .WithRequired(e => e.Product)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ProductCategory>()
                .Property(e => e.CategoryName)
                .IsUnicode(false);

            modelBuilder.Entity<ProductCategory>()
                .HasMany(e => e.Product)
                .WithRequired(e => e.ProductCategory)
                .WillCascadeOnDelete(false);
        }
    }
}
