
import { auth , currentUser} from '@clerk/nextjs'
import Link from 'next/link'
import { EditUserProfile } from '@/components'
const Page = async ({params}:{params:{slug:string}}) =>{
    const {userId} = auth()
    const user = await currentUser()
   
    return(
        <>
        
            <p>Profile {user?.firstName} {user?.lastName}</p>
            <Link href={`/profile/${user?.username}?uid=${userId}`}         className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
>View Public Profile!</Link>
            <EditUserProfile />
        </>
    
    )

}
export default Page;