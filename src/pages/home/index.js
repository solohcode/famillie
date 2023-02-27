import React from 'react'
import { Button } from 'flowbite-react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Bounce, Fade } from 'react-reveal'
import star from '../../images/star.png'
import logo from '../../images/logo.png'
import family from '../../images/family.png'
import rectangle from '../../images/rectangle.png'
import playStore from '../../images/play_store.png'
import appStore from '../../images/app_store.png'
import wallet from '../../images/wallet.png'
import chat from '../../images/chat.png'
import control from '../../images/control.png'
import mobileSnapchat from '../../images/mobile_snapchat.png'
import mobileTimeout from '../../images/mobile_timeout.png'
import quote from '../../images/quote.png'
import habibFamily from '../../images/habib_family.png'
import susanFamily from '../../images/susan_family.png'
import hamadFamily from '../../images/hamad_family.png'
import mobileApp from '../../images/mobile_app.png'

function HomePage() {
  const whys = [
    {
      img: wallet,
      title: "4Famillie Wallet",
      content: "Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.",
    },
    {
      img: chat,
      title: "Chat",
      content: "Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.",
    },
    {
      img: control,
      title: "Parental Control",
      content: "Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.",
    },
  ]

  const subs = [
    {
      title: "Basic Plan",
      price: "150",
      duration: "Monthly",
      link: "",
      benefits: ["Chat With Family", "Send Money To Family Members", "Parental Control Features"],
    },
    {
      title: "Premium Plan",
      price: "500",
      duration: "Quarterly",
      link: "",
      benefits: ["Chat With Family", "Send Money To Family Members", "Parental Control Features"],
    },
    {
      title: "Platinum Plan",
      price: "1000",
      duration: "Yearly",
      link: "",
      benefits: ["Chat With Family", "Send Money To Family Members", "Parental Control Features"],
    },
  ]

  const reviews = [
    {
      img: habibFamily,
      title: "Habib’s Family",
      content: "Sending money within my family is easy. I can easily reward my kids for doing house chores. This app works well",
    },
    {
      img: susanFamily,
      title: "Susan’s Family",
      content: "Sending money within my family is easy. I can easily reward my kids for doing house chores. This app works well",
    },
    {
      img: hamadFamily,
      title: "Hamad’s Family",
      content: "Sending money within my family is easy. I can easily reward my kids for doing house chores. This app works well",
    },
  ]
  return (
    <div className='w-full space-y-20'>
      <div className='px-3 md:px-16 lg:px-24 py-10 space-y-32'>

        <Fade big>
          <div className='sm:flex sm:justify-between items-center lg:gap-24 space-y-10 md:space-y-0'>
            <div className='w-full sm:w-[50%]'>
              <Bounce left>
                <div className=' space-y-10 text-center sm:text-start'>
                  <div className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>
                    <p className='md:leading-[60px]'>
                      Connect With Family Members with the 
                      <span className='font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-accent md:from-primary to-primary md:to-accent'> 4Famillie App</span>
                    </p>
                  </div>
                  <div className='text-xs sm:text-base font-semibold'>
                    <p>With 4Famillie App, You get to Chat with family members, Send Family members funds, and access Parental control features</p>
                  </div>
                  <div className='space-y-3'>
                    <p className='text-xs sm:text-base font-semibold'>Download 4FAMILLIE App from your store</p>
                    <div className='flex space-x-3 justify-center sm:justify-start'>
                      <Button color="gray">
                        <img alt='icon' src={playStore} className="w-[15px] sm:w-[20px] mr-2" />
                        <p className='w-[75] truncate'>Get On Android</p>
                      </Button>
                      <Button color="gray">
                        <img alt='icon' src={appStore} className="w-[15px] sm:w-[20px] mr-2" />
                        <span className='w-[75] truncate'>Get On IOS</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Bounce>
            </div>

            <div className='w-full sm:w-[50%]'>
              <Bounce right>
                <div className='w-full relative h-[60vh] sm:h-[70vh]'>
                  <Fade big><img className='absolute bottom-0 left-0 w-[40px]' alt='star' src={star} /></Fade>
                  <Fade big><img className='absolute top-0 left-0 w-[30px]' alt='star' src={star} /></Fade>
                  <Fade big><img className='absolute top-0 right-0 w-[20px]' alt='star' src={star} /></Fade>
                  <Fade big><img className='absolute bottom-0 right-0 w-[20px]' alt='star' src={star} /></Fade>
                  <div className='w-[80%] h-[100%] relative mx-auto'>
                    <img className='absolute bottom-14 left-5 lg:left-20 w-[300px] h-[80%] ' alt='star' src={rectangle} />
                    <img className='absolute bottom-8 left- lg:left-14 w-[300px] h-[80%]' alt='star' src={family} />
                  </div>
                </div>
              </Bounce>
            </div>
          </div>
        </Fade>

        <div className='w-full space-y-10 sm:space-y-20'>
          <Fade bottom>
            <div className='w-full sm:w-[50%] mx-auto text-center space-y-10 font-semibold'>
              <p className='text-3xl font-bold'>
                Why 
                <span className='font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-accent md:from-primary to-primary md:to-accent'> 4Famillie App</span>
              </p>
              <p>Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.</p>
            </div>
          </Fade>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-20 space-y-5 sm:space-y-0'>
            {whys.map((why)=>(
              <Bounce bottom key={why.title}>
                <div key={why.title} className='w-full space-y-3 font-semibold text-primary_dark text-center sm:text-start'>
                  <img alt='icon' src={why.img} className="w-[60px] mx-auto sm:mx-0" />
                  <p className='font-bold'>{why.title}</p>
                  <p>{why.content}</p>
                </div>
              </Bounce>
            ))}
          </div>
        </div>

        <div className='w-full space-y-20'>
          <Fade bottom>
            <p className='text-center text-3xl font-bold'>Features</p>
          </Fade>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 md:gap-x-40 items-center text-center sm:text-start'>
            <div className=''>
              <Bounce left>
                <div className='space-y-5'>
                  <p className='text-prime text-xl font-bold'>Block App</p>
                  <p className='font-semibold'>
                    Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.
                    Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.
                  </p>
                </div>
              </Bounce>
            </div>
            <div className=''>
              <Bounce right>
                <img className='' alt='mobile' src={mobileSnapchat} />
              </Bounce>
            </div>
            <div className=''>
              <Bounce left>
                <img className='' alt='mobile' src={mobileTimeout} />
              </Bounce>
            </div>
            <div className=''>
              <Bounce right>
                <div className='space-y-5'>
                  <p className='text-prime text-xl font-bold'>Screen Time</p>
                  <p className='font-semibold'>
                    Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.
                    Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.
                  </p>
                </div>
              </Bounce>
            </div>
          </div>
        </div>

        <div className='w-full space-y-20'>
          <Fade bottom>
            <p className='text-center text-3xl font-bold'>Our Subscription Plans</p>
          </Fade>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-5 md:gap-x-20 items-center text-center'>
            {subs.map((sub)=>(
              <div className='w-full' key={sub.title}>
                <Bounce bottom>
                  <div className="w-full rounded-lg hover:bg-gradient-to-r from-primary via-prime to-accent transition p-0.5">
                    <div className='space-y-8 h-full w-full bg-white px-5 md:px-10 py-10 rounded-lg'>
                      <p className='text-2xl font-bold'>{sub.title}</p>
                      <p className='text-sm text-prime font-bold'>$<span className='text-2xl'>{sub.price}/</span>{sub.duration}</p>
                      <div>
                        {sub.benefits.map((ben)=>(
                          <p className='border-b py-5 font-medium' key={ben}>{ben}</p>
                        ))}
                      </div>
                      <Button className='bg-prime mx-auto'>
                        <span className='mr-2'>Get Started</span>
                        <HiOutlineArrowRight />
                      </Button>
                    </div>
                  </div>
                </Bounce>
              </div>
            ))}
          </div>
        </div>


        <div className='w-full space-y-20'>
          <Fade bottom>
            <p className='text-center text-3xl font-bold'>User Review</p>
          </Fade>

          <Bounce left>
            <div className='flex space-x-5'>
              <img alt='quote' src={quote} />
              <div className='text-2xl font-bold'>
                <p>What Our Users <br /> say about</p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-accent md:from-primary to-primary md:to-accent'> 4Famillie App</p>
              </div>
            </div>
          </Bounce>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-5 md:gap-x-20 items-center text-center'>
            {reviews.map((review)=>(
              <div className='w-full' key={review.title}>
                <Bounce bottom>
                  <div className="w-full rounded-lg hover:bg-gradient-to-r from-primary via-prime to-accent transition p-0.5">
                    <div className='space-y-5 h-full w-full bg-white px-5 py-10 rounded-lg'>
                      <img alt={review.title} src={review.img} className="w-[100px] mx-auto" />
                      <p className='text-lg font-bold'>{review.title}</p>
                      <p className=''>{review.content}</p>
                    </div>
                  </div>
                </Bounce>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Bounce bottom>
        <div className='w-full bg-dim py-20 px-5 md:px-32 space-y-'>
          <Fade big>
            <img
              src={logo}
              className=""
              alt="logo"
            />
          </Fade>
          <div className='sm:flex items-center space-y-10 sm:space-y-0'>
            <div className='w-full sm:w-[50%] flex justify-center'>
              <Bounce left>
                <div className='space-y-5'>
                  <p className='font-medium'>It takes less than 5 minutes to Sign Up</p>
                  <p className='sm:text-3xl font-bold'>
                    Download the
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-accent md:from-primary to-primary md:to-accent'> 4Famillie App</span>
                  </p>
                  <div className='flex space-x-3 justify-center sm:justify-start'>
                    <Button color="dark">
                      <img alt='icon' src={playStore} className="w-[15px] sm:w-[20px] mr-2" />
                      <p className='w-[75] truncate'>Get On Android</p>
                    </Button>
                    <Button color="dark">
                      <img alt='icon' src={appStore} className="w-[15px] sm:w-[20px] mr-2" />
                      <span className='w-[75] truncate'>Get On IOS</span>
                    </Button>
                  </div>
                </div>
              </Bounce>
            </div>
            <div className='w-full sm:w-[50%]'>
              <Bounce right>
                <img alt='mobile' src={mobileApp} className="" />
              </Bounce>
            </div>
          </div>
        </div>
      </Bounce>
    </div>
  )
}

export default HomePage