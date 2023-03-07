const Button = ({ children, className, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
