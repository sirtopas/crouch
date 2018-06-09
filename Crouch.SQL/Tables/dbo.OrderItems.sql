CREATE TABLE [dbo].[OrderItems]
(
[OrderId] [int] NOT NULL,
[ProductId] [int] NOT NULL,
[Quantity] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OrderItems] ADD CONSTRAINT [PK_dbo.OrderItems] PRIMARY KEY CLUSTERED  ([OrderId], [ProductId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [IX_OrderId] ON [dbo].[OrderItems] ([OrderId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [IX_ProductId] ON [dbo].[OrderItems] ([ProductId]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OrderItems] ADD CONSTRAINT [FK_dbo.OrderItems_dbo.Order_OrderId] FOREIGN KEY ([OrderId]) REFERENCES [dbo].[Order] ([OrderId])
GO
ALTER TABLE [dbo].[OrderItems] ADD CONSTRAINT [FK_dbo.OrderItems_dbo.Product_ProductId] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([ProductId])
GO
