/*
$(".enviar").click(function(e) {
	e.preventDefault();
	var nombre = $("#nombre").val(),
	apellido = $("#apellido").val(),
	edad = $("#edad").val(),

	//"nombre del parámetro POST":valor (el cual es el objeto guardado en las variables de arriba)
	datos = {"nombre":nombre, "apellido":apellido,"edad":edad};

	$.ajax({
		url: "datos.php",
		type: "POST",
		dataType: "JSON",
		data: datos
	}).done(function(respuesta){
		if (respuesta.estado === "ok") {
			console.log(JSON.stringify(respuesta));

			var nombre = respuesta.nombre,
			apellido = respuesta.apellido,
			edad = respuesta.edad;

			$(".respuesta").html("Servidor:<br><pre>"+JSON.stringify(respuesta, null, 2)+"</pre>");
		}
	});
});


*/

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "prueba.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}