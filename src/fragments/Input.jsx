export const Input = ({
  label,
  id,
  type = "text",
  setValueName,
  value,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        value={value}
        onChange={(event) => setValueName(event.target.value)}
        required
      />
    </>
  );
};
