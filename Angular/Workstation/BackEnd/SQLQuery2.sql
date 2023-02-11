USE WorkstationsDB
create table dbo.Workstations
(
	Id int identity (1,1),
	Branch varchar(30) NOT NULL,
	Region varchar(30) NOT NULL,
	IP char(12) NOT NULL,
	Hostname varchar(50) NOT NULL,
	Os varchar(50) NOT NULL,
	Cpu varchar(1000) NOT NULL,
	Board varchar(500) NOT NULL,
	HddType char(3) NOT NULL,
	Capacity char(5) NOT NULL,
	RamType char(4) NOT NULL,
	Ram char(4) NOT NULL,
)


create table dbo.Otherhosts
(
	Id int identity (1,1),
	Branch varchar(30) NOT NULL,
	Region varchar(30) NOT NULL,
	IP char(12) NOT NULL,
	Hostname varchar(50) NOT NULL,
	Os varchar(50) NOT NULL,
	Cpu varchar(1000) NOT NULL,
	Board varchar(500) NOT NULL,
	HddType char(3) NOT NULL,
	Capacity char(5) NOT NULL,
	RamType char(4) NOT NULL,
	Ram char(4) NOT NULL,
)


select * from dbo.Workstations

insert into dbo.Workstations values
(
	'Davitashen',
	'Yerevan',
	'10.10.29.31',
	'WS0291401',
	'Windows 10 LTSC x64',
	'Intel Core i5 4460',
	'Asus P8H61M-K',
	'HDD',
	'500',
	'DDR3',
	'16'   
)
GO


insert into dbo.Otherhosts values
(
	'Davitashen',
	'Yerevan',
	'10.10.29.22',
	'CT0291502',
	'Windows 10 LTSC x64',
	'Intel Core i5 4460',
	'Asus P8H61M-K',
	'HDD',
	'500',
	'DDR3',
	'4'   
)
GO

select * from Otherhosts

