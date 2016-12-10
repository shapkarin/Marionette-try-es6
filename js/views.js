import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import Radio from 'backbone.radio';
import $ from 'jquery';

let pageChannel = Radio.channel('page');

export const ShirtView = Marionette.ItemView.extend({

    tagName: 'li',
    template: '#template-todoShirtView',

    ui: {
        add: '.add-to-cart'
    },

    triggers: {
        'click @ui.add': 'do:AddToCart'
    }

});

// Item List View
// --------------
//
// Controls the rendering of the list of items, including the
// filtering of activs vs completed items for display.
export const ListView = Backbone.Marionette.CompositeView.extend({
    template: '#template-todoListCompositeView',
    childView: ShirtView,
    childViewContainer: '#todo-list',

    onChildviewDoAddToCart: function(item) {
        //don't add new shirt when it's added
        if(this.options.cartCollection.findWhere({'name': item.model.toJSON().name })){
            return false;
        }
        this.options.cartCollection.add(item.model.toJSON());
    }

});

// Layout Header View
// ------------------
//
export const Header = Marionette.ItemView.extend({
    template: '#template-header'
});

const CatItemView = Marionette.ItemView.extend({
    template: '#template-cart-item',

    ui: {
        del: '.delete',
        edit: '.count'
    },

    events: {
        'click @ui.del': 'deleteModel',
        'keyup @ui.edit': 'onEditCount',
        'change @ui.edit': 'onEditCount',
    },

    modelEvents: {
        change: 'render'
    },

    deleteModel: function() {
        this.model.destroy();
    },

    onEditCount: function(event){
        let val = $(event.target).val();
        if (val == 0){ this.deleteModel() }
        this.model.set({ count: val });
    }
});

export const CatListView = Marionette.CompositeView.extend({
    childView: CatItemView,
    template: '#template-cart-list',
    childViewContainer: '#cart-list',

    /*fast hack to not close the cart when list updates*/
    isOpen: false,

    collectionEvents: {
       all: 'render'
    },

    events: {
        'click .cd-cart-trigger': 'toggle'
    },

    toggle: function(event) {
        this.$el.find('.cd-cart-container').toggleClass('cart-open');
        this.isOpen = !this.isOpen;
    },

    templateHelpers: function() {
        return {
            len: this.collection.length,
            total: this.collection.reduce(function(c, v) { return parseInt(c) + parseInt(v.get("price") * v.get("count")) }, 0),
            open: this.isOpen
        };
    }
});
