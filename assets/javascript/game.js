var crystal = {
    crystal1:0,
    crystal2:0,
    crystal3:0,
    crystal4:0,
    }; 

    




var currentNumber = 0;
var targetNumber = Math.floor(Math.random()* 120) + 10;
var counter = 0 ;
var wincount = 0;
var lossescount = 0;




//$("#target").text(targetNumber);

////////////////////////////////////////////////////

    var getRandom = function(min, max){
        return Math.floor(Math.random() * (max) + (min));
            }

    //var randomValue = Math.floor(Math.random() * (12)) + 1;
    //console.log(randomValue);
    ///////////////////////////////////////////////////////
    var startGame= function(){
    
        //reset the curretn score
        currentNumber = 0;
        //set a new target score
        targetNumber = getRandom(19, 120);

        // set different values for each of the crystals
        crystal.crystal1     = getRandom(1,12)
        crystal.crystal2    = getRandom(1,12)
        crystal.crystal3    = getRandom(1,12)
        crystal.crystal4   = getRandom(1,12)

        $("#yourNumber").html(currentNumber);
        $("#targetNumber").html(targetNumber);

        // console.log("-------------------------")
        // console.log("Target Number:" + targetNumber);
        // console.log("crystal1: " + crystal1.value +"| crystal2: " + crystal2.value +" | crystal3:" + crystal3.value +" | crystal4:" + crystal4.value);
        // console.log("-------------------------")
        
        
        
    }

    $(".crystal-image").on("click", function() {

        var crystalId = $(this).attr("id");

        currentNumber = currentNumber + crystal[crystalId];
        $("#yourNumber").html(currentNumber);
        checkwin();
        console.log("value" + crystalId);
    })
    
///////////////////////////////////////////////////////////////
    // var addValues = function(crystal){
    
    //     currentNumber = currentNumber + crystalId
        
    //     $("#yourNumber").html(currentNumber);
        
    //     checkwin();

    //     console.log("yourNumber: " + currentNumber);
    // }
    
    // var crystalValue = ($("#crystal1").attr("data-crystalValue"));
    // crystalValue = parseInt(crystalValue);

    // counter += crystalValue;

    // alert("New score: " + counter);

    // if (counter === targerNumber){
    //     alert("you win");
    // }
    // else if (counter >= targetNumber) {
    //     alert("you lose");
    // }
    

    var checkwin = function(){
        if(currentNumber > targetNumber){
            lostcount++;
            $("#losscount").html(lostcount);
            var answer=confirm("you lost, do you wanna play again?");
            console.log(answer);

            if (answer){
                startGame();
            }
            
        }

    
        else if (yourNumber == targetNumber){
            
            wincount++;
            $("#wincount").html(wincount);
            var answer=confirm("you won");
            console.log(answer);

            if (answer){
                startGame();
            }
        }
           


    }
    

    


    // $("#crystal1").click(function () {
        
    //     addValues(crystal.crystal1);
    // });
    // $("#crystal2").click(function () {
    //     addValues(crystal.crystal2);
    // });
    // $("#crystal3").click(function () {
    //     addValues(crystal.crystal3);
    // });
    // $("#crystal4").click(function () {
    //     addValues(crystal.crystal4);
    // });


    
startGame();