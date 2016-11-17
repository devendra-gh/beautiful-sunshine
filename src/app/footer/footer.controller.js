(function (Service, Tabs) {
    'use strict';

    init();

    //////////
    function init () {
        Tabs(document.getElementById('link-tabs'));
    }

})(bsApp.regionsService, bsApp.Tabs);
