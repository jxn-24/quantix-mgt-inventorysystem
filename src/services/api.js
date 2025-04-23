const API_URL = 'http://localhost:3000/items';

export const getItems = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const getItem = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const createItem = async (item) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  return await response.json();
};

export const updateItem = async (id, item) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  return await response.json();
};

export const deleteItem = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};