/**
 * Lessons 8 - otdelenie shablona ot predstavleniya
 * Lesson 9 - collections
 * Lesson 10 - collections views
 * http://loftblog.ru/2013/01/20/razrabotka-veb-prilozheniya-na-backbone-js-chast-vosmaya-otdelenie-shablona-ot-predstavleniya/
 * http://loftblog.ru/2013/01/20/razrabotka-veb-prilozheniya-na-backbone-js-chast-devyataya-vvedenie-v-kollekcii/
 * http://loftblog.ru/2013/01/22/razrabotka-veb-prilozheniya-na-backbone-js-chast-desyataya-vid-kollekcii/
 */

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Dima',
        age: 23,
        job: 'web developer'
    }
});

//Список людей
var PeopleCollection = Backbone.Collection.extend({
    model: Person
});

//хэлпер шаблона
var template = function(id) {
    return _.template( $('#' + id).html() );
};

// Вид одного человека
var PersonView = Backbone.View.extend({
    tagName: 'li',

    // from separate template
    template: template('person-id'),

    initialize: function () {
        console.log('initialize!')
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});

//Вид списка людей
var PeopleView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function() {
    },

    // вызывает в цикле рендеринг для каждого объекта person
    render: function() {
        this.collection.each(function(person) {
            var personView = new PersonView({model: person});
            this.$el.append(personView.render().el);
        }, this);

        return this;
    }

});

// tests

console.log('Lessons 8 - otdelenie shablona ot predstavleniya');
console.log('Lessons 9 - collections\n');

var person = new Person;
var personView = new PersonView({ model: person });

var person2 = new Person({name: 'Boris', age : 32, job: 'designer'});
var personView2 = new PersonView({ model: person2});

console.log(personView.el);
console.log(personView2.el);

$(document.body).append(personView.el);
$(document.body).append(personView2.el);

// collections

var peopleCollection = new PeopleCollection();

peopleCollection.add(person);
peopleCollection.add(person2);

console.log(peopleCollection);

var peopleCollection2 = new PeopleCollection([
    {
        name: 'Петр',
        age: 20,
        job: 'Таксист'
    },
    {
        name: 'Олег',
        age: 24,
        job: 'Менеджер'
    },
    {
        name: 'Анна',
        age: 18,
        job: 'Студентка'
    }
]);

console.log(peopleCollection2);

// collection views

var peopleView = new PeopleView({collection: peopleCollection2});

$(document.body).append('<hr/>');

$(document.body).append(peopleView.render().el);