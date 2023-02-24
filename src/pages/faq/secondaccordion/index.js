import React from 'react'
import { Accordion } from 'flowbite-react'
import {AiOutlinePlusCircle} from 'react-icons/ai'


const Accorddionn = () => {
  return (
    <div>
        <Accordion arrowIcon={AiOutlinePlusCircle}>
            <Accordion.Panel>
                <Accordion.Title
                    style={{color:'#2F21AA'}}
                    
                >
                Is my information safe with 4Famillie?
                </Accordion.Title>
                <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.
                </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title
                    style={{color:'#2F21AA'}}
                    
                >
                Do 4Famillie App have access to my Wallet?
                </Accordion.Title>
                <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.
                </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title
                    style={{color:'#2F21AA'}}
                >
                Do 4Famillie App have access to my Wallet?
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

export default Accorddionn