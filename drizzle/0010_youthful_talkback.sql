CREATE TABLE `campaigns` (
	`id` varchar(250) NOT NULL,
	`senderID` varchar(250) NOT NULL,
	`senderEmail` varchar(250) NOT NULL,
	`toEmail` varchar(250) NOT NULL,
	`subject` varchar(250) NOT NULL,
	`templateUsed` varchar(250) NOT NULL,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `campaigns_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE ``;