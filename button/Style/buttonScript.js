$(document).ready(function() {
/*---------1---------*/
var a= true;
    $("#a").click(function(){
        if(a==true){
            $("#blackball").css("border-radius","0");
            $("#blackball").css("background-color","white");
            $("#a").css("background-color", "#FF9228");
            a=false;
        }
        else{
            $("#blackball").css("border-radius","50px");
             $("#blackball").css("background-color","black");
            $("#a").css("background-color", "#FFC9FF");
            a=true;
            
        }
        
    });
    
 /*---------2---------*/   
    var b= true;
    $("#b").click(function(){
        if(b==true){
            $("#movingball").css("background-color","white");
            $("#movingball").css("left","70%");
            b=false;
        }
        else{   
             $("#movingball").css("background-color","#FF9228");
            $("#movingball").css("left","50%");
            b=true;
            
        }
        
    });
    
     /*---------3---------*/  
        var c= true;
    $("#c").click(function(){
        if(c==true){
            $("#blackrec").css("background-color","#b1e1ff");
            $("#blackrec").css("width","100%");
            $("#blackrec").css("left","120%");
            c=false;
        }
        else{   
             $("#blackrec").css("background-color","black");
            $("#blackrec").css("width","50%");
            $("#blackrec").css("left","0%");
            c=true;
            
        }
        
    });
         /*---------4---------*/  
        var d= true;
    $("#d").click(function(){
        if(d==true){
            $("#square").css("width","100%");
            $("#square").css("left","120%");
            d=false;
        }
        else{   
             $("#square").css("background-color","black");
            $("#square").css("width","50%");
            $("#square").css("left","0%");
            d=true;
            
        }
        
    });
             /*---------5---------*/  
        var e= true;
    $("#e").click(function(){
        if(e==true){
            $("#top").fadeIn();
            $("#mid").delay(100).fadeIn();
            $("#bot").delay(200).fadeIn();
            e=false;
        }
        else{  
                  $("#top").delay(200).fadeOut();
            $("#mid").delay(100).fadeOut();
            $("#bot").fadeOut();
      
            e=true;
            
        }
        
    });
                 /*---------6---------*/  
        var f= true;
    $("#f").click(function(){
        if(f==true){
            $("#gradient").fadeIn();
           
            f=false;
        }
        else{  
            $("#gradient").fadeOut();
      
            f=true;
            
        }
        
    });
     /*---------7---------*/  
    var g=true;
    $("#g").click(function(){
   if(g==true){
       $("#small").css("width","50%");
        $("#small").delay(200).css("height","50%");
       g=false;
   }     
      else{
           $("#small").css("width","100%");
          $("#small").delay(200).css("height","100%");
       g=true;
          
      }  
        
        
    });
    
       /*---------8---------*/  
    var h=true;
    $("#h").click(function(){
   if(h==true){
       $("#oval").css("width","300px");
        $("#oval").delay(200).css("height","150px");
       $("#oval").css("background-color","#ff7e37")
       h=false;
   }     
      else{
           $("#oval").css("width","200px");
          $("#oval").delay(200).css("height","200px");
          $("#oval").css("background-color","blueviolet")
       h=true;
          
      }  
        
        
    });
           /*---------9---------*/  
    var i=true;
    $("#i").click(function(){
   if(i==true){
       $("#rectangle").css("width","300px");
        $("#rectangle").delay(200).css("transform","rotate(90deg)");
       $("#rectangle").css("background-color","#ff7e37")
       i=false;
   }     
      else{
           $("#rectangle").css("width","200px");
          $("#rectangle").delay(200).css("height","200px");
          $("#rectangle").css("background-color","crimson")
       i=true;
          
      }  
        
        
    });
    
              /*---------10---------*/  
    var j=true;
    $("#j").click(function(){
   if(j==true){
       $("#j").css("width","5%");
       $("#j").css("background-color","#ff7e37");
        $("#j").css("border-radius","100px");
       j=false;
   }     
      else{
           $("#j").css("width","20%");
          $("#j").css("background-color","darksalmon");
  $("#j").css("border-radius","0");
       j=true;
          
      }  
        
        
    });
    
    
    /*---------11---------*/  
    var k=true;
    $("#k").click(function(){
   if(k==true){
       $("#number").html('2');
      
       k=false;
   }     
      else{
          $("#number").html('1') ;
       k=true;
          
      }  
        
        
    });
    
        /*---------12---------*/  
    var l=true;
    $("#l").click(function(){
   if(l==true){
       $("#oval2").css("width","0");
       $("#oval2").css("height","0");
      
       l=false;
   }     
      else{
        $("#oval2").css("width","50%");
       $("#oval2").css("height","50%");
      
       l=true;
          
      }  
        
        
    });
    
  
});
    