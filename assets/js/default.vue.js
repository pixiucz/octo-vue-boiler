var boilerplate = new Vue({
    el: '#boilerplate',
    data: {
        user: {
            first_name: '',
            second_name: 'second name'
        },
        messages: null
    },
    methods: {
        validateForm: function () {
            var self = this;
            $.request('onValidate', {
                data: {
                    first_name: self.user.first_name,
                    second_name: self.user.second_name
                },
                success: function() {
                    self.messages = null;
                },
                error: function (response) {
                    self.messages = [];
                    if (response.status === 406) {
                        for (var key in response.responseJSON.X_OCTOBER_ERROR_FIELDS) {
                            self.messages.push({
                                field: key,
                                message: response.responseJSON.X_OCTOBER_ERROR_FIELDS[key]
                            });
                        }
                    }
                }
            });
        }
    }
});
