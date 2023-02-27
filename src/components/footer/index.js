import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import { Bounce, Fade } from 'react-reveal'
import { FiInstagram, FiTwitter } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  const socials = [
    {
      child: <FiTwitter />,
      url: "www.twitter.com"
    },
    {
      child: <FiInstagram />,
      url: "www.instagram.com"
    },
    {
      child: <AiOutlineLinkedin />,
      url: "www.linkedin.com"
    },
  ]
  return (
    <div className='w-full bg-light border-t'>
      <div className='py-10 px-5 md:px-20 space-y-20 font-medium text-center sm:text-start'>
        <Bounce bottom>
          <div className='sm:flex md:gap-5 space-y-10 sm:space-y-0'>

            <div className='w-full sm:w-[25%] md:w-[20%] space-y-10'>
              <Fade big>
                <img
                  src={logo}
                  className="mx-auto md:mx-0"
                  alt="logo"
                />
              </Fade>
              <p>An application that connects Family members together.</p>
              <div className='flex justify-around'>
                {socials.map((social)=>(
                  <Button color="light" className='bg-slate text-prime border-0' key={social.url}>
                    <span className='text-2xl'>{social.child}</span>
                  </Button>
                ))}
              </div>
            </div>
            <div className='w-full sm:w-[25%] md:w-[20%] text-center space-y-10'>
              <p className='text-2xl font-bold'>Company</p>
              <div className='space-y-5'>
                <p><Link to="/home">Home</Link></p>
                <p><Link to="/about">About Us</Link></p>
                <p><Link to="/features">Features</Link></p>
                <p><Link to="/contact">Contact</Link></p>
              </div>
            </div>
            <div className='w-full sm:w-[25%] md:w-[20%] text-center space-y-10'>
              <p className='text-2xl font-bold'>Others</p>
              <div className='space-y-5'>
                <p><Link to="/faq">FAQ</Link></p>
                <p><Link to="/terms">Terms & Condition</Link></p>
                <p><Link to="/policy">Private Policies</Link></p>
              </div>
            </div>
            <div className='w-full sm:w-[25%] md:w-[40%] space-y-10'>
              <p className='text-2xl font-bold'>Subscribe to Our Newsletter</p>
              <div className='flex'>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Enter your mail..."
                  className='w-full'
                />
                <Button className='bg-prime'>Subscribe</Button>
              </div>
            </div>

          </div>
        </Bounce>

        <Bounce bottom>
          <div className='text-center'>
            <p>{new Date().getFullYear()} 4Famillie. All Rights Reserved.</p>
          </div>
        </Bounce>
      </div>
    </div>
  )
}

export default Footer