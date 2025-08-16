'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaNode, FaReact, FaPython } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiMongodb,
  SiStripe,
  SiNestjs,
  SiTailwindcss,
  SiDocker,
  SiClerk,
  SiFastapi,
  SiHuggingface,
  SiSocketdotio,
} from 'react-icons/si'
import { BsDatabaseFill } from 'react-icons/bs'
import { ArrowUpRightIcon } from '@heroicons/react/16/solid'

const projects = [
  {
    title: 'PetPulse',
    description:
      'Full-stack pet care platform with Fastify, MongoDB, Socket.IO, and Next.js',
    tech: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Fastify', icon: SiFastapi, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Socket.IO', icon: SiSocketdotio, color: '#010101' },
    ],
    image: '/projects/image5.jpg',
    link: 'https://petcare-platforme-petpulse.vercel.app',
  },
  {
    title: 'ElBoutique',
    description:
      'E-commerce platform with NestJS, MongoDB, Stripe, and Next.js',
    tech: [
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Stripe', icon: SiStripe, color: '#6772E5' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    ],
    image: '/projects/image3.png',
    link: 'https://elboutique-store.vercel.app',
  },
  {
    title: 'Hanouti.Tn',
    description:
      'E-commerce platform with Express, MongoDB, Docker, Stripe, and Next.js',
    tech: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Stripe', icon: SiStripe, color: '#6772E5' },
      { name: 'Express', icon: SiNextdotjs, color: '#000000' },
    ],
    image: '/projects/image2.png',
    link: 'https://tunisian-shop-next-js.vercel.app',
  },
  {
    title: 'CodeTrix',
    description:
      'IT Interview Platform with Convex, Next.js, Tailwind, Docker, and Clerk',
    tech: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Convex', icon: BsDatabaseFill, color: '#FF6B6B' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Clerk', icon: SiClerk, color: '#6C47FF' },
    ],
    image: '/projects/image1.png',
    link: 'https://it-interview-platform.vercel.app',
  },
  {
    title: 'Amine-Real-Estate App',
    description: 'Node.js, Express, React-based real estate platform',
    tech: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Node.js', icon: FaNode, color: '#339933' },
      { name: 'Express', icon: SiNextdotjs, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
    image: '/projects/image4.png',
    link: 'https://mern-amine-estate.onrender.com',
  },
  {
    title: 'AI CV-JD Matcher',
    description:
      'AI-powered recruitment app with FastAPI, React, and Hugging Face',
    tech: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Hugging Face', icon: SiHuggingface, color: '#FF9D00' },
    ],
    image: '/projects/image6.png',
    link: 'https://ai-powered-recruitment-app.vercel.app',
  },
]

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)
  return (
    <section className="py-32 relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
            Selected Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {visibleProjects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative h-[500px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer"
            >
              <motion.div
                className="h-[250px] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                className="p-6 h-[25px] bg-surface"
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-4 group/title">
                  <h3 className="text-2xl font-bold text-content">
                    {project.title}
                  </h3>
                  <ArrowUpRightIcon className="h-6 w-6 text-content/50 group-hover/title:text-primary transition-colors duration-300" />
                </div>
                <p className="text-content/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech"
                    >
                      <tech.icon
                        style={{ color: tech.color }}
                        className="w-4 h-4 transition-colors"
                      />
                      <span className="group-hover/tech:text-content transition-colors">
                        {tech.name}
                      </span>
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      </div>
    </section>
  )
}
