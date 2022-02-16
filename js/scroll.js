var ps = {
    posicionScroll: 0,
    obj_efect: document.querySelectorAll(".obj_parallax"),
    cajaScroll: document.querySelector("#Experiencia"),
    // boxScroll: document.querySelectorAll(".box_parallax")
}

var ms = {
    inicioScroll: function(){
        document.addEventListener("scroll", ms.efectoParallax)
    },  
    efectoParallax: function(e){
        console.log(e)
        ps.posicionScroll = window.pageYOffset;
        

            if(ps.posicionScroll >  e.offsetTop){
                for(var i = 0; i < ps.obj_efect.length; i++){
                    let parallax = ps.obj_efect[i].getAttribute("parallax").split(" ");
                    // console.log("parallax", parallax)
                    if( parallax[0] == "left")
                    
                        ps.obj_efect[i].style.marginLeft = parallax[1] +"%"
                    else if(parallax[0] == "right"){
                        ps.obj_efect[i].style.marginRight = parallax[1] +"%"
                        // console.log("primero")
                    }
                }
            }else{
                for(var i = 0; i < ps.obj_efect.length; i++){
                    
                    let parallax = ps.obj_efect[i].getAttribute("parallax").split(" ");
                    // console.log("pos", ps.posicionScroll/parseInt(parallax[2]) -100)
                    // console.log("parallax", parallax)
                    if( parallax[0] == "left")
                    ps.obj_efect[i].style.marginLeft = ps.posicionScroll/parseInt(parallax[2]) -100 +"%"
                    else if(parallax[0] == "right"){
                        // console.log("segundo")
                        ps.obj_efect[i].style.marginRight = ps.posicionScroll/parseInt(parallax[2]) - 100 +"%"
                    }
                }
            }
        
    }
}

//ms.inicioScroll();