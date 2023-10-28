ALTER TABLE `campaigns` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `campaigns` MODIFY COLUMN `senderID` varchar(250);