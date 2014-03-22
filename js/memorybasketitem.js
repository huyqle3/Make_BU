//console.log("Hello World");
var completeURL = document.URL.split('/');
var exactInput = completeURL[3];
var id = completeURL[5];
var camelSearchURL = "http://camelcamelcamel.com/" + exactInput + "/product/" + id + "?context=browse";

//console.log(camelSearchURL);

/*$(document).ready(function(){
    $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: camelSearchURL,
            success:function(data){
            	console.log(data);
            }
        });
    return false;
});*/

$(document).ready(function(){
	test(camelSearchURL);
});

function test(link){
	var selector = "#olpDivId";
	$(selector).after('<a href="' + link +'"></a><iframe id="basket" src=' + link + 'style = "width:100%; height:100%; text-align:center"></iframe>');
	$('#basket').css('background-color', 'white');
	$(window).load(function(){  
      	var filteredContents = $('#basket').contents().find('#section_amazon').html();
      	$('#basket').contents().find('body').html(filteredContents);
	});
}