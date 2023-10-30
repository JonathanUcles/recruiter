import {  currentUser } from '@clerk/nextjs'
import {getAllRoles} from '@/lib/queries'
import { GettingStarted } from '@/components'
const Page =async ()=>{
    const user = await currentUser()
    const roles = await getAllRoles()
   
    return(
        <>
        
    
        <GettingStarted user={{id:user?.id, email:user?.emailAddresses[0].emailAddress, firstName:user?.firstName, lastName:user?.lastName, username:user?.username }} roles={roles} />
        </>
    )
}
export default Page;