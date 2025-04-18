    import React from 'react'
    import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

    export default function Footer() {
    return (
        <footer className="w-full py-16 mt-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text */}
            <span className="text-lg text-gray-400 text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} Mohamed Amine Ammar  
            <br className="block md:hidden" />
            — All rights reserved.
            </span>

            {/* Social Icons */}
            <div className="flex gap-5">
            {[
                { icon: <FaFacebookF />, link: 'https://www.facebook.com/profile.php?id=100009032685978' },
                { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/mohamed-amine-ammar/' },
                { icon: <FaGithub />, link: 'https://github.com/aminammar1' },
                { icon: <FaInstagram />, link: 'https://www.instagram.com/amine_ammr/' },
            ].map((item, i) => (
                <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white text-2xl hover:text-gray-400 transition-all duration-300"
                >
                {item.icon}
                </a>
            ))}
            </div>
        </div>
        </footer>
    )
    }
