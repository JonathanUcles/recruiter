import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, serial, varchar, text } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const collegeCoachingStaff = mysqlTable("collegeCoachingStaff", {
	id: serial("id").notNull(),
	name: varchar("name", { length: 256 }).notNull(),
	email: varchar("email", { length: 256 }).notNull(),
	phone: varchar("phone", { length: 20 }),
	state: varchar("state", { length: 25 }).notNull(),
	university: varchar("university", { length: 256 }).notNull(),
	division: varchar("division", { length: 10 }).notNull(),
	directoryUrl: text("directoryUrl").notNull(),
	jobTitle: varchar("jobTitle", { length: 25 }).notNull(),
},
(table) => {
	return {
		collegeCoachingStaffId: primaryKey(table.id),
		emailIndx: unique("email_indx").on(table.email),
	}
});

export const gameHighlights = mysqlTable("gameHighlights", {
	id: serial("id").notNull(),
	playerId: text("playerID"),
	url: text("url"),
	title: varchar("title", { length: 256 }),
},
(table) => {
	return {
		gameHighlightsId: primaryKey(table.id),
	}
});

export const playerPublicProfile = mysqlTable("playerPublicProfile", {
	id: varchar("id", { length: 256 }).notNull(),
	firstName: varchar("firstName", { length: 256 }).notNull(),
	middleName: varchar("middleName", { length: 256 }),
	lastName: varchar("lastName", { length: 256 }).notNull(),
	hand: varchar("hand", { length: 25 }),
	weight: varchar("weight", { length: 25 }),
	username: varchar("username", { length: 25 }),
	email: varchar("email", { length: 256 }).notNull(),
	aauTeam: varchar("aauTeam", { length: 256 }),
	school: varchar("school", { length: 256 }).notNull(),
	gpa: varchar("gpa", { length: 4 }),
	apClasses: text("apClasses"),
	classRank: varchar("classRank", { length: 10 }),
	awards: text("awards"),
	imgUrl: text("imgUrl"),
	maxPrepsProfileUrl: text("maxPrepsProfileUrl"),
	maxPrepsScheduleUrl: text("maxPrepsScheduleUrl"),
	recentHighlightUrl: text("recentHighlightUrl"),
},
(table) => {
	return {
		playerPublicProfileId: primaryKey(table.id),
		emailIndx: unique("emailIndx").on(table.email),
		playerPublicProfileIdUnique: unique("playerPublicProfile_id_unique").on(table.id),
		playerPublicProfileUsernameUnique: unique("playerPublicProfile_username_unique").on(table.username),
		usernameIndx: unique("usernameIndx").on(table.username),
	}
});