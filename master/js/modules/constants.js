/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/
App
  .constant('APP_COLORS', {
    'primary':                '#5d9cec',
    'success':                '#27c24c',
    'info':                   '#23b7e5',
    'warning':                '#ff902b',
    'danger':                 '#f05050',
    'inverse':                '#131e26',
    'green':                  '#37bc9b',
    'pink':                   '#f532e5',
    'purple':                 '#7266ba',
    'dark':                   '#3a3f51',
    'yellow':                 '#fad732',
    'gray-darker':            '#232735',
    'gray-dark':              '#3a3f51',
    'gray':                   '#dde6e9',
    'gray-light':             '#e4eaec',
    'gray-lighter':           '#edf1f2'
  })
  .constant('APP_MEDIAQUERY', {
    'desktopLG':             1200,
    'desktop':                992,
    'tablet':                 768,
    'mobile':                 480
  })
  .constant('APP_REQUIRES', {
    // jQuery based and standalone scripts
    scripts: {
      'whirl':              ['vendor/whirl/dist/whirl.css'],
      'classyloader':       ['vendor/jquery-classyloader/js/jquery.classyloader.min.js'],
      'animo':              ['vendor/animo.js/animo.js'],
      'fastclick':          ['vendor/fastclick/lib/fastclick.js'],
      'modernizr':          ['vendor/modernizr/modernizr.js'],
      'animate':            ['vendor/animate.css/animate.min.css'],
      'icons':              ['vendor/skycons/skycons.js',
                             'vendor/fontawesome/css/font-awesome.min.css',
                             'app/vendor/simplelineicons/simple-line-icons.css',
                             'vendor/weather-icons/css/weather-icons.min.css'],
      'sparklines':         ['app/vendor/sparklines/jquery.sparkline.min.js'],
      'slider':             ['vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                             'vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css'],
      'wysiwyg':            ['vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                             'vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      'slimscroll':         ['vendor/slimscroll/jquery.slimscroll.min.js'],
      'screenfull':         ['vendor/screenfull/dist/screenfull.min.js'],
      'vector-map':         ['vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                             'vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                             'vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js',
                             'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'],
      'loadGoogleMapsJS':   ['app/vendor/gmap/load-google-maps.js'],
      'google-map':         ['vendor/jQuery-gMap/jquery.gmap.min.js'],
      'flot-chart':         ['vendor/Flot/jquery.flot.js'],
      'flot-chart-plugins': ['vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                             'vendor/Flot/jquery.flot.resize.js',
                             'vendor/Flot/jquery.flot.pie.js',
                             'vendor/Flot/jquery.flot.time.js',
                             'vendor/Flot/jquery.flot.categories.js',
                             'vendor/flot-spline/js/jquery.flot.spline.min.js'],
      'jquery-ui':          ['vendor/jquery-ui/jquery-ui.min.js',
                             'vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'],
      'moment' :            ['vendor/moment/min/moment-with-locales.min.js'],
      'inputmask':          ['vendor/jquery.inputmask/dist/jquery.inputmask.bundle.min.js'],
      'flatdoc':            ['vendor/flatdoc/flatdoc.js'],
      'codemirror':         ['vendor/codemirror/lib/codemirror.js',
                             'vendor/codemirror/lib/codemirror.css'],
      'codemirror-plugins':  ['vendor/codemirror/addon/mode/overlay.js',
                              'vendor/codemirror/mode/markdown/markdown.js',
                              'vendor/codemirror/mode/xml/xml.js',
                              'vendor/codemirror/mode/gfm/gfm.js',
                              'vendor/marked/lib/marked.js'],
      'taginput' :          ['vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                             'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js'],
      'filestyle':          ['vendor/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      'parsley':            ['vendor/parsleyjs/dist/parsley.min.js'],
      'datatables':         ['vendor/datatables/media/js/jquery.dataTables.min.js',
                             'app/vendor/datatable-bootstrap/css/dataTables.bootstrap.css'],
      'datatables-pugins':  ['app/vendor/datatable-bootstrap/js/dataTables.bootstrap.js',
                             'app/vendor/datatable-bootstrap/js/dataTables.bootstrapPagination.js',
                             'vendor/datatables-colvis/js/dataTables.colVis.js',
                             'vendor/datatables-colvis/css/dataTables.colVis.css'],
      'fullcalendar':       ['vendor/fullcalendar/dist/fullcalendar.min.js',
                             'vendor/fullcalendar/dist/fullcalendar.css'],
      'gcal':               ['vendor/fullcalendar/dist/gcal.js']
    },
    // Angular based script (use the right module name)
    modules: [
      {name: 'toaster',           files: ['vendor/angularjs-toaster/toaster.js',
                                          'vendor/angularjs-toaster/toaster.css']},
      {name: 'angular-chosen',    files: ['vendor/chosen_v1.2.0/chosen.jquery.min.js',
                                          'vendor/chosen_v1.2.0/chosen.min.css',
                                          'vendor/angular-chosen/angular-chosen.js']},
      { name: 'ngDialog',         files: ['vendor/ngDialog/js/ngDialog.min.js',
                                          'vendor/ngDialog/css/ngDialog.min.css',
                                          'vendor/ngDialog/css/ngDialog-theme-default.min.css'] },
      { name: 'ngWig',            files: ['vendor/ngWig/dist/ng-wig.min.js'] },
      { name: 'angular-cookie',   files: ['vendor/angular-cookie/angular-cookie.min.js'] },
      { name: 'ng-token-auth',    files: ['vendor/ng-token-auth/dist/ng-token-auth.min.js'] }
    ]


/*    scripts: {
      'jquery':             ['vendor/jquery/jquery.min.js'],
      'icons':              ['vendor/skycons/skycons.js', 'vendor/fontawesome/css/font-awesome.min.css','vendor/simplelineicons/simple-line-icons.css', 'vendor/weathericons/css/weather-icons.min.css'],
      'modernizr':          ['vendor/modernizr/modernizr.js'],
      'fastclick':          ['vendor/fastclick/fastclick.js'],
      'filestyle':          ['vendor/filestyle/bootstrap-filestyle.min.js'],
      'csspiner':           ['vendor/csspinner/csspinner.min.css'],
      'animo':              ['vendor/animo/animo.min.js'],
      'sparklines':         ['vendor/sparklines/jquery.sparkline.min.js'],
      'slimscroll':         ['vendor/slimscroll/jquery.slimscroll.min.js'],
      'screenfull':         ['vendor/screenfull/screenfull.min.js'],
      'classyloader':       ['vendor/jquery-classyloader/js/jquery.classyloader.min.js'],
      'vector-map':         ['vendor/jvectormap/jquery-jvectormap-1.2.2.min.js', 'vendor/jvectormap/maps/jquery-jvectormap-world-mill-en.js', 'vendor/jvectormap/jquery-jvectormap-1.2.2.css'],
      'loadGoogleMapsJS':   ['vendor/gmap/load-google-maps.js'],
      'google-map':         ['vendor/gmap/jquery.gmap.min.js'],
      'flot-chart':         ['vendor/flot/jquery.flot.min.js'],
      'flot-chart-plugins': ['vendor/flot/jquery.flot.tooltip.min.js','vendor/flot/jquery.flot.resize.min.js','vendor/flot/jquery.flot.pie.min.js','vendor/flot/jquery.flot.time.min.js','vendor/flot/jquery.flot.categories.min.js','vendor/flot/jquery.flot.spline.min.js'],
      'jquery-ui':          ['vendor/jqueryui/jquery-ui.min.js', 'vendor/touch-punch/jquery.ui.touch-punch.min.js'],
      'chosen':             ['vendor/chosen/chosen.jquery.min.js', 'vendor/chosen/chosen.min.css'],
      'slider':             ['vendor/slider/js/bootstrap-slider.js', 'vendor/slider/css/slider.css'],
      'moment' :            ['vendor/moment/min/moment-with-locales.min.js'],
      'codemirror':         ['vendor/codemirror/lib/codemirror.js', 'vendor/codemirror/lib/codemirror.css'],
      'codemirror-plugins':  ['vendor/codemirror/addon/mode/overlay.js','vendor/codemirror/mode/markdown/markdown.js','vendor/codemirror/mode/xml/xml.js','vendor/codemirror/mode/gfm/gfm.js','vendor/marked/marked.js'],
      'taginput' :          ['vendor/tagsinput/bootstrap-tagsinput.min.js', 'vendor/tagsinput/bootstrap-tagsinput.css'],
      'inputmask':          ['vendor/inputmask/jquery.inputmask.bundle.min.js'],
      'bwizard':            ['vendor/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'],
      'parsley':            ['vendor/parsley/parsley.min.js'],
      'datatables':         ['vendor/datatable/media/js/jquery.dataTables.min.js', 'vendor/datatable/extensions/datatable-bootstrap/css/dataTables.bootstrap.css'],
      'datatables-pugins':  ['vendor/datatable/extensions/datatable-bootstrap/js/dataTables.bootstrap.js','vendor/datatable/extensions/datatable-bootstrap/js/dataTables.bootstrapPagination.js','vendor/datatable/extensions/ColVis/js/dataTables.colVis.min.js', 'vendor/datatable/extensions/ColVis/css/dataTables.colVis.css'],
      'flatdoc':            ['vendor/flatdoc/flatdoc.js']
    },
    modules: [
      { name: 'toaster',         files: ['vendor/toaster/toaster.js', 'vendor/toaster/toaster.css'] },
      { name: 'ngWig',          files: ['vendor/ngwig/ng-wig.min.js'] },
      { name: 'ngDialog',       files: ['vendor/ngdialog/js/ngDialog.min.js', 'vendor/ngDdialog/css/ngDialog.min.css', 'vendor/ngdialog/css/ngDialog-theme-default.min.css'] }
    ]*/
  })
;