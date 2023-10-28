ALTER TABLE `gameHighlights` MODIFY COLUMN `playerID` text NOT NULL;--> statement-breakpoint
ALTER TABLE `gameHighlights` MODIFY COLUMN `url` text NOT NULL;--> statement-breakpoint
ALTER TABLE `gameHighlights` MODIFY COLUMN `title` varchar(256) NOT NULL;