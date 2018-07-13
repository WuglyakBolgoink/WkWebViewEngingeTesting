(function() {
    'use strict';

    let CordovaInit = function() {
        let onDeviceReady = () => {
            receivedEvent('deviceready');
        };

        function receivedEvent() {
            angular
                .bootstrap($('body'), ['myApp'], {
                    strictDi: true
                });
        }

        this.bindEvents = () => {
            document.addEventListener('deviceready', onDeviceReady, false);
        };

        if (window.cordova !== undefined) {
            this.bindEvents();
        } else {
            receivedEvent('manual');
        }
    };

    $(function() {
        new CordovaInit();
    });
})();
