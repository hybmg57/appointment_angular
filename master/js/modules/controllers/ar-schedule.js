

App.controller('ARScheduleCtrl', ['$scope', 'ngDialog', '$http', function($scope, ngDialog, $http) {
  'use strict';

  if(!$.fn.fullCalendar) return;

  /**
   * Invoke full calendar plugin and attach behavior
   * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
   * @param  EventObject [events] An object with the event list to load when the calendar displays
   */
  function initCalendar(calElement, events) {

      // check to remove elements from the list
      var removeAfterDrop = $('#remove-after-drop');

      calElement.fullCalendar({
          isRTL: $scope.app.layout.isRTL,
          header: {
              left:   'prev,next today',
              center: 'title',
              right:  'month,agendaWeek,agendaDay'
          },
          buttonIcons: { // note the space at the beginning
              prev:    ' fa fa-caret-left',
              next:    ' fa fa-caret-right'
          },
          buttonText: {
              today: 'today',
              month: 'month',
              week:  'week',
              day:   'day'
          },
          editable: true,
          droppable: true, // this allows things to be dropped onto the calendar 
          drop: function(date, allDay) { // this function is called when something is dropped
              
              var $this = $(this),
                  // retrieve the dropped element's stored Event Object
                  originalEventObject = $this.data('calendarEventObject');

              // if something went wrong, abort
              if(!originalEventObject) return;

              // clone the object to avoid multiple events with reference to the same object
              var clonedEventObject = $.extend({}, originalEventObject);

              // assign the reported date
              clonedEventObject.start = date;
              clonedEventObject.allDay = allDay;
              clonedEventObject.backgroundColor = $this.css('background-color');
              clonedEventObject.borderColor = $this.css('border-color');

              // render the event on the calendar
              // the last `true` argument determines if the event "sticks" 
              // (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
              calElement.fullCalendar('renderEvent', clonedEventObject, true);
              
              // if necessary remove the element from the list
              if(removeAfterDrop.is(':checked')) {
                $this.remove();
              }
          },
          // This array is the events sources
          events: events,
          defaultView: "agendaWeek",
          selectable: true,
          selectHelper: true,
          select: function(start, end) {
            $scope.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm();
            var title = 'Event';
            var eventData;
            if (title) {
              eventData = {
                title: title,
                start: start,
                end: end
              };
              $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
          }
      });
  }

  /**
   * Creates an array of events to display in the first load of the calendar
   * Wrap into this function a request to a source to get via ajax the stored events
   * @return Array The array with the events
   */
  function createDemoEvents() {
    // Date for the calendar events (dummy data)
    var date = new Date();
    var d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();

    return  [
              {
                  title: 'All Day Event',
                  start: new Date(y, m, 1),
                  backgroundColor: '#f56954', //red 
                  borderColor: '#f56954' //red
              },
              {
                  title: 'Long Event',
                  start: new Date(y, m, d - 5),
                  end: new Date(y, m, d - 2),
                  backgroundColor: '#f39c12', //yellow
                  borderColor: '#f39c12' //yellow
              },
              {
                  title: 'Meeting',
                  start: new Date(y, m, d, 10, 30),
                  allDay: false,
                  backgroundColor: '#0073b7', //Blue
                  borderColor: '#0073b7' //Blue
              },
              {
                  title: 'Lunch',
                  start: new Date(y, m, d, 12, 0),
                  end: new Date(y, m, d, 14, 0),
                  allDay: false,
                  backgroundColor: '#00c0ef', //Info (aqua)
                  borderColor: '#00c0ef' //Info (aqua)
              },
              {
                  title: 'Birthday Party',
                  start: new Date(y, m, d + 1, 19, 0),
                  end: new Date(y, m, d + 1, 22, 30),
                  allDay: false,
                  backgroundColor: '#00a65a', //Success (green)
                  borderColor: '#00a65a' //Success (green)
              },
              {
                  title: 'Open Google',
                  start: new Date(y, m, 28),
                  end: new Date(y, m, 29),
                  url: '//google.com/',
                  backgroundColor: '#3c8dbc', //Primary (light-blue)
                  borderColor: '#3c8dbc' //Primary (light-blue)
              }
          ];
  }

  function inlineCalendar() {
    $scope.today = function () {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function () {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  }


  $scope.submitForm = function () {
    var formData = {
      appointment: $scope.appointment
    };
    console.log(formData);

    $http.post('/api/appointment', JSON.stringify(formData))
      .success(function (data, status, headers) {
        console.log(data);
      });
  };

  // When dom ready, init calendar and events
  $(function() {

    // The element that will display the calendar
    var calendar = $('#calendar');

    var demoEvents = createDemoEvents();

    initCalendar(calendar, demoEvents);
    inlineCalendar();

    // Once date is picked from inline calendar, goes to date in full calendar
    $scope.datePicked = function (dt) {
      calendar.fullCalendar('gotoDate', dt);
    };

    $scope.appointment = {
      scripts:   ['Hello', 'World', 'Jae'],
      dateTime:  new Date().toString(),
      status:    'Scheduled',
      recurring: 'One-off'
    };

  });


  $scope.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function () {
    ngDialog.openConfirm({
      template: 'dialogWithNestedConfirmDialogId',
      className: 'ngdialog-theme-default',
      preCloseCallback: function(value) {

        var nestedConfirmDialog = ngDialog.openConfirm({
          template:
          '<p>Are you sure you want to close?</p>' +
          '<div>' +
          '<button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No' +
          '<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes' +
          '</button></div>',
          plain: true,
          className: 'ngdialog-theme-default'
        });

        return nestedConfirmDialog;
      },
      scope: $scope
    })
      .then(function(value){
        console.log('resolved:' + value);
        // Perform the save here
      }, function(value){
        console.log('rejected:' + value);

      });
  };

}]);