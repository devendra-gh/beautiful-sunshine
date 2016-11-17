(function (constants, ajax, service) {
    'use strict';

    service.getBannerList = getBannerList;

    //////////
    function getBannerList() {
        return ajax(constants.API_BANNER, 'GET')
            .then(function (response) {
                if (response.banner.length) {
                    return response.banner;
                }
                return [];
            });
    }

})(bsApp.constants, bsApp.ajax, bsApp.bannerService = bsApp.bannerService || {});
