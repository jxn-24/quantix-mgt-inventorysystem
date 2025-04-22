import React, { useEffect, useState } from 'react';



function LowStockItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItems();
      setItems(data.filter((item) => item.quantity <= 5));
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Low Stock Items</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {items.map((item) => (
          <div key={item.id} className="col">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LowStockItems;