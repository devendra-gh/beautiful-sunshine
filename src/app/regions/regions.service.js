(function (Constants, Ajax, Service) {
    'use strict';

    Service.getRegions = getRegions;

    //////////
    function getRegions() {
        return Ajax(Constants.API_REGIONS, 'GET')
            .then(function (response) {
                if (Object.keys(response.regions).length) {
                    return response.regions;
                }
                return [];
            });
    }


})(bsApp.Constants, bsApp.Ajax, bsApp.RegionsService = bsApp.RegionsService || {});
