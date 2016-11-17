(function () {
    'use strict';

    var scrolify = document.getElementById('scrolify'),
        offsetTop = scrolify.offsetTop,
        scrollTop,
        scrolifyTab = document.getElementById('scrolify-tab'),
        scrolifyItem = scrolifyTab.getElementsByTagName('li'),
        ticking = false,
        smoothScr = {
            iterr: 30,
            tm: null,
            stopShow: function () {
                clearTimeout(this.tm);
                this.iterr = 30;
            },
            getRealTop: function (el) {
                var elm = el;
                var realTop = 0;
                do {
                    realTop += elm.offsetTop;
                    elm = elm.offsetParent;
                }
                while (elm);
                return realTop;
            },
            getPageScroll: function () {
                var pgYoff = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
                return pgYoff;
            },
            anim: function (id) {
                this.stopShow();
                var eOff, pOff, tOff, scrVal, pos, dir, step, topOffset = 45;

                eOff = (document.getElementById(id).offsetTop) - topOffset;

                tOff = this.getRealTop(document.getElementById(id).parentNode);

                pOff = this.getPageScroll();

                if (pOff === null || isNaN(pOff) || pOff === 'undefined') pOff = 0;

                scrVal = eOff - pOff;

                if (scrVal > tOff) {
                    pos = (eOff - tOff - pOff);
                    dir = 1;
                }
                if (scrVal < tOff) {
                    pos = (pOff + tOff) - eOff;
                    dir = -1;
                }
                if (scrVal !== tOff) {
                    step = ~~((pos / 4) + 1) * dir;

                    if (this.iterr > 1) this.iterr -= 1;
                    else this.itter = 0;
                    window.scrollBy(0, step);
                    this.tm = window.setTimeout(function () {
                        smoothScr.anim(id);
                    }, this.iterr);
                }
                if (scrVal === tOff) {
                    this.stopShow();
                    return;
                }

            }
        };

    window.addEventListener("scroll", function (event) {
        scrollTop = this.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                fixedClassManager(scrollTop);
                ticking = false;
            });
        }

        ticking = true;
    }, false);

    scrolifyTab.addEventListener('click', function (e) {
        var target = e.target;

        while (target && target.parentNode !== scrolifyTab) {
            target = target.parentNode;
            if (!target) {
                return;
            }
        }

        if (target.tagName === 'LI') {
            if(!target.classList.contains('active')){
                [].forEach.call(scrolifyItem, function (item) {
                    item.className = '';
                });

                target.className = 'active';
                smoothScr.anim(target.dataset.tab);
            }
        }

    });


    //////////
    function fixedClassManager(scrollTop) {
        if (scrollTop >= offsetTop) {
            scrolify.className = 'fixed';
        } else {
            scrolify.className = '';
        }
    }

})();

