//Abrimos el modal con las siguientes variables
var modal = document.getElementById("calendar-modal-container");
var btn = document.getElementById("openModal");
var btn2 = document.getElementById("openModalPhone");
var span = document.getElementsByClassName("close")[0];

span.onclick = function(){
    modal.style.display = "none";
}

btn.onclick = function(){
    modal.style.display = "block";
}

btn2.onclick = function(){
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
$(document).ready(function(){
    $("#calendarModal").simpleCalendar();
});
$("#calendarModal").simpleCalendar({
    //Defaults options below
    //string of months starting from january
    months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    days: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
    displayYear: true,              // Display year in header
    fixedStartDay: true,            // Week begin always by monday or by day set by number 0 = sunday, 7 = saturday, false = month always begin by first day of the month
    displayEvent: true,             // Display existing event
    disableEventDetails: false, // disable showing event details
    disableEmptyDetails: false, // disable showing empty date details
    events: [
        {
            startDate: new Date(2020,10,05),
            endDate: new Date(2020,10,05),
            summary: "Entrega de la practica 2"
        },
        {
            startDate: new Date(2020,10,02),
            endDate: new Date(2020,10,02),
            summary: "Entrega de memoria - Ingeniería del software"
        },
        {
            startDate: new Date(2020,10,06),
            endDate: new Date(2020,10,06),
            summary: "Entrega práctica redes - Redes y Ordenadores"
        },
        {
            startDate: new Date(2020,10,08),
            endDate: new Date(2020,10,08),
            summary: "Entrega de práctica 1 - Heurística "
        },
        {
            startDate: new Date(2020,10,10),
            endDate: new Date(2020,10,10),
            summary: "Test nivel de red - Redes y Ordenadores"
        },
        {
            startDate: new Date(2020,10,18),
            endDate: new Date(2020,10,18),
            summary: "Examen nivel de red - Redes y Ordenadores"
        }
    ],                     // List of events
    onInit: function (calendar) {}, // Callback after first initialization
    onMonthChange: function (month, year) {}, // Callback on month change
    onDateSelect: function (date, events) {}, // Callback on date selection
    onEventSelect: function() { $(this).data('event')}, // Callback on event selection - use $(this).data('event') to access the event
    onEventCreate: function( $el ) {},          // Callback fired when an HTML event is created - see $(this).data('event')
    onDayCreate:   function( $el, d, m, y ) {}  // Callback fired when an HTML day is created   - see $(this).data('today'), .data('todayEvents')
});