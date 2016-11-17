(function (Service) {
    'use strict';

    init();

    //////////
    function init() {
        loadBannerList();
    }

    function loadBannerList(){
        Service.getBannerList()
            .then(function (result) {
                createBannerList(result);
            }).catch(function (err) {
                console.error(err.statusText);
            });
    }
    function createBannerList(response) {
        var bannerData = response,
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
                bannerItem[counter].style.transform = translateBase;
                counter++;
            }
            bannerItem[counter].style.transform = translateDefault;
        }, 5000);
    }

})(bsApp.BannerService);
