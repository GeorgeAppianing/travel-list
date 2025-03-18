import Item from "./Item";

function PackinList({ items, handleDelete, handleToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        {/* <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select> */}
        <button>Clear List</button>
      </div>
    </div>
  );
}

export default PackinList;
