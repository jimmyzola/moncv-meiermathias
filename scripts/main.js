"use strict";$(document).ready(function(){$("a").smoothScroll({speed:1e3})}),window.onload=function(){new Elevator({element:document.querySelector(".elevator-button"),targetElement:document.querySelector("#elevator-target"),mainAudio:"/images/panda.mp3",endAudio:"/images/panda.mp3"})},$("div.progress").each(function(e,a){var t=$(a).find("div").text(),o=$(a).find("div").attr("aria-valuenow"),r=$('<canvas width="400" height="400"></canvas>');$(a).replaceWith(r);new Chart(r,{type:"doughnut",data:{labels:[t],datasets:[{data:[o,100-o],backgroundColor:["rgba(153, 102, 255, 0.2)"],borderColor:["rgba(153, 102, 255, 1)"],borderWidth:1}]}})});