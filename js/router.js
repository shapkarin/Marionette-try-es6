import Backbone from 'backbone';

export const Router = Backbone.Router.extend({

    routes: {
        '*page': 'showPage'
    },

    // Set the filter to show complete or all items
    showPage: function (page) {
        let newFilter = page && page.trim() || 'all';
    }
});
