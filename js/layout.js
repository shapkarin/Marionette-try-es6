import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
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
        this.showTodoList();
        this.showCart()
    },

    showHeader: function () {
        const header = new Header({
            collection: this.collection
        });
        this.showChildView('header', header);
    },

    showTodoList: function () {
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
