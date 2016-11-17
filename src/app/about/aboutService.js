(function (constants, service, ajax) {
    'use strict';

    var bsConfig = constants;

    service.getAboutCountry = getAboutCountry;

    //////////
    function getAboutCountry() {
        return ajax(bsConfig.API_ABOUT_COUNTRY, 'GET')
            .then(function (response) {
                if (Object.keys(response.aboutCountries).length) {
                    var countryCode = '91';
                    return response.aboutCountries[countryCode];
                }
                return [];
            });
    }


})(bsApp.constants, bsApp.aboutService = bsApp.aboutService || {}, bsApp.ajax);
