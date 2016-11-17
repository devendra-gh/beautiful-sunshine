(function (service) {
    'use strict';

    var popularRegionsElem = document.getElementById('popular-regions'),
        popularRegionsElemItem = popularRegionsElem.getElementsByTagName('li'),
        popularStatesElem = document.getElementById('popular-states-slider'),
        popularStatesElemItems = popularStatesElem.children;

    init();

    //////////
    function init() {
        loadPopularRegions();
        loadPopularStates();
    }

    popularRegionsElem.addEventListener('click', function (e) {
        var target = e.target;

        while (target && target.parentNode !== popularRegionsElem) {
            target = target.parentNode;
            if (!target) {
                return;
            }
        }

        if (target.tagName === 'LI') {
            if(!target.classList.contains('active')){
                [].forEach.call(popularRegionsElemItem, function (item) {
                    item.className = '';
                });
                target.className = 'active';
                slidePopularStatesItem(target);
            }
        }

    });

    function loadPopularRegions() {
        service.getPopularRegions()
            .then(function (result) {
                createPopularRegions(result);
            }).catch(function (err) {
                console.error(err.statusText);
            });
    }
    function createPopularRegions(response) {
        var popularRegionsData = response,
            tempHTML = '';

        popularRegionsData.forEach(function (item) {
            tempHTML += '<li data-tab="'+ item.name +'"><span title="'+ item.region +'">'+ item.region +'</span></li>';
        });

        popularRegionsElem.innerHTML = tempHTML;
    }

    function loadPopularStates(){
        service.getPopularStates()
            .then(function (result) {
                createPopularStates(result);
                slidePopularStatesItem();
            }).catch(function (err) {
                console.error(err.statusText);
            });
    }
    function createPopularStates(response){
        var popularStatesData = response,
            tempHTML = '';

        popularStatesData.forEach(function (regionList) {

            tempHTML += '<div data-item="'+ regionList.name +'">';

            regionList.states.forEach(function(stateList){

                tempHTML += '' +
                    '<div class="photo">' +
                        '<img src="assets/images/'+ stateList.imageUrl +'" alt="'+ stateList.name +'" title="'+ stateList.name +'" class="img-responsive" />' +
                        '<div class="detail">' +
                            '<span>'+ stateList.name +'</span>' +
                        '</div>' +
                    '</div>';

            });

            tempHTML += '</div>';

        });

        popularStatesElem.innerHTML = tempHTML;
    }

    function slidePopularStatesItem(sliderElem) {

        var sliderIndexName;
        if(typeof sliderElem != 'undefined'){
            sliderIndexName = sliderElem.dataset.tab;
        } else {
            sliderIndexName = 'north_india';
        }

        [].forEach.call(popularStatesElemItems, function (slider) {
            if(slider.dataset.item === sliderIndexName){
                slider.className = 'active';
            } else {
                slider.className = '';
            }
        });
    }


})(bsApp.popularRegionsService);
