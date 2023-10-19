import React from 'react'
import {Html} from '@react-email/html'
import { Button } from '@react-email/button'
const ProspectEmail = () =>{
    return(
        <Html>
          <h1>test</h1>
            <Button
            pX={20}
            pY={12}
            style={{ background: "#000", color: "#fff" }}
            >Check out my Profile</Button>

        </Html>
    )
}
export default ProspectEmail