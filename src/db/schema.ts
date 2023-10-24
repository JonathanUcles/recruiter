import { mysqlTable, serial, varchar, uniqueIndex , text} from 'drizzle-orm/mysql-core'
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
    playerID:text('playerID'),
    url:text('url'),
    title:varchar('title',{length:256})

})

