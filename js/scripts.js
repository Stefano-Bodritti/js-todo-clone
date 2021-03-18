// Come abbiamo fatto questa mattina insieme dovete creare una todo list che permatta di aggiungere (tramite campo input) e rimuovere gli elementi!

$(function () {
// 1. permetto di rimuovere gli elementi cliccando sulla X
$(".to_do_list").on("click", ".far", function() {
  $(this).parent().remove();
});

// 2. se l'utente preme un tasto nell'inupt allora...
$(".add").keydown(function(event) {
  // 2a. verifico se il tasto è enter
  if ( event.which == 13 ) {
    // 2b. prendo il value dell'input
    var text = $(".add").val();
    // verifico che il campo input non sia vuoto
    if ( text != "" ) {
      // 2c. clono il template
      var templateLista = $(".template li").clone();
      // 2d. inserisco il testo come primo elemento del li del template
      templateLista.prepend(text);
      // 2e. aggiungo il template alla lista
      $(".to_do_list").append(templateLista);
      // 2f. cancello il campo input dopo inserimento
      $(".add").val("");
    }
  }

});


});
