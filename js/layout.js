import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import {Header, ListView, CatListView} from './views';

let filterChannel = Radio.channel('filter');

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

    showCart: function(){
        const carList = new CatListView({
            collection: this.options.cartCollection
        });
        this.showChildView('cart', carList);
    },

    showTodoList: function () {
        this.showChildView('main', new ListView({
            collection: this.collection,
            cartCollection: this.options.cartCollection
        }));
    },
});
