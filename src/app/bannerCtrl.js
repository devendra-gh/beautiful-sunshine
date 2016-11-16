(function (ajax) {
    'use strict';

    //ajax call for get category
    ajax('api/banner.json', 'GET')
        .then(function (result) {
            createCategory(result);
        }).catch(function (err) {
            console.error(err.statusText);
        });

    //function definition
    function createCategory(response) {
        var bannerData = response.banner,
            bannerElem = document.getElementById('banner-slider'),
            tempHTML = '';

        bannerData.forEach(function (item) {
            tempHTML += '' +
                '<div class="banner-item" style="background-image: url(assets/images/' + item.image + ');">' +
                '<div class="container">' +
                '<h2>' + item.caption + '</h2>' +
                '<ul class="packages clearfix">';

            item.packages.forEach(function (list) {
                tempHTML += '' +
                    '<li>' +
                    '<div class="package-item">' +
                    '<span class="package-location">' + list.location + '</span>' +
                    '<span>' + list.checks + '<cite class="location-price">' + list.price + '</cite></span>' +
                    '<span class="location-stay">' + list.stay + '</span>' +
                    '<span class="location-rate">' + list.rate + '</span>' +
                    '</div>' +
                    '</li>';
            });

            tempHTML += '' +
                '</ul>' +
                '</div>' +
                '</div>';

        });

        bannerElem.innerHTML = tempHTML;
        sliderToRun(bannerElem);
    }

    function sliderToRun(bannerElem) {
        var bannerItem = bannerElem.childNodes,
            bannerItemLength = bannerElem.childNodes.length,
            counter = 0,
            translateDefault = 'translate3d(0,0,0)',
            translateBase = 'translate3d(100%,0,0)';

        bannerItem[counter].style.transform = translateDefault;
        setInterval(function () {
            if (counter >= bannerItemLength - 1) {
                counter = 0;
                bannerItem.forEach(function (item) {
                    item.style.transform = translateBase;
                });
            } else {
                counter++;
            }
            bannerItem[counter].style.transform = translateDefault;
        }, 5000);
    }

})(bsApp.util.ajax);
