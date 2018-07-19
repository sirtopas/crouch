CREATE TABLE [dbo].[Order]
(
[OrderId] [int] NOT NULL IDENTITY(1, 1),
[OrderStatusId] [int] NOT NULL,
[CustomerId] [int] NOT NULL,
[OrderTitle] [varchar] (150) COLLATE Latin1_General_CI_AS NULL,
[OrderDate] [datetime] NOT NULL,
[CollectionDate] [datetime] NOT NULL,
[OrderDeposit] [money] NOT NULL,
[OrderValue] [money] NULL,
[OrderNote] [varchar] (8000) COLLATE Latin1_General_CI_AS NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Order] ADD CONSTRAINT [PK_dbo.Order] PRIMARY KEY CLUSTERED  ([OrderId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [IX_CustomerId] ON [dbo].[Order] ([CustomerId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [IX_OrderStatusId] ON [dbo].[Order] ([OrderStatusId]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Order] ADD CONSTRAINT [FK_dbo.Order_dbo.Customer_CustomerId] FOREIGN KEY ([CustomerId]) REFERENCES [dbo].[Customer] ([CustomerId])
GO
ALTER TABLE [dbo].[Order] ADD CONSTRAINT [FK_dbo.Order_dbo.OrderStatus_OrderStatusId] FOREIGN KEY ([OrderStatusId]) REFERENCES [dbo].[OrderStatus] ([OrderStatusId])
GO
