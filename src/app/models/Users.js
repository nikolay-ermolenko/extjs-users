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
            name: 'ShortName',
            type: 'string',
            convert: function (v, record) {
                return Ext.Array.map(
                    Ext.Array.filter(
                        [
                            (record.get('firstName')[0] || '').toUpperCase(),
                            (record.get('lastName')[0] || '').toUpperCase()
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
                min: 0
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