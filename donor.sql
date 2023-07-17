drop database if exists donor;
create database donor;
use donor;

create table profile(
	ID int not null primary key AUTO_INCREMENT,
	PName varchar(255) not null,
	Address varchar(255),
	DOB date,
	Email varchar(255),
	PAN varchar(10)
);

create table transactions(
	InvoiceID int primary key not null AUTO_INCREMENT,
    ID int not null,
    Amount int,
    TransactionMode varchar(20),
    TransactionDate date,
    TransactionID int not null,
    FiscalYear varchar(20),
    FOREIGN KEY (ID) REFERENCES profile(ID)
);

insert into profile(Pname, Address, DOB, Email, PAN)
	values('John', '777 Brockton Avenue, Abington MA 2351', '2000-01-01','john2000@gmail.com','BNZAA2318J'),
		('Emily','66-4 Parkhurst Rd, Chelmsford MA 1824', '1999-03-31','empark@gmail.com', 'BLZAA3318P'),
        ('Mark', '280 Washington Street, Hudson MA 1749','1999-12-24','markzuck@gmail.com','QEFNA2510R');

insert into transactions(ID, Amount, TransactionMode, TransactionDate, TransactionID,  FiscalYear)
values(3, 100000, 'NEFT', '2023-07-22', 32, 'FY2023-2024'),
(3, 50000, 'NEFT', '2023-07-26', 39, 'FY2023-2024'),
(2, 60000, 'DEBIT', '2023-12-01', 53, 'FY2023-2024'),
(2, 32000, 'NEFT', '2023-01-22', 10, 'FY2022-2023'),
(3, 100000, 'CREDIT', '2023-09-11', 49, 'FY2023-2024'),
(1, 20000, 'UPI', '2023-02-12', 12, 'FY2022-2023');