import Link from 'next/link';
import DashboardLayout from '../components/DashboardLayout';



const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
       
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">Recent Activity</h2>
          <p className="mt-2">Display of the most recent actions, such as issued certificates.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Quick Access</h2>
          <div className="mt-2 space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Issue New Certificate</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded">View Wallet</button>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Search</h2>
          <input 
            type="text" 
            placeholder="Search credentials or folders" 
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
