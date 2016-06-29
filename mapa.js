var centro=new google.maps.LatLng(-3.7459623,-38.5741997);

//inicializando o mapa---------------
function initialize()
{
var mapProp = {
  center:centro,
  zoom:16,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

// fazendo as marcações--------------------------
var markerComp=new google.maps.Marker({
  position:centro,
  title:"Dpto Computação"
  });
markerComp.setMap(map);


var markerB = new google.maps.Marker({
    position:  u=new google.maps.LatLng(-3.742440, -38.574408),
    map: map,
    title:"Biblioteca"
  });

var markerR = new google.maps.Marker({
    position:  u=new google.maps.LatLng(-3.744812, -38.572801),
    map: map,
    title:"RU"
  });


//fazendo infowindow ----------------
  var infoC = new google.maps.InfoWindow({
  content:"Departamento de Computação"
  });

 var infoR = new google.maps.InfoWindow({
  content:"Restaurante Universitário"
  });

  var infoB = new google.maps.InfoWindow({
  content:"Biblioteca Central "
  });


//trazendo zoom ao clicar no botao-------------------------
google.maps.event.addListener(markerComp,'click',function() {
  map.setZoom(18);
  map.setCenter(markerComp.getPosition());
  infoC.open(map,markerComp);
  var nome = "<h2>Departamento de Computação</h2>";
  var detalhes = "<ul><li>PET Computação</li><li>EJr Computação</li><li>Auditório Estatística</li><li>CA Computação</li><li>CA Estatística</li></ul>";
  var div = document.getElementById("divDetalhes");
  div.innerHTML =  nome + "\n" + detalhes;
  }); 

google.maps.event.addListener(markerR,'click',function() {
  map.setZoom(18);
  map.setCenter(markerR.getPosition());
  infoR.open(map,markerR);
  var nome = "<h2>Restaurante Universitário</h2>";
  var detalhes = "<ul><li>Refeitório 1</li><li>Refeitório 2</li><li>Refeitório 3</li><li>Banheiro F/M</li><li>Bebedouro</li></ul>";
  var div = document.getElementById("divDetalhes");
  div.innerHTML =  nome + "\n" + detalhes;
  }); 

google.maps.event.addListener(markerB,'click',function() {
  map.setZoom(18);
  map.setCenter(markerB.getPosition());
  infoB.open(map,markerB);
  var nome = "<h2>Biblioteca Central - BCT</h2>";
  var detalhes = "<ul><li>Banheiro M/F</li><li>Sala de Estudos</li><li>Bebedouro</li><li>Xerox</li></ul>";
  var div = document.getElementById("divDetalhes");
  div.innerHTML =  nome + "\n" + detalhes;
  }); 





}
//carregando o mapa
google.maps.event.addDomListener(window, 'load', initialize);


//---------------------------------------------------------
//PREENCHER OS CAMPOS DE INFORMAÇOES

