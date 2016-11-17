(function (Constants, Ajax, Service) {
    'use strict';

    Service.getAboutCountry = getAboutCountry;

    //////////
    function getAboutCountry() {
        return Ajax(Constants.API_ABOUT_COUNTRY, 'GET')
            .then(function (response) {
                if (Object.keys(response.aboutCountries).length) {
                    return response.aboutCountries;
                }
                return [];
            });
    }


})(bsApp.Constants, bsApp.Ajax, bsApp.AboutService = bsApp.AboutService || {});
