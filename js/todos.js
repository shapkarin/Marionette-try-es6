import Backbone from 'backbone';
import LocalStorage from 'backbone.localstorage';
import Faker from 'Faker'
import _ from 'underscore'

Backbone.LocalStorage = LocalStorage;

	// Todo Model
	// ----------
export const Shirt = Backbone.Model.extend({
    defaults: {
        name: Faker.commerce.productName(),
        price: Faker.commerce.price(),
        image: 'img/thumb-0.jpg'
    }
});

	// Todo Collection
	// ---------------
export const ShirtsList = Backbone.Collection.extend({
    model: Shirt
});
