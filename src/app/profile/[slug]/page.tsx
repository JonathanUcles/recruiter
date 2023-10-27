import { PublicUserProfile } from "@/components";
const Page = ({params}:{params:{slug:string}}) =>{
    return(
        <>
        <PublicUserProfile />
        </>
    )

}
export default Page;