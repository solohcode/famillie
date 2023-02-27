import React from "react";
import { Bounce, Fade } from "react-reveal";

const Policy = () => {
  const policies = [
    {
      title: "Background",
      content: "Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen."
    },
    {
      title: "Information We Use",
      content: "Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen."
    },
    {
      title: "How Information are used",
      content: "Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen.Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen."
    },
    {
      title: "Want To Make Complain?",
      content: "Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen. Screen time feature to help Parents track kids time on screen."
    },
  ]
  return (
    <div className="w-full bg-fadedLogo py-10 md:py-20 px-5 sm:px-20 md:px-60">

      <div className="w-full text-center space-y-16">
        <Fade big>
          <h1 className='my-5 font-bold text-3xl'>Private Policy</h1>
        </Fade>

        <div className="w-full space-y-10">
          {policies.map((policy)=>(
            <Bounce bottom key={policy.title}>
              <div className="space-y-10" key={policy.title}>
                <p className="text-xl md:text-2xl font-bold md:font-semibold text-primary">
                  {policy.title}
                </p>
                <p className="text-lg font-normal">
                  {policy.content}
                </p>
              </div>
            </Bounce>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
