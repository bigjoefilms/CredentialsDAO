import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../../../constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="justify-center items-center flex mt-24 mb-[40px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0  flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
        <Link href="/" className="flex  items-center font-semibold mb-[24px] text-[25px] tracking-tighter gap-2">
       
        Credentials<span className="bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-2 rounded-lg text-[#fff]" > DAO</span>
      </Link>
      <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
  {FOOTER_LINKS.map((columns, index) => (
    <FooterColumn title={columns.title} key={index}>
      <ul className="text-[14px] font-[400] flex flex-col gap-4 text-[#494848] ">
        {columns.links.map((link, linkIndex) => (
          <Link href="/" key={linkIndex}>
            {link}
          </Link>
        ))}
      </ul>
    </FooterColumn>
  ))}
 

            <div className="flex flex-col gap-5 ">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
  {FOOTER_CONTACT_INFO.links.map((link, index) => (
    <Link
      href="/"
      key={`${link.label}-${index}`}
      className="flex gap-4 md:flex-col lg:flex-row text-[#494848] text-[14px] font-[400]"
    >
      <p className="whitespace-nowrap">
        {link.label}:
      </p>
      <p className="medium-14 whitespace-nowrap text-blue-70">
        {link.value}
      </p>
    </Link>
  ))}
</FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
            <FooterColumn title={SOCIALS.title}>
  <ul className="text-[14px] font-[400] flex gap-4 text-[#494848]">
    {SOCIALS.links.map((link, index) => (
      <Link href="/" key={index}>
        <Image src={link} alt="logo" width={24} height={24} />
      </Link>
    ))}
  </ul>
</FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-[#7a787811]" />
        <p className="text-[14px] font-[400] w-full text-center  text-[#494848]">2024 CredentialsDAO | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-semibold whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer