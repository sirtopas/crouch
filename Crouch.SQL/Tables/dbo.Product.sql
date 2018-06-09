CREATE TABLE [dbo].[Product]
(
[ProductId] [int] NOT NULL IDENTITY(1, 1),
[ProductCategoryId] [int] NOT NULL,
[ProductTitle] [varchar] (100) COLLATE Latin1_General_CI_AS NOT NULL,
[ProductDescription] [varchar] (2000) COLLATE Latin1_General_CI_AS NULL,
[PricePerKg] [decimal] (19, 2) NULL,
[IsActive] [bit] NOT NULL,
[SumByWeight] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [PK_dbo.Product] PRIMARY KEY CLUSTERED  ([ProductId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [IX_ProductCategoryId] ON [dbo].[Product] ([ProductCategoryId]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [FK_dbo.Product_dbo.ProductCategory_ProductCategoryId] FOREIGN KEY ([ProductCategoryId]) REFERENCES [dbo].[ProductCategory] ([ProductCategoryId])
GO
