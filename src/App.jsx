import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackinList from "./components/PackinList";
import Stats from "./components/Stats";
function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((prevItem) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackinList
        items={items}
        handleDelete={handleDelete}
        handleToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

<Logo />;
<Form />;
export default App;
