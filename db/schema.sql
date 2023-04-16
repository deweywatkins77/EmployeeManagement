DROP DATABASE IF EXISTS empManagement;
CREATE DATABASE empManagement;
use empManagement;

Create Table departments(
	id INT auto_increment primary key,
	name VARCHAR(30) NOT NULL
);

Create Table roles(
	id INT auto_increment primary key,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    deptId INT,
    FOREIGN KEY (deptId)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

Create Table employees(
	id INT auto_increment primary key,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    roleID INT,
    managerId INT NOT NULL,
    FOREIGN KEY (roleId)
    REFERENCES roles(id)
    ON DELETE SET NULL
);