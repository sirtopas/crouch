CREATE TABLE [dbo].[ProductCategory]
(
[ProductCategoryId] [int] NOT NULL IDENTITY(1, 1),
[CategoryName] [varchar] (50) COLLATE Latin1_General_CI_AS NOT NULL,
[CreatedDate] [datetime] NOT NULL,
[LastEditedDate] [datetime] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductCategory] ADD CONSTRAINT [PK_dbo.ProductCategory] PRIMARY KEY CLUSTERED  ([ProductCategoryId]) ON [PRIMARY]
GO
