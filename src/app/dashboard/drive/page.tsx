"use client"
import React from "react";
import DashboardLayout from '../../components/DashboardLayout';
import { useOCAuth} from '@opencampus/ocid-connect-js'
import { useState } from 'react';



const Drive: React.FC = () => {
  
    const [hasSigned, setHasSigned] = React.useState(false);
    const { authState, ocAuth } = useOCAuth();
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const togglePreviewModal = () => setIsPreviewModalOpen(!isPreviewModalOpen);
    const [errors, setErrors] = useState<FormErrors>({});
    console.log("ocAuth",ocAuth)
  
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
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Certificate Preview</h2>
            {/* Certificate Template */}
            <div className="border p-6 rounded-lg mb-4">
              <h3 className="text-2xl font-bold text-center mb-2">{formValues.certificateTitle}</h3>
              <p className="text-center mb-4">Awarded to {formValues.recipientName}</p>
              <p className="text-center mb-2">Issuer: {formValues.issuerName}</p>
              <p className="text-center mb-2">Date of Issuance: {formValues.dateOfIssuance}</p>
              {formValues.expirationDate && (
                <p className="text-center mb-2">Expiration Date: {formValues.expirationDate}</p>
              )}
              <p className="text-center mb-4">{formValues.description}</p>
              <p className="text-center font-bold">{formValues.courseOrAchievementTitle}</p>
              {formValues.signature && <p className="text-center mt-4">[Digital Signature]</p>}
            </div>
            {/* Close or Confirm Buttons */}
            <div className="flex justify-end">
              <button
                className="mr-4 px-4 py-2 bg-gray-400 text-white rounded"
                onClick={togglePreviewModal}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => {
                  // Handle actual certificate issuance here
                  togglePreviewModal();
                  alert('Certificate issued successfully!');
                }}
              >
                Issue Certificate
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