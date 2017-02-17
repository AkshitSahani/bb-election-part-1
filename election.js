$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(data){
    var list = $('<li>');
    var list2 = $('<li>');
    var list3 = $('<li>');
    var list4 = $('<li>');
    var list5 = $('<li>');

    var lists = [list, list2, list3, list4, list5];

    for (var i = 0; i < data['candidates'].length; i++){

      $(lists[i]).html('Name: ' + (data['candidates'][i]['name']) + ', Votes:' + (data['candidates'][i]['votes']))
    };


    for (var j = 0; j < lists.length; j++){
      $('#votes').append(lists[j]);
    }
  });

});
