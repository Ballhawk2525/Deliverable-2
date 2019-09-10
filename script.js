var eventType = prompt ("What type of event are you attending? ");
var tempFahr = prompt ("Enter temperature"); 

var result = undefined;
var question1 = undefined;
var question2 = undefined;

if (eventType === "casual") {
    question1 = "something comfy";
} 

if (eventType === "semi-formal") {
    question1 = "a polo";
} 

if (eventType === "formal") {
    question1 = "a suit";
}

if (tempFahr < 54) {
    question2 = "a coat";
} 

if (tempFahr >= 54 && tempFahr <= 70) {
     question2 = "a jacket";
} 

if (tempFahr > 70) {
     question2 = "no jacket";
} 

result = 
console.log(result)