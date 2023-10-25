import SearchBar  from '@/components/SearchBar'
import { StaffList } from '@/components';
import { getAllCollegeCoachingStaff, getAllFilteredCollegeCoachingStaff } from '@/lib/queries/collegeCoachingStaff'
const Page = async ({searchParams}: {searchParams?: { [key: string]: string | string[] | undefined }})=>{
    let results = []
    const name = searchParams?.name;
    const state = searchParams?.state;
    const division =  searchParams?.division;
    if(name || division|| state){       
        results = await getAllFilteredCollegeCoachingStaff({name,division,state});

    }else {
        results = await getAllCollegeCoachingStaff();
    }
   console.log(searchParams)
    return(
        <>
        <SearchBar />
        <StaffList result={results} />
        </>
    )
}
export default Page;