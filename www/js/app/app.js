(function() {

    angular
        .module('myApp', ['ngFileUpload'])
        .component('test', {
            templateUrl: 'app.html',
            controller: TestComponent,
            bindings: {
                isAl: '=',
                isSach: '=',
                showSchaden: '=',
                showAnmeldungbuau: '=',
                cbHistory: '&',
                cbBanks: '&',
                cbDocs: '&',
                cbHotline: '&',
                cbAnmeldungbuau: '&'
            }
        })
        .run();

    TestComponent.$inject = ['Upload'];

    function TestComponent(Upload) {
        console.log('TestComponent INIT');

        const $ctrl = this;

        $ctrl.file = null;
        $ctrl.name = null;

        $ctrl.$onInit = () => {
            $ctrl.file = null;
        };

        $ctrl.uploadFile = function($files, $invalidFiles) {
            console.log('uploadFile()', $files, $invalidFiles);
            $ctrl.name = null;

            if ($ctrl.file) {
                console.log('$ctrl.file.name:', $ctrl.file.name);
                console.log('$ctrl.file.size:', $ctrl.file.size);

                $ctrl.name = $ctrl.file.name;
            }
        };
    }

    angular
        .module('myApp')
        .run([
            '$templateCache',
            function($templateCache) {
                $templateCache.put('app.html', `

        <nav class="navbar fixed-top navbar-light bg-light">
          <a class="navbar-brand" href="#">&nbsp;</a>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col-12 text-center">

                    <p data-ng-bind="$ctrl.name"></p>

                    <button type="button"
                            class="btn btn-success"
                            ngf-select="$ctrl.uploadFile($files, $invalidFiles)"
                            data-ng-model="$ctrl.file">
                        select file
                    </button>
                    <hr>
                    <p>Thumbnail:</p>
                    <p><img ngf-thumbnail="$ctrl.file || 'img/thumb.jpg'" style="width:100px; height:100px;"></p>

                </div>
            </div>
        </div>

        <nav class="navbar fixed-bottom navbar-light bg-light">
          <a class="navbar-brand" href="#">&nbsp;</a>
        </nav>
        `);
            }
        ]);

})();
