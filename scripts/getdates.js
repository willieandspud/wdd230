// getdates.js

// Get the current year
var currentYear = new Date().getFullYear();

// Update the copyright year in the footer
document.getElementById("copyright").innerHTML = "&copy;" + currentYear + " Ryan Lloyd, Idaho, USA <img src='us-flag.png' alt='US Flag'>";

// Get the last modified date
var lastModifiedDate = document.lastModified;

// Update the last modified date in the footer
document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;
