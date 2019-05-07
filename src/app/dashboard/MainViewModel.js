Ext.define('App.dashboard.MainViewModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.dashboard',

    requires: [
        'App.models.Users'
    ],

    data: {
        version: Ext.getVersion(),
        devicePixelRatio: window.devicePixelRatio,
        selectedUser: null
    },

    stores: {
        usersStore: {
            autoLoad: true,
            pageSize: 0,
            storeId: 'usersStore',
            model: 'App.models.Users',
            sorters: {
                property: 'fullName',
                direction: 'ASC'
            }
        }
    },

    formulas: {
        splitterSize: {
            bind: {
                devicePixelRatio: '{devicePixelRatio}'
            },
            get: function (conf) {
                return 10 * +conf.devicePixelRatio;
            }
        }
    }
});
