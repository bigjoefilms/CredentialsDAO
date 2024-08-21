import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className=" relative mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row lg:h-[700px]">
      

      <div className="relative z-20 flex-1 flex-col xl:w-1/2 items-center justify-center flex">
      
        <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[88px] lg:font-[700] lg:leading-[140%] lg:text-center">Store, Organize, and Match <span className=' py-[px] text-[#fff] rounded-lg px-[10px] bg-gradient-to-r from-cyan-500 to-blue-500'>Credentials</span></h1>
        <p className="text-[18px] font-[400] mt-6 text-[#4a4a4a] xl:max-w-[720px] lg:text-center ">
        As an organization issuing certificates, verifying achievements, or a professional showcasing your qualifications, CredentialsDAO offers a secure, decentralized solution that puts you in control.

        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex  w-full gap-3  items-center justify-center">
          <Button 
            type="button" 
            title="Product Review" 
            variant="bg-[#111]" 
          />
          <Button 
            type="button" 
            title="Get a Demo" 
            icon="/play.svg"
            variant="bg-gradient-to-r from-cyan-500 to-blue-500" 
          />
        </div>
      </div>
     
      <Image 
                src="/illustration/analytics.svg"
                className=' absolute bottom-0 opacity-25 left-[-450px] top-[250px]'
                alt="star"
                width={804}
                height={804}
              />
               <Image 
                src="/illustration/key.svg"
                className=' absolute bottom-0 opacity-25 right-[-400px] top-[250px]'
                alt="star"
                width={804}
                height={804}
              />

      

     
    </section>
  )
}

export default Hero