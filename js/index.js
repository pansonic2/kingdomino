var counter = 1;

$('#button1').click(function(){
	var $terrainOption = $("<form>terrain<select><option>Sea</option><option>Sand</option><option>Forest</option><option>Cave</option><option>Gray</option><option>Field</option></select></form>");
  $terrainOption.attr("id", "terra" + counter++);
  var $crownOption = $("<form>crowns<select><option>1</option><option>2</option><option>3</option></select></form>");
  $crownOption.attr("id", "crown" + counter++);
  var $tileOption = $("<form>tiles<select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option></select></form><br>");
  $tileOption.attr("id", "tile" + counter++);
  $(".body_div").append($terrainOption);
  $(".body_div").append($crownOption);
  $(".body_div").append($tileOption);
});

  function getScore(){
 
  var area1 = $("#crown2 option:selected").val();
  var area2 = $("#tile3 option:selected").val();
  var area3 = $("#crown5 option:selected").val();
  var area4 = $("#tile6 option:selected").val();
  var area5 = $("#crown8 option:selected").val();
  var area6 = $("#tile9 option:selected").val();
  var area7 = $("#crown11 option:selected").val();
  var area8 = $("#tile12 option:selected").val();
  var area9 = $("#crown14 option:selected").val();
  var area10 = $("#tile15 option:selected").val();
  var area11 = $("#crown17 option:selected").val();
  var area12 = $("#tile18 option:selected").val();
  var area13 = $("#crown20 option:selected").val();
  var area14 = $("#tile21 option:selected").val();
  var area15 = $("#crown23 option:selected").val();
  var area16 = $("#tile24 option:selected").val();
  var area17 = $("#crown26 option:selected").val();
  var area18 = $("#tile27 option:selected").val();
  var area19 = $("#crown29 option:selected").val();
  var area20 = $("#tile30 option:selected").val();
  var area21 = $("#crown32 option:selected").val();
  var area22 = $("#tile33 option:selected").val();
  var area23 = $("#crown35 option:selected").val();
  var area24 = $("#tile36 option:selected").val();
  var area25 = $("#crown38 option:selected").val();
  var area26 = $("#tile39 option:selected").val();
  var area27 = $("#crown41 option:selected").val();
  var area28 = $("#tile42 option:selected").val();
  var area29 = $("#crown44 option:selected").val();
  var area30 = $("#tile45 option:selected").val();
  

    
    if (area3 === undefined){
     var score = area1*area2;
    }
   else if (area5 === undefined){
     var score = area1*area2 + area3*area4;
    }
   else if (area7 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6;
    }
   else if (area9 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8;
    }
    else if (area11 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10;
    }
    else if (area13 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10 + area11*area12;
    }
    else if (area15 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10 + area11*area12 +area13*area14;
    }
    else if (area17 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10 + area11*area12 +area13*area14 + area15*area16;
    }
    else if (area19 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10 + area11*area12 +area13*area14 + area15*area16 +area17*area18;
    }
     else if (area21 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10 + area11*area12 +area13*area14 + area15*area16 +area17*area18 + area19*area20;
    }
    else if (area23 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10 + area11*area12 +area13*area14 + area15*area16 +area17*area18 + area19*area20+area21*area22;
    }
    else if (area25 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10 + area11*area12 +area13*area14 + area15*area16 +area17*area18 + area19*area20+area21*area22+area23*area24;
    }
    else if (area27 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10 + area11*area12 +area13*area14 + area15*area16 +area17*area18 + area19*area20+area21*area22+area23*area24+area25*area26;
    }
    else if (area29 === undefined){
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10 + area11*area12 +area13*area14 + area15*area16 +area17*area18 + area19*area20+area21*area22+area23*area24+area25*area26+area27*area28;
    }
    else {
     var score = area1*area2 + area3*area4 + area5*area6 + area7*area8 + area9*area10 + area11*area12 +area13*area14 + area15*area16 +area17*area18 + area19*area20+area21*area22+area23*area24+area25*area26+area27*area28+area29*area30;
    }
$("#showscore").html(score);
    console.log(score)
}

$("#Restart").click(function(){
  
 $( ".body_div br" ).remove();
  $("form").remove();
 counter = 1;
 score = 0;
 $("#showscore").html(score)
  
  
 

})