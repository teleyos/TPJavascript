function separerDonnee(texte, separateur){
    var str = texte.split(separateur);
    result ="";
    for (var i = 0; i < str.length ; i++){
      result += str[i] + " ";
    }
    return result;
}

function requeteAjax3(id){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status == 200){
            document.getElementById("reponse").innerHTML=separerDonnee(xmlhttp.responseText, ',');
        }
    }
    xmlhttp.open("GET", "getInfo.php?id="+id,true);
    xmlhttp.send();
}

function requeteAjax4(){
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var node;
      var child;
      var str = xmlhttp.responseText.split(',');
      for (var i = 0; i<str.length ; i++) {
        if (str[i] != ""){
          node = document.createElement("option");
          node.setAttribute("value",i);
          child = document.createTextNode(str[i]);
          node.appendChild(child);
          document.getElementById('liste').appendChild(node);
        }
      }
    }
  }
  xmlhttp.open("GET", "getPrestation.php", true);
  xmlhttp.send();
}

function
