$(document).ready(function(){


    slider = 0;

    setInterval(function(){
        if(slider == 0){
            $(".firstpicone").animate({opacity:'0.1', zIndex: '1'},500)
            $(".firstpictwo").animate({zIndex: '6'})
            $(".firstpicthree").animate({zIndex: '5'})
            $(".firstpicfour").animate({zIndex: '4'})
            $(".firstpicfive").animate({zIndex: '3'})
            $(".firstpicsix").animate({zIndex: '2'})
            $(".firstpicone").animate({opacity:'1', zIndex: '1'})
            slider++;
        }else if(slider == 1){
            $(".firstpictow").animate({opacity:'0.1', zIndex: '1'},500)
            $(".firstpicthree").animate({zIndex: '6'})
            $(".firstpicfour").animate({zIndex: '5'})
            $(".firstpicfive").animate({zIndex: '4'})
            $(".firstpicsix").animate({zIndex: '3'})
            $(".firstpicone").animate({zIndex: '2'})
            $(".firstpictwo").animate({opacity:'1', zIndex: '1'})
            slider++;            
        }else if(slider == 2){
            $(".firstpicthree").animate({opacity:'0.1', zIndex: '1'},500)
            $(".firstpicfour").animate({zIndex: '6'})
            $(".firstpicfive").animate({zIndex: '5'})
            $(".firstpicsix").animate({zIndex: '4'})
            $(".firstpicone").animate({zIndex: '3'})
            $(".firstpictwo").animate({zIndex: '2'})
            $(".firstpicthree").animate({opacity:'1', zIndex: '1'})
            slider++;            
        }else if(slider == 3){
            $(".firstpicfour").animate({opacity:'0.1', zIndex: '1'},500)
            $(".firstpicfive").animate({zIndex: '6'})
            $(".firstpicsix").animate({zIndex: '5'})
            $(".firstpicone").animate({zIndex: '4'})
            $(".firstpictwo").animate({zIndex: '3'})
            $(".firstpicthree").animate({zIndex: '2'})
            $(".firstpicfour").animate({opacity:'1', zIndex: '1'})
            slider++;            
        }else if(slider == 4){
            $(".firstpicfive").animate({opacity:'0.1', zIndex: '1'},500)
            $(".firstpicsix").animate({zIndex: '6'})
            $(".firstpicone").animate({zIndex: '5'})
            $(".firstpictwo").animate({zIndex: '4'})
            $(".firstpicthree").animate({zIndex: '3'})
            $(".firstpicfour").animate({zIndex: '2'})
            $(".firstpicfive").animate({opacity:'1', zIndex: '1'})
            slider++;            
        }else if(slider == 5){
            $(".firstpicsix").animate({opacity:'0.1', zIndex: '1'},500)
            $(".firstpicone").animate({zIndex: '6'})
            $(".firstpictwo").animate({zIndex: '5'})
            $(".firstpicthree").animate({zIndex: '4'})
            $(".firstpicfour").animate({zIndex: '3'})
            $(".firstpicfive").animate({zIndex: '2'})
            $(".firstpicsix").animate({opacity:'1', zIndex: '1'})
            slider = 0;            
        }
    },3000)
})