(function (constants, ajax, service) {
    'use strict';

    var bsConfig = constants;

    service.getRegions = getRegions;

    //////////
    function getRegions() {
        return ajax(bsConfig.API_REGIONS, 'GET')
            .then(function (response) {
                if (Object.keys(response.regions).length) {
                    var countryCode = '91';
                    return response.regions[countryCode];
                }
                return [];
            });
    }


})(bsApp.constants, bsApp.ajax, bsApp.regionsService = bsApp.regionsService || {});
