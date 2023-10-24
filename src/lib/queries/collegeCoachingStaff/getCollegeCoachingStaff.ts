import { db } from '@/db'
import { collegeCoachingStaff } from '@/db/schema'
export default async function getAllCollegeCoachingStaff ():Promise<CollegeCoachingStaff[]>{
    const results:CollegeCoachingStaff[] = await db.select().from(collegeCoachingStaff)
    return results

}