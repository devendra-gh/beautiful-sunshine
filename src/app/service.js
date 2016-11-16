(function (bsApp) {
    'use strict';

    bsApp.service = {
        category: category
    };

    bsApp.service.category = function (date) {
        bsApp.util.ajax('api/category.json', 'GET')
            .then(function (result) {
                //createCategory(result);
                return result;
            }).catch(function (err) {
                console.error(err.statusText);
            });
    };

    return service;

})(bsApp);
