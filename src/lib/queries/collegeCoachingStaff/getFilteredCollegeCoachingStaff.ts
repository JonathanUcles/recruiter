import { db } from '@/db'
import { collegeCoachingStaff } from '@/db/schema'
import { like, and} from 'drizzle-orm'
export default async function getAllFilteredCollegeCoachingStaff ({name,division,state}:
    {name:string | string[] | undefined ,division:string | string[] | undefined , state:string | string[] | undefined }
    ):Promise<CollegeCoachingStaff[]>{
        
    if(name==undefined){
        name=''
    }
    if(division==undefined){
      division=''
    }
    if(state==undefined){
        state=''
    }
   
    const results:CollegeCoachingStaff[] = await db.select().from(collegeCoachingStaff).where(and(and(like(collegeCoachingStaff.university,`${name}%`),like(collegeCoachingStaff.state,`${state}%`)),like(collegeCoachingStaff.division,`${division}%`)))
    console.log(results)
    return results

}