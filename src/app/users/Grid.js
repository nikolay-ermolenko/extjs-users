Ext.define('App.users.Grid', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.users-grid',

    requires: [],

    columns: [
        {
            xtype: 'rownumberer',
            width: 50
        },
        {
            dataIndex: 'firstName',
            text: 'First Name',
            flex: 1,
            minWidth: 110
        },
        {
            dataIndex: 'lastName',
            text: 'Last Name',
            flex: 1,
            minWidth: 130
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'age',
            text: 'Age',
            format: '0',
            width: 80
        },
        {
            xtype: 'templatecolumn',
            text: 'Aggregate',
            tpl: '{ShortName} - <a href="mailto:{email}">{email}</a>',
            flex: 1.5,
            minWidth: 150
        },
        {
            xtype: 'actioncolumn',
            width: 70,
            items: [
                {
                    xtype: 'button',
                    tooltip: 'Редактировать запись',
                    iconCls: 'x-fa fa-edit',
                    handler: 'removeStreet'
                },
                {
                    xtype: 'splitter'
                },
                {
                    xtype: 'button',
                    tooltip: 'Удалить запись',
                    iconCls: 'x-fa fa-trash',
                    handler: 'removeStreet'
                }
            ]
        }
    ],

    bind: {
        store: '{usersStore}'
    }
});
