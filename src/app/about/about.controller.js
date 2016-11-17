(function (Service) {
    'use strict';

    init();

    //////////
    function init() {
        loadAboutCountry();
    }

    function loadAboutCountry() {
        Service.getAboutCountry()
            .then(function (result) {
                createAboutCountry(result);
            }).catch(function (err) {
                console.error(err.statusText);
            });
    }

    function createAboutCountry(response) {
        var countryData = response,
            aboutCountryElem = document.getElementById('about-country'),
            tempHTML = '';

        tempHTML += '' +
            '<div class="col-8 country-content">' +
            '<h3 class="heading">About India <span class="line"></span></h3>' +
            '<p>' + countryData.aboutCountry + '</p>' +
            '</div>' +
            '<div class="col-4 country-info">' +
            '<h3 class="heading">Country Information<span class="line"></span></h3>' +
            '<ul>' +
            '<li>' +
            '<span>Currency:</span>' +
            '<span>' + countryData.currency + '</span>' +
            '</li>' +
            '<li>' +
            '<span>Population:</span>' +
            '<span>' + countryData.population + '</span>' +
            '</li>' +
            '<li>' +
            '<span>Time Zone:</span>' +
            '<span>' + countryData.timeZone + '</span>' +
            '</li>' +
            '<li>' +
            '<span>Area:</span>' +
            '<span>' + countryData.area + '</span>' +
            '</li>' +
            '<li>' +
            '<span>Capital:</span>' +
            '<span>' + countryData.capital + '</span>' +
            '</li>' +
            '<li>' +
            '<span>Official Language:</span>' +
            '<span>' + countryData.language + '</span>' +
            '</li>' +
            '<li>' +
            '<span>Capital\'s calling code:</span>' +
            '<span>' + countryData.capitalCode + '</span>' +
            '</li>' +
            '</ul>' +
            '</div>';

        aboutCountryElem.innerHTML = tempHTML;
    }

})(bsApp.AboutService);
