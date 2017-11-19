var int1, int2, int3;
var clickcup = 0;
var sizeclick; //create a variable to keep track of which size cup the user clicked

$(document).ready(function() {

$ ("#cup.small").animate({left: "130px"}, "slow")
$ ("#cup.medium").animate({left: "115px"}, "slow")
$ ("#cup.large").animate({left: "80px"}, "slow")

goCup();

$("#cup.small").click(function(){
console.log("SMALL was clicked.");
add();
sizeclick = ".small";
flavorTrigger();
stopCup();
$("#cup.medium").stop(true, true).css("opacity", 1 ).animate({left: "-6000px"}, "slow");
$("#cup.large").stop(true, true).css("opacity", 1 ).animate({left: "6000px"}, "slow");
$("#cup.small").stop(true, true).css("opacity", 1 ).animate({left: "550px"}, "slow");
});

$("#cup.medium").click(function(){
console.log("MEDIUM was clicked");
add();
sizeclick = ".medium";
flavorTrigger();
stopCup();
$("#cup.small").stop(true, true).css("opacity", 1 ).animate({left: "-6000px"}, "slow");
$("#cup.medium").stop(true, true).css("opacity", 1 ).animate({right: "0px"});
$("#cup.large").stop(true, true).css("opacity", 1 ).animate({left: "6000px"}, "slow");
});

$("#cup.large").click(function(){
console.log("LARGE was clicked");
add();
sizeclick = ".large";
flavorTrigger();
stopCup();
$("#cup.small").stop(true, true).css("opacity", 1 ).animate({left: "-6000px"}, "slow");
$("#cup.medium").stop(true, true).css("opacity", 1 ).animate({left: "6000px"}, "slow");
$("#cup.large").stop(true, true).css("opacity", 1 ).animate({left: "-325px"}, "slow");
});

}); //end document ready function

$(window).blur(stopCup);
$(window).focus(goCup);

function myFunction() {
    location.reload();
}

function cup_1() {
        $("#cup.small").delay(300).fadeTo(1000, 0.25).fadeTo(1000, 1.0);
}
function cup_2() {
        $("#cup.medium").delay(400).fadeTo(1000, 0.25).fadeTo(1000, 1.0);
}
function cup_3() {
        $("#cup.large").delay(500).fadeTo(1000, 0.25).fadeTo(1000, 1.0);
}

function goCup() {
	int1 = setInterval(cup_1, 1500);
	int2 = setInterval(cup_2, 1700);
	int3 = setInterval(cup_3, 1900);
}

function stopCup() {
	clearInterval(int1);
	clearInterval(int2);
	clearInterval(int3);
}

function add() {
    clickcup += 1;
}

function flavorTrigger() {
    if (clickcup == 1) {
        var flavor = Math.floor( (Math.random()*3)+1);
        console.log(flavor);
        if (flavor == 1) {
            console.log("today's flavor is strawberry");
            $(".strawberry"+sizeclick).delay(900).slideDown();
            $("p.strawberry").delay(1500).slideDown();
        }
        if (flavor == 2) {
            console.log("today's flavor is vanilla");
            $(".vanilla"+sizeclick).delay(900).slideDown();
            $("p.vanilla").delay(1500).slideDown();
        }
        if (flavor == 3) {
            console.log("today's flavor is chocolate");
            $(".chocolate"+sizeclick).delay(900).slideDown();
            $("p.chocolate").delay(1500).slideDown();
        }
        $("button").delay(2400).slideDown();
    }
}
