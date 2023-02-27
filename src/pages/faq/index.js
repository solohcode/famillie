import React from 'react'
import { TextInput } from 'flowbite-react'
import {CiSearch} from 'react-icons/ci'
import './style.css'
import Accorddionn from './secondaccordion'
import Testing from './firstaccordion'
import { Bounce, Fade } from 'react-reveal'

function FaqPage() {
  return (
      <div className='w-full faq px-4 md:px-32 py-20'>
        <Fade big>
          <h1 className='my-5 font-bold text-center text-3xl'>Frequently Asked Questions</h1>
        </Fade>

        <Bounce bottom>
          <div className='md:flex md:gap-20 items-center text-center md:text-start'>
            <div className='w-full md:w-[20%]'>
              <p className='text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent md:from-primary to-primary md:to-accent'> We have answers to your Question </p>
            </div>
            <div className='w-full md:w-[80%]'>
              <TextInput
                className='px-5 py-7 bg-white border-slate-400 '
                id="email4"
                type="text"
                icon={CiSearch}
                placeholder="Search a Question"
                required={true}
              />
            </div>
          </div>
        </Bounce>
        <Bounce bottom>
          <div className='md:flex md:gap-20 items-center text-center md:text-start'>
            <div className='w-full md:w-[20%]'>
              <p className='font-bold'>General Question</p>
            </div>
            <div className='w-full md:w-[80%]'>
              <Testing />
            </div>
          </div>
        </Bounce>
        <Bounce bottom>
          <div className='md:flex md:gap-20 items-center text-center md:text-start'>
            <div className='w-full md:w-[20%]'>
              <p  className='font-bold'>Safety & Security</p>
            </div>
            <div className='w-full md:w-[80%]'>
              <Accorddionn />
            </div>
          </div>
        </Bounce>
    </div>
  )
}

export default FaqPage