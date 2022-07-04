import React, { useState } from 'react'
import ContactForm from '../components/contact/contact-form'
import Notification from '../components/ui/notification'
import Head from 'next/head'
const Contact = () => {
  const [showNotification, setshowNotification] = useState(false)
  const [error , setError] = useState(false)
  const [title , setTitle] = useState()
  const [status , setStatus] = useState('')
  const contactDataHandler=async(contactData)=>{
    setshowNotification(true)
    setTitle('Sending...')
    setStatus('')
    const response = await fetch('http://localhost:3000/api/contact',{
      method:"POST",
      body:JSON.stringify(contactData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    if (!response.ok) {
      const data = await response.json()
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000);
      setshowNotification(false)
      return
    }
    const data = await response.json()
    setshowNotification(true)
    setTitle('Message sent!')
    setStatus('success')
    setError(false)
    setTimeout(() => {
      setshowNotification(false)
    }, 3000);
  }
  return (
    <>
    <Head>
      <title>Contact Us!</title>
      <meta name='description' content='Welcome to contact page. Feel free to send any message to us.'/>
    </Head>
    <ContactForm sendMessage={contactDataHandler}/>
   {showNotification && <Notification title={title} message="Message has been successfully sent" status={status}/>} 
   {error && <Notification title="Failure!" message="Message can't be send!" status="error"/>}
    </>
  )
}

export default Contact