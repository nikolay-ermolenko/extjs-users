Ext.define('App.users.CardController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.users-card',

    saveForm: function () {
        var vm = this.getViewModel(),
            pvm = vm.getParent(),
            editedUser = vm.get('editedUser');
        if (!editedUser.phantom) {
            pvm.get('selectedUser').set(editedUser.getData());
            pvm.get('selectedUser').commit();

        } else {
            pvm.getStore('usersStore')
                .insert(0, editedUser.getData());
        }
        this.getView().close();
    },

    rejectForm: function () {
        if (this.getViewModel().get('isDirty')) {
            this.onDirtyClose();
        } else {
            this.getView().close();
        }
    },

    onDirtyClose: function () {
        Ext.MessageBox.confirm(
            'Имеются изменённые данные',
            'Закрыть окно?',
            function (btn) {
                if (btn === 'yes') {
                    this.getView().close();
                }
            },
            this
        );
    }
});
