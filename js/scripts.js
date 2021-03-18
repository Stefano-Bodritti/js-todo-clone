// Come abbiamo fatto questa mattina insieme dovete creare una todo list che permatta di aggiungere (tramite campo input) e rimuovere gli elementi!

$(function () {
// 1. permetto di rimuovere gli elementi cliccando sulla X
$(".to_do_list").on("click", ".far", function() {
  $(this).parent().remove();
});


});
