import React from 'react'
import { Html } from '@react-email/html'
import { Head } from '@react-email/head'
import { Tailwind } from '@react-email/tailwind'
import { Heading } from '@react-email/heading'
import { Button } from '@react-email/button'
type ProspectEmail = {
    name:string
}
const ProspectEmail = ({name }:ProspectEmail) =>{
    return(
        <Html>
            <Head>
                <title>{name} - recruiter </title>
            </Head>
            <Tailwind>
          <Heading>{name}</Heading>
            <Button
            pX={20}
            pY={12}
            style={{ background: "#000", color: "#fff" }}
            >Check out my Profile</Button>
            </Tailwind>
        </Html>
    )
}
export default ProspectEmail