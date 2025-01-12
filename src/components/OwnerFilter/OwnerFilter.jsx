export default function OwnerFilter({ value, onFilter }) {
  return (
    <div>
      <p>Filter by owner</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
