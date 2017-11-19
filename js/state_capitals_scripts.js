

$(document).ready(function() {

    $(".state").click(function() {
        $(this).parent().children(".capital").slideToggle(200);
    });


    var tagged={};

    $("#usa p").each(function() {
        var region = $(this).data('region');
        var p = this;
        if (region) {
            region.split(', ').forEach(function(sortGeo) {
                if(tagged[sortGeo] == null) {
                    tagged[sortGeo] = [];
                }
                tagged[sortGeo].push(p);
            });
        }
    });


   $('<button />', {
       text: "All States",
        class: "active",
        click: function() {
                $(this).addClass('active'); // Set the button we clicked to active
                $(this).siblings().removeClass('active'); // Inactivate other buttons
                $("#usa .state").show();
        }
    }).appendTo("#buttons");


    $('<button />', {
        text: "Any One State",
        click: function() {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var my_num = Math.floor( (Math.random()*50)+1); // Get a random number btw 1 and 50
            console.log(my_num);
            $("#usa p").hide();   // Hide all the p elements in usa class
            $(".n" + my_num + ">p.state" ).show(); //create the .n# class by stringing the .n together with my random number and then show the <p>'s in that class
        }
    }).appendTo("#buttons");

/*    $('<button />', {
        text: "Practice 5 States",
        click: function() {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var pickStates=[];
                if pickStates.length < 5 {
                    var my_num = Math.floor( (Math.random()*50)+1); // Get a random number btw 1 and 50
                    console.log(my_num);
                        if pickStates[my_num] == null) {
                            pickStates[my_num] = [];
                        }
                        pickStates[my_num].push(my_num);
                }        

            $("#usa p").hide();   // Hide all the p elements in usa class
            $(".n" + my_num + ">p.state" ).show(); //create the .n# class by stringing the .n together with my random number and then show the <p>'s in that class
        }
    }).appendTo("#buttons");
*/

    $.each(tagged, function(sortGeo) {
       $('<button />',{
            text: sortGeo,
            click: function() {
                $(this).addClass('active'); /* Set the button we clicked to active */
                $(this).siblings().removeClass('active');
                $("#usa p").hide();
                $("#usa p").filter(tagged[sortGeo]).show();
            }
        }).appendTo("#buttons");
    });

});
