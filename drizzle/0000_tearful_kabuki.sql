CREATE TABLE `collegeCoachingStaff` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`email` varchar(256) NOT NULL,
	`phone` varchar(20),
	`state` varchar(25) NOT NULL,
	`university` varchar(256) NOT NULL,
	`division` varchar(10) NOT NULL,
	`directoryUrl` text NOT NULL,
	CONSTRAINT `collegeCoachingStaff_id` PRIMARY KEY(`id`),
	CONSTRAINT `university_indx` UNIQUE(`university`),
	CONSTRAINT `email_indx` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `gameHighlights` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`playerID` text,
	`url` text,
	`title` varchar(256),
	CONSTRAINT `gameHighlights_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerPublicProfile` (
	`id` varchar(256) NOT NULL,
	`firstName` varchar(256) NOT NULL,
	`middleName` varchar(256),
	`lastName` varchar(256) NOT NULL,
	`hand` varchar(25),
	`weight` varchar(25),
	`username` varchar(25),
	`email` varchar(256) NOT NULL,
	`aauTeam` varchar(256),
	`school` varchar(256) NOT NULL,
	`gpa` varchar(4),
	`apClasses` text,
	`classRank` varchar(10),
	`awards` text,
	`imgUrl` text,
	`maxPrepsProfileUrl` text,
	`maxPrepsScheduleUrl` text,
	`recentHighlightUrl` text,
	CONSTRAINT `playerPublicProfile_id` PRIMARY KEY(`id`),
	CONSTRAINT `playerPublicProfile_id_unique` UNIQUE(`id`),
	CONSTRAINT `playerPublicProfile_username_unique` UNIQUE(`username`),
	CONSTRAINT `usernameIndx` UNIQUE(`username`),
	CONSTRAINT `emailIndx` UNIQUE(`email`)
);
