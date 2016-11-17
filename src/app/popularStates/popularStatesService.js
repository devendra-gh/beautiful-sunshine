(function (constants, service, ajax) {
    'use strict';

    var bsConfig = constants;

    service.getPopularRegions = getPopularRegions;
    service.getPopularStates = getPopularStates;

    //////////
    function getPopularRegions() {
        return ajax(bsConfig.API_POPULAR_REGIONS, 'GET')
            .then(function (response) {
                if (response.popularRegions.length) {
                    return response.popularRegions;
                }
                return [];
            });
    }

    function getPopularStates() {
        return ajax(bsConfig.API_POPULAR_STATES, 'GET')
            .then(function (response) {
                if (response.regions.length) {
                    return response.regions;
                }
                return [];
            });
    }

})( bsApp.constants, bsApp.popularRegionsService = bsApp.popularRegionsService || {}, bsApp.ajax);