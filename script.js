var eventType = prompt ("What type of event are you attending? ");
let tempFahr = prompt ("What is the temperature in degrees?");

var result = undefined;
var question1 = undefined;
var question2 = undefined;

if (eventType === "casual") {
    question1 = "something comfy";
} else if (eventType === "semi-formal") {
    question1 = ;"a polo";
} else if (eventType === "formal") {
    question1 = "a suit";
}

if (tempFahr < 54) {
    question2 = "a coat";
} else if (tempFahr >= 54 && temperature <= 70) {
     question2 = "a jacket";
} else if (tempFahr > 70) {
     question2 = ;"no jacket";
} 

result= "Accounting for a" + tempFahr + "day, the usual dress for a" + eventType + "event is usually" + question1 + question2;
console.log(result)