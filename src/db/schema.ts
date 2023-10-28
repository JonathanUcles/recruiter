import { mysqlTable, serial, varchar, uniqueIndex , text, timestamp, boolean} from 'drizzle-orm/mysql-core'
import { sql } from 'drizzle-orm'
export const collegeCoachingStaff = mysqlTable('collegeCoachingStaff',{
    id:serial('id').primaryKey(),
    name: varchar('name',{length:256}).notNull(),
    email:varchar('email',{length:256}).notNull(),
    phone:varchar('phone',{length:20}),
    state:varchar('state',{length:25}).notNull(),
    jobTitle:varchar('jobTitle',{length:256}).notNull(),
    university:varchar('university',{length:256}).notNull(),
    division:varchar('division',{length:10}).notNull(),
    directoryUrl:text('directoryUrl').notNull()
},(table)=>{
    return {
        emailIndx:uniqueIndex('email_indx').on(table.email)

    }
})

export const playerPublicProfile = mysqlTable('playerPublicProfile',{
    id:varchar('id',{length:256}).unique().primaryKey(),
    firstName:varchar('firstName',{length:256}).notNull(),
    middleName:varchar('middleName',{length:256}),
    lastName:varchar('lastName',{length:256}).notNull(),
    hand:varchar('hand',{length:25}),
    weight:varchar('weight',{length:25}),
    username:varchar('username',{length:25}).unique(),
    email:varchar('email',{length:256}).notNull(),
    aauTeam:varchar('aauTeam',{length:256}),
    school:varchar('school',{length:256}).notNull(),
    gpa:varchar('gpa',{length:4}),
    apClasses:text('apClasses'),
    classRank:varchar('classRank',{length:10}),
    awards:text('awards'),
    imgUrl:text('imgUrl'),
    maxPrepsProfileUrl:text('maxPrepsProfileUrl'),
    maxPrepsScheduleUrl:text('maxPrepsScheduleUrl'),
    recentHighlightUrl:text('recentHighlightUrl')

    
},(table)=>{
    return{
        usernameIndx:uniqueIndex('usernameIndx').on(table.username),
        emailIndx:uniqueIndex('emailIndx').on(table.email)
    }
})
export const gameHighlights = mysqlTable('gameHighlights',{
    id:serial('id').primaryKey(),
    playerID:text('playerID').notNull(),
    url:text('url').notNull(),
    title:varchar('title',{length:256}).notNull()

})

export const roles = mysqlTable('roles', {
    id: varchar('id',{length:250}).primaryKey().notNull().default(sql`(uuid())`),
    name:varchar('name',{length:250}).unique().notNull(),
    createdAt: timestamp('createdAt').defaultNow()

})
export const users = mysqlTable('users',{
    id:varchar('id',{length:256}).primaryKey(),
    firstName: varchar('firstName',{length:256}).notNull(),
    lastName: varchar('lastName',{length:256}).notNull(),
    email:varchar('email',{length:256}).unique().notNull(),
    username: varchar('username',{length:256}).notNull(),
    roleID:varchar('roleID',{length:250}).notNull(),
    createdAt: timestamp('createdAt').defaultNow()

})
export const schoolTeams = mysqlTable('schoolTeams',{
    id: varchar('id',{length:250}).primaryKey().notNull().default(sql`(uuid())`),
    schoolName:varchar('schoolName',{length:256}).notNull(),
    teamName:varchar('teamName',{length:256}).notNull(),
    division:varchar('division',{length:256}).notNull(),
    conference:varchar('conference',{length:256}).notNull(),
    state:varchar('state',{length:256}).notNull(),
    city:varchar('city',{length:256}),
    createdAt: timestamp('createdAt').defaultNow()
})
export const aauTeams = mysqlTable('aauTeams',{
    id: varchar('id',{length:250}).primaryKey().notNull().default(sql`(uuid())`),
    teamName:varchar('teamName',{length:256}).notNull(),
    ageGroup:varchar('program',{length:10}).notNull(),
    circut:varchar('circut',{length:256}),
    createdAt: timestamp('createdAt').defaultNow(), 
})

export const schoolToPlayerRoster = mysqlTable('schoolToPlayerRoster',{
    id: varchar('id',{length:250}).primaryKey().notNull().default(sql`(uuid())`),
    schoolID:varchar('schoolID',{length:250}).notNull(),
    playerId:varchar('playerID',{length:250}).notNull(),
    position:varchar('position',{length:250}).notNull(),
    season:varchar('season',{length:50}).notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})
export const accessToAppEmailList = mysqlTable('accessToAppEmailList',{
    id: varchar('id',{length:250}).primaryKey().notNull().default(sql`(uuid())`),
    email:varchar('email',{length:100}).unique().notNull(),
    isPlayer:boolean('isPlayer').notNull(),
    isCoach:boolean('isCoach').notNull(),
    active:boolean('active'),
    approved:boolean('approved'),
    createdAt: timestamp('createdAt').defaultNow()

})
export const campaigns = mysqlTable('campaigns',{
    id:varchar('id',{length:250}).primaryKey(),
    senderID:varchar('senderID',{length:250}),
    senderEmail:varchar('senderEmail',{length:250}).notNull(),
    toEmail:varchar('toEmail',{length:250}).notNull(),
    subject:varchar('subject',{length:250}).notNull(),
    templateUsed:varchar('templateUsed',{length:250}).notNull(),
    createdAt: timestamp('createdAt').defaultNow()
})
export const coachPublicProfile = mysqlTable('coachPublicProfile',{
    id:varchar('id',{length:256}).primaryKey(),
    firstName:varchar('firstName',{length:256}).notNull(),
    middleName:varchar('middleName',{length:256}),
    lastName:varchar('lastName',{length:256}).notNull(),
    jobTitle:varchar('jobTitle',{length:256}).notNull(),
    email:varchar('email',{length:256}).notNull(),
    username:varchar('username',{length:256}),
    schoolTeamID:varchar('schoolTeamID',{length:256}),
    aauTeamID:varchar('aauTeamID',{length:256}),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow()



})

export const schoolTeamStaff = mysqlTable('schoolTeamStaff',{
    id:varchar('id',{length:256}).primaryKey(),
    schoolID:varchar('SchoolID',{length:256}).notNull(),
    coachID:varchar('coachID',{length:256}).notNull(),


})
export const coachEvaluation = mysqlTable('coachEvaluation', {
    id: varchar('id',{length:250}).primaryKey().notNull().default(sql`(uuid())`),
    coachID:varchar('coachID',{length:256}).notNull(),
    playerID:varchar('SchoolID',{length:256}).notNull(),
    highlightUrl:text('highlightUrl'),
    evaluation:text('evaluation').notNull(),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow()

})