function tab(){
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){

    if(this.readyState==4 && this.status==200)
    {
        var response=JSON.parse(this.responseText);
        
        var Jcommd=response.essentials;
        var out=""
        document.getElementById("welcome").style.visibility="hidden";
        document.getElementById("carouselExampleSlidesOnly").style.visibility="hidden";
        document.getElementById("t01").style.visibility="visible";
       
        for (var i=0; i<Jcommd.length; i++ ){
           
    
        out+="<tr><td>"+Jcommd[i].SlNo +"</td><td>"+Jcommd[i].Name +"</td><td>"+Jcommd[i].Quantity +"</td><td>"+Jcommd[i].Unit +
        "</td><td>"+Jcommd[i].Department +"</td><td>"+Jcommd[i].Notes +"</td></tr>";
    }
   
    document.getElementById("body").innerHTML=out;
}

       
};
xhttp.open("GET","grocery.json",true);
xhttp.send();
}

 


 

