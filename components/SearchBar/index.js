import Input from "../Input";

function SearchBar({ value, onChange }) {
  return (
    <div className="flex justify-center	my-4">
      <Input
        type="text"
        placeholder="Search .. "
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
