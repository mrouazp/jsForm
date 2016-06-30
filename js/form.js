/**
 * Created by Ruslan on 29.06.2016.
 */
var form = document.forms.handler;

form.onsubmit = function(e) {
    e.preventDefault();
    var error = document.querySelector('p.error');
    if(form.elements.name.value.length < 2 || form.elements.name.value.length == 0) {
        error.innerHTML = "Заполните поле, не меньше 2х букв!";
        return;
    }
    if(form.elements.surname.value.length < 2 || form.elements.surname.value.length == 0) {
        error.innerHTML = "Заполните поле, не меньше 2х букв!";
        return;
    }

     this.submit();
};
