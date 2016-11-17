(function (constants, service, ajax) {
    'use strict';

    var bsConfig = constants;

    service.getCategory = getCategory;
    service.getCustomerSupport = getCustomerSupport;
    service.getAccountTypes = getAccountTypes;

    //////////
    function getCategory() {
        return ajax(bsConfig.API_CATEGORY, 'GET')
            .then(function (response) {
                if (response.category.length) {
                    return response.category;
                }
                return [];
            });
    }

    function getCustomerSupport() {
        return ajax(bsConfig.API_CUSTOMER_SUPPORT, 'GET')
            .then(function (response) {
                if (response.supports.length) {
                    return response.supports;
                }
                return [];
            });
    }

    function getAccountTypes() {
        return ajax(bsConfig.API_ACCOUNT_TYPES, 'GET')
            .then(function (response) {
                if (response.accountTypes.length) {
                    return response.accountTypes;
                }
                return [];
            });
    }

})( bsApp.constants, bsApp.headerService = bsApp.headerService || {}, bsApp.ajax);
