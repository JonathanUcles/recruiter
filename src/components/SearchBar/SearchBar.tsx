'use client'
import { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams} from 'next/navigation'
const SearchBar = () =>{
        const searchParams = useSearchParams();

        const searchedCollegeName = searchParams .get('name')
        const selectedState = searchParams.get('state')
        const selectedDivision = searchParams.get('division')
        const createQueryString = useCallback((name:string, value:string)=>{
            const params = new URLSearchParams(searchParams);
            params.set(name,value);
            
            return params.toString()
        },[searchParams])


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
          pathname + '?' + createQueryString('name', collegeName)
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
                        pathname + '?' + createQueryString('state', state)
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
                        pathname + '?' + createQueryString('division', division)
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