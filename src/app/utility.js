(function (bsApp) {
    'use strict';

    bsApp.util = {
        ajax: ajax
    };

    //calling function
    function ajax(url, method, data) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.responseType = 'json';
            request.onreadystatechange = function () {
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {
                        resolve(request.response);
                    } else {
                        reject(Error(request.statusText));
                    }
                }
            };
            request.onerror = function () {
                reject(Error("Network Error"));
            };
            request.open(method, url, true);
            request.send(data);
        });
    }

})(bsApp);