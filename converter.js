let outputArea = document.querySelector('.output');
let inputType = document.querySelector('#inputType');


// Internal function needed for rounding off
function round(value) {
    return Math.round((value + Number.EPSILON) * 10**4) / 10**4; 
}


// Converter Math
class Converter
{
    // Returns 2D Array of Keys and Values for Each Field

    static kilogramsToAll(kg) {
        return [
            ["Grams", round(kg * 1000)],
            ["Pounds", round(kg * 2.20462)],
            ["Ounces", round(kg * 35.274)]
        ]
    }
    
    static gramsToAll(grams) {
        return [
            ["Kilograms", round(grams / 1000)],
            ["Pounds", round(grams * 0.00220462)],
            ["Ounces", round(grams * 0.0352739200000000003)]
        ]
    }

    static poundsToAll(pounds) {
        return [
            ["Ounces", round(pounds * 16)],
            ["Kilograms", round(pounds * 0.453592)],
            ["Grams", round(pounds * 453.5920000001679)]
        ]
    }

    static ouncesToAll(ounces) {
        return [
            ["Pounds", round(ounces / 16)],
            ["Kilograms", round(ounces / 35.274)],
            ["Grams", round(ounces * 28.3495)]
        ]
    }
}


// Update All Values Based on Input 
function updateValues() {
    let input = document.querySelector('#weight').value;

    switch(inputType.value) {
        case "kilograms": updateOutput(Converter.kilogramsToAll(input));   
            break;
        case "grams": updateOutput(Converter.gramsToAll(input));
            break;
        case "pounds": updateOutput(Converter.poundsToAll(input));
            break;  
        case "ounces": updateOutput(Converter.ouncesToAll(input));
            break;
        
    }
    
}

// Reflects effect of changed values on the interface
function updateOutput(values) {
    outputArea.style.visibility = 'visible';

    document.querySelector('#firstOutputName').innerHTML = values[0][0];
    document.querySelector('#firstOutputValue').innerHTML = values[0][1];

    document.querySelector('#secondOutputName').innerHTML = values[1][0];
    document.querySelector('#secondOutputValue').innerHTML = values[1][1];

    document.querySelector('#thirdOutputName').innerHTML = values[2][0];
    document.querySelector('#thirdOutputValue').innerHTML = values[2][1];

}

// Event Listener for Input Type
inputType.addEventListener('change', (event) => {
    if (document.querySelector('#weight').value != 0) 
        updateValues()
});

// Event Listener for Weight Value
document.querySelector('#weight').addEventListener('input', (event) => updateValues());