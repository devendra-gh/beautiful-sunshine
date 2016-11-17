(function (Service) {
    'use strict';

    init();

    //////////
    function init () {
        loadRegions();
    }

    function loadRegions() {
        Service.getRegions()
            .then(function (result) {
                createRegions(result);
            }).catch(function (err) {
                console.error(err.statusText);
            });
    }

    function createRegions(response) {
        var regionsData = response,
            regionsElem = document.getElementById('regions-country'),
            tempHTML = '';

        regionsData.forEach(function(item){
            tempHTML += '' +
                '<div class="photo">' +
                    '<img src="assets/images/'+ item.imageUrl +'" alt="'+ item.caption +'" title="'+ item.caption +'" class="img-responsive" />' +
                    '<span>'+ item.caption +'</span>' +
                '</div>';
        });

        regionsElem.innerHTML = tempHTML;
    }

})(bsApp.RegionsService);
