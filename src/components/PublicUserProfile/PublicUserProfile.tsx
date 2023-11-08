'use client'
import { usePathname} from 'next/navigation'
import Text from 'next/'
const PublicUserProfile = () =>{
    const pathName = usePathname()

    return(
        <>
        <div  className='min-w-4xl'>
            <div className='flex space-x-2'>
                <button
                className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    Share


                </button>
                <button 
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={()=>{navigator.clipboard.writeText(window.location.toString())}}>
                    Copy Link to Profile 
                </button>

            </div>
       
            <div className='user-heading'>
                <h1 className='text-3xl font-bold'>Name Last-Name</h1>
                <h2 className='text-xl font-semibold'>School Name</h2>
                <h2>City, State</h2>
                <div className='flex space-x-2'>
                    <h3>0'00</h3>
                    <h3>000 Lbs</h3>
                    <h3>GPA</h3>

                </div>
            </div>
            <div className='flex space-x-12'>
                <div>
                  
                    <div>
                        <div className='videos  bg-gray-700 p-2 rounded-t'>
                            <h3 className='text-xl font-semibold text-neutral-50'>Highlights</h3>


                        </div>
                        
                        <iframe className='rounded-b' width="800" height="450" src="https://www.youtube.com/embed/KQsBYBYUcZo?si=36Ad4xICUqPEQkg8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='border rounded-t'>
                            <div className='achievements-stats bg-gray-700 p-2 rounded'>
                            <h3 className='text-xl font-semibold text-neutral-50'>Academics</h3>

                            
                            </div>
                            <ul className='p-2'>
                                <li>
                                    GPA 4.0
                                </li>
                                <li>
                                    Class Rank 1/100000
                                </li>
                                <li>
                                    Ap Classes
                                </li>
                                    
                                
                            </ul>
                            
                        </div>
                        <div className='border rounded-t mt-20'>
                            <div className='achievements-stats bg-gray-700 p-2 rounded-t'>
                            <h3 className='text-xl font-semibold text-neutral-50'>Top Achievements & Stats</h3>

                            </div>
                            <ul className='p-2'>
                                <li>1st Team All 6A Metro Region </li>
                                <li>Offensive Player of the year</li>
                                <li>99.99 PPG 99.99 APG 99.99 RPG</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>

        
        </div>
        </>)
}
export default PublicUserProfile