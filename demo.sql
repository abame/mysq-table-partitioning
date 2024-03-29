SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS 'demo' ;
CREATE SCHEMA IF NOT EXISTS 'demo' DEFAULT CHARACTER SET latin1 ;
USE 'demo' ;

-- -----------------------------------------------------
-- Table 'demo'.'customers'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'demo'.'customers' (
  'id' INT(11) NOT NULL AUTO_INCREMENT,
  'company' VARCHAR(50) NULL DEFAULT NULL,
  'last_name' VARCHAR(50) NULL DEFAULT NULL,
  'first_name' VARCHAR(50) NULL DEFAULT NULL,
  'job_title' VARCHAR(50) NULL DEFAULT NULL,
  'fax_number' VARCHAR(25) NULL DEFAULT NULL,
  'address' LONGTEXT NULL DEFAULT NULL,
  'city' VARCHAR(50) NULL DEFAULT NULL,
  'state_province' VARCHAR(50) NULL DEFAULT NULL,
  'zip_postal_code' VARCHAR(15) NULL DEFAULT NULL,
  'country_region' VARCHAR(50) NULL DEFAULT NULL,
  'store_id' INT(11) NULL DEFAULT NULL,
  'total_orders' INT(11) NULL DEFAULT NULL,
  'registered_at' TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY ('id'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
