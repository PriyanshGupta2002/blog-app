import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import classes from './contact-form.module.css'
const ContactForm = (props) => {

    const emailRef = useRef()
    const nameRef = useRef()
    const messageRef = useRef()

    const onSubmitHandler=(e)=>{
        e.preventDefault()
        const enteredEmail = emailRef.current.value
        const enteredName = nameRef.current.value
        const enteredMessage = messageRef.current.value
    
        const contactData = {
          email:enteredEmail,
          name:enteredName,
          subject:enteredMessage
        }
        if (!enteredName || enteredName.trim().length<=0 || !enteredEmail || !enteredEmail.includes("@") || !enteredMessage || enteredMessage.trim().length<=0) {
        props.sendMessage(contactData)
        return
        }
    
        props.sendMessage(contactData)
        emailRef.current.value=""
        nameRef.current.value=""
        messageRef.current.value=""
    }
    return (
    <motion.section className={classes.contact}
    initial={{
    x:-2000
    }}
    animate={{
      x:0
    }}
    transition={{
      type:"spring",
      stiffness:"20"

    }}>
        <h1>How can I help You?</h1>
      <form action="" onSubmit={onSubmitHandler} className={classes.form}>
        <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required  id='name'ref={nameRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id='email' ref={emailRef}/>
        </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="subject">Message</label>
          <textarea name="" id="subject" rows="5" ref={messageRef}></textarea>
        </div>  
        <div className={classes.actions}>
        <button>Send Message</button>
        </div>
      </form>

    </motion.section>
  )
}

export default ContactForm