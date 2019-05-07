Ext.define('App.users.Grid', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.users-grid',

    requires: [
        'App.models.Users'
    ],

    plugins: {
        ptype: 'gridfilters'
    },

    columns: [
        {
            xtype: 'rownumberer',
            width: 50
        },
        {
            xtype: 'templatecolumn',
            text: 'Image',
            tpl: '<div class="avatar"><img src="assets/images/static/User.png"><div>',
            width: 80,
            filter: {
                type: 'list',
                idField: 'guid',
                labelField: 'guid',
                dataIndex: 'fullName',
                updateBuffer: 800,
                store: Ext.data.StoreManager.lookup('usersStore')
            }
        },
        {
            dataIndex: 'firstName',
            text: 'First Name',
            flex: 1,
            minWidth: 110,
            filter: true
        },
        {
            dataIndex: 'lastName',
            text: 'Last Name',
            flex: 1,
            minWidth: 130,
            filter: true
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'age',
            text: 'Age',
            format: '0',
            width: 80,
            filter: true
        },
        {
            xtype: 'templatecolumn',
            text: 'Aggregate',
            tpl: '{shortName} :: {firstName:substr(0,1)}.{lastName:substr(0,1)}. <a href="mailto:{email}">{email}</a>',
            flex: 1.5,
            minWidth: 150
        },
        {
            xtype: 'actioncolumn',
            width: 70,
            hideable: false,
            items: [
                {
                    xtype: 'button',
                    tooltip: 'Редактировать запись',
                    iconCls: 'x-fa fa-edit',
                    handler: 'editUser'
                },
                {
                    xtype: 'splitter'
                },
                {
                    xtype: 'button',
                    tooltip: 'Удалить запись',
                    iconCls: 'x-fa fa-trash',
                    handler: 'removeUser'
                }
            ]
        }
    ],

    bind: {
        selection: '{selectedUser}',
        store: '{usersStore}'
    }

});
