'use client'

import { motion } from 'framer-motion'
import {
    SiDocker,
    SiFastify,
    SiFigma,
    SiTailwindcss,
    SiRedux,
    SiPostgresql,
    SiGo,
    SiGraphql,
    SiNestjs,
} from 'react-icons/si'

const icons = [
    { Icon: SiDocker, label: 'Docker' },
    { Icon: SiFastify, label: 'Fastify' },
    { Icon: SiFigma, label: 'Figma' },
    { Icon: SiTailwindcss, label: 'Tailwind CSS' },
    { Icon: SiRedux, label: 'Redux' },
    { Icon: SiPostgresql, label: 'PostgreSQL' },
    { Icon: SiGo, label: 'Go' },
    { Icon: SiGraphql, label: 'GraphQL' },
    { Icon: SiDocker, label: 'Docker' },
    { Icon: SiNestjs, label: 'NestJs' },
    { Icon: SiFigma, label: 'Figma' },
    { Icon: SiTailwindcss, label: 'Tailwind CSS' },
    { Icon: SiRedux, label: 'Redux' },
    { Icon: SiPostgresql, label: 'PostgreSQL' },
    { Icon: SiGo, label: 'Go' },
    { Icon: SiGraphql, label: 'GraphQL' },
]

export default function LogoAnimation() {
    return (
        <div className='py-8 bg-purple-200/10 opacity-80'>
            <div className='container mx-auto'>
                <div className='overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]'>
                    <motion.div
                        className='flex gap-14 flex-none pr-14'
                        animate={{ translateX: '-50%' }}
                        transition={{ duration: 35, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
                    >
                        {icons.concat(icons).map(({ Icon, label }, index) => (
                            <div key={index} className='flex flex-col items-center text-gray-400'>
                                <Icon size={40} title={label} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
