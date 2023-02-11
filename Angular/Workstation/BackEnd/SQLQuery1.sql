create database WorkstationsDB
ON
(
	Name = 'WorksationsDB',
	Filename = 'D:\Git\Angular\Workstation\BackEnd\worksationsDB.mdf',
	Size = 10MB,
	MAXSIZE = 500MB,
	FILEGROWTH = 10MB

)
LOG ON
(
  Name='LOGWorkstationsDB',
  Filename = 'D:\Git\Angular\Workstation\BackEnd\worksationsDB.ldf'
  )