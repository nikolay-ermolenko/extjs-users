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
                xtype: 'hidden',
                bind: {
                    value: '{isDirty}',
                    validation: '{isDirty ? null : !isDirty}'
                }
            }
        ],
        buttons: [
            {
                text: 'Сохранить',
                formBind: true,
                bind: {
                    disabled: '{!isDirty}'
                },
                handler: 'saveForm'
            },
            {
                text: 'Отмена',
                handler: 'rejectForm'
            }
        ]
    }
});
