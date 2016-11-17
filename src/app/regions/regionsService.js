(function (constants, ajax, service) {
    'use strict';

    service.getRegions = getRegions;

    //////////
    function getRegions() {
        return ajax(constants.API_REGIONS, 'GET')
            .then(function (response) {
                if (Object.keys(response.regions).length) {
                    return response.regions;
                }
                return [];
            });
    }


})(bsApp.constants, bsApp.ajax, bsApp.regionsService = bsApp.regionsService || {});
