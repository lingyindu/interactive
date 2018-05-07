$(document).ready(function(){
    
    /*---------1---------*/
    var a= false;
    $("#a").click(function(){
        
        if (a==true) {
            $(this).css("background-color", "#FFC9FF");
            a=false;
        }
        else {
            $(this).css("background-color", "#FCF4FF");
            a=true;
        }
    });
    
    /*---------3---------*/
    var c= true;
    $("#c").click(function(){
        
        if (c==true) {
            $("#blackGrow").css("width", "150px");
            $("#blackGrow").css("height", "150px");
            $("#blackGrow").css("border-radius", "75px");
            c=false;
        }
        else {
            $("#blackGrow").css("width", "100px");
            $("#blackGrow").css("height", "100px");
            $("#blackGrow").css("border-radius", "50px");
            c=true;
        }
    });
    
    /*---------4---------*/
    var d= false;
    $("#d").click(function(){
        
        if (d==true) {
            $("#square").css("border-radius", "0px");
            d=false;
        }
        else {
            $("#square").css("border-radius", "125px");
            d=true;
        }
    });
    
    /*---------5---------*/
    var e= true;
    $("#e").click(function(){
        
        if (e==true) {
            $("#germ").css("height", "200px");
            $("#germ").css("width", "100px");
            e=false;
        }
        else {
            $("#germ").css("height", "100px");
            $("#germ").css("width", "300px");
            e=true;
        }
    });
    
    /*---------6---------*/
    var f= true;
    $("#f").click(function(){
        
        if (f==true) {
            $( "#slide" ).animate({left:"50%"}, 1000);
            f=false;
        }
        else {
            $( "#slide" ).animate({left:"0%"}, 1000);
            f=true;
        }
    });
    
    /*---------7---------*/
    var g= true;
    $("#g").click(function(){
        
        if (g==true) {
            $( "#top" ).animate({width:"100%"}, 1000);
            $( "#mid" ).delay( 400 ).animate({width:"100%"}, 1000);
            $( "#bot" ).delay( 800 ).animate({width:"100%"}, 1000);
            g=false;
        }
        else {
            $( "#top" ).delay( 800 ).animate({width:"0%"}, 1000);
            $( "#mid" ).delay( 400 ).animate({width:"0%"}, 1000);
            $( "#bot" ).animate({width:"0%"}, 1000);
            g=true;
        }
    });
    
    /*---------8---------*/
    var h= true;
    var xxx=1;
    $("#h").click(function(){
        if (x==1) {
            alert("YOU'VE CLICK THE BIG PINK DOT " + xxx + " TIME");
            xxx++;
        }
        
        else {
            alert("YOU'VE CLICK THE BIG PINK DOT " + xxx + " TIMES");
            xxx++;
        }
        
    });
    
    /*---------9---------*/
    var i= true;
    $("#i").click(function(){
        if (i==true) {
            $( "body" ).css("-webkit-filter", "invert(100%)");
            $( "body" ).css("filter", "invert(100%)");
            $( "body" ).css("background-color", "black");
            $( "#i" ).css("-webkit-filter", "invert(100%)");
            $( "#i" ).css("filter", "invert(100%)");
            i=false;
        }
        
        else {
            $( "body" ).css("-webkit-filter", "invert(0)");
            $( "body" ).css("filter", "invert(0)");
            $( "body" ).css("background-color", "white");
            $( "#i" ).css("-webkit-filter", "invert(0)");
            $( "#i" ).css("filter", "invert(0)");
            i=true;
        }
        
    });
    
    /*---------10---------*/
    var j= 0;
    $("#j").click(function(){
        j++;
        $("#counter").html(j);
        
    });
    
    /*---------11---------*/
    var k= true;
    $("#blue").click(function(){
        $( "#red" ).animate({opacity:"0"}, 600);
        $( "#blue" ).animate({opacity:"0"}, 600);
        $( "#notMatrix" ).delay( 600 ).animate({opacity:".3"}, 1000);
        
        
    });
    
    $("#red").click(function(){
        $( "#red" ).animate({opacity:"0"}, 600);
        $( "#blue" ).animate({opacity:"0"}, 600);
        $( "#matrix" ).delay( 600 ).animate({opacity:".3"}, 1000);
        
        
    });
    
    /*---------13---------*/
    var m= true;
    $("#m").click(function(){
        if (m==true) {
            $( "body" ).css("background-color", "#454B52");
            $( ".cell" ).css("opacity", ".1");
            $( "#m" ).css("opacity", "1");
            $( "#ca" ).css("opacity", "1");
            
            m=false;
        }
        
        else {
            $( "body" ).css("background-color", "white");
            $( ".cell" ).css("opacity", "1");
            
            m=true;
        }
    });
    
    /*---------14---------*/
    var n= true;
    $("#n").click(function(){
        if (n==true) {
            $( "#invade" ).animate({width: "100%"}, 1000);
            $( "#invade" ).animate({height: "750px"}, 1300);
   
    
            n=false;
        }
        else {
        
            $( "#invade" ).animate({height: "100px"}, 1300);
            $( "#invade" ).animate({width: "100px"}, 1000);
            
            n=true;
        }
    });
    
    /*---------15---------*/
    $("#o").click(function(){ 
            var ad = Math.round(Math.random() * 255);
            var bd = Math.round(Math.random() * 255);
            var cd = Math.round(Math.random() * 255);
            $( "#o" ).css("background-color", "RGB(" + ad + "," + bd + "," + cd + ")");
    });
    
    /*---------16---------*/
    var p= true;
    $("#p").click(function(){
            $( "#drop" ).css("top", "50%");
            $( "#drop" ).animate({top: "120%"}, 1300);
    });
    
    /*---------17---------*/
    var q= true;
    $("#q").click(function(){
        if (q==true) {
            $( "#lock" ).css("position", "fixed");
            $( "#lock" ).css("display", "inherit");
            
            q=false;
        }
        else {

            $( "#lock" ).css("display", "none");

            q=true;
            
        }   
    });
    
    /*---------18---------*/
    var r= true;
    $("#r").click(function(){
        if (r==true) {
            $( "#spin" ).css( "-webkit-transform", "rotate(90deg)");
            $( "#spin" ).css( "-ms-transform", "rotate(180deg)");
            $( "#spin" ).css( "transform", "rotate(180deg)");
            $( "#spin" ).css( "top", "46%");
            $( "#spin" ).css( "left", "-50%");    
            r=false;
        }
        else {
            $( "#spin" ).css( '-webkit-transform', "rotate(0deg);");
            $( "#spin" ).css( '-ms-transform', "rotate(0deg);");
            $( "#spin" ).css( 'transform', "rotate(0deg)");
            r=true;
        }    
    });
    
    /*---------19---------*/
    var s= true;
    $("#s").click(function(){
        if (s==true) {
                $( "#cover" ).css( 'position', 'fixed');
                $( "#cover" ).css( 'z-index', '10');
            s=false;
        }
        else {
                $( "#cover" ).css( 'position', 'absolute');
                $( "#cover" ).css( 'z-index', '0');
            s=true;
        }    
    });
    
    /*---------20---------*/
    var t= true;
    $("#t").click(function(){
        if (t==true) {
            
            $("#yes").html('NO');
            t=false;
        }
        else {
            $("#yes").html('YES');
            t=true;
        }    
    });
    
    /*---------21---------*/
    var u= true;
    $("#u").click(function(){
        if (u==true) {

            $( "body" ).css( "-webkit-filter", "hue-rotate(90deg)");
            $( "body" ).css( "filter", "hue-rotate(90deg)");
            
            
            u=false;
        }
        else {
            $( "body" ).css( "-webkit-filter", "hue-rotate(0deg)");
            $( "body" ).css( "filter", "hue-rotate(0deg)");
            
            u=true;
        }    
    });
    
    /*---------22---------*/
    var v= true;
    $("#v").click(function(){
        if (v==true) {
                $( "#c" ).css( "display", "none");
            v=false;
        }
        else {
                $( "#c" ).css( "display", "inherit");
            v=true;
        }    
    });
    
    /*---------23---------*/
    var w= true;
    $("#w").click(function wart (){
        if (w==true) {
            $( "#w" ).animate({width:"0%"}, 1000);
            $( "#ww" ).animate({width:"33.33%"}, 1000);
            
            w=false;
        }
        else {
            $( "#w" ).animate({width:"33.33%"}, 1000);
            $( "#ww" ).animate({width:"0%"}, 1000);
            
            w=true;
        }   
    });
    
    $("#ww").click(function wart (){
        if (w==true) {
            $( "#w" ).animate({width:"0%"}, 1000);
            $( "#ww" ).animate({width:"33.33%"}, 1000);
            
            w=false;
        }
        else {
            $( "#w" ).animate({width:"33.33%"}, 1000);
            $( "#ww" ).animate({width:"0%"}, 1000);
            
            w=true;
        }   
    });
    
    /*---------24---------*/
    var x= true;
    $("#x").click(function(){
        $( "body" ).animate({scrollTop: $("#a").offset().top}, 2000);
    });
    
    /*---------25---------*/
    var y= true;
    $("#y").click(function(){
        location.reload();
    });
    
    /*---------26---------*/
    var z= true;
    $("#z").click(function(){
        if (z==true) {
                $( "#side" ).animate({left:"100%"}, 1200);
            z=false;
        }
        else {
                $( "#side" ).animate({left:"0%"}, 1200);
            z=true;
        }    
    });
    
    /*---------27---------*/
    $("#aa").click(function(){
        var aa= Math.round(Math.random() * 10);
        if (aa==3) {
            alert("WINNER")
        }
        else {
            alert("YOU LOST!!!")
        }
    });
    
    /*---------28---------*/
    var ba= true;
    $("#ba").click(function(){
        if (ba==true) {
            $( "body" ).css( "cursor", "help");
    
            ba=false;
        }
        else {
            $( "body" ).css( "cursor", "inherit");

            ba=true;
        }  
    });
    
    /*---------29---------*/
    var ca= 0;
    $("#ca").click(function(){
        $( "#ca" ).append( "<p class=\"star\" id=" + ca +">&#9733</p>").fadeIn(2000);
        $( "#" + ca ).css( "top", (Math.random()*100) + "%");
        $( "#" + ca ).css( "left", (Math.random()*100) + "%");
        
        ca++;
    });
    
    $("#star").click(function(){
        $( ".star").remove();
        
        ca++;
    });
    
    /*---------30---------*/
    var da= true;
    $("#da").click(function(){
        if (da==true) {
            $( "#space" ).css( "letter-spacing", "37px");
            $( "#space" ).css( "left", "54%");
    
            da=false;
        }
        else {
            $( "#space" ).css( "letter-spacing", "-2px");
            $( "#space" ).css( "left", "50%");

            da=true;
        } 
        
    });
    
    /*---------31---------*/
    var ea= true;
    $("#ea").click(function(){
        if (ea==true) {
            $( "#follow" ).css( "position", "fixed");
            $( "#ballGame" ).css( "position", "fixed");
            ea=false;
        }
        
    });

    $('#follow').click(function() {
            $( "#ballGame" ).css( "position", "absolute");
            $( "#follow" ).css( "position", "absolute");
            
            $( "#follow" ).css( "left", "50%");
            $( "#follow" ).css( "top", "50%");
        
    });
    
    $('body').click(function(){
        if( $("#follow").css('position') == 'fixed') {
                var xpos = ((event.clientX)/($(document).width())) *100;
                var ypos = ((event.clientY)/(window.innerHeight)) *100;
                $( "#follow" ).css( "left", xpos +"%");
                $( "#follow" ).css( "top", ypos + "%");
            
        }
    });

    
    /*---------32---------*/
    var fa= 0;
    $("#fa").click(function(){
        if (fa==0) {
            $( "#green" ).css( "width", "700px");
            $( "#green" ).css( "height", "700px");
            $( "#green" ).css( "border-radius", "500px");
            $( "#gatsby" ).animate({opacity: "1"}, 500); 
            fa++;
        }
        else if (fa==1) {
            $( "#gatsby" ).html( "the orgastic future that year by year recedes before us.");
            fa++;
        }
        else if (fa==2) {
            $( "#gatsby" ).html( "It eluded us then, but that's no matter -");
            fa++;
        }
        else if (fa==3) {
            $( "#gatsby" ).html( "to-morrow we will run faster, stretch out our arms farther. . . . .");
            fa++;
        }
        else if (fa==4) {
            $( "#gatsby" ).html( "So we beat on, ");
            fa++;
        }
        else if (fa==5) {
            $( "#gatsby" ).html( "boats against the current,");
            fa++;
        }
        else if (fa==6) {
            $( "#gatsby" ).html( "borne back ceaselessly into the past.");
            fa++;
        }
        else if (fa==7) {
            $( "#gatsby" ).animate({opacity: "0"}, 500);
            fa++;
        }
        else if (fa==8) {
            $( "#gatsby" ).html( "Gatsby believed in the green light");
            $( "#green" ).delay(1000).css( "width", "50px");
            $( "#green" ).delay(1000).css( "height", "50px");

            fa=0;
        }
        
    });
    
    /*---------33---------*/
    var ga= true;
    var ttt;
    $("#ga").click(function(){
        if (ga) {
            ttt=500;
            ga=false;
        }else {
            ttt=0;
            ga=true;
        }
        
        setInterval(function () { 
            $("#ga").css("background-color", function () {
                this.switch = !this.switch
                return this.switch ? "#90929E" : ""
            });  
        }, ttt)
            
    });
    /*---------34---------*/
    var ha= true;
    $("#ha").click(function(){
        
        if (ha==true) {
            $( this ).css("width","100%");
            $( this ).css("height","500px");
            $("#yess").css("font-size", "50px");
            //code
            ha=false;
        }
        
        else {
            
            $( this ).css("width","33.33%");
            $( this ).css("height","250px");
            
            ha=true;

        }    
    });
    
    /*---------35---------*/
    var ia= true;
    $("#ia").click(function(){
        window.open("index.html");
    });
    
    /*---------36---------*/
    var ja= true;
    $("#ja").click(function(){
        if (ja==true) {
            $( "#sun" ).css("top","0%");
            $("#ja").css("background-color", "#68CAF7");
            $("#land").css("background-color", "#3EBD88");
            
            ja=false;
        }
        else {
            $( "#sun" ).css("top","100%");
            $("#ja").css("background-color", "#03192B");
            $("#land").css("background-color", "#0B423C");
            
            ja=true;
        }   
    });
    
    /*---------37---------*/
    var ka= true;
    var sw=true;
    $("#ka").click(function(){
        if (ka==true) {
            $( "#tdoor" ).animate({height:"0%"}, 1000);
            $( "#bdoor" ).animate({height:"0%"}, 1000);
            
            ka=false;
        }
        else {
            if (sw==true) {
                $( "#tdoor" ).animate({height:"100%"}, 1000);
                sw=false;
            }
            else {
                $( "#tdoor" ).animate({height:"50%"}, 1000);
                $( "#bdoor" ).animate({height:"50%"}, 1000);
                sw=true;
            }
            ka=true;
        }   
    });
    
    /*---------38---------*/
    var la=true;
    var rl= 120;
    $("#la").click(function(){
        if (la==true) {
            if (Math.random()>.5) {
                rl=120;
            }
            else {
                rl=-20;
            }
            $( "#fadeR" ).css("left", rl +"%");
            $( "#fadeR" ).css("opacity","0");
                
            
            la=false;
        }
        else {
            
            $( "#fadeR" ).css("left","50%");
            $( "#fadeR" ).css("opacity","1");
          
            la=true;
        }   
    });
    
    /*---------39---------*/
    
    var ma=true;
    $("#ma").click(function(){
        $( ".cell" ).animate({"height":"220"},800);
        $( ".cell" ).delay(1200).animate({"height":"250"},800);
        ma=false;
        
    });

    
    /*var ma=true;
    $("#ma").click(function(){
        if (ma==true) {
           
            $( ".cell" ).animate({"height":"220"},800);
            ma=false;
        }
        else {
            $( ".cell" ).animate({"height":"250"},800);
            ma=false;      
        }
        
    });
    */
    
    /*---------40---------*/
    var na= 0;
    $("#na").click(function(){
        
        var rand =(Math.round(Math.random() * 10));
        $( "#na" ).append( "<p class=\"numby\" id=\"" + "numby" + na +"\">"+ rand + "</p>");
        $( "#number" ).append( rand );
        $( "#numby" + na ).css( "top", (Math.random()*40) + "%");
        $( "#numby" + na ).css( "left", (Math.random()*100) + "%");
        $( "#numby" + na ).css( "font-size", (Math.random()*200) + "px");
        
        na++;
    });
    
    /*---------41---------*/
    var oa= true;
    $("#oa").click(function(){ 
        if (oa==true) {
            $( ".numby").css( "display", "none");
            oa=false;
        }
        else {
            $( ".numby").css( "display", "inherit");
            oa=true;      
        }
       
    });
    
    /*---------42---------*/
    var pa= true;
    $("#pa").click(function(){ 
        if (pa==true) {
            $( "#4twen").html( "420");
            pa=false;
        }
        else {
            $( "#4twen").html( "42");
            pa=true;  
        }
       
    });
    
    /*---------43---------*/
    var qa= true;
    $("#qa").click(function(){ 
        if (qa==true) {
            $( "#erection").css( "height", "2000px");
            qa=false;
        }
        else {
            $( "#erection").css( "height", "50%");
            qa=true;      
        }
       
    });
    
    /*---------44---------*/
    var ra= true;
    $("#ra").click(function(){
        if (ra==true) {
            $( "body" ).css( "-webkit-filter", "grayscale(100%)");
            $( "body" ).css( "filter", "grayscale(100%)");
            
            ra=false;
        }
        else {
            $( "body" ).css( "-webkit-filter", "grayscale(0%)");
            $( "body" ).css( "filter", "grayscale(0%)");
            
            ra=true;
        }    
    });
    
    /*---------45---------*/
    var sa= true;
    $("#sa").click(function(){ 
        if (sa==true) {
            $( "#rect" ).css( "-webkit-transform", "rotate(135deg)");
            $( "#rect" ).css( "-ms-transform", "rotate(135deg)");
            $( "#rect" ).css( "transform", "rotate(135deg)");
            $( "#rect" ).css( "top", "30%");
            $( "#rect" ).css( "left", "40%");    
            sa=false;
        }
        else {
            $( "#rect" ).css( "-webkit-transform", "rotate(0deg)");
            $( "#rect" ).css( "-ms-transform", "rotate(0deg)");
            $( "#rect" ).css( "transform", "rotate(0deg)");
        
            sa=true;      
        }
    });
    
    /*---------46---------*/
    var ta= true;
    $("#ta").click(function(){ 
        if (ta==true) {
            $( "#pass1" ).animate({"width":"230%"}, 1200);
            $( "#pass2" ).delay( 1200 ).animate({"width":"140%"}, 1000);
            ta=false;
        }
        else {
            $( "#pass2" ).animate({"width":"0%"}, 1000);
            $( "#pass1" ).delay( 1200 ).animate({"width":"100%"}, 1200);
            ta=true;      
        }
    });
    
    /*---------48---------*/
    $("#va").click(function(){ 
        if (ta==true) {
            $( "#pass1" ).animate({"width":"230%"}, 1200);
            $( "#pass2" ).delay( 1200 ).animate({"width":"140%"}, 1000);
            ta=false;
        }
        else {
            $( "#pass2" ).animate({"width":"0%"}, 1000);
            $( "#pass1" ).delay( 1200 ).animate({"width":"100%"}, 1200);
            ta=true;      
        }
    });
    
    /*---------47---------*/
    var ua= true;
    var rll=70;
    $("#ua").click(function(){ 
        if (ua==true) {
            if (Math.random()>.5) {
                rll=70;
            }
            else {
                rll=-70;
            }
            $( "#tilt" ).css("-ms-transform", "skewX(" + rll + "deg)");
            $( "#tilt" ).css("-webkit-transform", "skewX(" + rll + "deg)");
            $( "#tilt" ).css("transform", "skewX(" + rll + "deg)");
            $( "#tilt" ).css( "top", "10%");
            $( "#tilt" ).css( "left", "30%");    
            ua=false;
        }
        else {
            $( "#tilt" ).css("-ms-transform", "skewX(0deg)");
            $( "#tilt" ).css("-webkit-transform", "skewX(0deg)");
            $( "#tilt" ).css("transform", "skewX(0deg)");
            ua=true;      
        }
    });
    
    /*---------49---------*/
    var wa= true;
    $("#wa").click(function(){
        if (wa==true) {
            $( "#font" ).css( "font-family", "sans-serif");
        
            wa=false;
        }
        else {
            $( "#font" ).css( "font-family", "Helvetica");
            
            wa=true;
        }    
    });
    
    /*---------50---------*/
    var xa= true;
    $("#xa").click(function(){
        if (xa==true) {
            $( "iframe" ).css( "display", "inherit");
            $( "#exit" ).html( "&#9746");
            $( "#exit" ).addClass( "exit");
            $( "#exit" ).addClass( "exit");
        
            xa=false;
        }
        else {
            $( "iframe" ).css( "display", "none");
            $( "#exit" ).removeClass( "exit");
            $( "#exit" ).html( "50");
            xa=true;
        }    
    });
    
    /*---------51---------*/
    var ya= true;
    $("#ya").click(function(){
        if (ya==true) {
            $( "body" ).css("cursor", "crosshair");
        
            ya=false;
        }
        else {
            $( "body" ).css( "cursor", "inherit");
            
            ya=true;
        }    
    });
    
    /*---------52---------*/
    var za= true;
    $("#za").click(function(){
        $( "body" ).animate({scrollTop: $("#fb").offset().top}, 2000);
  
    });
    
    /*---------53---------*/
    var ab= true;
    var ddd=0;
    $("#ab").click(function(){
        while (ddd<4) {
            $("#yess").delay(4000).append("S");
            ddd++;
        }
        ddd=0;
  
    });
    
    /*---------54---------*/
    var bb=true;
    $("#bb").click(function(){
        $( ".cell" ).animate({"width":"0"},800);
        $( ".cell" ).delay(1200).animate({"width":"33.33%"},800);

    });
    
    /*---------55---------*/
    var cb= true;
    $("#cb").click(function(){
        if (cb==true) {
            $( "#halfer" ).css("position", "fixed");
            $( "#halfer" ).css("z-index", "8");
        
            cb=false;
        }
        else {
            $( "#halfer" ).css("position", "absolute");
            $( "#halfer" ).css("z-index", "0");
            
            cb=true;
        }    
    });
    
    /*---------56---------*/
    var db= true;
    $("#db").click(function(){
        if (db==true) {
            $( "#halfd" ).css("position", "fixed");
            $( "#halfd" ).css("z-index", "8");
            $( "#halfd" ).css("opacity", ".7");
            
            $( "#halfdd" ).css("position", "fixed");
            $( "#halfdd" ).css("z-index", "8");
            $( "#halfdd" ).css("opacity", ".7");

            db=false;
        } 
    });
    
     $("#halfd").click(function(){

        if (db==false) {
            $( "#halfd" ).css("position", "absolute");
            $( "#halfd" ).css("z-index", "0");
            $( "#halfd" ).css("opacity", "1");
        }    
    });
     
    $("#halfdd").click(function(){
        if (db==false) {
            $( "#halfdd" ).css("position", "absolute");
            $( "#halfdd" ).css("z-index", "0");
            $( "#halfdd" ).css("opacity", "1");

        }    
    });
    
    /*---------57---------*/
    var eb= true;
    $("#eb").click(function(){
        if (eb==true) {
            $( this ).addClass("drop");        
            eb=false;
        }
        else {
        
            $( this ).removeClass("drop");        
            eb=true;
        }    
    });
    
    /*---------58---------*/
    var fb= true;
    $("#fb").click(function(){
        if (fb==true) {
            $( ".num" ).css("color", "white");

            fb=false;
        }
        else {
            $( ".num" ).css("color", "black");

            fb=true;
        }    
    });
    
    /*---------59---------*/
    var gb=true;
    $("#gb").click(function(){
        if (gb==true) {
            $( "#fiftn").html( "1959");
            gb=false;
        }
        else {
            $( "#fiftn").html( "59");
            gb=true;  
        }
    });
    
    /*---------60---------*/
    var hb=true;
    $("#hb").click(function(){
        $( ".cell" ).animate({"opacity":"0"},600);
        $( ".cell" ).delay(800).animate({"opacity":"1"},600);

    });
    
    /*---------61---------*/
    var ib=true;
    $("#ib").click(function(){
        $( ".cell" ).animate({"height":"500px"},800);
        $( ".cell" ).delay(800).animate({"height":"250px"},800);
    });
    
    /*---------62---------*/
    var jb= true;
    $("#jb").click(function(){
        if (jb==true) {
            $( "#triangle" ).css("display", "none");
            $( "#squr" ).css("display", "inherit");
       
            

            jb=false;
        }
        else {
            $( "#triangle" ).css("display", "inherit");
            $( "#squr" ).css("display", "none");
            
            jb=true;
        }    
    });
    
    /*---------63---------*/
    var kb= 0;
    $("#kb").click(function(){
        if (kb==0) {
            $(this).css("background-color", "#FFF07F");
            kb++;
        }
        
        else if (kb==1) {
            $(this).css("background-color", "#C1FF7F");
            kb++;
        }
        
        else if (kb==2) {
            $(this).css("background-color", "#7FFFBD");
            kb++;
        }
        
        else if (kb==3) {
            $(this).css("background-color", "#7FD0FF");
            kb++;
        }
        
        else if (kb==4) {
            $(this).css("background-color", "#B0A1FF");
            kb++;
        }
        
        else if (kb==5) {
            $(this).css("background-color", "#F6A1FF");
            kb++;
        }
        
        else if (kb==6) {
            $(this).css("background-color", "#FFA1A1");
            kb++;
        }
        
        else {
            $(this).css("background-color", "#FFA963");
            kb=0;
        }
    });
    
    /*---------65---------*/
    var mb= true;
    $("#mb").click(function(){
        if (mb==true) {
            $( "#skew" ).addClass("skewd");
               
            mb=false;
        }
        else {
            $( "#skew" ).removeClass("skewd");
            mb=true;
        }    
    });
    
    /*---------66---------*/
    var nb= true;
    $("#nb").click(function(){
        if (nb==true) {
            $( "#strch" ).addClass("wrek");
               
            nb=false;
        }
        else {
            $( "#strch" ).removeClass("wrek");
            nb=true;
        }    
    });
    
    /*---------67---------*/
    var ob= true;
    $("#ob").click(function(){
        if (ob==true) {
            $( "#toggle" ).addClass("none");
            $( "#toggle2" ).removeClass("none");
               
            ob=false;
        }
        else {
            $( "#toggle2" ).addClass("none");
            $( "#toggle" ).removeClass("none");

            ob=true;
        }    
    });
    
    /*---------68---------*/

    $("#pb").click(function(){
        if (ob==true) {
            $( "#toggle" ).addClass("none");
            $( "#toggle2" ).removeClass("none");
               
            ob=false;
        }
        else {
            $( "#toggle2" ).addClass("none");
            $( "#toggle" ).removeClass("none");

            ob=true;
        }    
    });
    
    /*---------69---------*/
    var qb= true;
    $("#qb").click(function(){
        if (qb==true) {
            $( "body" ).addClass("blur");
               
            qb=false;
        }
        else {
            $( "body" ).removeClass("blur");

            qb=true;
        }    
    });
    
    /*---------70---------*/
    var rb= 0;
    $("#rb").click(function(){

        $( "#add" ).css( "top", (Math.random()*100) + "%");
        $( "#add" ).css( "left", (Math.random()*100) + "%");
        
        rb++;
    });
    
    /*---------71---------*/
    var sb= 1;
    $("#sb").click(function(){
        $( "#sb" ).append( "<div class=\"circle\" id=\"add" + sb +"\"></div>");
        $( "#add" + sb ).css( "top", (Math.random()*100) + "%");
        $( "#add" + sb ).css( "left", (Math.random()*100) + "%");
        
        if (sb%2==1) {
            $( "#add" + sb ).css( "background-color", "red");
        }
        else {
            $( "#add" + sb ).css( "background-color", "blue");
        }
        
        sb++;
    });
    
    /*---------72---------*/
    var tb= 0;
    $("#tb").click(function(){

        $( "#addd" ).css( "top", (Math.random()*100) + "%");
        $( "#addd" ).css( "left", (Math.random()*100) + "%");
        
        rb++;
        
        if (tb%2==1) {
            $( "#addd" ).css( "background-color", "red");
            $( "#tb" ).css( "background-color", "blue");
        }
        else {
            $( "#addd" ).css( "background-color", "blue");
            $( "#tb" ).css( "background-color", "red");
        }
        
        tb++;
    });
    
    
    /*---------73---------*/
    var ub=true;
    $("#ub").click(function(){
        if (ub==true) {
            $( ".dot" ).addClass("marginal");
    
               
            ub=false;
        }
        else {
            $( ".dot" ).removeClass("marginal");

            ub=true;
        }    
    });
    
    /*---------74---------*/
    var vb=true;
    $("#vb").click(function(){
        if (vb==true) {
            $( ".dot" ).addClass("collapd");
    
               
            vb=false;
        }
        else {
            $( ".dot" ).removeClass("collapd");

            vb=true;
        }    
    });
    
    /*---------75---------*/
    var wb=true;
    $("#wb").click(function(){
         if (wb==true) {
            $( ".tt" ).addClass("swtch");
            $( ".t" ).addClass("swtchr");
    
               
            wb=false;
        }
        else {
            $( ".tt" ).removeClass("swtch");
            $( ".t" ).removeClass("swtchr");
            wb=true;
        }    
    });
    
    /*---------76---------*/
    var xb= 0;
    $("#xb").click(function(){
        $( this ).append( "<marquee class=\"moveIt\" id=\"marq" + xb +"\">move</marquee>");
        xb++;
      
    });
    
    /*---------77---------*/
    var yb= 0;
    $("#yb").click(function(){
        $( this ).append( "<marquee class=\"moveIt\" id=\"marq" + yb +"\">I</marquee>");
        yb++;
      
    });
    
    /*---------78---------*/
    $("#zb").click(function(){
        $( "#vibr" ).delay(0).animate({"left":"51%"},10);
        $( "#vibr" ).delay(20).animate({"left":"49%"},10);
        $( "#vibr" ).delay(30).animate({"left":"51%"},10);
        $( "#vibr" ).delay(40).animate({"left":"49%"},10);
        $( "#vibr" ).delay(50).animate({"left":"50%"},10);

    });
    
    /*---------79---------*/
    var ac= true;

    $("#ac").click(function(){
        if (ac==true) {
            $( "#bounce" ).css("top","25%");
            $( "#bounce" ).css("background-color","red");
            $( "#bounce1" ).css("top","75%");
            $( "#bounce1" ).css("background-color","blue");
            
            ac=false;
        }
        else {
            $( "#bounce" ).css("top","75%");
            $( "#bounce" ).css("background-color","blue");
            $( "#bounce1" ).css("top","25%");
            $( "#bounce1" ).css("background-color","red");
            
            ac=true;
        }
    });
    
    /*---------80---------*/
    var bc= 80;
    $(function(){
        $( "#drug" ).draggable();
    });
    
    /*---------81---------*/
    var cc= 0;
    $("#cc").click(function(){
        $( "#cc" ).append( "<div class=\"circle\" id=\"trip" + cc +"\"></div>");
        $( "#trip" + cc ).css( "width", 120 + (cc*20) + "px");
        $( "#trip" + cc ).css( "height", 120 + (cc*20) + "px");
        $( "#trip" + cc ).css( "z-index", "-" + cc -1);
        $( "#trip" + cc ).css( "border-radius", 120 + (cc*20));
        
        if (cc%2==1) {
            $( "#trip" + cc ).css( "background-color", "black");
        }
        else {
            $( "#trip" + cc ).css( "background-color", "gray");
        }
        
        cc++;
    });
    
    /*---------82---------*/
    var dc= 0;
    var dcc=true;
    $("#dc").click(function(){
        dc=0;
        if (dcc==true) {
            while (dc<26) {
                create();
                dc++;
            }  
            dcc=false;
        }
        else {
            $( "#dc" ).html( "<p class=\"num\">82</p>");
            dcc=true;
        }    
    });
    
    function create() {
        $( "#dc" ) .append( "<div class=\"circle\" id=\"tripp" + dc +"\"></div>");
        $( "#tripp" + dc ).css( "width", 100 + (dc*20) + "px");
        $( "#tripp" + dc ).css( "height", 100 + (dc*20) + "px");
        $( "#tripp" + dc ).css( "z-index", "-" + dc -1);
        $( "#tripp" + dc ).css( "border-radius", 120 + (dc*20));
        

        if (dc%2==0) {
            $( "#tripp" + dc ).css( "background-color", "black");
        }
        else {
            $( "#tripp" + dc ).css( "background-color", "gray");
        }
    }
    
    /*---------83---------*/
    var ec= true;
    $("#ec").click(function(){
        if (ec==true) {
            $( ".cell" ).append( "<div class=\"circled every\"></div>");
            ec=false;
        }
        else {
            $( ".every" ).remove();
            ec=true;
        }    
    });
    
    /*---------84---------*/
    var fc= 0;
    var fcc= 0;
    $("#fc").click(function(){
        $( "#broke" ).html( "fuck you...");
        
    });
    
    /*---------85---------*/
    var gc= true;
    $("#gc").click(function(){
        
        if (gc==true) {
            $( "#breach" ).css( "width", "200%" );
            gc=false;
        }
        else {
            $( "#breach" ).css( "width", "50%" );
            gc=true;
        }    
        
    });

    /*---------86---------*/
    var hc= 2;
    $("#hc").click(function(){
        hc=hc*2;
        $("#timesTwo").html(hc);
        
    });
    
    /*---------87---------*/
    var ic= 2;
    $("#ic").click(function(){
        window.print();
        
    });
    
    /*---------88---------*/
    var jc= 2;
    $("#jc").click(function(){
        window.open();
        
    });
    
    /*---------89---------*/
    var kc= true;
    $("#kc").click(function(){
        if (kc==true) {
            $( ".cell" ).append( "<div class=\"full raid\"></div>");
            kc=false;
        }
        else {
            $( ".raid" ).remove();
            kc=true;
        }    
    });
    
    /*---------90---------*/
    var lc= true;
    $("#lc").click(function(){
        if (lc==true) {
            $( "body" ).animate({"max-width":"300px"},600);
            lc=false;
        }
        else {
            $( "body" ).animate({"max-width":"2200px"},600);
            lc=true;
        }    
    });
    
    /*---------91---------*/

    $(".dott").click(function(){
        var id = $(this).attr('id');
        $( '.dott').css( "background-color", "blue" );
  
    });
    
    /*---------92---------*/

    $("#nc").click(function(){
        var person = prompt("Please enter your name", "Hanahan");
        $( '#screenX').html( person + "'s button <3" );
  
    });
    
    /*---------93---------*/
    $("#oc").click(function(){
        $( this ).delay(6000).animate({"width":"000px"},600);
    });
    
    /*---------93---------*/
    $("#vc").click(function(){
        while (true) {
            
        }
    });
    

    
});