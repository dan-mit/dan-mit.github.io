function flightselected (value)
{
    switch (value)
    {
        case "JetBlue":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "United":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 10in x 9in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Delta":
            document.getElementById("carryOnSize").innerHTML = "22in x 14 x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 9in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "American":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "18in x 14in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "SouthWest":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 10in";
            document.getElementById("personalItemSize").innerHTML = "18.5in x 8.5in x 13.5in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Emirates":
            document.getElementById("carryOnSize").innerHTML = "22in x 15in x 8in";
            document.getElementById("personalItemSize").innerHTML = "18in x 14in x 7in";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium)";
            break;
        case "Qatar":
            document.getElementById("carryOnSize").innerHTML = "20in x 15in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Saudi":
            document.getElementById("carryOnSize").innerHTML = "<= 62 inch";
            document.getElementById("personalItemSize").innerHTML = "<= 15lb*";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "AirAsia":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "15in x 11in x 4in";
            document.getElementById("maxWeight").innerHTML = "15lb";
            break;
        case "AirChina":
            document.getElementById("carryOnSize").innerHTML = "21in x 16in x 8in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "11lb (Economy), 17lb (First)";
            break;
        case "ANZG":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 30lb (Business).";
            break;
        case "ANA":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 8in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        case "Cathay":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "16in x 12in x 6in";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium), 30lb (First)";
            break;
        case "Cebu":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb";
            break;
        case "ChinaAirlines":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium), 33lb (First)";
            break;
        case "CEA":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        case "CSA":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium), 33lb (First)";
            break;
        case "Garuda":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium), 33lb (First)";
            break;
        case "Hainan":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "22lb";
	    break;
        case "JAL":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        case "JetAirways":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        case "Jetstar":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb";
            break;
        case "KoreanAir":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "25lb (Economy), 33lb (First/Business)";
            break;
        case "LionAir":
            document.getElementById("carryOnSize").innerHTML = "19in x 13in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15.4lb";
            break;
        case "MalaysiaAirlines":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 31lb (First)";
            break;
        case "Qantas":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium), 33lb (First)";
            break;
        case "ShenzhenAirlines":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "11lb";
            break;
        case "SingaporeAirlines":
            document.getElementById("carryOnSize").innerHTML = "22in x 15in x 8in";
            document.getElementById("personalItemSize").innerHTML = "16in x 12in x 4in (First/Business)";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium), 33lb (First)";
            break;
        case "VietnamAirlines":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "15lb (Economy), 22lb (Premium), 33lb (First)";
            break;
        case "AirFrance":
        case "BritishAirways":
        case "AustrianAG":
        case "easyJet":
        case "Lufthansa":
        case "Thomson":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 8in";
            document.getElementById("personalItemSize").innerHTML = "15.7in x 11.8in x 5.8in";
            document.getElementById("maxWeight").innerHTML = "26.4lb (Economy), 40lb (Business)";
            break;
        case "NorwegianAS":
        case "SASSA":
        case "Swiss":
        case "Vueling":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 8in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "26.4lb (Economy), 40lb (Business)";
            break;
        case "Avianca":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 10in";
            document.getElementById("personalItemSize").innerHTML = "18in x 14in x 10in";
            document.getElementById("maxWeight").innerHTML = "50lb (Economy), 70lb (Business)";
            break;
        case "GolLinhas":
            document.getElementById("carryOnSize").innerHTML = "21.7in x 13.8in x 9.8in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat* - 22lb";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "LANA":
            document.getElementById("carryOnSize").innerHTML = "21in x 14in x 10in";
            document.getElementById("personalItemSize").innerHTML = "18in x 14in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "AirCanada":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 10in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "AirTran":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 9in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Alaska":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 6in";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        case "ASA":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 6in";
            document.getElementById("maxWeight").innerHTML = "N/A";
            break;
        case "Continental":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 9in";
            document.getElementById("maxWeight").innerHTML = "N/A";
            break;
        case "WestJet":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 6in";
            document.getElementById("maxWeight").innerHTML = "22lb";
            break;
        default:
            document.getElementById("carryOnSize").innerHTML = "N/A";
            document.getElementById("personalItemSize").innerHTML = "N/A";
            document.getElementById("maxWeight").innerHTML = "N/A";
    }
    storeOriginalValues();
    updateMeasurements(currentUnit);
}

var currentUnit = 'imperial'; // Keep track of the current unit displayed on page, imperial by default

// Function to store the original imperial values
function storeOriginalValues() {
    var elements = ['carryOnSize', 'personalItemSize', 'maxWeight'];
    elements.forEach(function(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.setAttribute('data-imperial', element.innerText);
        }
    });
}
//Function to toggle the value of the currentUnit variable
function convertToMetric() {
    currentUnit = currentUnit === 'imperial' ? 'metric' : 'imperial';
    updateMeasurements();
}
//Function that replaces the text of the elements with the desired measurements
function updateMeasurements() {
    var elements = ['carryOnSize', 'personalItemSize', 'maxWeight'];
    elements.forEach(function(elementId) {
        var element = document.getElementById(elementId);
        if (!element) return;

        var originalText = element.getAttribute('data-imperial');
        if (currentUnit === 'metric') {
            element.innerText = originalText.replace(/\b(\d+(?:\.\d+)?)in\b/g, function(match, inches) {
                var cm = (inches * 2.54).toFixed(1);
                return cm + 'cm';
            }).replace(/\b(\d+(?:\.\d+)?)lb\b/g, function(match, pounds) {
                var kg = (pounds * 0.45359237).toFixed(1);
                return kg + 'kg';
            });
        } else {
            element.innerText = originalText;
        }
    });
}