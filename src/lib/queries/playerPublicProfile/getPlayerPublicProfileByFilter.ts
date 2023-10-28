import { db } from "@/db";
import { playerPublicProfile } from "@/db/schema";
import { eq, like, or } from "drizzle-orm";
export default async function getAllGameHighlightsByPlayerID({id,username,email}:{id?:string,username?:string,email?:string}):Promise<PlayerPublicProfile[]>{
    //test to only return one ideally results[0]
    const result:PlayerPublicProfile[] = await db.select().from(playerPublicProfile).where(or(or(like(playerPublicProfile.id,`${id}`), eq(playerPublicProfile.email,`${email}%`)), eq(playerPublicProfile.username,`${username}`)))
    return result;
}