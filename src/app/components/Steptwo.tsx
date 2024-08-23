"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from './InputField';
import FileUpload from './FileUpload';
import SubmitButton from './SubmitButton';

const StepTwo: React.FC = () => {
  const [formData, setFormData] = useState({
    streetAddress: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    website: '',
    logo: null as File | null,
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, logo: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Combine data from both steps and handle final form submission
    router.push('/dashboard');
  };

  return (
   <div className='h-[100vh] justify-center items-center flex '>
     <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 lg:shadow-md rounded w-[100%] lg:w-[60%]">
      <InputField
        label="Street Address"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleChange}
      />
      <InputField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <InputField
        label="State/Province"
        name="state"
        value={formData.state}
        onChange={handleChange}
      />
      <InputField
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />
      <InputField
        label="Postal Code"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
      />
      <InputField
        label="Organization Website"
        name="website"
        type="url"
        value={formData.website}
        onChange={handleChange}
      />
      <FileUpload
        label="Upload Logo"
        name="logo"
        onChange={handleFileChange}
      />
      <SubmitButton label="Save and Continue" />
    </form>

   </div>
  );
};

export default StepTwo;
