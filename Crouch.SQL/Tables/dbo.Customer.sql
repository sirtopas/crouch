CREATE TABLE [dbo].[Customer]
(
[CustomerId] [int] NOT NULL IDENTITY(1, 1),
[Title] [varchar] (50) COLLATE Latin1_General_CI_AS NULL,
[FirstName] [varchar] (50) COLLATE Latin1_General_CI_AS NULL,
[LastName] [varchar] (50) COLLATE Latin1_General_CI_AS NULL,
[Address1] [varchar] (50) COLLATE Latin1_General_CI_AS NULL,
[Address2] [varchar] (50) COLLATE Latin1_General_CI_AS NULL,
[Town] [varchar] (50) COLLATE Latin1_General_CI_AS NULL,
[County] [varchar] (50) COLLATE Latin1_General_CI_AS NULL,
[PostCode] [varchar] (10) COLLATE Latin1_General_CI_AS NULL,
[PhoneNumber] [varchar] (15) COLLATE Latin1_General_CI_AS NULL,
[MobileNumber] [varchar] (15) COLLATE Latin1_General_CI_AS NULL,
[EmailAddress] [varchar] (250) COLLATE Latin1_General_CI_AS NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Customer] ADD CONSTRAINT [PK_dbo.Customer] PRIMARY KEY CLUSTERED  ([CustomerId]) ON [PRIMARY]
GO
