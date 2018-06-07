namespace Crouch.Core.Content
{
	using System;
	using Crouch.Core.Model;
	using Microsoft.EntityFrameworkCore;
	using Microsoft.Extensions.Configuration;

	public partial class CrouchContext : DbContext
	{
		public CrouchContext(DbContextOptions<CrouchContext> options)
			: base(options)
        {
        }

		public virtual DbSet<Customer> Customer { get; set; }
		public virtual DbSet<CustomerNote> CustomerNote { get; set; }
		public virtual DbSet<Order> Order { get; set; }
		public virtual DbSet<OrderItems> OrderItems { get; set; }
		public virtual DbSet<OrderStatus> OrderStatus { get; set; }
		public virtual DbSet<Product> Product { get; set; }
		public virtual DbSet<ProductCategory> ProductCategory { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
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
						.HasMany(e => e.CustomerNote);

			modelBuilder.Entity<Customer>()
						.HasMany(e => e.Order);

			modelBuilder.Entity<CustomerNote>()
				.Property(e => e.NoteText)
				.IsUnicode(false);

			modelBuilder.Entity<Order>()
				.Property(e => e.OrderTitle)
				.IsUnicode(false);

			modelBuilder.Entity<Order>()
						.Property(e => e.OrderDeposit);

			modelBuilder.Entity<Order>()
						.Property(e => e.OrderValue);

			modelBuilder.Entity<Order>()
				.Property(e => e.OrderNote)
				.IsUnicode(false);

			modelBuilder.Entity<Order>()
						.HasMany(e => e.OrderItems);

			modelBuilder.Entity<OrderStatus>()
						.HasMany(e => e.Order);

			modelBuilder.Entity<Product>()
				.Property(e => e.ProductTitle)
				.IsUnicode(false);

			modelBuilder.Entity<Product>()
				.Property(e => e.ProductDescription)
				.IsUnicode(false);

			modelBuilder.Entity<Product>()
						.Property(e => e.PricePerKg);

			modelBuilder.Entity<Product>()
						.HasMany(e => e.OrderItems);

			modelBuilder.Entity<ProductCategory>()
				.Property(e => e.CategoryName)
				.IsUnicode(false);

			modelBuilder.Entity<ProductCategory>()
						.HasMany(e => e.Product);
		}
	}
}