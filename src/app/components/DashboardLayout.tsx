"use client"
import { ReactNode ,useState} from 'react';
import Sidebar from './Sidebar';
import Image from 'next/image';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className=" bg-gray-100 lg:p-[0px] p-[20px] lg:flex">
         <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleSidebar}
      />
      <div className='lg:flex hidden'>
      <Sidebar />

      </div>
    
      <main className=" p-8 bg-gray-100 min-h-screen">
        {children}
      </main>



      <div
        className={`fixed inset-0 z-40 flex justify-end transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-64 bg-white h-full p-5 flex flex-col shadow-lg absolute left-0">
          <button
            onClick={toggleSidebar}
            className="self-end mb-5 text-xl font-bold"
          >
           <Image
        src="/close.svg"
        alt="menu"
        width={32}
        height={32}
        className=""
        onClick={toggleSidebar}
      />
          </button>
          <Link href="/" className="flex items-center text-[25px] tracking-tighter gap-1">
     

     Credentials<span className="bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-2 rounded-lg text-[#fff]" > DAO</span>
   </Link>
      <nav className=''>
        <ul className=' flex flex-col '>
          <li className="mb-4">
            <Link href="/dashboard/drive" className="block p-2 mt-[20px] bg-[#111] hover:bg-[#fff] hover:text-[#111] rounded transition-colors duration-200 text-[#fff]">
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
         

            <div className=" mt-[25px]">
              {/* <Button
                type="button"
                title="Login"
                variant="bg-[#111]"
                icon="/user.svg"
              /> */}
            </div>
        </div>
        <div className="flex-1" onClick={toggleSidebar} />
      </div>
    </div>
  );
};

export default DashboardLayout;
