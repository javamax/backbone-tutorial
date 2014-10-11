/**
 * Lessons 4-5 - Model definition and model validation
 * http://loftblog.ru/2013/01/17/razrabotka-veb-prilozheniya-na-backbone-js-chast-pyataya-validaciya-modelej/
 */

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Dima',
        age: 23,
        job: 'web developer'
    },

    validate: function (attrs) {
       console.log(attrs);

        if (attrs.age <= 0) {
            return 'Возраст должен быть положительным!';
        }

        if (!attrs.name) {
            return 'Чувак, ты же не думаешь, что у персоны не может быть имени?';
        }

    },

    work: function() {
        return this.get('name') + ' is working.';
    }
});

console.log('Lessons 4-5 - Model definition and model validation\n');

console.log("Use backbone model\n");

// Create with defaults values
var person = new Person;

// Bind an 'invalid' event
person.on('invalid', function(model, error) {
   console.log(error);
});

// Correct set
person.set({age: 25},{validate:true});
// Invalidate set
person.set({age:-35},{validate:true});
// without validation
person.set('name', '');
// with validation
person.set({name: ''}, {validate: true});
person.set({name: 'Bobi'}, {validate: true});
console.log(person.toJSON());

// create with params
var person2 = new Person({'name':'Andrey', 'age':27});
person2.set('age', 31);
console.log('=========');
console.log(person2.toJSON());

var person3 = new Person;
person3.set({'age': 50});
var age = person3.get('age');

console.log('age = ' + age);

