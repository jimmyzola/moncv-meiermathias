// Function used to modificate speed of smoothScrool and the offset (for good mobile display)
$(document).ready(function(){
  'use strict';
  $('a').smoothScroll({offset: -10, speed: 400});
});


// Elevator script execute on 'Mathias Meier' in the nav bar
window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    targetElement: document.querySelector('#elevator-target'),
    mainAudio: 'http://tholman.com/elevator.js/music/elevator.mp3',
    endAudio: 'http://tholman.com/elevator.js/music/ding.mp3'
  });
}

// Function who replaces the progressBar with doughnut
$('div.progress').each(function(i, obj){
  var label = $(obj).find('div').text();
  var value = $(obj).find('div').attr('aria-valuenow');
  var replaceProgessDonut = $('<canvas width="400" height="400"></canvas>');
  $(obj).replaceWith(replaceProgessDonut);

var myChart = new Chart(replaceProgessDonut, {
      type: 'doughnut',
      data: {
          labels: [label+' '+value+'%'],
          datasets: [{
              data: [value, 100-value],
              backgroundColor: [
                  'rgba(39, 43, 48, 0.2)','#8a9196'
              ],
              borderColor: [
                  'rgba(39, 43, 48, 1)','#8a9196'
              ],
            hoverBackgroundColor: [
              'rgba(39, 43, 48, 0.2)',
              '#8a9196'
            ],
            hoverBorderColor: [
              'rgba(39, 43, 48, 0.2)',
              '#8a9196'
            ],
              borderWidth: 1
          }]
      },
  options: {
    tooltips:{enabled:false} // Option to enabled tooltip function
  }
  });
});
