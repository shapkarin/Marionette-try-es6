import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import Radio from 'backbone.radio';
import $ from 'jquery';

let filterChannel = Radio.channel('page');

    export const ShirtView = Marionette.ItemView.extend({

        tagName: 'li',
        template: '#template-todoShirtView',

        ui : {
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
    template: '#template-cart-item'
});

export const CatListView = Marionette.CompositeView.extend({
    childView: CatItemView,
    template: '#template-cart-list',
    childViewContainer: '#cart-list',

    collectionEvents: {
       all: 'render'
    },

    events: {
        'click .cd-cart-trigger': 'toggle'
    },

    toggle: function(event) {
        this.$el.find('.cd-cart-container').toggleClass('cart-open');
    },

    templateHelpers: function() {
        return {
            len: this.collection.length,
            total: this.collection.reduce(function(c, v) { return parseInt(c) + parseInt(v.get("price")) }, 0)
        };
    }
});

	// Layout Footer View
	// ------------------
export const Footer = Marionette.ItemView.extend({
    template: '#template-footer'
});
