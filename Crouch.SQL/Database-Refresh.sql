USE [CrouchOnline]
GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 03/08/2018 12:25:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__MigrationHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ContextKey] [nvarchar](300) NOT NULL,
	[Model] [varbinary](max) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC,
	[ContextKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 03/08/2018 12:25:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](128) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 03/08/2018 12:25:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 03/08/2018 12:25:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](128) NOT NULL,
	[ProviderKey] [nvarchar](128) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 03/08/2018 12:25:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](128) NOT NULL,
	[RoleId] [nvarchar](128) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 03/08/2018 12:25:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](128) NOT NULL,
	[Email] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEndDateUtc] [datetime] NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[UserName] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 03/08/2018 12:25:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[CustomerId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](50) NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[Address1] [varchar](50) NULL,
	[Address2] [varchar](50) NULL,
	[Town] [varchar](50) NULL,
	[County] [varchar](50) NULL,
	[PostCode] [varchar](10) NULL,
	[PhoneNumber] [varchar](15) NULL,
	[MobileNumber] [varchar](15) NULL,
	[EmailAddress] [varchar](250) NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerNote]    Script Date: 03/08/2018 12:25:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerNote](
	[CustomerNoteId] [int] IDENTITY(1,1) NOT NULL,
	[CustomerId] [int] NOT NULL,
	[NoteDate] [datetime] NOT NULL,
	[NoteText] [varchar](8000) NOT NULL,
 CONSTRAINT [PK_CustomerNote] PRIMARY KEY CLUSTERED 
(
	[CustomerNoteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Order]    Script Date: 03/08/2018 12:25:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order](
	[OrderId] [int] IDENTITY(1,1) NOT NULL,
	[OrderStatusId] [int] NOT NULL,
	[CustomerId] [int] NOT NULL,
	[OrderTitle] [varchar](150) NULL,
	[OrderDate] [datetime] NOT NULL,
	[CollectionDate] [datetime] NOT NULL,
	[OrderDeposit] [money] NOT NULL,
	[OrderValue] [money] NULL,
	[OrderNote] [varchar](8000) NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderItems]    Script Date: 03/08/2018 12:25:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderItems](
	[OrderId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
 CONSTRAINT [PK_OrderItems] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC,
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderStatus]    Script Date: 03/08/2018 12:25:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderStatus](
	[OrderStatusId] [int] IDENTITY(1,1) NOT NULL,
	[OrderStatus] [varchar](50) NOT NULL,
 CONSTRAINT [PK_OrderStatus] PRIMARY KEY CLUSTERED 
(
	[OrderStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 03/08/2018 12:25:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[ProductCategoryId] [int] NOT NULL,
	[ProductTitle] [varchar](100) NOT NULL,
	[ProductDescription] [varchar](2000) NULL,
	[PricePerKg] [decimal](19, 2) NULL,
	[IsActive] [bit] NOT NULL,
	[SumByWeight] [bit] NOT NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductCategory]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductCategory](
	[ProductCategoryId] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [varchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastEditedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_ProductCategory] PRIMARY KEY CLUSTERED 
(
	[ProductCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[CustomerNote]  WITH CHECK ADD  CONSTRAINT [FK_CustomerNote_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customer] ([CustomerId])
GO
ALTER TABLE [dbo].[CustomerNote] CHECK CONSTRAINT [FK_CustomerNote_Customer]
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customer] ([CustomerId])
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_Customer]
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_OrderStatus] FOREIGN KEY([OrderStatusId])
REFERENCES [dbo].[OrderStatus] ([OrderStatusId])
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_OrderStatus]
GO
ALTER TABLE [dbo].[OrderItems]  WITH CHECK ADD  CONSTRAINT [FK_OrderItems_Order] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Order] ([OrderId])
GO
ALTER TABLE [dbo].[OrderItems] CHECK CONSTRAINT [FK_OrderItems_Order]
GO
ALTER TABLE [dbo].[OrderItems]  WITH CHECK ADD  CONSTRAINT [FK_OrderItems_Product] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([ProductId])
GO
ALTER TABLE [dbo].[OrderItems] CHECK CONSTRAINT [FK_OrderItems_Product]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_ProductCategory] FOREIGN KEY([ProductCategoryId])
REFERENCES [dbo].[ProductCategory] ([ProductCategoryId])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_ProductCategory]
GO
/****** Object:  StoredProcedure [dbo].[AddCustomerNote]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      <James Brett>
-- Create date: <01/02/2015>
-- Description: <Get a Customer Notes by ID>
-- =============================================
CREATE PROCEDURE [dbo].[AddCustomerNote]
	@CustomerId INT,
	@CustomerNoteId INT,
	@NoteDate DATETIME,
	@NoteText VARCHAR(8000)
AS
BEGIN
	INSERT INTO dbo.CustomerNote
	VALUES
	(
		@CustomerId,
		@NoteDate,
		@NoteText
	)
END
GO
/****** Object:  StoredProcedure [dbo].[CreateOrder]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CreateOrder]
@StatusId int,
@OrderNumber varchar(255),
@ContactId int,
@OrderTitle varchar(255),
@OrderDate datetime,
@CollectionDate datetime,
@OrderDeposit decimal,
@OrderNote varchar(MAX),
@OrderValue decimal
AS
BEGIN
	INSERT INTO dbo.[Order]
	(
		OrderStatusId,
		OrderNumber,
		ContactId,
		OrderTitle,
		OrderDate,
		CollectionDate,
		OrderDeposit,
		OrderNote,
		OrderValue
	)
	VALUES
	(
		@StatusId,
		@OrderNumber,
		@ContactId,
		@OrderTitle,
		@OrderDate,
		@CollectionDate,
		@OrderDeposit,
		@OrderNote,
		@OrderValue
	)

END

GO
/****** Object:  StoredProcedure [dbo].[DeleteCustomer]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      <James Brett>
-- Create date: <01/02/2015>
-- Description: <Delete a customer>
-- =============================================
CREATE PROCEDURE [dbo].[DeleteCustomer]
	@CustomerId INT
AS
BEGIN
	DELETE FROM dbo.Customer
	WHERE CustomerId = @CustomerId
END
GO
/****** Object:  StoredProcedure [dbo].[DeleteProduct]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      <James Brett>
-- Create date: <01/02/2015>
-- Description: <Delete a product>
-- =============================================
CREATE PROCEDURE [dbo].[DeleteProduct]
	@ProductId INT
AS
BEGIN
	DELETE FROM dbo.Product
	WHERE ProductId = @ProductId
END
GO
/****** Object:  StoredProcedure [dbo].[GetCustomer]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      <James Brett>
-- Create date: <01/02/2015>
-- Description: <Get a Customer by ID>
-- =============================================
CREATE PROCEDURE [dbo].[GetCustomer]
	@CustomerId INT
AS
BEGIN
	SELECT CustomerId, Title, FirstName, LastName, Address1, Address2, Town, County, PostCode, PhoneNumber, MobileNumber, EmailAddress FROM dbo.Customer
	WHERE CustomerId = @CustomerId
END
GO
/****** Object:  StoredProcedure [dbo].[GetCustomerNotes]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      <James Brett>
-- Create date: <01/02/2015>
-- Description: <Get a Customer Notes by ID>
-- =============================================
CREATE PROCEDURE [dbo].[GetCustomerNotes]
	@CustomerId INT
AS
BEGIN
	SELECT CustomerNoteId, NoteDate, NoteText FROM dbo.CustomerNote
	WHERE CustomerId = @CustomerId
END
GO
/****** Object:  StoredProcedure [dbo].[GetCustomers]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      <James Brett>
-- Create date: <01/02/2015>
-- Description: <Get all customers>
-- =============================================
CREATE PROCEDURE [dbo].[GetCustomers]
AS
BEGIN
	SELECT CustomerId, Title, FirstName, LastName, Address1, Address2, Town, County, PostCode, PhoneNumber, MobileNumber, EmailAddress FROM dbo.Customer
END
GO
/****** Object:  StoredProcedure [dbo].[GetItems]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetItems]
AS
BEGIN
	SELECT 'test'
END
GO
/****** Object:  StoredProcedure [dbo].[GetOrder]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- =============================================
-- Author:      <James Brett>
-- Create date: <15/02/2015>
-- Description: <Get an Order by ID>
-- =============================================
CREATE PROCEDURE [dbo].[GetOrder]
	@OrderId INT
AS
BEGIN
	SELECT OrderId, OrderStatusId, OrderNumber, ContactId, OrderTitle, OrderDate, CollectionDate, OrderDeposit, OrderValue, OrderNote
	FROM dbo.[Order]
	WHERE OrderId = @OrderId
END

GO
/****** Object:  StoredProcedure [dbo].[GetOrders]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      <James Brett>
-- Create date: <15/02/2015>
-- Description: <Get all orders>
-- =============================================
CREATE PROCEDURE [dbo].[GetOrders]
AS
BEGIN
	SELECT OrderId, OrderStatusId, OrderNumber, ContactId, OrderTitle, OrderDate, CollectionDate, OrderDeposit, OrderValue, OrderNote
	FROM dbo.[Order]
END

GO
/****** Object:  StoredProcedure [dbo].[GetProduct]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      <James Brett>
-- Create date: <01/02/2015>
-- Description: <Get a Product by ID>
-- =============================================
CREATE PROCEDURE [dbo].[GetProduct]
	@ProductId INT
AS
BEGIN
	SELECT ProductId, ProductTitle, ProductDescription, PricePerKg
	FROM Product
	WHERE ProductId = @ProductId
END
GO
/****** Object:  StoredProcedure [dbo].[GetProducts]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      <James Brett>
-- Create date: <01/02/2015>
-- Description: <Get all products>
-- =============================================
CREATE PROCEDURE [dbo].[GetProducts]
AS
BEGIN
	SELECT ProductId, ProductTitle, ProductDescription, PricePerKg FROM Product
END
GO
/****** Object:  StoredProcedure [dbo].[UpdateCustomer]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      <James Brett>
-- Create date: <01/02/2015>
-- Description: <Update or Create a Customer>
-- =============================================
CREATE PROCEDURE [dbo].[UpdateCustomer]
	@CustomerId INT,
	@Title VARCHAR(10),
	@FirstName VARCHAR(255),
	@LastName VARCHAR(255),
	@Address1 VARCHAR(255),
	@Address2 VARCHAR(255),
	@Town VARCHAR(255),
	@County VARCHAR(255),
	@PostCode VARCHAR(255),
	@PhoneNumber VARCHAR(255),
	@MobileNumber VARCHAR(255),
	@EmailAddress VARCHAR(255)
AS
BEGIN
	IF (@CustomerId = 0)
	BEGIN
		INSERT INTO dbo.Customer
		VALUES
		(
			@Title,
			@FirstName,
			@LastName,
			@Address1,
			@Address2,
			@Town,
			@County,
			@PostCode,
			@PhoneNumber,
			@MobileNumber,
			@EmailAddress
		)
	END

	ELSE
	BEGIN
		UPDATE dbo.Customer
		SET Title = @Title,
			FirstName = @FirstName,
			LastName = @LastName,
			Address1 = @Address1,
			Address2 = @Address2,
			Town = @Town,
			County = @County,
			PostCode = @PostCode,
			PhoneNumber = @PhoneNumber,
			MobileNumber = @MobileNumber,
			EmailAddress = @EmailAddress
		WHERE CustomerId = @CustomerId
	END
END
GO
/****** Object:  StoredProcedure [dbo].[UpdateProduct]    Script Date: 03/08/2018 12:25:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      <James Brett>
-- Create date: <01/02/2015>
-- Description: <Update or Create a Product>
-- =============================================
CREATE PROCEDURE [dbo].[UpdateProduct]
	@ProductId INT,
	@ProductTitle VARCHAR(100),
	@ProductDescription VARCHAR(255),
	@PricePerKg DECIMAL(19,2)
AS
BEGIN
	IF (@ProductId = 0)
	BEGIN
		INSERT INTO dbo.Product
		VALUES
		(
			1,
			@ProductTitle,
			@ProductDescription,
			@PricePerKg,
			1,
			1
		)
	END

	ELSE
	BEGIN
		UPDATE dbo.Product
		SET ProductTitle = @ProductTitle,
			ProductDescription = @ProductDescription,
			PricePerKg = @PricePerKg
		WHERE ProductId = @ProductId
	END
END
GO
