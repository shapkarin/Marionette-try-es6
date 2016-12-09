import Backbone from 'backbone';
import LocalStorage from 'backbone.localstorage';
import Faker from 'Faker'
import _ from 'underscore'

Backbone.LocalStorage = LocalStorage;

	// Item Model
	// ----------
export const Item = Backbone.Model.extend({
    defaults: {
        name: Faker.commerce.productName(),
        price: Faker.commerce.price(),
        image: 'img/some.jpg'
    }
});

	// CartList Collection
	// ---------------
export const CartList = Backbone.Collection.extend({
    model: Item,
    localStorage: new Backbone.LocalStorage('cartList-backbone-marionette'),
    comparator: 'id'
});
