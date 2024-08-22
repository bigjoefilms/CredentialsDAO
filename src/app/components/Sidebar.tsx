"use client";

import Link from 'next/link';


const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-200 p-4 border-r border-gray-300 h-screen flex flex-col gap-[50px] relative">
      <Link href="/" className="flex items-center text-[25px] tracking-tighter gap-1">
     

     Credentials<span className="bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-2 rounded-lg text-[#fff]" > DAO</span>
   </Link>
      <nav className=''>
        <ul className=' flex flex-col '>
          <li className="mb-4">
            <Link href="/dashboard/drive" className="block p-2 bg-[#111] hover:bg-[#fff] hover:text-[#111] rounded transition-colors duration-200 text-[#fff]">
              Drive
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/folders" className="block p-2 hover:bg-gray-300 rounded transition-colors duration-200 text-gray-800">
              Folders
            </Link>
          </li>
          
        </ul>
      </nav>
      
            <Link href="/dashboard/connect-wallet" className=" p-2 bg-gradient-to-r text-[#fff] from-cyan-500 to-blue-500 hover:bg-gray-300 rounded transition-colors duration-200 flex justify-center items-center absolute w-[80%] bottom-[50px]">
              Connect Wallet
            </Link>
         
    </aside>
  );
};

export default Sidebar;
