
$(document).ready(function(){
   
    $(".selectType").change(function(){
    
        if ( $(this).val() === "Plate"){
            $(".selectWidth").empty();
                      
            $(".selectWidth").append("<option value='5'>5 inch</option>");
            $(".selectWidth").append("<option value='6'>6 inch</option>");
            $(".selectWidth").append("<option value='8'>8 inch</option>");
            $(".selectWidth").append("<option value='12'>12 inch</option>");

            $("#thick").removeClass("is-hidden");
            $("#thick").addClass("is-visible");
            $(".selectThick").empty();
            $(".selectThick").append("<option value='.25'> 1/4 inch</option");
            $(".selectThick").append("<option value='.5'> 1/2 inch</option");
            $(".selectThick").append("<option value='.75'> 3/4 inch</option");

        }
        else {
            $(".selectWidth").empty();
           
            $(".selectWidth").append("<option value='3'>3 inch</option>");
            $(".selectWidth").append("<option value='4'>4 inch</option>");
            $(".selectWidth").append("<option value='6'>6 inch</option>");
        }
    
    
    })
    
    function pickUp(){
        //load new page with map and  item location
        //send email saying selections were used
    }
    
    function dropOff(){
        //load new page with map and location to store material
        //send email saying selections were delivered and where
    }
    $(".pickup").click(pickUp);
    $(".dropoff").click(dropOff);
    
    
    })
    