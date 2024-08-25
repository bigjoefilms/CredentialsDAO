"use client"
import { ReactNode ,useState} from 'react';
import Sidebar from './Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { useOCAuth } from "@opencampus/ocid-connect-js";
import ProtectedRoute from './ProtectedRoute';


interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { authState, ocAuth } = useOCAuth();
  console.log("hi",ocAuth)

// Access authInfo from authInfoManager._idInfo if available
const authInfo = ocAuth?.authInfoManager?._idInfo;

// Destructure authInfo properties if authInfo exists
const { edu_username, eth_address } = authInfo || {};

// Log the extracted auth information
console.log('Auth Info:', { edu_username, eth_address });

const shortenAddress = (address:string) => {
  if (!address) return '';
  return `${address.slice(0, 10)}...${address.slice(-4)}`;
};



  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <ProtectedRoute>
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
    
      <main className=" p-8 bg-gray-100 h-[100vh] w-[100%]">
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
      <nav className='mt-[20px]'>
        <ul className=' flex flex-col '>
        <li className="mb-">
            <Link href="/dashboard" className="block p-2 rounded transition-colors duration-200 text-gray-800 bg-gray-300 ">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/drive" className="block p-2 mt-[20px] bg-[#111] hover:bg-[#fff] hover:text-[#111] rounded transition-colors duration-200 text-[#fff]">
              Create New
            </Link>
          </li>
           <li className="mb-4">
            <Link href="/dashboard/folders" className="block p-2 rounded transition-colors duration-200 text-gray-800 bg-gray-300 ">
              Profile
            </Link>
          </li>
        
          
        </ul>
      </nav>
      
    
        </div>
        <div className="flex-1" onClick={toggleSidebar} />
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
