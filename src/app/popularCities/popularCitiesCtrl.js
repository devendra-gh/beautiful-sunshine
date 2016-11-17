(function (service) {
    'use strict';

    init();

    //////////
    function init() {
        loadPopularCities();
    }

    function loadPopularCities() {
        service.getPopularCities()
            .then(function (result) {
                createPopularCities(result);
            }).catch(function (err) {
                console.error(err.statusText);
            });
    }
    function createPopularCities(response) {
        var popularCitiesData = response,
            popularCitiesElem = document.getElementById('popular-cities'),
            tempHTML = '';

        popularCitiesData.forEach(function (item) {
            tempHTML += '' +
                '<div class="photo">' +
                    '<img src="assets/images/'+ item.imageUrl +'" title="'+ item.name +'" alt="'+ item.name +'" class="img-responsive" />' +
                    '<div class="detail">' +
                        '<span>'+ item.name +'</span>' +
                        '<span>'+ item.genre +'</span>' +
                        '<span>'+ item.about +'</span>' +
                    '</div>' +
                '</div>';
        });

        popularCitiesElem.innerHTML = tempHTML;
    }

})(bsApp.popularCitiesService);
