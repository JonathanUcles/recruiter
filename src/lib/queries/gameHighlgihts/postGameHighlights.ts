import { db } from "@/db"; 
import { gameHighlights } from "@/db/schema";

export default async function postGameHightlight({url,title, playerID}:{url:string, title:string, playerID:string}):Promise<void>{
    await db.insert(gameHighlights).values({playerID:playerID,title:title,url:url})

}