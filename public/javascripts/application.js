$(document).ready(function() {
   (function() {
     var fastSin = function(steps) {
         var table = [],
             ang = 0,
             angStep = (Math.PI * 2) / steps;
         do {
             table.push(Math.sin(ang));
             ang += angStep;
         } while (ang < Math.PI * 2);
         return table;
     };
     
     var bodyWidth = parseInt($('body').css('width'));
     //console.log(bodyWidth);
     
     var sinTable = fastSin(4096),
         $drawTarget = $('#draw-target'),
         divs = '',
         i, $bars, x = 0;
         
     var drawGraph = function(ang, freq, height) {
         var height2 = height * 2;
         for (var i = 0; i < bodyWidth; i++) {
             $bars[i].style.top =
             160 - height + sinTable[(ang + (i * freq)) & 4095] * height + 'px';
             $bars[i].style.height = height2 + 'px';
         }
     };
     for (i = 0; i < bodyWidth; i++) {
         divs += '<div style="position:absolute; width:1px; height:40px; ' + 'background-color:#0d0; top:0px; left: ' + i + 'px;"></div>';
     }
     $drawTarget.append(divs);
     $bars = $drawTarget.children();
     setInterval(function() {
         drawGraph(x * 50, 32 - (sinTable[(x * 20) & 4095] * 16), 50 - (sinTable[(x * 10) & 4095] * 20));
         x++;
     }, 20);
  })();

  });