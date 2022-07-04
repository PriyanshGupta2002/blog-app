import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'
import {motion} from 'framer-motion'
const boxVariant = {
  visible: {
    opacity: 1,
    x:0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration:"1"
    },
  },
  hidden: {
    x:-30,
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}
const childVariant= {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 }
}
const Hero = () => {
  return (
    <motion.section className={classes.hero} variants={boxVariant} animate="visible" initial="hidden">
        <motion.div className={classes.image} variants={childVariant} animate="visible" initial="hidden" >
            <Image src="/images/site/priyansh.png" alt='An Image showing Priyansh' width={300} height={300}/>
        </motion.div>
        <motion.h1  variants={childVariant} animate="visible" initial="hidden">Hi, I&apos;m Priyansh.</motion.h1>
        <motion.p  variants={childVariant} animate="visible" initial="hidden">I blog about web development - especially frontend frameworks like Angular or react.</motion.p>
    </motion.section>
  )
}

export default Hero