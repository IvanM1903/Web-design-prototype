//============================//
// ====== FORO METHODS ====== //
//============================//

function insertarRespuesta(i){
    var contenedor;
    var bloque_a_insertar;
    var bloque_texto;
    var bloque_usuario;
	var name = getCookie("nameSurname");

    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var day = date.getDay()+1;
    var month = date.getMonth()+1;
	var year = date.getFullYear();

    bloque_a_insertar = document.createElement("div");
    bloque_texto = document.createElement("div");
    bloque_usuario = document.createElement("div");


    contenedor = document.getElementsByClassName("tema-preguntas-respuestas")[i];
    contenedor.appendChild(bloque_a_insertar);

    bloque_texto.className = "tema-texto";
    bloque_usuario.className = "contenido-foro-usuario";

    bloque_texto.innerHTML = document.getElementsByClassName("respuesta")[i].value;
    bloque_a_insertar.appendChild(bloque_texto);

    bloque_usuario.innerHTML = "<img src='images/user.png' alt='imagen de usuario'>"+ name +" "+hour+":"+minute+" --- "+day+" / "+month+" / "+year;
    bloque_a_insertar.appendChild(bloque_usuario);
    bloque_a_insertar.className = "tema-respuesta col-12";

    //Evitamos que se recargue la pagina con el formulario
    $('.formularioRespuestaForo').on('submit',function(event){
        event.preventDefault();
    });
}

//============================================//
// ====== CHANGE CENTER COLUMN SECTION ====== //
//============================================//

$(document).ready(function(){

    //================================//
    // ====== CALENDAR SECTION ====== //
    //================================//


    $(".calendar-container").simpleCalendar();
    

    $(".calendar-container").simpleCalendar({
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
    

    $(".side-menu-asignaturas").parent().css({
        "color":"#000099",
        "font-weight":"bold",
        "background-color":"rgba(117, 169, 249,0.6)"
    });
    $(".mostrarRestoAsignaturas").css({
        "color":"#000099",
        "font-weight":"bold"
    });
    $(".calificacionesAsignatura").hide();
    $(".estudiantesAsignatura").hide();
    $(".foroAsignatura").hide();
    $(".contenidoAsignatura").hide();
    $(".tabla-user-estudiante").hide();
    $(".side-menu-calificaciones").parent().hide();
    $(".side-menu-foro").parent().hide();
    $(".side-menu-asignatura-profe").parent().hide();
    $(".mostrarCalificacionesAsignatura").hide();
    $(".mostrarForoAsignatura").hide();
    $(".mostrarContenidoAsignatura").hide();

    if(getCookie("rol") === "Estudiante"){ 

        //=================================//
        // ====== SIDE MENU SECTION ====== //
        //=================================//

        $(".side-menu-asignaturas").click(function(){
            $(".side-menu-asignaturas").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-calificaciones").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".restoAsignaturas").slideDown(800);
            $(".side-menu-foro").parent().hide();
            $(".side-menu-calificaciones").parent().hide();
        });
        $(".side-menu-calificaciones").click(function(){
            $(".side-menu-calificaciones").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-asignaturas").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            //Ocultamos la tabla del resto de alumnos
            $(".alumnos").hide();
            //MOstramos la tabla del usuario
            $(".tabla-user-estudiante").show();
            document.getElementById("nombre-usuario-calificaciones").innerHTML = getCookie("nameSurname");
            $(".contenidoAsignatura").slideUp(800);
            $(".restoAsignaturas").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideDown(800);
        });
        $(".side-menu-contacto").click(function(){
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-calificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-asignaturas").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-foro").parent().hide();
            $(".side-menu-calificaciones").parent().hide();
        });
        $(".side-menu-notificaciones").click(function(){
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-calificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-asignaturas").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
        });
        $(".side-menu-foro").click(function(){
            $(".side-menu-foro").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-calificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-asignaturas").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".restoAsignaturas").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideDown(800);
        });

        //=====================================//
        // ======= DESKTOP MENU SECTION ====== //
        //=====================================//

        $(".mostrarRestoAsignaturas").click(function(){
            $(".mostrarRestoAsignaturas").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".restoAsignaturas").slideDown(800);
            $(".mostrarForoAsignatura").hide();
            $(".mostrarCalificacionesAsignatura").hide();
        });
        $(".enlace-inicio").click(function(){
            $(".mostrarRestoAsignaturas").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".restoAsignaturas").slideDown(800);
        });
        $(".mostrarForoAsignatura").click(function(){
            $(".mostrarForoAsignatura").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarContenidoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarRestoAsignaturas").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".restoAsignaturas").slideUp(800);
            $(".foroAsignatura").slideDown(800);
        });
        $(".mostrarCalificacionesAsignatura").click(function(){
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarContenidoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarForoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarRestoAsignaturas").css({
                "color":"#000",
                "font-weight":"normal"
            });
            //Ocultamos la tabla del resto de alumnos
            $(".alumnos").hide();
            //MOstramos la tabla del usuario
            $(".tabla-user-estudiante").show();
            document.getElementById("nombre-usuario-calificaciones").innerHTML = getCookie("nameSurname");
            $(".contenidoAsignatura").slideUp(800);
            $(".restoAsignaturas").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideDown(800);
        });
        $(".mostrarContacto").click(function(){
            $(".mostrarContacto").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarContenidoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarForoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarEstudiantesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            window.location.href = "https://aplicaciones.uc3m.es/directorio/";
        });
        
    }else{

        //Ocultamos el menu de las asignaturas de los estudiantes
        $(".restoAsignaturas").hide();
        //Hacemos visibles el contenido de la asignatura por defecto --> Interfaces de usuario
        $(".contenidoAsignatura").show();
        $(".mostrarContenidoAsignatura").show();
        $(".mostrarCalificacionesAsignatura").show();
        $(".mostrarForo").show();
        //Ocultamos la opcion del menu izquierdo --> Mis asignaturas
        $(".side-menu-asignaturas").parent().hide();
        $(".side-menu-calificaciones").parent().show();
        $(".side-menu-foro").parent().show();
        $(".side-menu-asignatura-profe").parent().show();
        $(".side-menu-asignatura-profe").parent().css({
            "color":"#000099",
            "font-weight":"bold",
            "background-color":"rgba(117, 169, 249,0.6)"
        });
        $(".mostrarContenidoAsignatura").css({
            "color":"#000099",
            "font-weight":"bold"
        });

        //=================================//
        // ====== SIDE MENU SECTION ====== //
        //=================================//
        $(".side-menu-asignatura-profe").click(function(){
            $(".side-menu-asignatura-profe").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-estudiantes").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-calificaciones").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-foro").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".estudiantesAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".contenidoAsignatura").slideDown(800);
        });  
        $(".side-menu-estudiantes").click(function(){
            $(".side-menu-estudiantes").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-calificaciones").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-foro").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-asignatura-profe").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideDown(800);
        });       

        $(".side-menu-calificaciones").click(function(){
            $(".side-menu-calificaciones").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-asignatura-profe").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-estudiantes").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-foro").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideDown(800);
        });
        $(".side-menu-contacto").click(function(){
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-calificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-asignaturas").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-asignatura-profe").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
        });
        $(".side-menu-notificaciones").click(function(){
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-calificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-asignaturas").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
        });
        $(".side-menu-foro").click(function(){
            $(".side-menu-foro").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-calificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-asignatura-profe").parent().css({
                "color":"#000",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-contacto").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".side-menu-notificaciones").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideDown(800);
        });

        //=====================================//
        // ======= DESKTOP MENU SECTION ====== //
        //=====================================//

        $(".mostrarContenidoAsignatura").click(function(){
            $(".mostrarContenidoAsignatura").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarEstudiantesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarForoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".calificacionesAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".contenidoAsignatura").slideDown(800);
        });
        $(".mostrarEstudiantesAsignatura").click(function(){
            $(".mostrarEstudiantesAsignatura").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarContenidoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarForoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideDown(800);
        });
        $(".mostrarForoAsignatura").click(function(){
            $(".mostrarForoAsignatura").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarContenidoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarEstudiantesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideUp(800);
            $(".foroAsignatura").slideDown(800);
        });
        $(".mostrarCalificacionesAsignatura").click(function(){
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarContenidoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarForoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarEstudiantesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideDown(800);
        });
        $(".mostrarContacto").click(function(){
            $(".mostrarContacto").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarContenidoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarForoAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarEstudiantesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            window.location.href = "https://aplicaciones.uc3m.es/directorio/";
        });
    }
});

//======================================//
// ====== MIS ASIGNATURAS SECTION ======//
//======================================//

//Comprobamos al cargar la página el rol que tiene el usuario

$(document).ready(function(){
    var rolUsuario = getCookie("rol");
    //Ocultamos al estudiante las vistas a las que no tiene acceso
    if(rolUsuario === "Estudiante"){
        var contenedorPadre = document.getElementById("asignaturas-grado");
        var grado = getCookie("grado");
        $(".mostrarEstudiantesAsignatura").hide();
        $(".side-menu-estudiantes").parent().hide();
        $(".mostrarRestoAsignaturas").show();


        //Creamos el bloque donde se insertarán las asignaturas
        var bloque_asignaturas = document.createElement("ul");
        bloque_asignaturas.className = "lista_asignaturas";

        document.getElementById("asignaturas-grado").innerHTML ="<i class='fa fa-caret-down grado-arrow' aria-hidden='true'></i>&nbsp;&nbsp;<span class='nombre-grado'>Grado en "+ grado+"</span>";

        //Escribimos las asignaturas del estudiante dependiendo de su grado
        if(grado === "Ingeniería Informática"){
            bloque_asignaturas.innerHTML = "<li class='asignatura-grado'>Interfaces de Usuario</li><li class='asignatura-grado'>Redes de Ordenadores</li><li class='asignatura-grado'>Arquitectura de Computadores</li><li class='asignatura-grado'>Ingeniería del Software</li><li class='asignatura-grado'>Heurística y Optimización</li>";
        }else if(grado === "Ingeniería Aeroespacial"){
            bloque_asignaturas.innerHTML = "<li class='asignatura-grado'>Aerodinámica I</li><li class='asignatura-grado'>Fundamentos de Ingeniería Electrónica</li><li class='asignatura-grado'>Estructuras Aeroespaciales</li><li class='asignatura-grado'>Sistemas e Instalaciones del Avión</li><li class='asignatura-grado'>Humanidades II</li><li class='asignatura-grado'>Propulsión Aeroespacial I</li>";
        }else if(grado === "Ingeniería Biomédica"){
            bloque_asignaturas.innerHTML = "<li class='asignatura-grado'>Técnicas de Búsqueda y Uso de la Información</li><li class='asignatura-grado'>Fisiología Médica I</li><li class='asignatura-grado'>Estadística</li><li class='asignatura-grado'>Fenómenos de transporte en biomedicina</li><li class='asignatura-grado'>Ingeniería de Control</li><li class='asignatura-grado'>Instrumentos de medida</li><li class='asignatura-grado'>Hojas de cálculo - Nivel avanzado</li>";
        }else if(grado === "Derecho"){
            bloque_asignaturas.innerHTML = "<li class='asignatura-grado'>Delitos contra las personas y contra la sociedad</li><li class='asignatura-grado'>Contratación y medios de las Administraciones Públicas</li><li class='asignatura-grado'>Derecho procesal penal</li><li class='asignatura-grado'>Derechos Reales</li><li class='asignatura-grado'>El empresario y su estatuto jurídico</li>";
        }else{
            bloque_asignaturas.innerHTML = "No estás matriculado en ninguna asignatura";
        }

        //Indicamos al contenedor padre cual es su contendor hijo nuevo
        contenedorPadre.appendChild(bloque_asignaturas);
    }
    else{
        $(".mostrarEstudiantesAsignatura").show();
        $(".mostrarRestoAsignaturas").hide();
    }

    $(".asignatura-grado").click(function(){
            $(".restoAsignaturas").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".contenidoAsignatura").slideDown(800);
            $(".mostrarRestoAsignaturas").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".side-menu-asignaturas").parent().css({
                "background-color":"transparent",
                "font-weight":"normal"
            });
            $(".mostrarForoAsignatura").show();
            $(".mostrarCalificacionesAsignatura").show();
            $(".side-menu-foro").parent().show();
            $(".side-menu-calificaciones").parent().show();
    });

    //Alternamos la vista de los diferentes contenidos mostrados en las asignaturas
    $(".mis-cursos").click(function(){
        $(".ul-bajo-cursos").toggle("slow");
        $(".mis-cursos-arrow").toggleClass("fa-caret-right");
    });
    $(".estudios-oficiales-toggle").click(function(){
        $(".ul-bajo-estudios-oficiales").toggle("slow");
        $(".estudios-oficiales-arrow").toggleClass("fa-caret-right");
    });
    $(".veinte-toggle").click(function(){
        $(".ul-bajo-veinte").toggle("slow");
        $(".veinte-arrow").toggleClass("fa-caret-right");
    });
    $(".nombre-grado").click(function(){
        $(".lista_asignaturas").toggle("slow");
        $(".grado-arrow").toggleClass("fa-caret-right");
    });


});

//===============================//
// ====== NAV MOBILE MENU ====== //
//===============================//

function openNav() {
	document.getElementById("SideMenuId").style.width = "60%";
}

function closeNav() {
	document.getElementById("SideMenuId").style.width = "0";
}

//==================================//
// ====== USER LOGOUT BUTTON ====== //
//==================================//

$(".user-session-quit").click(function(){
    document.getElementById("logout-modal").style.display = "block";
});
$(".user-session-quit-desktop").click(function(){
    document.getElementById("logout-modal").style.display = "block";
});
$("#aceptar-logout").click(function(){
    setTimeout(function(){
        window.location.replace("index.html");
    },500);
});
$("#rechazar-logout").click(function(){
    document.getElementById("logout-modal").style.display = "none";
});

//============================//
// ====== FORO SECTION ====== //
//============================//

$(document).ready(function(){
    $("#contenido-tema-1").hide();
    $("#contenido-tema-2").hide();
    $("#contenido-tema-3").hide();
    $("#formularioRespuestaForo").hide();
    $(".volver-a-foro").hide();
});
$(".volver-a-foro").click(function(){
    $("#formularioRespuestaForo").fadeOut("slow");
    $("#contenido-tema-1").fadeOut("slow");
    $("#contenido-tema-2").fadeOut("slow");
    $("#contenido-tema-3").fadeOut("slow");
    $("#section-preguntas").delay(600).fadeIn("slow");
    $(".volver-a-foro").hide();
});
$("#foro-tema-1").click(function(){
    $("#section-preguntas").fadeOut("slow");
    $(".volver-a-foro").delay(600).fadeIn("slow");
    $("#contenido-tema-1").delay(600).fadeIn("slow");
    $("#formularioRespuestaForo").delay(600).fadeIn("slow");
});
$("#foro-tema-2").click(function(){
    $("#section-preguntas").fadeOut("slow");
    $(".volver-a-foro").delay(600).fadeIn("slow");
    $("#contenido-tema-2").delay(600).fadeIn("slow");
    $("#formularioRespuestaForo").delay(600).fadeIn("slow");
});
$("#foro-tema-3").click(function(){
    $("#section-preguntas").fadeOut("slow");
    $(".volver-a-foro").delay(600).fadeIn("slow");
    $("#contenido-tema-3").delay(600).fadeIn("slow");
    $("#formularioRespuestaForo").delay(600).fadeIn("slow");
});

//====================================//
// ====== EXCEL EXPORT SECTION ====== //
//====================================//

$("#exportarExcel").click(function(){
    if(getCookie("rol")==="Estudiante"){
        $("#table2excel-alumno").table2excel({
            // exclude CSS class
            exclude: ".noExl",
            name: "Worksheet Name",
            filename: "SomeFile", //do not include extension
            fileext: ".xls" // file extension
        });
    }else{
        $("#table2excel").table2excel({
            // exclude CSS class
            exclude: ".noExl",
            name: "Worksheet Name",
            filename: "SomeFile", //do not include extension
            fileext: ".xls" // file extension
        });
    }
});