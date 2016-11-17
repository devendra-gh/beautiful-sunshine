(function (bsApp) {
    'use strict';

    bsApp.Tabs = Tabs;

    function Tabs(elem) {
        var activeTabObject;

        var TabObject = function () {
            var self = this;
            this.tab; //element
            this.pane; //element
            this.setClick = function () {
                self.tab.addEventListener('click', self.showThisTab)
            };

            this.showThisTab = function () {
                if (self !== activeTabObject) {
                    //change the tab page and update the active tab
                    activeTabObject.pane.className = activeTabObject.pane.className.replace(' active-panel', '');
                    activeTabObject.tab.className = activeTabObject.tab.className.replace('active-tab', '');
                    self.pane.className = self.pane.className + ' active-panel';
                    self.tab.className = self.tab.className + 'active-tab';
                    activeTabObject = self;
                }
            };

        };

        var ul = elem;
        var i;
        var items = ul.getElementsByTagName("li");
        for (i = 0; i < items.length; ++i) {
            var tab = new TabObject();
            tab.tab = items[i];
            var className = items[i].dataset.tab;
            tab.pane = document.getElementById(className);
            tab.setClick();
            if (items[i].classList.contains('active-tab')) {
                activeTabObject = tab;
            }
        }

    }

})(bsApp);