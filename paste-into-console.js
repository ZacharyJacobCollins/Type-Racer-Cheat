var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
setTimeout(function(){ 
	console.log("Hey jquery");
    var arr = $( "span[id*='nhwMiddle']" ); 
	setInterval(function() {
		var arr = $( "span[id*='nhwMiddle']" ); 
		var toType = '';
		for (var i = 0; i<arr.length; i++) {
			console.log($( "span[id*='nhwMiddle']" )[i].innerHTML);
            toType += $( "span[id*='nhwMiddle']" )[i].innerHTML
        }
		console.log($('.txtInput').val(toType));
    }, 5);
}, 1000);
