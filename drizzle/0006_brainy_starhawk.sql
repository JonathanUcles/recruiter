ALTER TABLE `users` DROP FOREIGN KEY `users_roleID_roles_id_fk`;
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `roleID` varchar(250) NOT NULL;