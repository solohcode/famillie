import { Button } from 'flowbite-react'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Bounce } from 'react-reveal'
import { useNavigate } from 'react-router'

function Error404Page() {
  const navigate = useNavigate()
  return (
    <div className='w-full h-[90vh] items-center align-middle pt-32'>
      <Bounce bottom>
        <div className='text-center space-y-10'>
          <p className='text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent md:from-primary to-primary md:to-accent'>404!</p>
          <p className='text-xl font-bold text-gray-400'>
            The page you seek is either under construction or does not exist! <br /> please retrace your clicks back
          </p>
          <Button onClick={()=>navigate("/")} className='bg-prime mx-auto'>
            <AiOutlineArrowLeft />
            <span className='ml-3'>Back</span>
          </Button>
        </div>
      </Bounce>
    </div>
  )
}

export default Error404Page