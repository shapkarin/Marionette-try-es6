import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import {Header, Footer, ListView, CatListView} from './views';

let filterChannel = Radio.channel('filter');

export const Root = Marionette.LayoutView.extend({

    el: '#todoapp',

    regions: {
        cart: '#test-cart',
        header: '#header',
        main: '#main',
        footer: '#footer'
    },

    initialize: function() {
        this.showHeader();
        this.showFooter();
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

    showFooter: function () {
        const footer = new Footer({
            collection: this.collection
        });
        this.showChildView('footer', footer);
    },

    showTodoList: function () {
        this.showChildView('main', new ListView({
            collection: this.collection,
            cartCollection: this.options.cartCollection
        }));
    },
});
