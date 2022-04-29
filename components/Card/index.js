function Card({ children, ...props }) {
  return (
    <div
      className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 shadow rounded border hover:from-indigo-500 hover:via-purple-500 hover:to-purple-500 cursor-pointer"
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
