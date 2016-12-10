import Backbone from 'backbone';
import LocalStorage from 'backbone.localstorage';
import Faker from 'Faker'
import _ from 'underscore'

Backbone.LocalStorage = LocalStorage;

	// Item Model
	// ----------
export const CartModel = Backbone.Model.extend({
    defaults: {
        name: Faker.commerce.productName(),
        price: Faker.commerce.price(),
        image: 'img/some.jpg',
        count: 1
    }
});

	// CartList Collection
	// ---------------
export const CartCollection = Backbone.Collection.extend({
    model: CartModel,
    localStorage: new Backbone.LocalStorage('cartList-backbone-marionette'),
    comparator: 'id'
});
