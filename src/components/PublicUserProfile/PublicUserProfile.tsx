'use client'
import { usePathname} from 'next/navigation'

const PublicUserProfile = () =>{
    const pathName = usePathname()

    return(
        <>
            <button 
                 className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={()=>{navigator.clipboard.writeText(window.location.toString())}}>
                Copy Link to Profile 
            </button>
        </>)
}
export default PublicUserProfile