type FileUploadProps = {
    label: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
  const FileUpload: React.FC<FileUploadProps> = ({ label, name, onChange }) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );

  export default FileUpload;
  