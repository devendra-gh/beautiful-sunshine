(function (Constants, Ajax, Service) {
    'use strict';

    Service.getPopularRegions = getPopularRegions;
    Service.getPopularStates = getPopularStates;

    //////////
    function getPopularRegions() {
        return Ajax(Constants.API_POPULAR_REGIONS, 'GET')
            .then(function (response) {
                if (response.popularRegions.length) {
                    return response.popularRegions;
                }
                return [];
            });
    }

    function getPopularStates() {
        return Ajax(Constants.API_POPULAR_STATES, 'GET')
            .then(function (response) {
                if (response.regions.length) {
                    return response.regions;
                }
                return [];
            });
    }

})( bsApp.Constants, bsApp.Ajax, bsApp.PopularRegionsService = bsApp.PopularRegionsService || {});
