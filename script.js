xmlhttp=new XMLHttpRequest()

xmlhttp.onreadystatechange = () => {
  document.getElementById("response").innerHTML=xmlhttp.responseText;
}

xmlhttp.open("GET","web.php",false);
xmlhttp.send();

function separateur(texte, separateur){
    return texte.split(separateur);
}