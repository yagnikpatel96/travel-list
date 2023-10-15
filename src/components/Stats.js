export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Items to Your Packing List 🪣</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentItems = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentItems === 100
          ? "You Got Everything that you need! 😍 Ready to Go. ✈️"
          : `You have ${numItems} items in your list. You have already packed${" "}
        ${numPackedItems} (${percentItems}%) items.`}
      </em>
    </footer>
  );
}
