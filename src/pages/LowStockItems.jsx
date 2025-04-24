import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItemCard from '../components/ItemCard'

function LowStockItems() {
  const [items, setItems] = useState([])
  const lowStockThreshold = 5

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/items')
      const lowStockItems = response.data.filter(item => item.quantity <= lowStockThreshold)
      setItems(lowStockItems)
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/items/${id}`)
      fetchItems()
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  return (
    <div className="low-stock-items">
      <h2>Low Stock Items (≤ {lowStockThreshold})</h2>
      <div className="items-grid">
        {items.map(item => (
          <ItemCard key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default LowStockItems