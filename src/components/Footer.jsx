import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"


const links= [
    {href: 'https://discord.com', icon:<FaDiscord/>},
    {href: 'https://twitter.com', icon:<FaTwitter/>},
    {href: 'https://github.com', icon:<FaGithub/>},
    {href: 'https://www.linkedin.com', icon:<FaLinkedin/>}
]
const Footer = () => {
  return (
    <footer  className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left'>
                &copy; 2025 Interactive. All right reserved.
            </p>
            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link)=>(
                    <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                        {link.icon}
                    </a>
                ))}
                
            </div>
            
        </div>
        
    </footer>
  )
}

export default Footer