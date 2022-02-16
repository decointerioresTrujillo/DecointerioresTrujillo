var btnNext =()=>{
    var next = document.getElementById("box-next")
    var before = document.getElementById("box-before")

    next.addEventListener("click", ()=>{
        
        var slider_images = document.getElementById("slider-imagenes") 
        var img_show = parseInt(slider_images.style.left)
        if(img_show){
            
            var pos = slider_images.style.left == "-300%" ? "0%" : (img_show + (-100))+ "%";
            
            slider_images.style.left = pos;
        }
        else{
            slider_images.style.left = "-100%";
        }
    });

    before.addEventListener("click", ()=>{
        var slider_images = document.getElementById("slider-imagenes") 
        var img_show = parseInt(slider_images.style.left)
        if(img_show){
            
            var pos = slider_images.style.left == "0%" ? "300%" : (img_show + 100)+ "%";
            slider_images.style.left = pos;
        }
        else{
            slider_images.style.left = "-300%";
        }
    });
}


btnNext();