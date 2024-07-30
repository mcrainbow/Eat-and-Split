function Button({ children, onClick, props }) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
