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
        image: 'img/thumb-' + _(2).random() + '.jpg'
    }
});

	// Todo Collection
	// ---------------
export const ShirtsList = Backbone.Collection.extend({
    model: Shirt,
    localStorage: new Backbone.LocalStorage('todos-backbone-marionette')
});
