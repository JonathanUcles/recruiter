type CollegeCoachingStaff = {
    id:number,
    name: string,
    email?:string,
    phone?:string|null,
    state:string,
    university:string,
    division:string,
    jobTitle:string,
    directoryUrl?:string
}
type GameHighlights={
    id:number,
    playerID:string,
    url:string,
    title:string,

}
type PlayerPublicProfile = {
    id:string,
    firstName:string, 
    middleName:string | null,
    lastName:string, 
    hand:string | null,
    weight:string | null,   
    username:string, 
    email:string,    
    aauTeam:string | null,  
    school:string,   
    gpa:string | null,    
    apClasses:string | null,
    classRank:string | null,
    awards:string | null,   
    imgUrl:string | null,   
    maxPrepsProfileUrl:string  | null,  
    maxPrepsScheduleUrl:string | null, 
    recentHighlightUrl:string | null,  

}