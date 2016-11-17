(function (Constants, Ajax, Service) {
    'use strict';

    Service.getPopularCities = getPopularCities;

    //////////
    function getPopularCities() {
        return Ajax(Constants.API_POPULAR_CITIES, 'GET')
            .then(function (response) {
                if (response.popularCities.length) {
                    return response.popularCities;
                }
                return [];
            });
    }

})( bsApp.Constants, bsApp.Ajax, bsApp.PopularCitiesService = bsApp.PopularCitiesService || {});
