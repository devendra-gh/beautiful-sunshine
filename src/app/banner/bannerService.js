(function (constants, service, ajax) {
    'use strict';

    var bsConfig = constants;

    service.getBannerList = getBannerList;

    //////////
    function getBannerList() {
        return ajax(bsConfig.API_BANNER, 'GET')
            .then(function (response) {
                if (response.banner.length) {
                    return response.banner;
                }
                return [];
            });
    }

})(bsApp.constants, bsApp.bannerService = bsApp.bannerService || {}, bsApp.ajax);
