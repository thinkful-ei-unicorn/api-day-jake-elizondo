const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find((currentItem) => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndUpdate = function (id, newData) {
  let targetItem = this.findById(id);
  Object.assign(targetItem, newData);
};

const findAndDelete = function (id) {
  console.log(this.items);
  this.items = this.items.filter((currentItem) => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const setError = function (error) {
  this.error = error;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate,
  setError,
};
