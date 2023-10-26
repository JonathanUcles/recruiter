'use client'
import { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams} from 'next/navigation'
const SearchBar = () =>{
        const searchParams = useSearchParams();

        const searchedCollegeName = searchParams.get('name')
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
        <div className="flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">

            <input className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             placeholder="Enter College Name" value={collegeName} onChange={e=>setCollegeName(e.target.value)}/>
            </div>
            <Link
        href={
          // <pathname>?sort=desc
          pathname + '?' + createQueryString('name', collegeName)
        }>
            <button className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >Search</button>

        </Link>
        
        </div>
        <div className='mt-2'>
            
        
        <h3 className='block text-sm font-medium leading-6 text-gray-900 py-2'>State</h3>
        <div className='flex gap-2'>
            {states.map((state, index)=>(
                <Link
                    key={index}
                    href={
                        // <pathname>?sort=desc
                        pathname + '?' + createQueryString('state', state)
                      }
                      className={`rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${selectedState === state ? 'ring-blue-500':'ring-gray-200'}`}
                    >
                        {state}
                </Link>
            )

            )}
        </div>
        <h3 className='block text-sm font-medium leading-6 text-gray-900 py-2'>NCAA Division</h3>
        <div className='flex gap-2'>
            
            {divisions.map((division, index)=>(
                <Link
                    key={index}
                    href={
                        // <pathname>?sort=desc
                        pathname + '?' + createQueryString('division', division)
                      }
                      className={`rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${selectedDivision === division ? 'ring-blue-500':'ring-gray-200'}`}
                    >
                        {division}
                </Link>
            )

            )}
        </div>
        </div>
        </>
    )
}
export default SearchBar;