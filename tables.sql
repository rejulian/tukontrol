use tukontrol;

CREATE TABLE company (
	id int auto_increment not null,
	name varchar(45) not null,
    PRIMARY KEY (id)
);

INSERT INTO company (name) VALUES ("Tukode");

CREATE TABLE user (
	id int auto_increment not null,
    username varchar(45) not null,
    email varchar(100) not null,
    password varchar(45) not null,
    role char(1),
    id_company int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (id_company) REFERENCES company(id)
);

INSERT INTO user (username, email, password, role, id_company) VALUES ("julian", "contacto.julian.re@gmail.com", "123456", 2, 1);

CREATE TABLE client (
	id int auto_increment not null,
    name varchar(45) not null,
    phone varchar(45) not null,
    email varchar(100) not null,
    dni char(8) not null,
    cuit char(11) not null,
    iva varchar(45) not null,
    city varchar(45) not null,
    address varchar(45) not null,
    zipcode varchar(10) not null,
    id_company int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (id_company) REFERENCES company(id)
);

INSERT INTO client (name, phone, email, dni, cuit, iva, city, address, zipcode, id_company) VALUES ("Cliente1", "3364649082", "cliente1@gmail.com", "23789731" ,"20479878691", "Resp. Inscripto", "San Nicolas", "Maipu 10", "2300", 1);

CREATE TABLE supplier (
	id int auto_increment not null,
    name varchar(45) not null,
    phone varchar(45) not null,
    id_company int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (id_company) REFERENCES company(id)
);

CREATE TABLE product (
	id int auto_increment not null,
    name varchar(45) not null,
    barcode varchar(13) not null,
    cost float not null,
    margin_one float not null,
    margin_two float not null,
    margin_three float not null,
    price_one float not null,
    price_two float not null,
    price_three float not null,
    alicuota_iva int not null,
    stock int not null,
    id_company int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (id_company) REFERENCES company(id)
);