interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: any;
}

const Input = ({ label, id, type, placeholder, register }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
        {label}
      </label>
      <input
        className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-offset-neutral-800 dark:focus:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
      />
    </div>
  );
};

export default Input;
