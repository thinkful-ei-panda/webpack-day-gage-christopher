import shoppingList from './shopping-list';
import $ from 'jquery';
import './index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
