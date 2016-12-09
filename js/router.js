import Backbone from 'backbone';
import Radio from 'backbone.radio';

let filterChannel = Radio.channel('filter');

export const Router = Backbone.Router.extend({

    routes: {
        '*page': 'showPage'
    },

    // Set the filter to show complete or all items
    showPage: function (filter) {
        console.log('showPage %s', filter)
        //let newFilter = filter && filter.trim() || 'all';
        //filterChannel.request('filterState').set('filter', newFilter);
    }
});
