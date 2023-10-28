CREATE TABLE `roles` (
	`id` varchar(250) NOT NULL DEFAULT (uuid()),
	`name` varchar(250) NOT NULL,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `roles_id` PRIMARY KEY(`id`),
	CONSTRAINT `roles_name_unique` UNIQUE(`name`)
);
