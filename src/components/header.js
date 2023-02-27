import React, { useState } from 'react'
import logo from '../images/logo.png'


const Header = () => {
    let Links =[
      {name:"Home",link:"/home"},
      {name:"About Us",link:"/about"},
      {name:"Features",link:"/features"},
      {name:"Pricings",link:"/pricing"},
      {name:"Contact",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);

  return (
    <div className='w-full fixed top-0 left-0 shadow-lg shadow-gray-200'>
      <div className='md:flex items-center justify-between py-4 md:px-5'>
      <div className="pl-5">
        <img src={logo} alt="rio logo" />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden pr-6 sm:pr-8'>
      <ion-icon name={open ? 'close':'menu'} style={{color:'white'}}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-20 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-4 text-l md:my-0 my-5 mx-5'>
              <a href={link.link} className='hover:text-blue-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <button type="button" className='bg-[#2F21AA] border rounded border-[#2F21AA] w-[150px] text-white font-medium my-6 mx-auto md:mx-5 py-3'>Get The App</button>
      </ul>
      
      </div>
      

</div>
)} 

export default Header