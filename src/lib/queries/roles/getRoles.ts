import { db } from "@/db"; 
import { roles } from "@/db/schema"; 
import {eq,or} from 'drizzle-orm'
export default async function getAllRoles():Promise<Roles[]>{
    const result = await db.select().from(roles).where(or(eq(roles.name,'player'),eq(roles.name,'coach')))
    return result;
}
