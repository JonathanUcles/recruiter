'use client'
import { User } from "@clerk/nextjs/server";
import { useState } from "react";
type Props = {
    user:{
        id:string|undefined,
        email:string|undefined,
        firstName:string|undefined|null,
        lastName:string|undefined|null,
        username:string|undefined|null
    }, 
   
    roles:Roles[] 
}
const GettingStarted = ({user,roles}:Props) =>{
    const [accountType,setAccountType]=useState('')
    
    return(
        <>
        <form>
            <div>
                <label className="text-base font-semibold text-gray-900">Account Type</label>
                <p className="text-sm text-gray-500">Will this account be for a player or Coach?</p>
                <fieldset className="mt-4">
                    <legend className="sr-only">Notification method</legend>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    {roles.map((role) => (
                        <div key={role.id} className="flex items-center">
                        <input
                            id={role.id}
                            name="notification-method"
                            type="radio"
                            value={accountType}
                            onChange={()=>setAccountType(role.id)}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor={role.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                            {role.name.toUpperCase()}
                        </label>
                        </div>
                    ))}
                    </div>
                </fieldset>
            </div>
            {accountType === roles[0].id && <CoachesForm/>}
            {accountType === roles[1].id && <PlayersForm/>}

        </form>
        </>
    )
}
export default GettingStarted;

const PlayersForm =() =>{
    return(<></>)
}
const CoachesForm =() =>{
    return(<></>)
}
