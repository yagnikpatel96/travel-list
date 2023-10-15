export default function Item({ item, onDeleteItem, onPackItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed ? 1 : 0}
        onChange={() => onPackItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❎</button>
    </li>
  );
}
