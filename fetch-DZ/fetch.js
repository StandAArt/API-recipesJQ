if(document.getElementsByClassName('result').children !== 0){
  $('#go').click( removePrev )
}
$('#go').click(search);
const url= 'http://www.recipepuppy.com/api/';
var page = 1;
var removed = false;

function search(){
  var inputVal = $('#ingredients input').val();
  $('#ingredients .search').html([
    $( '<img>' ).attr('src', 'load.gif'),
  $('<h4>').html('searching, please wait ...')
]);

$
.get(url + '?q=' + inputVal + '&p=' + page)
.done(remove, show);
}

function remove(){
  $('#ingredients .search').empty();
}
function removePrev(){
    $('#ingredients .results').empty();
}

function show( data ){
  var info = JSON.parse( data );

  for(var i = 0; i < info.results.length; i++){

     $('.results').append(
      $('<h4>').html(info.results[i].title + 'recepts'),
      $('<p>').html('Ingredients: ' + info.results[i].ingredients)
    )
 }
 $('.results').append(
 $('<button>').html('add more').click(function(){page++; search(); $('.results button').remove();}));
}
