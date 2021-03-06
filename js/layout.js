import Marionette from 'backbone.marionette';
import {Header, ShirtsListView, CatListView} from './views';

export const Root = Marionette.LayoutView.extend({

    el: '#todoapp',

    regions: {
        header: '#header',
        main: '#main',
        cart: '#test-cart'
    },

    initialize: function() {
        this.showHeader();
        this.showShirtsList();
        this.showCart()
    },

    showHeader: function () {
        const header = new Header();
        this.showChildView('header', header);
    },

    showShirtsList: function () {
        this.showChildView('main', new ShirtsListView({
            collection: this.collection,
            cartCollection: this.options.cartCollection
        }));
    },

    showCart: function(){
        const carList = new CatListView({
            collection: this.options.cartCollection
        });
        this.showChildView('cart', carList);
    },
});
