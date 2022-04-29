function Button({ children, ...props }) {
  return (
    <button
      className="h-10 px-4 font-semibold rounded-md border border-slate-200 text-slate-900"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
