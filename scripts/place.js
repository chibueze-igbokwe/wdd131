// scripts/place.js

/**
 * Author: Igbokwe Chibueze
 */

const calculateWindChill = (temp, windSpeed) => {
    // Metric Formula: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16))).toFixed(1);
};

const displayWindChill = () => {
    const temp = parseFloat(document.querySelector("#temp").textContent);
    const wind = parseFloat(document.querySelector("#wind").textContent);
    const chillElement = document.querySelector("#windchill");

    // Conditions: Temp <= 10°C AND Wind > 4.8 km/h
    if (temp <= 10 && wind > 4.8) {
        chillElement.textContent = `${calculateWindChill(temp, wind)} °C`;
    } else {
        chillElement.textContent = "N/A";
    }
};

const setFooterData = () => {
    document.querySelector("#currentyear").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
};

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
    setFooterData();
    displayWindChill();
});