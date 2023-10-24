'use client';
import { useState } from 'react'


const StaffList = ({result}:{result:CollegeCoachingStaff[]}) =>{
    const [staff, setStaff]= useState(result)
    return(
    <>
    {staff.map(
        (coach)=>(
            <div className='flex space-x-2'>
                <h2>{coach.university}</h2>
                <p>{coach.name}</p>
                <p>{coach.jobTitle}</p>
            </div>
            ))}
    </>
    )
}
export default StaffList;