CREATE TABLE `accessToAppEmailList` (
	`id` varchar(250) NOT NULL DEFAULT (uuid()),
	`email` varchar(100) NOT NULL,
	`isPlayer` boolean NOT NULL,
	`isCoach` boolean NOT NULL,
	`active` boolean,
	`approved` boolean,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `accessToAppEmailList_id` PRIMARY KEY(`id`),
	CONSTRAINT `accessToAppEmailList_email_unique` UNIQUE(`email`)
);
