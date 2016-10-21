/*<!--
      Chapter 8: Manipulating Arrays and Strings
      Client-Side Development

      * Assignment parses data entered and adds to array

      Author: Kayla Cook
      Date:   October 29, 2015

      Filename: script.js
   -->*/

   "use strict";

   var newAccountArray = [];

   function createID(){
   	var fname = document.getElementById("fnameinput");
   	var lname = document.getElementById("lnameinput");
   	var zip = document.getElementById("zipinput");
   	var account= document.getElementById("accountidbox");
   	var fields = document.getElementsByTagName("input");
   	var acctid;
   	var firstInit;
   	var lastInit;
   	if (fname.value !== "" && lname.value !=="" && zip.value !==""){
   		firstInit = fname.value.charAt(0).toUpperCase();
   		lastInit = lname.value.charAt(0).toUpperCase();
   		acctid = firstInit + lastInit + zip.value;
   		account.value = acctid;
   		newAccountArray = [];
   		for(var i = 0; i < fields.length -1; i++) {
			newAccountArray.push(fields[i].value);
			}
		}
	}

	function createEventListeners() {
		var fname = document.getElementById("fnameinput");
		var lname = document.getElementById("lnameinput");
		var zip = document.getElementById("zipinput");
		if (fname.addEventListener) {
			fname.addEventListener("change", createID, false);
			lname.addEventListener("change", createID, false);
			zip.addEventListener("change", createID, false);
		} else if (fname.attachEvent){
			fname.attachEvent("onchange", createID);
			lname.attachEvent("onchange", createID);
			zip.attachEvent("onchange", createID);
		}
	}
	if (window.addEventListener) {
		window.addEventListener("load", createEventListeners, false);
	} else if (window.attachEvent) {
		window.attachEvent("onload", createEventListeners);
	}

