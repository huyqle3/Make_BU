console.log("Hello World");

var completeURL = document.URL.split('=');
var firstSplit = completeURL[3];
var secondSplit = firstSplit.split('&');
var exactInput = secondSplit[0];

var camelSearchURL = "camelcamelcamel.com/search?sq=" + exactInput;

//var desired = $("#products_list a.product_title:first");
$(document).ready(function(){
	var helloworld = $('#centerPlus').load(camelSearchURL + " .product_title");
	console.log(helloworld);
});
//$("#foo").find("a.specialLink:first")    
//$("<p>"+camelSearchURL+"</p>").insertAfter(".rsltL");