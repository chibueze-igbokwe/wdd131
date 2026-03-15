// scripts/temples.js

/**
 * Author: Igbokwe Chibueze
 */

const setupPage = () => {
    // Footer Dates
    const yearSpan = document.querySelector("#currentyear");
    const lastMod = document.querySelector("#lastModified");
    const today = new Date();

    yearSpan.textContent = today.getFullYear();
    lastMod.textContent = `Last Modification: ${document.lastModified}`;

    // Hamburger Menu Toggle
    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('open');
    });
};

setupPage();