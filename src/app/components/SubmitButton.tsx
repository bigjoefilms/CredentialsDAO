type SubmitButtonProps = {
    label: string;
  };
  
  const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => (
    <div className="mt-6">
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
      >
        {label}
      </button>
    </div>
  );
  
 export default SubmitButton;