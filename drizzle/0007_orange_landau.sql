CREATE TABLE `schoolToPlayerRoster` (
	`id` varchar(250) NOT NULL DEFAULT (uuid()),
	`schoolID` varchar(250) NOT NULL,
	`playerID` varchar(250) NOT NULL,
	`position` varchar(250) NOT NULL,
	`season` varchar(50) NOT NULL,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `schoolToPlayerRoster_id` PRIMARY KEY(`id`)
);
