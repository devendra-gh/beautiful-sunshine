(function (constants, ajax, service) {
    'use strict';

    service.getCategory = getCategory;
    service.getCustomerSupport = getCustomerSupport;
    service.getAccountTypes = getAccountTypes;

    //////////
    function getCategory() {
        return ajax(constants.API_CATEGORY, 'GET')
            .then(function (response) {
                if (response.category.length) {
                    return response.category;
                }
                return [];
            });
    }

    function getCustomerSupport() {
        return ajax(constants.API_CUSTOMER_SUPPORT, 'GET')
            .then(function (response) {
                if (response.supports.length) {
                    return response.supports;
                }
                return [];
            });
    }

    function getAccountTypes() {
        return ajax(constants.API_ACCOUNT_TYPES, 'GET')
            .then(function (response) {
                if (response.accountTypes.length) {
                    return response.accountTypes;
                }
                return [];
            });
    }

})( bsApp.constants, bsApp.ajax, bsApp.headerService = bsApp.headerService || {});
