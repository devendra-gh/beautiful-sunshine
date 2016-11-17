(function (service) {
    'use strict';

    init();

    //////////
    function init() {
        loadCategory();
        loadCustomerSupport();
        loadAccountTypes();
    }

    function loadCategory() {
        service.getCategory()
            .then(function (result) {
                createCategory(result);
            }).catch(function (err) {
                console.error(err.statusText);
            });
    }
    function createCategory(response) {
        var categoryData = response,
            categoryElem = document.getElementById('category'),
            tempHTML = '';

        categoryData.forEach(function (item) {
            tempHTML += '<li><a href="./' + item + '" title="' + item + '">' + item + '</a></li>';
        });

        categoryElem.innerHTML = tempHTML;
    }

    function loadCustomerSupport() {
        service.getCustomerSupport()
            .then(function (result) {
                createCustomerSupport(result);
            }).catch(function (err) {
                console.error(err.statusText);
            });
    }
    function createCustomerSupport(response) {
        var supportData = response,
            supportElem = document.getElementById('customer-support'),
            tempHTML = '';

        supportData.forEach(function (item) {
            tempHTML += '<li><a href="./' + item + '" title="' + item + '">' + item + '</a></li>';
        });

        supportElem.innerHTML = tempHTML;
    }

    function loadAccountTypes(){
        service.getAccountTypes()
            .then(function (result) {
                createAccountTypes(result);
            }).catch(function (err) {
                console.error(err.statusText);
            });
    }
    function createAccountTypes(response) {
        var accountTypes = response,
            accountTypeElem = document.getElementById('account-types'),
            tempHTML = '';

        accountTypes.forEach(function (item) {
            tempHTML += '<li><a href="./' + item + '" title="' + item + '">' + item + '</a></li>';
        });

        accountTypeElem.innerHTML = tempHTML;
    }

})(bsApp.headerService);
