let eventType = prompt ("What type of event are you attending? ");
let tempFahr = prompt ("What is the temperature?");

if (eventType === "casual") {
    console.log ("something comfy")
} else if (eventType === "semi-formal") {
    console.log ("a polo")
} else if (eventType === "formal") {
    console.log ("a suit")
}

if (temperature < 54) {
    console.log ("a coat")
} else if (temperature > 54 && temperature < 70) {
    console.log ("a jacket")
} else if (temperature > 70) {
    console.log ("no jacket")
} 

