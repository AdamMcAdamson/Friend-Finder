CREATE DATABASE friends_db;

USE friends_db;

CREATE TABLE friends (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    photo VARCHAR(500) NOT NULL,
    scores VARCHAR(50) NOT NULL
);

INSERT INTO friends (name, photo, scores) 
VALUES ("Adam Brunn", "https://pbs.twimg.com/profile_images/814704871689420800/AT7CXLKy.jpg", "[5, 5, 1, 2, 2, 5, 1, 1, 1, 2]"),
	("Yo Momma", "https://slm-assets3.secondlife.com/assets/1570652/view_large/549032f792f4df1bba88abaac8effafd.jpg?1277250335", "[1, 2, 1, 2, 1, 2, 1, 2, 1, 3]"),
	("Jean Whiz", "https://c1.staticflickr.com/9/8250/8613866072_e4e0b9e2bb_b.jpg", "[5, 1, 5, 5, 5, 1, 5, 5, 5, 5]"),
	("Kim Kardashian", "http://gazettereview.com/wp-content/uploads/2016/06/Kim-Kardashian-Net-Worth.jpg", "[1, 1, 3, 5, 5, 1, 5, 5, 4, 3]");
