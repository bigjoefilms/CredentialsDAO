"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from './InputField';
import SelectField from './SelectField';
import SubmitButton from './SubmitButton';

const StepOne: React.FC = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationEmail: '',
    role: '',
    industry: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the current form data (this can be saved in context or local state)
    router.push('/steptwo');
  };

  return (
    <div className='flex items-center justify-center h-[100vh] w-[100%]'>
        <form onSubmit={handleNextStep} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded w-[60%] ">
      <InputField
        label="Organization Name"
        name="organizationName"
        value={formData.organizationName}
        onChange={handleChange}
      />
      <InputField
        label="Organization Email"
        name="organizationEmail"
        type="email"
        value={formData.organizationEmail}
        onChange={handleChange}
      />
      <SelectField
        label="Role within Organization"
        name="role"
        value={formData.role}
        onChange={handleChange}
        options={['Admin', 'Manager', 'Employee']}
      />
      <SelectField
        label="Industry"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        options={['Technology', 'Healthcare', 'Finance', 'Education', 'Other']}
      />
      <SubmitButton label="Next Step" />
    </form>
    </div>
  );
};

export default StepOne;
