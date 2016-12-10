import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import Radio from 'backbone.radio';

let filterChannel = Radio.channel('page');

    export const ShirtView = Marionette.ItemView.extend({

        tagName: 'li',
        template: '#template-todoShirtView',

        triggers: {
            'click img': 'do:AddToCart'
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
        //console.log(item.model.toJSON());
        this.options.cartCollection.add(item.model.toJSON());
        console.log(this.options.cartCollection);
    },

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
