//не используется
import Service from 'marionette-service';
import Backbone from 'backbone';

const PageService = Service.extend({

    radioRequests: {
        'page pageState': 'getPageState'
    },

    initialize: function() {
        this.pageState =  new Backbone.Model({
            page: ''
        });
    },

    getPageState: function() {
        return this.pageState;
    }

});

// We create the service as a singleton
const service = new PageService();
