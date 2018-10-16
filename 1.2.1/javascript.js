/********************************
 * Writing JavaScript in the
 * Browser
 * 1.2.1.1
 *
 *******************************/

var form = document.querySelector( 'form' );

form.addEventListener( 'submit', displayPost );

function displayPost( event ) {

  var title = document.querySelector( '#title' ).value,
      content = document.querySelector( '#content' ).value;

  console.log( title );
  console.log( content );

  event.preventDefault();

}
