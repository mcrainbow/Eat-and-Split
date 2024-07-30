function Button({ children, onClick, props }) {
  return (
    <button className="button" {...props} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
