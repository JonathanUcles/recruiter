import { db } from "@/db";
import { gameHighlights } from "@/db/schema";
import { eq } from "drizzle-orm"; 
export default async function getAllGameHighlightsByPlayerID({id}:{id:string}):Promise<gameHighlights[]>{
    const result:gameHighlights[] = await db.select().from(gameHighlights).where(eq(gameHighlights.playerID,id))
    return result

}
