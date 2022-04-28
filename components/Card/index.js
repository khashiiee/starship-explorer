function Card({ children, ...props }) {
  return (
    <div className="bg-white shadow rounded border" {...props}>
      {children}
    </div>
  );
}

export default Card;
