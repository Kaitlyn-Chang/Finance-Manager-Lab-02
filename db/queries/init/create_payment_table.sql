-- Make payment table
CREATE TABLE `payment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `item` VARCHAR(45) NOT NULL,
  `cost` INT NOT NULL,
  `description` VARCHAR(150) NULL,
  PRIMARY KEY (`id`)
);
