$(document).ready(function() {

  // Scrivo il nome di un contatto nel campo ricerca e me lo restituisce tra la lista dei contatti
  $('.find-wrapper input').keyup(function() {
    var valoreInput = $(this).val().toLowerCase();
    var allContatti = $('.contatti .singolo-contatto');

    // eseguo ciclo each per verificare ogni contatto
    allContatti.each(function() {
      var nomeContatto = $(this).find('h4').text().toLowerCase();
      if (nomeContatto.includes(valoreInput)) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    })
  })

  // cliccando sul messaggio appare un menu a tendina
  $(document).on('click', '.messaggio',
    function() {
      $(this).children('.dropdown').toggleClass('vedi');
      $(this).siblings().children('.dropdown').removeClass('vedi');
    }
  )

  // cliccando su Cancella messaggio il messaggio viene rimosso dalla cronologia chat
  $(document).on('click', '.cancella',
    function() {
      $(this).parents('.messaggio').remove();
    }
  )

})
