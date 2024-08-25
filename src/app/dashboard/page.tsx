"use client"
import Link from 'next/link';
import DashboardLayout from '../components/DashboardLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useOCAuth} from '@opencampus/ocid-connect-js'


const Dashboard: React.FC = () => {
  const { authState, ocAuth } = useOCAuth();
  console.log("ocAuth",ocAuth)

const authInfo = ocAuth?.authInfoManager?._idInfo;

const { edu_username, eth_address } = authInfo || {};

console.log('Auth Info:', { edu_username, eth_address });

const shortenAddress = (address:string) => {
  if (!address) return '';
  return `${address.slice(0, 10)}...${address.slice(-4)}`;
};


  return (
    
    <DashboardLayout>
       <div className='flex flex-col absolute top-[20px] right-[40px] text-center'>
        <p className="text-[20px] font-semibold "> {edu_username}</p>
        <p className="text-[#646363] text-[12px] lg:text-[14px]"> {shortenAddress(eth_address)}</p>

        </div>
       
      <div className="space-y-8 ">
       
      
      <section>
          {/* <h2 className="text-2xl font-semibold">Search</h2> */}
          <input 
            type="text" 
            placeholder="Search credentials or folders" 
            className="mt-2 p-2 w-full border border-gray-300 rounded max-w-[700px]"
          />
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Recent Activity</h2>
          <p className="mt-2">Display of the most recent actions, such as issued certificates.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Quick Access</h2>
          <div className="mt-2  flex lg:flex-row gap-[20px]  flex-col">
          <Link
              href="/dashboard/drive"
              className=""
            >
            <button className="px-4 py-2 max-w-[200px] w-[100%] bg-blue-500 text-white rounded">Issue New Certificate</button>
            </Link>
            <Link
              href="/dashboard/drive"
              className=""
            >
            <button className="px-4 py-2 max-w-[200px] w-[100%] bg-green-500 text-white rounded ">View Wallet</button>
            </Link>
          </div>
        </section>
       
      </div>
    </DashboardLayout>
   
  );
};

export default Dashboard;
