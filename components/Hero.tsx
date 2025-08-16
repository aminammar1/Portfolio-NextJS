    'use client'

    import React, { useEffect } from 'react'
    import pfimage from '@/assets/pfimage.png'
    import Image from 'next/image'
    import { animate, useMotionTemplate, useMotionValue, motion } from 'framer-motion'
    import { FaArrowRight } from 'react-icons/fa'

    const colors = ["#00FF41", "#0D7377", "#4DF3FF", "#A020F0", "#FF003C"]

    export default function Hero() {
    const color = useMotionValue(colors[0])

    useEffect(() => {
        animate(color, colors, {
        duration: 10,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
        })
    }, [color])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    return (
        <motion.section
        style={{ backgroundImage }}
        className='relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200'
        >
        <div className='z-10 flex flex-col items-center text-center' id ='about'>
            <span className='mb-3 inline-block rounded-full bg-gray-700/60 px-4 py-2 text-sm tracking-wide uppercase'>
            Open to Work
            </span>

            <h1 className='text-white/40 text-4xl md:text-6xl font-extrabold uppercase tracking-widest'>
            Hi, I am
            </h1>

            <h1 className='max-w-3xl bg-gradient-to-br from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-black leading-tight text-5xl md:text-7xl drop-shadow-lg'>
            Mohamed Amine Ammar
            </h1>

            <Image
            src={pfimage}
            alt='Profile Image'
            width={320}
            className='my-6 rounded-full border-4 border-gray-800 shadow-xl'
            priority
            />
            <p className='my-6 max-w-xl text-gray-400 text-lg'>
            Junior FullStack Developer based in Tunisia
            </p>

            <a href = '/MedAmineAmmarResume.pdf'
            download>
            <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide bg-black/50 hover:bg-black/70 transition-all'
            >
            Download CV
            <FaArrowRight />
            </motion.button>
            </a>
        </div>

        <div className='bg-circle-container'>
            <div className='bg-circle-background'></div>
            <div className='bg-circle'></div>
        </div>
        </motion.section>
    )
    }
