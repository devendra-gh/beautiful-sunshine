(function (constants, ajax, service) {
    'use strict';

    service.getAboutCountry = getAboutCountry;

    //////////
    function getAboutCountry() {
        return ajax(constants.API_ABOUT_COUNTRY, 'GET')
            .then(function (response) {
                if (Object.keys(response.aboutCountries).length) {
                    return response.aboutCountries;
                }
                return [];
            });
    }


})(bsApp.constants, bsApp.ajax, bsApp.aboutService = bsApp.aboutService || {});
