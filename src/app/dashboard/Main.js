Ext.define('App.dashboard.Main', {

    extend: 'Ext.container.Container',

    alias: 'widget.dashboard',

    id: 'main-dashboard',

    requires: [
        'App.dashboard.MainViewModel',
        'App.dashboard.MainController',
        'App.users.Grid'
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    viewModel: 'dashboard',

    controller: 'dashboard',

    items: [
        {
            xtype: 'users-grid',
            flex: 1
        }

    ]
});
