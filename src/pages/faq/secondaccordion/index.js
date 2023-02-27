import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import React, { useState } from 'react'
import './style.css'

const Accorddionn = () => {

    const [selected, setSelected] = useState(null)
    const toggle = i => {
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <div className='w-full mt-5  wrapper'>
        <div className='accordion w-full'>
            {data.map((item, i) => (
                <div className='item'>
                    <div 
                        className='title'
                        onClick={() => toggle(i)}
                    >
                        <h2> {item.question} </h2>
                        <span>
                            {selected === i ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
                        </span>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}> {item.answer} </div>
                </div>
            ))}
        </div>
    </div>
  )
}

const data = [
    {
        question: 'Is my information safe with 4Famillie?',
        answer: 'Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.'
    },
    {
        question: 'Do 4Famillie App have access to my Wallet?',
        answer: 'Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.'
    },
    {
        question: 'Do 4Famillie App have access to my Wallet?',
        answer: 'Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.'
    }
]

export default Accorddionn