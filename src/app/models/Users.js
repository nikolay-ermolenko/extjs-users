Ext.define('App.models.Users', {

    extend: 'Ext.data.Model',

    idProperty: 'guid',

    identifier: 'uuid',

    fields: [
        {
            name: 'guid',
            type: 'string'
        },
        {
            name: 'firstName',
            type: 'string',
            mapping: 'name.first'
        },
        {
            name: 'lastName',
            type: 'string',
            mapping: 'name.last'
        },
        {
            name: 'age',
            type: 'integer'
        },
        {
            name: 'fullName',
            type: 'string',
            depends: ['firstName', 'lastName'],
            persist: false,
            calculate: function (data) {
                return (data.firstName + ' ' + data.lastName).trim();
            }
        },
        {
            name: 'shortName',
            type: 'string',
            depends: ['firstName', 'lastName'],
            persist: false,
            calculate: function (data) {
                return Ext.Array.map(
                    Ext.Array.filter(
                        [
                            (data.firstName[0] || '').toUpperCase(),
                            (data.lastName[0] || '').toUpperCase()
                        ],
                        function (letter) {
                            return Boolean(letter)
                        }
                    ),
                    function (letter) {
                        return letter + '.';
                    }
                ).join('');
            }
        },
        {
            name: 'email',
            type: 'string'
        }
    ],

    validators: {
        firstName: [
            {
                type: 'presence',
                message: 'Обязательное поле'
            }
        ],
        lastName: [
            {
                type: 'presence',
                message: 'Обязательное поле'
            }
        ],
        age: [
            {
                type: 'presence',
                message: 'Обязательное поле'
            },
            {
                type: 'range',
                min: 0,
                message: 'Больше нуля'
            }
        ],
        email: [
            {
                type: 'presence',
                message: 'Обязательное поле'
            },
            {
                type: 'email',
                message: 'Укажите email'
            }
        ]
    },

    proxy: {
        type: 'ajax',
        url: 'api/static/mates.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});