export const Button = ({ type, name, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
      {name}
    </button>
  );
};
