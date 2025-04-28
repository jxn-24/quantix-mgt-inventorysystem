import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItemCard from '../components/ItemCard'

function ItemList() {
  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://inventory-mgt-jsonserver.vercel.app/items')
      setItems(response.data)
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://inventory-mgt-jsonserver.vercel.app/items/${id}`)
      fetchItems()
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="item-list">
      <h2>Inventory Items</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="items-grid">
        {filteredItems.map(item => (
          <ItemCard key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default ItemList