'use client'
import { useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import SearchBar  from '@/app/components/SearchBar'
const Page = ()=>{
    const searchParams = useSearchParams();

    const createQueryString = useCallback((name:string, value:string)=>{
        const params = new URLSearchParams(searchParams);
        params.set(name,value);
        console.log(params)
        return params.toString()
    },[searchParams])
    console.log(searchParams)
    return(
        <>
        <SearchBar paramHook={searchParams} paramCallBack={createQueryString}/>
      
        </>
    )
}
export default Page;