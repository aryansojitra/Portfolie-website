import { Mail, MapPin, Heart } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants'
import FadeIn from '../animations/Fadein'
import { scrollToSection } from '../../hooks/useScrollSpy'


export const Footer = () => {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
  };

  return (
    <footer className='relative bg-black overflow-hidden border-t border-primary/20'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/15 opacity-40 rounded-full blur-3xl'/>
            <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-35 rounded-full blur-3xl'/>
            <div className='absolute top-1/2 right-0 w-80 h-80 bg-primary/5 opacity-20 rounded-full blur-3xl'/>
          </div>

          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16 mb-16'>
              {/* About Section */}
              <FadeIn delay={0}>
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-4xl font-bold bg-linear-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent mb-2'>
                      {PERSONAL_INFO.name.split(' ')[0]}
                    </h3>
                    <div className='w-12 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full'/>
                  </div>
                  <p className='text-white/70 text-sm leading-relaxed font-light'>
                    {PERSONAL_INFO.tagline}
                  </p>

                  <div className='space-y-4 pt-4'>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className='group flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-primary/50 hover:from-primary/10 hover:to-primary/5 transition-all duration-500 transform hover:translate-x-1'
                    >
                      <div className='p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-all duration-300'>
                        <Mail className='w-5 h-5 text-primary'/>
                      </div>
                      <div className='flex-1 min-w-0'>
                        <p className='text-white/50 text-xs uppercase tracking-wide'>Email</p>
                        <p className='text-white/80 text-sm truncate group-hover:text-white transition-colors'>
                          {PERSONAL_INFO.email}
                        </p>
                      </div>
                    </a>

                    <div className='group flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-primary/50 hover:from-primary/10 hover:to-primary/5 transition-all duration-500 transform hover:translate-x-1'>
                      <div className='p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-all duration-300'>
                        <MapPin className='w-5 h-5 text-primary'/>
                      </div>
                      <div className='flex-1'>
                        <p className='text-white/50 text-xs uppercase tracking-wide'>Location</p>
                        <p className='text-white/80 text-sm group-hover:text-white transition-colors'>
                          {PERSONAL_INFO.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Quick Links Section */}
              <FadeIn delay={100}>
                <div className='space-y-6'>
                  <div>
                    <h4 className='text-white font-bold mb-2 text-lg uppercase tracking-wider'>Quick Links</h4>
                    <div className='w-8 h-0.5 bg-linear-to-r from-primary to-primary/30 rounded-full'/>
                  </div>
                  <ul className='space-y-4'>
                    {
                      NAV_LINKS.map((link)=>(
                        <li key={link.id}>
                          <button
                            onClick={()=>scrollToSection(link.id)}
                            className='group flex items-center gap-3 text-white/60 hover:text-primary transition-all duration-300 text-sm font-medium'
                          >
                            <div className='w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all duration-300'/>
                            <span>{link.label}</span>
                            <div className='w-0 group-hover:w-2 h-0.5 bg-primary rounded-full transition-all duration-300'/>
                          </button>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </FadeIn>

              {/* Social Section */}
              <FadeIn delay={200}>
                <div className='space-y-6'>
                  <div>
                    <h4 className='text-white font-bold mb-2 text-lg uppercase tracking-wider'>Connect</h4>
                    <div className='w-8 h-0.5 bg-linear-to-r from-primary to-primary/30 rounded-full'/>
                  </div>
                  <p className='text-white/60 text-sm leading-relaxed font-light'>
                    Let's collaborate and build something extraordinary together.
                  </p>
                  <div className='flex flex-wrap gap-4 pt-2'>
                    {Object.entries(SOCIAL_LINKS).map(([platform,url])=>{
                        const Icon = socialIcons[platform];
                        return Icon ? (
                          <a
                            key={platform}
                            href={url}
                            target='_blank'
                            rel="noopener noreferrer"
                            className='group relative p-3 bg-white/5 border border-primary/20 rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-500 transform hover:scale-120 hover:-translate-y-1'
                            aria-label={`Connect on ${platform}`}
                          >
                            <Icon className='w-6 h-6 text-white/70 group-hover:text-primary transition-colors duration-300'/>
                            <div className='absolute -inset-0.5 bg-primary/0 group-hover:bg-primary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300 -z-10'/>
                          </a>
                        ): null
                    })}
                  </div>
                </div>
              </FadeIn>

            </div>

            {/* Divider */}
            <div className='h-px bg-linear-to-r from-transparent via-primary/20 to-transparent mb-8'/>

            {/* Footer Bottom */}
            <FadeIn delay={300}>
              <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                <div className='flex flex-col sm:flex-row items-center gap-2 md:gap-4 text-white/50 text-sm'>
                  <span className='font-semibold'>{new Date().getFullYear()} {PERSONAL_INFO.name}.</span>
                  <div className='hidden sm:block w-1 h-1 rounded-full bg-white/30'/>
                  <span className='font-light'>All rights reserved.</span>
                </div>
                <div className='flex items-center gap-2 text-white/50 text-sm font-light'>
                  Crafted with <Heart className='w-4 h-4 text-primary fill-primary animate-pulse'/> using <span className='text-primary font-semibold'>React</span> & <span className='text-primary font-semibold'>Tailwind</span>
                </div>
              </div>
            </FadeIn>
          </div>
    </footer>
  )
}
