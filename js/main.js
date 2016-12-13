import APP from './application';
import { Router } from './router';
import { Root } from './layout'
import { ShirtsList } from './shirts';
import { CartCollection } from './cart'

import Backbone from 'backbone';
import Faker from 'Faker'
import _ from 'underscore'

APP.on('start', function () {
    let shirts = new ShirtsList();
    let cartItems = new CartCollection();
    cartItems.fetch();

    _(9).times(() => {
        shirts.add({
            name: Faker.commerce.productName(),
            price: Faker.commerce.price(),
            image: 'img/thumb-' + _.random(2) + '.jpg'
        })
    });

    APP.root = new Root({
        collection: shirts,
        cartCollection: cartItems
    });

    const router = new Router();
    Backbone.history.start();
});

APP.start();
