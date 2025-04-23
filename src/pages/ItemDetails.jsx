import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MOCK_ITEMS = {
    "items": [
      {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "quantity": 5,
        "price": 999.99,
        "image": "https://m.media-amazon.com/images/I/71kBeFDgCkL._AC_SL1500_.jpg"
      },
      {
        "id": 2,
        "name": "Chair",
        "category": "Furniture",
        "quantity": 10,
        "price": 50.0,
        "image": "https://cdn11.bigcommerce.com/s-9nl27vlw/images/stencil/532x532/products/7338/16667/PXL_20250123_121512348.PORTRAIT__89721.1737709019.jpg?c=2"
      },
      {
        "id": 3,
        "name": "Charger",
        "category": "Electronics",
        "quantity": 20,
        "price": 15.0,
        "image": "https://hotpoint.co.ke/media/cache/6e/b9/6eb9197bfae67dc9f4aeab1afcbb650d.webp"
      },
      {
        "id": 4,
        "name": "Desk",
        "category": "Furniture",
        "quantity": 7,
        "price": 150.0,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJa5GDLH6MT5UEfFzdExIh_ziJ3wCnbMg7RhCsnrwqJFZ-bSBytFViHUjFrsHeI4p1ki0&usqp=CAU"
      },
      {
        "id": 5,
        "name": "Headphones",
        "category": "Electronics",
        "quantity": 12,
        "price": 79.99,
        "image": "https://techbramtechnologies.co.ke/wp-content/uploads/2016/03/Gaming-headphones.jpg"
      },
      {
        "id": 6,
        "name": "Monitor",
        "category": "Electronics",
        "quantity": 8,
        "price": 250.0,
        "image": "https://electronicwhiteboardswarehouse.com/cdn/shop/files/download_0ff07200-461d-4089-a749-b43a91c639a1_1024x.jpg?v=1696165971"
      },
      {
        "id": 7,
        "name": "Keyboard",
        "category": "Electronics",
        "quantity": 15,
        "price": 45.0,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_Lh6UEIII0PjjmVzMMMDtPnrp_peP9deiYIyrNmuY78_ioLcwkquiwMEYOlXy9Ex8nA&usqp=CAU"
      },
      {
        "id": 8,
        "name": "Mouse",
        "category": "Electronics",
        "quantity": 25,
        "price": 20.0,
        "image": "https://m.media-amazon.com/images/I/61Mk3YqYHpL._AC_SL1500_.jpg"
      },
      {
        "id": 9,
        "name": "Office Table",
        "category": "Furniture",
        "quantity": 4,
        "price": 300.0,
        "image": "https://furniturechoicekenya.com/wp-content/uploads/2023/04/1547812_img-20190119-135155-7_1500x1125-removebg-preview.png"
      },
      {
        "id": 10,
        "name": "Gaming Chair",
        "category": "Furniture",
        "quantity": 6,
        "price": 200.0,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddIMbLZQQnUlsQkTqrMF0BNJxHaUklVAdl8WwAHJhj7dC0ZNkk0DmQIF2KP-BIWZ3CYE&usqp=CAU"
      },
      {
        "id": 11,
        "name": "Smartphone",
        "category": "Electronics",
        "quantity": 10,
        "price": 699.99,
        "image": "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/66f307779c1020001d4ed3b8.jpg"
      },
      {
        "id": 12,
        "name": "Printer",
        "category": "Electronics",
        "quantity": 3,
        "price": 120.0,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyE5GjkOIROLmovVOs3J1X8gZ4sHcTCLY3UhwLVacdgRPIvmZBYh7t8zN3ETS_Tcpi_OA&usqp=CAU"
      },
      {
        "id": 13,
        "name": "Bookshelf",
        "category": "Furniture",
        "quantity": 5,
        "price": 80.0,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbsAkgGzGoMp9rydmOGCsvEsnlw6LWZ8lj-2KNV6ufAAvtI1U1JGp1t9_s44CsgBhHJU&usqp=CAU"
      },
      {
        "id": 14,
        "name": "External Hard Drive",
        "category": "Electronics",
        "quantity": 18,
        "price": 90.0,
        "image": "https://arcticcomputershop.com/wp-content/uploads/2022/07/4.jpg"
      },
      {
        "id": 15,
        "name": "Couch",
        "category": "Furniture",
        "quantity": 2,
        "price": 400.0,
        "image": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1678558293-98a1e29126ae46ae5eeab549cd9f913a.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
            }
          ]
      };
     

function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = MOCK_ITEMS.find((item) => item.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{item.name}</h2>

      {/* Image Gallery */}
      <div className="row mb-3">
        {item.images.map((image, index) => (
          <div key={index} className="col-md-4">
            <img
              src={image}
              alt={`${item.name} - ${index + 1}`}
              className="img-fluid rounded"
              onError={(e) => {
                e.target.src = '/images/default.jpg'; // Fallback image
              }}
            />
          </div>
        ))}
      </div>

      {/* Details Section */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Details</h5>
          <p className="card-text"><strong>Category:</strong> {item.category}</p>
          <p className="card-text"><strong>Quantity:</strong> {item.quantity}</p>
          <p className="card-text"><strong>Price:</strong> ${item.price.toFixed(2)}</p>
          <p className="card-text"><strong>Description:</strong> {item.description}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="d-flex gap-2">
        <Link to={`/edit/${item.id}`} className="btn btn-warning">
          Edit
        </Link>
        <button className="btn btn-danger">Delete</button>
        <Link to="/" className="btn btn-secondary">
          Back to List
        </Link>
      </div>
    </div>
  );
}

export default ItemDetails;