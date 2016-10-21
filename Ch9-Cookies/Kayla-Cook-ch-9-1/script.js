/*
     Chapter 9: Cookies and Web Application Security
      Client-Side Development

      * Assignment upasses information and then uses decodeuri function

      Author: Kayla Cook 
      Date:   Noveber 11, 2015

      Filename: script.js*/

      "use strict";

      function populateInfo () {
      	if (location.search) {
      		var greeting = location.search;
      		greeting = greeting.replace("+", " ");
      		greeting = greeting.substring(greeting.lastIndexOf("=") + 1);
      		document.getElementById("greetingtext").innerHTML = decodeURIComponent (greeting);
      	}

      }
 	if (window.addEventListener) {
 		window.addEventListener("load", populateInfo, false);
 	} else if (window.attachEvent) {
 		window.attachEvent("onload", populateInfo);
 	}