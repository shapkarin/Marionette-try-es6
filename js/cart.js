import Backbone from 'backbone';
import LocalStorage from 'backbone.localstorage';
import Faker from 'Faker'
import _ from 'underscore'

Backbone.LocalStorage = LocalStorage;

// Item Model
// ----------
const CartItemModel = Backbone.Model.extend({
    defaults: {
        name: Faker.commerce.productName(),
        price: Faker.commerce.price(),
        image: 'img/some.jpg',
        count: 1
    },
    initialize: function() {
        this.save();
    }
});

// CartList Collection
// ---------------
export const CartCollection = Backbone.Collection.extend({
    model: CartItemModel,
    localStorage: new Backbone.LocalStorage('items-backbone-marionette')
});
