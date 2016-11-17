(function (constants, ajax, service) {
    'use strict';

    service.getPopularCities = getPopularCities;

    //////////
    function getPopularCities() {
        return ajax(constants.API_POPULAR_CITIES, 'GET')
            .then(function (response) {
                if (response.popularCities.length) {
                    return response.popularCities;
                }
                return [];
            });
    }

})( bsApp.constants, bsApp.ajax, bsApp.popularCitiesService = bsApp.popularCitiesService || {});
