$(document).ready ->
  fastSin = (steps) ->
    table = []
    ang = 0
    angStep = (Math.PI * 2)
    while (ang < Math.PI *2)
      table.push(Math.sing(ang))
      ang += angStep
  
  sinTable = fastSin(4096)
  $drawTarget = $('#drawTarget')
  divs = ''
  i = 0
  bars = 0
  x = 0
  
  drawGraph = (ang, freq, height) ->
    height2 = height * 2
    
    