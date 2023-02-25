import React from 'react'
import { TextInput } from 'flowbite-react'
import {CiSearch} from 'react-icons/ci'
import './style.css'
import Accorddionn from './secondaccordion'
import Testing from './firstaccordion'

function FaqPage() {
  return (
      <div className='faq px-7'>
        <h1 className='my-7 font-bold text-center text-3xl'>Frequently Asked Questions</h1>
        <div className='flex items-center'>
          <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent md:from-primary to-primary md:to-accent'> We have answers to your Question </span>
          <div className='w-full'>
            <TextInput
              className='px-5 py-7 bg-white border-slate-400 '
              id="email"
              type="text"
              icon={CiSearch}
              placeholder="Search a Question"
              required={true}
            />
          </div>
        </div>
        <div className='flex flex-row px-4'>
          <p className='mx-7 font-bold'>General Question</p>
          <Testing />
        </div>
        <div className='flex flex-row px-4'>
          <p  className='mx-7 font-bold'>Safety & Security</p>
          <Accorddionn />
        </div>
    </div>
  )
}

export default FaqPage