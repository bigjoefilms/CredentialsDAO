import { FEATURES } from '../../../constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flex items-center justify-center overflow-hidden  py-24 my-[50px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0  relative w-full flex justify-center">
        {/* <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div> */}

        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <div className='relative flex justify-center items-center flex-col'>
            <h3 className='font-semibold text-[16px] text-[#005cff]'>With our Product you can</h3>
            <h2 className="font-semibold lg:font-bold text-[35px] lg:text-[40px]">Create, Manage and Verify</h2>
          </div>
          
          <ul className="mt-10 grid gap-20 lg:grid-col-4 md:grid-cols-2  ">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start lg:items-center justify-center bg-white p-8 shadow-md mb-[10px]">
      <div className="rounded-full p-6 h-[100px] w-auto ">
        <Image src={icon} alt="map" width={78} height={78} />
      </div>
      <h2 className="font-semibold text-[18px] lg:font-bold lg:text-[20px] mt-5 capitalize ">
        {title}
      </h2>
      <p className="font-[400] text-[14px] mt-5 bg-white/80  lg:mt-[30px] lg:bg-none  text-[#7b7b7b]">
        {description}
      </p>
    </li>
  )
}

export default Features