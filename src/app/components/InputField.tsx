type InputFieldProps = {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
  const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', value, onChange }) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );

  export default InputField;