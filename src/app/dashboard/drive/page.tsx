"use client"
import React from "react";
import DashboardLayout from '../../components/DashboardLayout';
import { useOCAuth} from '@opencampus/ocid-connect-js'
import { useState } from 'react';
import Image from "next/image";
import { useRef } from 'react';
import { toPng } from 'html-to-image';



const Drive: React.FC = () => {
  
    const [hasSigned, setHasSigned] = React.useState(false);
    const { authState, ocAuth } = useOCAuth();
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const togglePreviewModal = () => setIsPreviewModalOpen(!isPreviewModalOpen);
    const [errors, setErrors] = useState<FormErrors>({});
    console.log("ocAuth",ocAuth)
    const certificateRef = useRef(null);

  const handleDownloadImage = () => {
    if (certificateRef.current === null) {
      return;
    }

    toPng(certificateRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${formValues.certificateTitle}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Oops, something went wrong!', err);
      });
  };

  const handlePushToBlockchain = () => {
    // Add logic to push the certificate data to the blockchain
    alert('Pushed to blockchain successfully!');
  };
  
  const authInfo = ocAuth?.authInfoManager?._idInfo;
  
  const { edu_username, eth_address } = authInfo || {};
  
  console.log('Auth Info:', { edu_username, eth_address });
  
  const shortenAddress = (address:string) => {
    if (!address) return '';
    return `${address.slice(0, 10)}...${address.slice(-4)}`;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [formValues, setFormValues] = useState({
    certificateTitle: '',
    issuerName: 'Your Organization Name', // Pre-filled field
    recipientName: '',
    dateOfIssuance: '',
    expirationDate: '',
    description: '',
    courseOrAchievementTitle: '',
    signature: false, // Boolean to track digital signature option
  });

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}; // Explicitly defining the type
  
    if (!formValues.certificateTitle) {
      newErrors.certificateTitle = 'Certificate Title is required.';
    }
  
    if (!formValues.recipientName) {
      newErrors.recipientName = 'Recipient Name is required.';
    }
  
    if (!formValues.dateOfIssuance) {
      newErrors.dateOfIssuance = 'Date of Issuance is required.';
    }
  
    setErrors(newErrors);
  
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    if (validateForm()) {
      setIsFormModalOpen(false); // Close form modal
      setIsPreviewModalOpen(true); // Open preview modal
    }
  };



  // Handle input changes
  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
 
 

  // Toggle modal visibility
  const toggleFormModal = () => setIsFormModalOpen(!isFormModalOpen);
  const toggleIssueModal = () => setIsIssueModalOpen(!isIssueModalOpen);

  type FormErrors = {
    certificateTitle?: string;
    recipientName?: string;
    dateOfIssuance?: string;
    // Add other fields as necessary
  };
 

  return (
    <DashboardLayout>
       
            {/* User Info */}
            <div className='flex items-center justify-center h-[100vh] '>
      <div className='flex flex-col absolute top-[20px] right-[40px] text-center '>
        <p className="text-[20px] font-semibold">{edu_username}</p>
        <p className="text-[#646363] text-[12px] lg:text-[14px]">{shortenAddress(eth_address)}</p>
      </div>

      {/* Centered Button */}
      <div className="flex flex-col items-center justify-center ">
        <div className='flex items-center justify-center  flex-col '>

       
        <h1 className="text-3xl font-bold mb-8">Drive</h1>
        <p className='lg:max-w-[400px]  max-w-[250px] text-center'>Access your stored credentials and documents here.</p>

        {/* Button to Open Modal */}
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded"
          onClick={toggleModal}
        >
          Create New
        </button>
        
        </div>
        

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
              <h2 className="text-xl font-bold mb-4">Select Issuance Type</h2>
              <button className="w-full px-4 py-2 bg-gray-200 rounded mb-2" onClick={toggleFormModal}>
                Single Issuance
              </button>
              <button className="w-full px-4 py-2 bg-gray-200 rounded cursor-not-allowed opacity-50">
                Multiple Issuance
              </button>
              {/* Close Modal Button */}
              <button
                className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

{isFormModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Issue New Certificate</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Certificate Title:</label>
                <input
                  type="text"
                  name="certificateTitle"
                  value={formValues.certificateTitle}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded p-2 ${errors.certificateTitle ? 'border-red-500' : ''}`}
                />
                {errors.certificateTitle && <p className="text-red-500 text-sm">{errors.certificateTitle}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Issuer Name:</label>
                <input
                  type="text"
                  name="issuerName"
                  value={formValues.issuerName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Recipient Name:</label>
                <input
                  type="text"
                  name="recipientName"
                  value={formValues.recipientName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded p-2 ${errors.recipientName ? 'border-red-500' : ''}`}
                />
                {errors.recipientName && <p className="text-red-500 text-sm">{errors.recipientName}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Date of Issuance:</label>
                <input
                  type="date"
                  name="dateOfIssuance"
                  value={formValues.dateOfIssuance}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border rounded p-2 ${errors.dateOfIssuance ? 'border-red-500' : ''}`}
                />
                {errors.dateOfIssuance && <p className="text-red-500 text-sm">{errors.dateOfIssuance}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Expiration Date (Optional):</label>
                <input
                  type="date"
                  name="expirationDate"
                  value={formValues.expirationDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Description:</label>
                <textarea
                  name="description"
                  value={formValues.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Course or Achievement Title:</label>
                <input
                  type="text"
                  name="courseOrAchievementTitle"
                  value={formValues.courseOrAchievementTitle}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="signature"
                    checked={formValues.signature}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Add Digital Signature
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={toggleFormModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Preview Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

{isPreviewModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#fff] ">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-[900px] w-full relative max-h-[100%] lg:max-h-[700px] h-[100%] flex flex-col justify-center  bg-[#fff">
            <h2 className=" text-[16px] lg:text-2xl font-extrabold mb-4 text-center underline">Certificate Preview</h2>
            {/* Certificate Template */}
            <div className="border-4 border-dashed p-6 rounded-lg mb-4 relative" ref={certificateRef}>
              {/* Fancy border design */}
              <div className="absolute top-0 left-0 right-0 bottom-0 border-8 border-double border-gray-200 rounded-lg"></div>
              {/* Award Stamp Watermark */}
              <div className="absolute lg:bottom-10 bottom-4 left-[15px] lg:left-[28px]">
              <div className="flex lg:hidden">
                <Image src='/check.png' alt="map" width={48} height={48} />
                </div>
                <div className="lg:flex hidden">
               
                <Image src='/check.png' alt="map" width={78} height={78} />


                </div>
              </div>
              <div className="relative z-10">
                <h3 className=" text-[20px] text-3xl font-serif font-bold text-center mb-2">{formValues.certificateTitle}</h3>
                <p className="text-center text-xl text-gray-700 mb-4 mt-6 flex-col flex ">
                  Awarded to <span className="font-bold text-[29px] lg:text-[50px] my-[10px] lg:my-[20px] bg-[#e93737] text-[#fff] py-[15px] px-[5px] rounded-[8px]">{formValues.recipientName}</span>
                </p>
                <p className="text-center text-gray-600 mb-2">Issuer: {formValues.issuerName}</p>
                <p className="text-center text-gray-600 mb-2">Date of Issuance: {formValues.dateOfIssuance}</p>
                {formValues.expirationDate && (
                  <p className="text-center text-gray-600 mb-2">Expiration Date: {formValues.expirationDate}</p>
                )}
                <p className="text-center text-gray-600 mb-4">{formValues.description}</p>
                <p className="text-center text-lg font-semibold text-gray-800">{formValues.courseOrAchievementTitle}</p>
                {formValues.signature && (
                  <p className="text-center mt-4 text-gray-600 font-mono">[Digital Signature]</p>
                )}
              </div>
            </div>
            {/* Close, Save, and Blockchain Buttons */}
            <div className="flex justify-end  lg:flex-row flex-col gap-3 ">
              <button
                className="px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition duration-200 text-[14px]" 
                onClick={togglePreviewModal}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
                onClick={handleDownloadImage}
              >
                Save as Image
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                onClick={handlePushToBlockchain}
              >
                Push to Blockchain
              </button>
            </div>
          </div>
        </div>
      )}


      </div>
      </div>
      
    </DashboardLayout>
  );
};

export default Drive;