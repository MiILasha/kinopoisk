$('#button-submit').click(function() {
    const email = $('#email').val();
    const csrf = $('[name=csrfmiddlewaretoken]').val();
    const submitButton = $(this);

    if (!email) {
        alert('Введите email');
        return;
    }

    $.ajax({
        url: '/feedback/',
        type: 'POST',
        data: {
            'email': email,
            'csrfmiddlewaretoken': csrf 
        },
        dataType: 'json',
        
        success: function(data) {
            console.log('Success: ', data);
            submitButton.text('Отправлено');
            submitButton.prop('disabled', true);
            submitButton.css({
                'background-color': '#4CAF50',
                'color': '#fff',
            });
        },

        error: function(error) {
            console.error('Error: ', error);
            submitButton.text('Не удалось отправить');
            submitButton.prop('disabled', false);
            submitButton.css({
                'background-color': 'red',
                'color': '#fff'
            })
        }
    })
});

$('#auth-button').click(function() {
    const username = $('#username').val();
    const password = $('#password').val();
    const csrf = $('[name=csrfmiddlewaretoken]').val();
    const authButton = $(this);

    if (!username) {
        alert('Введите логин');
        return;
    }

    if (!password) {
        alert('Введите пароль');
        return;
    }

    $.ajax({
        url: '/auth/',
        type: 'POST',
        data: {
            'username': username,
            'password': password,
            'csrfmiddlewaretoken': csrf 
        },
        dataType: 'json',
        
        success: function(data) {
            console.log('Success: ', data);
            window.location.href = '/';
        },

        error: function(error) {
            console.error('Error: ', error);
        }
    })
});

$('#reg-button').click(function() {
    const username = $('#username').val();
    const password = $('#password').val();
    const email = $('#email').val();
    const name = $('#name').val();
    const csrf = $('[name=csrfmiddlewaretoken]').val();
    const regButton = $(this);

    if (!username) {
        alert('Введите логин');
        return;
    }

    if (!email) {
        alert('Введите email');
        return;
    }

    if (!name) {
        alert('Введите имя');
        return;
    }

    if (!password) {
        alert('Введите пароль');
        return;
    }

    $.ajax({
        url: '/reg/',
        type: 'POST',
        data: {
            'username': username,
            'email': email,
            'first-name': name,
            'password': password,
            'csrfmiddlewaretoken': csrf
        },
        dataType: 'json',
        
        success: function(data) {
            console.log('Success: ', data);
            window.location.href = '/';
        },

        error: function(error) {
            console.error('Error: ', error);
        }
    })
});