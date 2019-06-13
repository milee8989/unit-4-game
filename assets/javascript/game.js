var crystal = {
crystal1:
{
    name: "crystal1",
    value: 0
},
crystal2:
{
    name: "crystal2",
    value: 0
},
crystal3:
{
    name: "crystal3",
    value: 0
},
crystal4:
{
    name: "crystal4",
    value: 0
}
}; 
    




var currentNumber = 0;
var targetNumber = Math.floor(Math.random()* 120) + 10;

var wincount = 0;
var lossescount = 0;




$("#target").text(targetNumber);

////////////////////////////////////////////////////

    var getRandom = function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ///////////////////////////////////////////////////////
    var startGame= function(){
    
        //reset the curretn score
        currentNumber = 0;
        //set a new target score
        targetNumber = getRandom(19, 120);
        //set different values for each of the crystals
        crystal1.value     = getRandom(1,12)
        crystal2.value    = getRandom(1,12)
        crystal3.value      = getRandom(1,12)
        crystal4.value    = getRandom(1,12)

        $("#yourNumber").html(currentNumber);
        $("#targetNumber").html(targetNumber);

        console.log("-------------------------")
        console.log("Target Number:" + targetNumber);
        console.log("crystal1: " + crystal1.value +"| crystal2: " + crystal2.value +" | crystal3:" + crystal3.value +" | crystal4:" + crystal4.value);
        console.log("-------------------------")
        
        
        
    }

    
///////////////////////////////////////////////////////////////
    var addValues = function(crystal){
    
        currentNumber = currentNumber + crystal.value;
        
        $("#yourNumber").html(currentNumber);
        
        checkwin();

        console.log("yourNumber: " + currentNumber);
    }
    
    
    var checkwin = function(){
        if(currentNumber > targetNumber){
            alert("you lost");
            console.log("you lost");

            lostcount++;

            $("#losscount").html(lostcount);
            startGame();
        }

    
        else if (yourNumber == targetNumber){
            alert("You Won");
            wincount++;
            $("#wincount").html(wincount);
            startGame();
        }
           


    }


function newFunction() {
    $("#crystal1").click(function () {
        
        addValues(crystal.crystal1);
    });
    $("#crystal2").click(function () {
        addValues(crystal.crystal2);
    });
    $("#crystal3").click(function () {
        addValues(crystal.crystal3);
    });
    $("#crystal4").click(function () {
        addValues(crystal.crystal4);
    });
}

    
startGame();