CREATE TABLE [dbo].[OrderStatus]
(
[OrderStatusId] [int] NOT NULL IDENTITY(1, 1),
[OrderStatus] [nvarchar] (50) COLLATE Latin1_General_CI_AS NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OrderStatus] ADD CONSTRAINT [PK_dbo.OrderStatus] PRIMARY KEY CLUSTERED  ([OrderStatusId]) ON [PRIMARY]
GO
