/**
 * Created by Ruslan on 29.06.2016.
 */
var form = document.forms.handler;

form.onsubmit = function(e) {
    e.preventDefault();
        var name = document.getElementById('name');
        var surname = document.getElementById('surname');
        var age = document.getElementById('age');
        var mail = document.getElementById('mail');
        var sex = document.getElementById('sex');
        var error = document.querySelector('p.error');
    if(name.value.length < 2 || name.value.length == 0) {
        error.innerHTML = 'Заполните поле Имя, не меньше 2х букв!';
        return;
    }
    if(surname.value.length < 2 || surname.value.length == 0) {
        error.innerHTML = 'Заполните поле Фамилия, не меньше 2х букв!';

    }
    if(!/\D/.test(age.value) == 0 || age.value.length == 0) {
        error.innerHTML = 'Заполните поле возраста, только числа!';
        return;
    }
    if(/[@\.]/.test(mail.value) == 0 || mail.value.length == 0) {
        error.innerHTML = 'Заполните поле почта, правильно!';
        return;
    }
    if((/["man""woman""мужчина""женщина"]/i.test(sex.value)) == 0 || mail.value.length == 0) {
        error.innerHTML = 'Заполните поле пол, правильно!';
        return;
    }

     this.submit();
};
