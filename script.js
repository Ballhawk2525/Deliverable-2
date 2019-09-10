var eventType = prompt ("What type of event are you attending? ");
var tempFahr = prompt ("Enter temperature"); 

var result = undefined;
var question1 = undefined;
var question2 = undefined;

if (eventType === "casual") {
    question1 = "something comfy";
} else if (eventType === "semi-formal") {
    question1 = "a polo";
} else if (eventType === "formal") {
    question1 = "a suit";
}

if (tempFahr < 54) {
    question2 = "a coat";
} else if (tempFahr >= 54 && tempFahr <= 70) {
     question2 = "a jacket";
} else if (tempFahr > 70) {
     question2 = "no jacket";
} 

result = "Because it is " + tempFahr + " outside and you are going to a " + eventType + " event, you should wear " + question1 + " and " + question2 + "."; 
console.log(result)