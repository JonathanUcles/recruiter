'use client'
import { useAuth } from '@clerk/nextjs'

type ProspectEmailData= {
    name:string,
    prospectCompaignEmail:string,
    toEmail:string,
    subject:string

}
const SendProspectEmailButton = ({name,prospectCompaignEmail,toEmail,subject}:ProspectEmailData) =>{
    const {getToken} = useAuth()
    const handleClick = async () =>{
        const resp = await fetch(`/api/prospectEmail`,{
            method:"POST",
            headers:{
                Authorization:`Bearer ${await getToken()}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "name":`${name}`,
                "prospectCompaignEmail":`${prospectCompaignEmail}`,
                "toEmail":`${toEmail}`,
                "subject":`${subject}`
            })
        })

    }
    return(
        <>
         <button onClick={()=>handleClick()}>
            send email

        </button>
        </>
    )
}
export default SendProspectEmailButton