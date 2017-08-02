$(document).ready(function(){
 
$("#morebuttons").on("click", morebtn)
  function morebtn(){
   
  $("body").append("<br></br><form name = terrain>terrain <select><option>Wheat Field<option>Forest<option>Lake<option>Grazing Ground<option>Marsh<option>Mountain</option></form>");  
  $("body").append("<form name = crowns>crowns <select><option>1<option>2<option>3<option>4<option>5<option>6<option>7<option>8<option>9<option>10</option></form>");
  $("body").append("<form name = tiles>tiles <select><option>1<option>2<option>3<option>4<option>5<option>6<option>7<option>8<option>9<option>10<option>11<option>12</option></form>");
    
  }
  
  $("#removebuttons").on("click", removbtn)
  function removbtn(){
  //$('form:last-child').remove();
  //$('form:last-child').remove();
  //$('form:last-child').remove();
    $('form').remove();
    $('br').remove();
  }
  $("#scorebutton").on("click", calcscore);
  function calcscore(){
    var countAllCrowns = $("form[name='crowns']  option:selected").map(function(i,v) {
    return $(this).text();   
}).toArray();
      
    var total = 0;
for (var i = 0; i < countAllCrowns.length; i++) {
    total += countAllCrowns[i] << 0;
  
  
  
  var countAllTiles = $("form[name='tiles']  option:selected").map(function(i,v) {
    return $(this).text();   
}).toArray();
  
  console.log(countAllTiles);
  var finalscore = 0;
  for (var x = 0; x < countAllCrowns.length; x++) {
    finalscore += countAllCrowns[x]*countAllTiles[x] << 0;}
  $("#revealscore").html("Your score is " + finalscore +".");
  console.log(finalscore);
  
}
     
      
    
  
  }
  
  
 
});
