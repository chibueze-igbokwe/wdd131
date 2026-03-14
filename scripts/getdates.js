// scripts/getdates.js

/**
 * Author: Igbokwe Chibueze
 */

const setDates = () => {
    // Set current year
    const currentYearElement = document.querySelector("#currentyear");
    const today = new Date();
    currentYearElement.textContent = today.getFullYear();

    // Set last modified date
    const lastModifiedElement = document.querySelector("#lastModified");
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
};

setDates();