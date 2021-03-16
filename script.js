
function loadDoc(a){
	xmlhttp=new XMLHttpRequest()

	xmlhttp.onreadystatechange = () => {
    var elem = document.getElementByID('response');
    elem.innerHTML=xmlhttp.responseText;
  }
	
	xmlhttp.open("GET","./web.php",false);

	xmlhttp.send("lettre=" + a);	
}