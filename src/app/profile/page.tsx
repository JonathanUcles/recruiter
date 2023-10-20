
import { auth , currentUser} from '@clerk/nextjs'
import Link from 'next/link'
const Page = async ({params}:{params:{slug:string}}) =>{
    const {userId} = auth()
    const user = await currentUser()
   
    return(
        <>
        
            <p>Profile {user?.firstName} {user?.lastName}</p>
            <Link href={`/profile/${user?.username}?uid=${userId}`}>View Public Profile!</Link>
        </>
    
    )

}
export default Page;