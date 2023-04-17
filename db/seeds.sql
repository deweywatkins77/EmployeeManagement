use empManagement;

INSERT INTO departments(name) VALUES ('Administration'),
('Marketing'),
('Purchasing'),
('Human Resources'),
('Shipping');

INSERT INTO roles(deptId,title,salary) VALUES (1,'Public Accountant',9000.00),
(2,'Accounting Manager',16000.00),
(3,'Administration Assistant',6000.00),
(4,'President',40000.00),
(5,'Administration VP',30000.00),
(2,'Accountant',9000.00),
(3,'Finance Manager',16000.00),
(4,'HR Representative',9000.00),
(5,'Programmer',10000.00);

INSERT INTO employees(firstName,lastName,roleId,managerId) VALUES ('Penelope','Gietz',9,0),
('Nick','Higgins',9,3),
('Ed','Whalen',8,0),
('Jennifer','King',6,3),
('Johnny','Kochhar',3,1);