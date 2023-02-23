import React from 'react'
import { TextInput } from 'flowbite-react'
import {CiSearch} from 'react-icons/ci'
import './style.css'
import Accorddion from './accordion'
import Accorddionn from './secondaccordion'

function FaqPage() {
  return (
      <div 
        className='faq px-4 '
      >
        <h1 className='my-5 text-center text-3xl'>Frequently Asked Questions</h1>
        <div className='flex'>
          <h6 className='text-xl text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <span>We have answers to </span>
            <span>your Question</span>
          </h6>
          <div className='w-3/4'>
            <TextInput
              className='px-5 py-5 bg-transparent border-slate-400 '
              id="email4"
              type="text"
              icon={CiSearch}
              placeholder="Search a Question"
              required={true}
            />
          </div>
        </div>
        <div className='flex my-7'>
          <p className='mx-7 font-bold'>General Question</p>
          <Accorddion />
        </div>
        <div className='flex my-7'>
          <p  className='mx-7 font-bold'>Safety & Security</p>
          <Accorddionn />
        </div>
    </div>
  )
}

export default FaqPage