(function (constants, ajax, service) {
    'use strict';

    service.getPopularRegions = getPopularRegions;
    service.getPopularStates = getPopularStates;

    //////////
    function getPopularRegions() {
        return ajax(constants.API_POPULAR_REGIONS, 'GET')
            .then(function (response) {
                if (response.popularRegions.length) {
                    return response.popularRegions;
                }
                return [];
            });
    }

    function getPopularStates() {
        return ajax(constants.API_POPULAR_STATES, 'GET')
            .then(function (response) {
                if (response.regions.length) {
                    return response.regions;
                }
                return [];
            });
    }

})( bsApp.constants, bsApp.ajax, bsApp.popularRegionsService = bsApp.popularRegionsService || {});
