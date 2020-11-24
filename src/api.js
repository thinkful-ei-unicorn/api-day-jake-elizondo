const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jake';

const getItems = function () {
  return listApiFetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  let newItem = JSON.stringify({ name: name });

  return listApiFetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newItem,
  });
};

const updateItem = function (id, updateData) {
  let data = JSON.stringify(updateData);

  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
};

const deleteItem = function (id) {
  return listApiFetch(BASE_URL + '/items/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

function listApiFetch(...args) {
  let error;
  return fetch(...args)
    .then((response) => {
      if (!response.ok) {
        error = { code: response.status };
      }

      return response.json();
    })
    .then((data) => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      return data;
    });
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem,
};
