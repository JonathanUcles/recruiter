'use client';
import { useState, useEffect } from 'react'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
const StaffList = ({result}:{result:CollegeCoachingStaff[]}) =>{
    const [staff, setStaff]= useState(result)
    const searchParams = useSearchParams()
    const searchedCollegeName = searchParams.get('name')
    const selectedState = searchParams.get('state')
    const selectedDivision = searchParams.get('division')
    useEffect(()=>{
        setStaff(result)
    },[searchedCollegeName,selectedState,selectedDivision])

    return(
    <>
   
    
      <ul role="list" className="divide-y divide-gray-100">
      {staff.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
           
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.jobTitle}</p>
              <p className="text-sm leading-6 text-gray-900">{person.university}</p>
            <p className="text-sm leading-6 text-gray-900">{person.division}</p>
              
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          
            <Link href={`/school/${person.university}/${person.id}?name=${person.name}`}>
                <button
                    type="button"
                    className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    View Profile
                </button>

             </Link>
             <br/>
           
                <button
                    type="button"
                    className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Send Message
                </button>

              
          </div>
        </li>
      ))}
    </ul>
   
    </>
    )
}
export default StaffList;