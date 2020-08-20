import React, {useState} from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const FormField = styled.input`
    border-radius: 10px;
    background-color: #F6EDE9;
    border: solid;
    padding: 10px;
    width: 300px;
`

const FormLabel = styled.p`
    margin-right: 20px;
`

const FormArea = styled.div`
    margin: 0 auto;
    display: block;
    text-align: center;
`

const EmailForm = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)
    let thankyoumessage;

    const sendToMailchimp = (e) => {
        e.preventDefault();
        addToMailchimp(email)
        .then(data => {
            if(data.result == 'success'){
                setSubscribed(true)
            }
            setEmail('')
        })
    }

    if(subscribed){
        thankyoumessage = <p>You'll be getting my musings in your inbox soon!</p>
    }

    return (
        <FormArea>
            <FormLabel>Get these posts in your inbox</FormLabel>
            <FormField type="text" placeholder="email@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} />
            <Button onClick={(e) => sendToMailchimp(e)}>Add me!</Button>
            {thankyoumessage}
        </FormArea>
    )
}



export default EmailForm
