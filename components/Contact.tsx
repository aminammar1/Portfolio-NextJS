    'use client'
    import React from 'react'
    import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
    import { motion } from 'framer-motion'

    export default function Contact() {
    return (
        <section className='py-32 text-white max-w-[1200px] mx-auto px-4' id='contact'>
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='grid lg:grid-cols-2 gap-16'
        >
            {/* Text Content */}
            <div className="space-y-12">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight"
            >
                Let’s <span className='text-gray-400'>Connect</span>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-xl space-y-8"
            >
                {/* Phone */}
                <div className='space-y-1'>
                <p className='text-sm uppercase tracking-widest text-gray-400'>Phone</p>
                <a
                    href="tel:+21654703212"
                    className='text-lg font-medium text-white hover:text-gray-300 transition-all duration-300 flex items-center gap-3'
                >
                    <FaPhoneAlt className='text-gray-400' />
                    +216 54 703 212
                </a>
                </div>

                {/* Email */}
                <div className='space-y-1'>
                <p className='text-sm uppercase tracking-widest text-gray-400'>Email</p>
                <a
                    href="mailto:ammar.mohamdamine@gmail.com"
                    className='text-lg font-medium text-white hover:text-gray-300 transition-all duration-300 flex items-center gap-3'
                >
                    <FaEnvelope className='text-gray-400' />
                    ammar.mohamdamine@gmail.com
                </a>
                </div>

                {/* Location */}
                <div className='space-y-1'>
                <p className='text-sm uppercase tracking-widest text-gray-400'>Location</p>
                <address className='text-lg not-italic text-white flex items-center gap-3'>
                    <FaMapMarkerAlt className='text-gray-400' />
                    Monastir, Tunisia
                </address>
                </div>
            </motion.div>
            </div>

            {/* Map */}
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-white/10"
            >
            <iframe
                className='w-full h-full'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.496290408126!2d10.825592215307808!3d35.76425298016966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13021f278c9e20ab%3A0x77884dc4ff3a3c65!2sMonastir%2C%20Tunisia!5e0!3m2!1sen!2stn!4v1682943947031"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
            </motion.div>
        </motion.section>
        </section>
    )
    }
