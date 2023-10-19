'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ReadonlyURLSearchParams, usePathname} from 'next/navigation'
const SearchBar = ({paramHook,paramCallBack}:
    {
        paramHook:ReadonlyURLSearchParams,
        paramCallBack:(name: string, value: string) => string
    }) =>{
        const searchedCollegeName = paramHook.get('name')
        const selectedState = paramHook.get('state')
        const selectedDivision = paramHook.get('division')


        const [ collegeName, setCollegeName ] = useState(searchedCollegeName||'')
        const pathname = usePathname()
        const states = ['AZ','CA','TX','NM','NV','OR','UT','WA']
        const divisions = ['NCAA D1','NCAA D2','NCAA D3']

    return(
        <>
        <div className='flex'>
            <input className="border" placeholder="Enter College Name" value={collegeName} onChange={e=>setCollegeName(e.target.value)}/>
            <Link
        href={
          // <pathname>?sort=desc
          pathname + '?' + paramCallBack('name', collegeName)
        }>
            <button className="border p-1" >Search</button>

        </Link>
        
        </div>
        <h3>State</h3>
        <div>
            {states.map((state, index)=>(
                <Link
                    key={index}
                    href={
                        // <pathname>?sort=desc
                        pathname + '?' + paramCallBack('state', state)
                      }
                      className={`bg-gray-100 px-2 py-1 rounded border-2 ${selectedState === state ? 'border-blue-500':'border-gray-200'}`}
                    >
                        {state}
                </Link>
            )

            )}
        </div>
        <h3>NCAA Division</h3>
        <div className='flex gap-2'>
            
            {divisions.map((division, index)=>(
                <Link
                    key={index}
                    href={
                        // <pathname>?sort=desc
                        pathname + '?' + paramCallBack('division', division)
                      }
                      className={`bg-gray-100 px-2 py-1 rounded border-2 ${selectedDivision === division ? 'border-blue-500':'border-gray-200'}`}
                    >
                        {division}
                </Link>
            )

            )}
        </div>
        </>
    )
}
export default SearchBar;