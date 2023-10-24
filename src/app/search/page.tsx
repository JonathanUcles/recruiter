import SearchBar  from '@/components/SearchBar'
import { StaffList } from '@/components';
import { getAllCollegeCoachingStaff } from '@/lib/queries/collegeCoachingStaff'
const Page = async ()=>{
    const results = await getAllCollegeCoachingStaff();
    
   
    return(
        <>
        <SearchBar />
        <StaffList result={results} />
        </>
    )
}
export default Page;