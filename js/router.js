import Backbone from 'backbone';
import Radio from 'backbone.radio';

let pageChannel = Radio.channel('page');

export const Router = Backbone.Router.extend({

    routes: {
        '*page': 'showPage'
    },

    // Set the filter to show complete or all items
    showPage: function (page) {
        let newFilter = page && page.trim() || 'all';
        pageChannel.request('pageState').set('page', newFilter);
    }
});
