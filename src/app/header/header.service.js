(function (Constants, Ajax, Service) {
    'use strict';

    Service.getCategory = getCategory;
    Service.getCustomerSupport = getCustomerSupport;
    Service.getAccountTypes = getAccountTypes;

    //////////
    function getCategory() {
        return Ajax(Constants.API_CATEGORY, 'GET')
            .then(function (response) {
                if (response.category.length) {
                    return response.category;
                }
                return [];
            });
    }

    function getCustomerSupport() {
        return Ajax(Constants.API_CUSTOMER_SUPPORT, 'GET')
            .then(function (response) {
                if (response.supports.length) {
                    return response.supports;
                }
                return [];
            });
    }

    function getAccountTypes() {
        return Ajax(Constants.API_ACCOUNT_TYPES, 'GET')
            .then(function (response) {
                if (response.accountTypes.length) {
                    return response.accountTypes;
                }
                return [];
            });
    }

})( bsApp.Constants, bsApp.Ajax, bsApp.HeaderService = bsApp.HeaderService || {});
