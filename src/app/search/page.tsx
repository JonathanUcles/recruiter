import SearchBar  from '@/components/SearchBar'
import { getAllCollegeCoachingStaff } from '@/lib/queries/collegeCoachingStaff'
const Page = async ()=>{
    const result = await getAllCollegeCoachingStaff();
    console.log(result)
   
    return(
        <>
        <SearchBar />
      
        </>
    )
}
export default Page;