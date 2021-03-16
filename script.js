
function loadDoc(){
	xmlhttp=new XMLHttpRequest()

	xmlhttp.onreadystatechange = () => {
    console.log(this.readyState+"  "+this.status+"   "+this.responseText);
  }
	
	xmlhttp.open("GET","./web.php",true);

	xmlhttp.send();	
}

loadDoc();