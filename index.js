//This is my first JavaScript code!
//console.log('Hello World');
//var ourArray = ["Stimpson","J","cat"];
//ourArray.push(["Happy","joy"]);

var myArray = [["John",23],["cat",2]];
myArray.push(["dog",3]);

/*Array.pop 
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);*/

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);

function testGreaterThan(val){
    if(val >= 100) {
        return "100 or Over 100";
    }

    if(val > 10){
        return "Over 10";
    }

    return " 10 or Under"
}

function testLogicalAnd(val){
    if(val <= 50 && val >= 25){
        return "Yes";
    }

    return "No";
}

function testSize(num){
    if (num < 5){
        return "Tiny";
    } else if(num < 10){
        return "Small";
    } else if(num < 15){
        return "Medium";
    } else if(num < 20){
        return "Large";
    }else {
        return "Huge";
    }
}

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey"];
function golfScore(par, strokes){

    if (stokes == 1){
        return names[0];
    } else if(strokes <= par -2){
        return names[1];
    }else if(storkes == par -1){
        return names[2];
    }else if(strokes == par){
        return names[3];
    } else if (strokes == par +1){
        return names[4];
    }else if(strokes == par + 2){
        return names[5];
    }
    return "Change me";
}

function caseInSwitch(val){
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        default:
            answer = "stuff";
            break;
    }
}

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj["shirt"];

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else {
        return "Not Found"
    }
    return "Change Me!";
}

var myArray= [];

var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}


$(function(){
 $('#panel1'). html('my panel1'); 
});
console.log(myArray);
