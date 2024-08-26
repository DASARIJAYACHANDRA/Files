function jayatime(){
    var d = new Date();
    var hrs =d.getHours();
    var min =d.getMinutes();
    var s=d.getSeconds();

    var pa= document.getElementById("pa")

    if(hrs>=12)
     {  
         pa.innerHTML="pm";
        }
        
    if(hrs>12)
       {
         hrs=hrs-12
        }

    document.getElementById("hrs").innerHTML=hrs;
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=s;
    
    }
   setInterval(jayatime,1000)


