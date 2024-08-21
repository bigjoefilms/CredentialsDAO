import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flex items-center justify-center w-full  pb-[100px] bg-[#1111] lg:px-[20px] px-[10px]">
      <div className=" p-[40px] flex  lg:flex-row flex-col ">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-6">
          <h2 className="font-semibold text-[38px] lg:font-bold lg:text-[51px] xl:max-w-[720px]">One platform, endless opportunities.
          </h2>
          <p className="regular-16 text-gray-10">We provide a solution for digital certificates issuing and management, secure eSign and blockchain document notarization.

</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Learn more"
              icon="/apple.svg"
              variant="bg-[#363636]"
              
            />
            <Button 
              type="button"
              title="Get Started"
              icon="/android.svg"
              variant="bg-gradient-to-r from-cyan-500 to-blue-500"
              
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end mt-[40px]">
          <Image src="/illustration/info.svg" alt="data" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp