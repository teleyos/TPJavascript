
function loadDoc(a){
	xmlhttp=new XMLHttpRequest()

	xmlhttp.onreadystatechange = () => {
    document.getElementByID('response').innerHTML=xmlhttp.responseText;
  }
	
	xmlhttp.open("GET","./web.php",false);

	xmlhttp.send("lettre=" + a);	
}