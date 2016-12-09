import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import Radio from 'backbone.radio';

let filterChannel = Radio.channel('page');

    export const ShirtView = Marionette.ItemView.extend({

        tagName: 'li',
        template: '#template-todoShirtView',

        ui : {
            add: '.add-to-cart'
        },

        events: {
            'click @ui.add': 'onAddToCart'
        },

        onAddToCart: function () {
            console.log('add to cartCollection');
            console.log(this.model.toJSON());
            //cartCollecion.add(this.model)
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

    initialize: function() {
        console.log(this)
    }
});

// Layout Header View
// ------------------
//
export const Header = Marionette.ItemView.extend({
    template: '#template-header'
});

	// Layout Footer View
	// ------------------
export const Footer = Marionette.ItemView.extend({
    template: '#template-footer'
});
