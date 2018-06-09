CREATE TABLE [dbo].[CustomerNote]
(
[CustomerNoteId] [int] NOT NULL IDENTITY(1, 1),
[CustomerId] [int] NOT NULL,
[NoteDate] [datetime] NOT NULL,
[NoteText] [varchar] (8000) COLLATE Latin1_General_CI_AS NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerNote] ADD CONSTRAINT [PK_dbo.CustomerNote] PRIMARY KEY CLUSTERED  ([CustomerNoteId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [IX_CustomerId] ON [dbo].[CustomerNote] ([CustomerId]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerNote] ADD CONSTRAINT [FK_dbo.CustomerNote_dbo.Customer_CustomerId] FOREIGN KEY ([CustomerId]) REFERENCES [dbo].[Customer] ([CustomerId])
GO
