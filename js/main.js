// // CSS Which needs to add
// var css = [
// "css/bootstrap.min.css",
// "css/style.css",
// "css/dev-style.css"
// ];

// // JS Which needs to add
// var js = [
// "js/bootstrap.bundle.min.js",
// "js/parallax.js",
// "js/hammer.js",
// "js/custom.js"
// ];


// // Add All css and js to head in HTML page
// var headID = document.getElementsByTagName('head')[0];
// for(i=0; i<css.length; i++){
// 	var link = document.createElement('link');
// 	link.href = css[i];
// 	link.type="text/css";
// 	link.rel = "stylesheet";	
// 	headID.appendChild(link);
// };

// var script = document.createElement('script');
// script.src = "js/jquery.js";
// script.type="text/javascript";
// script.onload = function(){
// 	for(j=0; j<js.length; j++){
// 		var script = document.createElement('script');
// 		script.src = js[j];
// 		script.type="text/javascript";
// 		headID.appendChild(script);
// 	};	
// }
// headID.appendChild(script);


document.write(
	//Css File
	'<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">' +
	'<link rel="stylesheet" type="text/css" href="css/style.css">' +
	
	//JS Files
	'<script src="js/jquery.js"></script>' +
	'<script src="js/bootstrap.bundle.min.js"></script>' +
	'<script src="js/TweenMax.min.js"></script>' +
	'<script src="js/ScrollMagic.min.js"></script>' +
	'<script src="js/animation.gsap.js"></script>' +
	'<script src="js/debug.addIndicators.min.js"></script>' +
	'<script src="js/custom.js"></script>'
	);