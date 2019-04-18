let one_second = 1000;
window.onload = delay( 30 * one_second );

function delay( ms ) {
  setTimeout( function(){ alert("delay is done" + ms) }, ms );
}
