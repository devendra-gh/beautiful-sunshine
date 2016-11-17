(function (constants, service, ajax) {
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


})(bsApp.constants, bsApp.regionsService = bsApp.regionsService || {}, bsApp.ajax);
