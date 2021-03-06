Ext.define('App.users.Card', {

    extend: 'Ext.window.Window',

    alias: 'widget.users-card',

    requires: [
        'App.users.CardController'
    ],

    controller: 'users-card',

    layout: 'fit',

    title: 'Добавление новой улицы',

    items: {
        xtype: 'form',
        layout: 'form',
        modelValidation: true,
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'First Name',
                bind: '{editedUser.firstName}'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Last Name',
                bind: '{editedUser.lastName}'
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Age',
                bind: '{editedUser.age}'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Email',
                bind: '{editedUser.email}'
            },
            {
                xtype: 'textfield',
                hidden: true,
                validator: function (val) {
                    return val === 'true';
                },
                bind: {
                    value: '{isDirty}'
                }
            }
        ],
        buttons: [
            {
                text: 'Сохранить',
                formBind: true,
                handler: 'saveForm'
            },
            {
                text: 'Отмена',
                handler: 'rejectForm'
            }
        ]
    }
});
