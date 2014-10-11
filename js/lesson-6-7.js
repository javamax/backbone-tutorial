/**
 * Lessons 6-7 - Views and Templates
 * http://loftblog.ru/2013/01/19/razrabotka-veb-prilozheniya-na-backbone-js-chast-shestaya-znakomstvo-s-vidami-view/
 * http://loftblog.ru/2013/01/20/razrabotka-veb-prilozheniya-na-backbone-js-chast-sedmaya-linejnyj-shablony-vstroennyj-v-underscore-js-shablonizator/
 */

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Dima',
        age: 23,
        job: 'web developer'
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li',
    className: 'person',
    id: 'some-person',

    template: _.template('<strong><%= name %></strong> ( <%= age %> ) - <%= job %>'),

    initialize: function () {
        console.log('initialize!')
       // this.render();
    },

    render: function () {
        //this.$el.html(this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation'));
        this.$el.html( this.template( this.model.toJSON()));
    }
});

console.log('Lessons 6-7 - Views and Templates\n');

var person = new Person;
var personView = new PersonView({ model: person });

console.log(personView.el);  // html element of view
console.log(personView.$el);  // jQuery element of view

personView.render();

console.log("After render: " + personView.el);

$(document.body).append(personView.el);



