import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import $ from 'jquery';

//шаблоны
import headerTpl from './templates/header.tpl';
import shirtTpl from './templates/shirt.tpl';
import shirtsListTpl from './templates/shirtsList.tpl';
import cartItemTpl from './templates/cartItem.tpl';
import cartListTpl from './templates/cartList.tpl';

export const ShirtView = Marionette.ItemView.extend({

    tagName: 'li',
    template: shirtTpl,

    ui: {
        add: '.add-to-cart'
    },

    triggers: {
        'click @ui.add': 'do:AddToCart'
    }

});

// можно добавить фильтр, используя services и radio
export const ShirtsListView = Backbone.Marionette.CompositeView.extend({
    template: shirtsListTpl,
    childView: ShirtView,
    childViewContainer: '#shirts-list',

    //в строке 22 описано событие
    onChildviewDoAddToCart: function(item) {
        const previusItem = this.options.cartCollection.findWhere({'name': item.model.get('name') });
        if(previusItem){
            previusItem.set('count', previusItem.get('count') + 1);
            previusItem.save();
        }else{
            this.options.cartCollection.add(item.model.toJSON());
        }
    }

});

export const Header = Marionette.ItemView.extend({
    template: headerTpl
});

const CatItemView = Marionette.ItemView.extend({
    template: cartItemTpl,

    ui: {
        del: '.delete',
        edit: '.count'
    },

    events: {
        'click @ui.del': 'deleteModel',
        'keyup @ui.edit': 'onEditCount',
        'change @ui.edit': 'onEditCount',
    },

    //когда какой-либо атрибут в моделе изменится перерисовать
    modelEvents: {
        change: 'render'
    },

    deleteModel: function() {
        this.model.destroy();
    },

    onEditCount: function(event){
        let val = $(event.target).val();
        //input становится не в фокусе каждый keyup
        this.model.set('count', val);
    }
});

export const CatListView = Marionette.CompositeView.extend({
    childView: CatItemView,
    template: cartListTpl,
    childViewContainer: '#cart-list',

    // простой способ держать козину открытой после перерисовки, можно вынести в модель
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
            len: this.collection.reduce(function(c, v) { return parseInt(c) + parseInt(v.get("count")) }, 0),
            total: this.collection.reduce(function(c, v) { return parseInt(c) + parseInt(v.get("price") * v.get("count")) }, 0),
            open: this.isOpen
        };
    }
});
