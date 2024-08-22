type SelectFieldProps = {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
  };
  
  const SelectField: React.FC<SelectFieldProps> = ({ label, name, value, onChange, options }) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <option value="" disabled>Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
  export default SelectField;