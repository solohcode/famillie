import React from 'react'
import { Accordion } from 'flowbite-react'
import {AiOutlinePlusCircle} from 'react-icons/ai'


const Accorddion = () => {
  return (
    <div>
        <Accordion arrowIcon={AiOutlinePlusCircle}>
            <Accordion.Panel>
                <Accordion.Title>
                    What is 4Famillie?
                </Accordion.Title>
                <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.
                </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title
                    className='bg-transparent'
                >
                How 4Famillie Works
                </Accordion.Title>
                <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.
                </p>
                </Accordion.Content>
            </Accordion.Panel>
            </Accordion>
    </div>
  )
}

export default Accorddion