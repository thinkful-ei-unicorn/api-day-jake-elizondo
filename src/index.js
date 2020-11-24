import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';

import store from './store';

import shoppingList from './shopping-list';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems().then((items) => {
    items.forEach((item) => {
      store.addItem(item);
    });
    shoppingList.render();
  });
};

$(main);
