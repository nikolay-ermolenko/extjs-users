Ext.define('App.dashboard.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.dashboard',

    requires: [
        'App.users.Card'
    ],

    control: {},

    removeUser: function (view, rowIndex, colIndex, button, opts, rec) {
        this.getViewModel().set('selectedUser', rec);
        Ext.MessageBox.confirm(
            'Удалить пользователя?',
            rec.get('fullName'),
            function (btn) {
                if (btn !== 'yes') {
                    return;
                }
                var vm = this.getViewModel(),
                    store = vm.getStore('usersStore');
                store.remove(
                    store.getById(rec.getId())
                );
                vm.set('selectedUser', null);
            },
            this
        );
    },

    editUser: function (view, rowIndex, colIndex, button, opts, rec) {
        this.getViewModel().set('selectedUser', rec);
        this.getView().add({
            xtype: 'users-card',
            modal: true,
            width: 500,
            height: 400,
            renderTo: this.getView().getEl(),
            title: 'Редактирование пользователя',
            viewModel: {
                formulas: {
                    editedUser: function (getter) {
                        return getter('selectedUser')
                            ? Ext.create(
                                'App.models.Users',
                                getter('selectedUser').getData()
                            )
                            : null;
                    },
                    isDirty: {
                        bind: {
                            bindTo: '{editedUser}',
                            deep: true
                        },
                        get: function (editedUser) {
                            return editedUser.dirty;
                        }
                    }
                }
            }
        }).show();
    },

    addUser: function () {
        this.getViewModel().set('selectedUser', null);
        this.getView().add({
            xtype: 'users-card',
            modal: true,
            width: 500,
            height: 400,
            renderTo: this.getView().getEl(),
            title: 'Создание пользователя',
            viewModel: {
                formulas: {
                    editedUser: function (getter) {
                        return getter('selectedUser')
                            ? Ext.create(
                                'App.models.Users',
                                getter('selectedUser').getData()
                            )
                            : Ext.create(
                                'App.models.Users',
                                {});
                    },
                    isDirty: {
                        bind: {
                            bindTo: '{editedUser}',
                            deep: true
                        },
                        get: function (editedUser) {
                            return editedUser.dirty;
                        }
                    }
                }
            }
        }).show();
    }
});
