(function () {
    'use strict';

    var scrolify = document.getElementById('scrolify'),
        offsetTop = scrolify.offsetTop,
        scrollTop,
        scrolifyTab = document.getElementById('scrolify-tab'),
        scrolifyPanel = document.getElementsByClassName('scrolify-panel');

    window.addEventListener("scroll", function (event) {
        scrollTop = this.scrollY;

        if (scrollTop >= offsetTop) {
            scrolify.className = 'fixed';
        } else {
            scrolify.className = '';
        }

    }, false);

    scrolifyTab.addEventListener('click', function (e) {
        var target = e.target;

        while (target && target.parentNode !== scrolifyTab) {
            target = target.parentNode;
            if (!target) {
                return;
            }
        }
        function getElIndex(el) {
            for(var i = 0; el = el.previousElementSibling; i++);
            return i;
        }

        if (target.tagName === 'LI') {
            var targetElem = scrolifyPanel[getElIndex(target)],
                targetElemOffsetTop = targetElem.offsetTop;
            console.log(targetElemOffsetTop);

            scrollingPanel(targetElemOffsetTop);
        }

        function scrollingPanel(offset) {
            setTimeout(function() {

            }, 100);
        }


    });


})();
