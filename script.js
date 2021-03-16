
function loadDoc(){
	xmlhttp=new XMLHttpRequest()

	xmlhttp.onreadystatechange = () => {
    document.write(xmlhttp.responseText);
  }
	
	xmlhttp.open("GET","./web.php",false);

	xmlhttp.send();	
}

loadDoc();