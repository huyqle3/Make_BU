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
	
	$(".second_frame").hide();
      
        $(".main_tab").click(function(){
          $(".main_frame").show();
          $(".second_frame").hide();
        });

        $(".second_tab").click(function(){
          $(".second_frame").show();
          $(".main_frame").hide();
	});
});

function test(link){
	var selector = "#olpDivId";
	$(selector).after('<td><button type = "button"; style = "cursor:pointer;" class = "second_tab">' + 'Recent' + '</button></td>');
	$(selector).after('<td><button type = "button"; style = "cursor:pointer;" class = "main_tab">' + 'All Time' + '</button></td>');
	$(selector).after('<a href="' + link +'"></a><iframe class="second_frame" src='+link+'scrolling = "no" style="width:240px; height:180px; text-align:center; visibility: hidden; overflow: "hidden";></iframe>');
	$(selector).after('<a href="' + link +'"></a><iframe class="main_frame" src='+link+'scrolling = "no" style="width:500px; height:230px; text-align:center; visibility: hidden; overflow: "hidden";></iframe>');
	$(window).load(function(){  
      	var filteredContents = $('.main_frame').contents().find('#section_amazon .yui3-g .pad').html();
      	$('.main_frame').contents().find('body').html(filteredContents);
      	$('.main_frame').css('visibility', 'visible');
      	var filteredContents2 = $('.second_frame').contents().find('#section_amazon .yui3-g .history_list.product_pane').html();
      	$('.second_frame').contents().find('body').html(filteredContents2);
      	$('.second_frame').css('visibility', 'visible');
	});
}