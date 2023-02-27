import { Button, Dropdown, Navbar } from 'flowbite-react';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png'


const Header = () => {
  const { pathname: path } = useLocation()
  const navigate = useNavigate()
  const navLinks = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Features",
      link: "/features",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Contact",
      children: [
        {
          title: "Faq",
          link: "/faq"
        },
        {
          title: "Private Policy",
          link: "/privacy"
        },
      ]
    },
  ]
  return (
    <div className=''>
      <Navbar
        fluid={true}
        rounded={true}
        className="px-5 md:px-10 lg:px-20 shadow-md py-5"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="mr-3 h-8 sm:h-9"
            alt="logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className='hidden md:block'>
            Get The App
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((nav) => (
            nav.children ? (
              <Dropdown
                key={nav.title}
                inline
                label={<Navbar.Link active={nav.children.some((chi)=>path.includes(chi.link))}>
                  {nav.title}
                </Navbar.Link>}
                placement="bottom"
                className='w-'
              >
                {nav.children.map((child)=>(
                  <Dropdown.Item
                    key={child.link}
                    onClick={()=>navigate(child.link)}
                    className={`w-full ${path.includes(child.link) && "text-primary"}`}
                  >
                    {child.title}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            ) : (
            <Navbar.Link
              key={nav.link}
              href={nav.link}
              active={path.includes(nav.link)}
            >
              {nav.title}
            </Navbar.Link>
            )
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )} 

export default Header