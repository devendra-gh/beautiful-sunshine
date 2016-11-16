(function (ajax) {
    'use strict';

    //ajax call for get category
    ajax('api/category.json', 'GET')
        .then(function (result) {
            createCategory(result);
        }).catch(function (err) {
            console.error(err.statusText);
        });

    //ajax call for get customer support
    ajax('api/customer-support.json', 'GET')
        .then(function (result) {
            createCustomerSupport(result);
        }).catch(function (err) {
            console.error(err.statusText);
        });

    //ajax call for get account type
    ajax('api/account-types.json', 'GET')
        .then(function (result) {
            createAccountTypes(result);
        }).catch(function (err) {
            console.error(err.statusText);
        });


    //function definition
    function createCategory(response) {
        var categoryData = response.category,
            categoryElem = document.getElementById('category'),
            tempHTML = '';

        categoryData.forEach(function (item) {
            tempHTML += '<li><a href="./' + item + '" title="' + item + '">' + item + '</a></li>';
        });

        categoryElem.innerHTML = tempHTML;
    }

    function createCustomerSupport(response) {
        var supportData = response.supports,
            supportElem = document.getElementById('customer-support'),
            tempHTML = '';

        supportData.forEach(function (item) {
            tempHTML += '<li><a href="./' + item + '" title="' + item + '">' + item + '</a></li>';
        });

        supportElem.innerHTML = tempHTML;
    }

    function createAccountTypes(response) {
        var accountTypes = response.accountTypes,
            accountTypeElem = document.getElementById('account-types'),
            tempHTML = '';

        accountTypes.forEach(function (item) {
            tempHTML += '<li><a href="./' + item + '" title="' + item + '">' + item + '</a></li>';
        });

        accountTypeElem.innerHTML = tempHTML;
    }

})(bsApp.util.ajax);
