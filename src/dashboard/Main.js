Ext.define('App.dashboard.Main', {

    extend: 'Ext.container.Container',

    alias: 'widget.main-dashboard',

    id: 'main-dashboard',

    requires: [
        'App.dashboard.MainViewModel',
        'App.dashboard.MainController'
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    viewModel: 'main-dashboard',

    controller: 'main-dashboard',

    items: []
});
