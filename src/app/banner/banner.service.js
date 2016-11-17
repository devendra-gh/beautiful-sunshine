(function (Constants, Ajax, Service) {
    'use strict';

    Service.getBannerList = getBannerList;

    //////////
    function getBannerList() {
        return Ajax(Constants.API_BANNER, 'GET')
            .then(function (response) {
                if (response.banner.length) {
                    return response.banner;
                }
                return [];
            });
    }

})(bsApp.Constants, bsApp.Ajax, bsApp.BannerService = bsApp.BannerService || {});
