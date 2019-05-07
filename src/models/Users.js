Ext.define('App.models.Cities', {

    extend: 'Ext.data.Model',

    idProperty: 'guid',

    identifier: 'uuid',

    fields: [
        {
            name: 'guid',
            type: 'string'
        },
        {
            name: 'age',
            type: 'integer'
        }
    ],

    validators: {
        age: {
            type: 'presence',
            message: 'Обязательное поле'
        }
    },

    proxy: {
        type: 'ajax',
        url: 'api/static/mates.json',
        reader: {
            type: 'json'
        }
    }
});