//=======================================//
// ====== FUNCTIONALITIES PART - 3 ======//
//=======================================//

$(document).ready(function(){
    var rolUsuario = getCookie("rol");
    
    //Si el rol es estudiante tiene acceso a las siguientes funcionalidades
    /**
     * Poder subir contenido a los entregadores -> HECHO
     * Ver las calificaciones de la asignatura -> HECHO
     * Pedir una revisión para una calificación -> HECHO
     * Descargarse calificaciones para una asignatura -> HECHO
     * Ver un calendario de la asignatura -> HECHO
     * Interaccion a traves de foros -> HECHO
     * Inscribirse en un grupo de trabajo -> FALTA
     * 
     */
    //Si el rol es profesor tiene acceso a las siguientes funcionalidades
    /**
     * Subir nuevo contenido a la asignatura -> HECHO
     * Crear un nuevo entregable en la asignatura -> HECHO
     * Crear actividades en la asignatura -> HECHO
     * Calificar una actividad -> HECHO
     * Descargarse las calificaciones de los estudiantes en Excel -> HECHO
     * Interactuar a través de foros -> HECHO
     */
    //Si el rol es admin tiene acceso a las siguientes funcionalidades
    /**
     * Crear una nueva asignatura -> FALTA
     * Archivar una asignatura existente -> FALTA
     * Definir o cambiar los profesores que dan una asignatura -> FALTA
     * Matricular un estudiante en la asignatura -> FALTA
     * Eliminar un estudiante que esté matriculado en una asignatura -> FALTA
     */
    if(rolUsuario === "Estudiante"){
        //Hacemos visible la posibilidad de enviar una solicitud
        $("#solicitar-revision").show();
        $("#solicitar-revision").click(function(){
            alert("Solicitud enviada.");
        });
        $(".borrar-contenido").css({
            "display":"none"
        });
        $(".contenido-corrector").css({
            "display":"none"
        });
        $(".contenido-agregar").css({
            "display":"none"
        });
        $(".contenido-actividad-agregar").css({
            "display":"none"
        });
    }else if(rolUsuario === "Profesor"){
        $(".borrar-contenido").click(function(){
            if(confirm("¿Estás seguro que desas borrar el contenido seleccionado?")){
                $(this).parent().css({
                    "display" :"none"
                });
            }
        });
        $(".contenido-corrector").click(function(){
            alert("Las notas acaban de ser publicadas satisfactoriamente.");
        });
    }
});

//======================================//
// ====== MIS ASIGNATURAS SECTION ======//
//======================================//

//Comprobamos al cargar la página el rol que tiene el usuario

$(document).ready(function(){

    //Primeramente ocultamos aquellas vistas que no van a ser usadas por defecto
    $(".calificacionesAsignatura").hide();
    $(".estudiantesAsignatura").hide();
    $(".foroAsignatura").hide();
    $(".tabla-user-estudiante").hide();
    $(".mostrarEstudiantesAsignatura").hide();
    $(".side-menu-estudiantes").parent().hide();

    $(".mostrarContacto").hide();
    $(".mostrarNotificaciones").hide();
    $(".mostrarCalificacionesAsignatura").hide();
    $(".mostrarForoAsignatura").hide();
    $(".mostrarContenidoAsignatura").hide();
    $(".mostrarEstudiantesAsignatura").hide();
    $(".mostrarRestoAsignaturas").hide();
    $(".side-menu-estudiantes").parent().hide();
    $(".side-menu-asignaturas").parent().hide();
    $(".side-menu-asignatura-profe").parent().hide();
    $(".side-menu-contacto").parent().hide();
    $(".side-menu-calificaciones").parent().hide();
    $(".side-menu-notificaciones").parent().hide();
    $(".side-menu-foro").parent().hide();

    $(".administrador-elementos-agregar").hide();
    $(".administrador-elementos-archivar").hide();
    $(".administrador-elementos-config").hide();
    $(".side-menu-agregar-asignatura").parent().hide();
    $(".side-menu-archivar-asignatura").parent().hide();
    $(".side-menu-configurar-asignatura").parent().hide();


    var rolUsuario = getCookie("rol");
    //Ocultamos al estudiante las vistas a las que no tiene acceso
    if(rolUsuario === "Estudiante"){
        var contenedorPadre = document.getElementById("asignaturas-grado");
        var grado = getCookie("grado");
        $(".mostrarRestoAsignaturas").show();
        $(".mostrarNotificaciones").show();
        $(".mostrarContacto").show();
        $(".side-menu-contacto").parent().show();
        $(".side-menu-notificaciones").parent().show();
        $(".side-menu-asignaturas").parent().show();

        $(".contenidoAsignatura").hide();

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
            $(".mostrarEstudiantesAsignatura").show();
            $(".side-menu-estudiantes").parent().show();
        });
        $(".enlace-interfaces").click(function(){
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
            $(".side-menu-estudiantes").parent().show();
        });

    }
    else if(rolUsuario === "Profesor"){

        $(".restoAsignaturas").hide();
        $(".mostrarEstudiantesAsignatura").show();
        $(".mostrarCalificacionesAsignatura").show();
        $(".mostrarForoAsignatura").show();
        $(".mostrarContenidoAsignatura").show();
        $(".mostrarNotificaciones").show();

        $(".side-menu-contenido-asignatura-profe").parent().show();
        $(".side-menu-estudiantes").parent().show();
        $(".side-menu-calificaciones").parent().show();
        $(".side-menu-notificaciones").parent().show();
        $(".side-menu-foro").parent().show();

        $(".enlace-interfaces").click(function(){
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
            $(".side-menu-estudiantes").parent().show();
        });



    }else if(rolUsuario === "Administrador"){

        $(".contenidoAsignatura").hide();

        var contenedorPadre = document.getElementById("asignaturas-grado");
        //Creamos el bloque donde se insertarán las asignaturas
        var bloque_asignaturas = document.createElement("ul");
        bloque_asignaturas.className = "lista_asignaturas";

        document.getElementById("asignaturas-grado").innerHTML ="<i class='fa fa-caret-down grado-arrow' aria-hidden='true'></i>&nbsp;&nbsp;<span class='nombre-grado'>Grado en Ingeniería Informática"+"</span>";

        bloque_asignaturas.innerHTML = "<li class='asignatura-grado'>Interfaces de Usuario</li><li class='asignatura-grado'>Redes de Ordenadores</li><li class='asignatura-grado'>Arquitectura de Computadores</li><li class='asignatura-grado'>Ingeniería del Software</i></li><li class='asignatura-grado'>Heurística y Optimización</li>";

        //Indicamos al contenedor padre cual es su contendor hijo nuevo
        contenedorPadre.appendChild(bloque_asignaturas);

        $(".administrador-elementos-agregar").show();
        $(".administrador-elementos-archivar").show();
        $(".administrador-elementos-config").show();

    }


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

//============================//
// ====== FORO SECTION ====== //
//============================//

//Inserta una resspuesta en el foro
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

    //============================================//
    // ====== CHANGE CENTER COLUMN SECTION ====== //
    //============================================//

    if(getCookie("rol") === "Estudiante"){

        //=================================//
        // ====== SIDE MENU SECTION ====== //
        //=================================//

        //Aplicamos CSS para dar valores por defecto a algunos items de los menus
        $(".side-menu-asignaturas").parent().css({
            "color":"#000099",
            "font-weight":"bold",
            "background-color":"rgba(117, 169, 249,0.6)"
        });
        $(".mostrarRestoAsignaturas").css({
            "color":"#000099",
            "font-weight":"bold"
        });

        //Cambiamos los campos del menu lateral al hacer click en mis asignaturas
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
            $(".side-menu-estudiantes").parent().css({
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
            $("side-menu-estuduiantes").parent().hide();
        });
        //Cambiamos los campos del menu lateral al hacer click en calificaciones
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
            $(".side-menu-estudiantes").parent().css({
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
            $(".estudiantesAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideDown(800);
        });
        //Cambiamos los campos del menu lateral al hacer click en contacto
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
        //Cambiamos los campos del menu lateral al hacer click en notificaciones
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
            $(".side-menu-estudiantes").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
        });
        //Cambiamos los campos del menu lateral al hacer click en el foro
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
            $(".side-menu-estudiantes").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".restoAsignaturas").slideUp(800);
            $(".estudiantesAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideDown(800);
        });
        //Cambiamos los campos del menu lateral al hacer click en el foro
        $(".side-menu-estudiantes").click(function(){
            $(".side-menu-estudiantes").parent().css({
                "color":"#000099",
                "font-weight":"bold",
                "background-color":"rgba(117, 169, 249,0.6)"
            });
            $(".side-menu-foro").parent().css({
                "color":"#000099",
                "font-weight":"normal",
                "background-color":"transparent"
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
            $(".alumnos").show();
            $(".contenidoAsignatura").slideUp(800);
            $(".restoAsignaturas").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideDown(800);
        });

        //=====================================//
        // ======= DESKTOP MENU SECTION ====== //
        //=====================================//

        //Cambiamos los campos del menu izquierdo al hacer click en mis asignaturas
        $(".mostrarRestoAsignaturas").click(function(){
            $(".mostrarRestoAsignaturas").css({
                "color":"#000099",
                "font-weight":"bold"
            });
            $(".mostrarCalificacionesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarEstudiantesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".contenidoAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideUp(800);
            $(".restoAsignaturas").slideDown(800);
            $(".mostrarForoAsignatura").hide();
            $(".mostrarCalificacionesAsignatura").hide();
            $(".mostrarEstudiantesAsignatura").hide();
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
            $(".mostrarEstudiantesAsignatura").css({
                "color":"#000",
                "font-weight":"normal"
            });
            $(".mostrarForoAsignatura").hide();
            $(".mostrarCalificacionesAsignatura").hide();
            $(".mostrarEstudiantesAsignatura").hide();

            $(".contenidoAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideUp(800);
            $(".restoAsignaturas").slideDown(800);
            $(".side-menu-foro").parent().hide();
            $(".side-menu-calificaciones").parent().hide();
            $(".side-menu-estudiantes").parent().hide();
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
            $(".estudiantesAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideDown(800);
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
            $(".mostrarCalificacionesAsignatura").css({
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
            //MOstramos la tabla del usuario
            $(".alumnos").show();
            $(".tabla-user-estudiante").show();
            document.getElementById("nombre-usuario-calificaciones").innerHTML = getCookie("nameSurname");
            $(".contenidoAsignatura").slideUp(800);
            $(".restoAsignaturas").slideUp(800);
            $(".foroAsignatura").slideUp(800);
            $(".calificacionesAsignatura").slideUp(800);
            $(".estudiantesAsignatura").slideDown(800);
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
            window.open("https://aplicaciones.uc3m.es/directorio/");
        });
    }else if(rolUsuario === "Profesor"){

        //Ocultamos la vista de las asignaturas de los estudiantes
        $(".restoAsignaturas").hide();
        
        //Aplicamos CSS a algunos elementos del menu
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
            $(".alumnos").show();
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
            window.open("https://aplicaciones.uc3m.es/directorio/");
        });
    }
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

//==================================//
// ===== NOTIFICATION BUTTON ====== //
//==================================//

$(".mostrarNotificaciones").click(function(){
    document.getElementById("notif-modal").style.display = "block";
});
$(".side-menu-notificaciones").click(function(){
    document.getElementById("notif-modal").style.display = "block";
});
$("#aceptar-notif").click(function(){
    document.getElementById("notif-modal").style.display = "none";
});

//==================================//
// ======= ENTREGA BUTTON ======== //
//==================================//
$(".contenido-asignatura-entregador-enlace").click(function(){
    document.getElementById("entrega-modal").style.display = "block";
});
$("#aceptar-entrega").click(function(){
    document.getElementById("entrega-modal").style.display = "none";
});

//==================================//
// ======= SUBIR BUTTON ======== //
//==================================//
$(".contenido-agregar-documento").click(function () {
    document.getElementById("subir-modal").style.display = "block";
});
$("#aceptar-subir").click(function () {
    document.getElementById("subir-modal").style.display = "none";
});

//==================================//
// === SUBIR ACTIVIDAD BUTTON ===== //
//==================================//
$(".contenido-actividad-agregar-documento").click(function () {
    document.getElementById("actividad-modal").style.display = "block";
});
$("#aceptar-actividad").click(function () {
    document.getElementById("actividad-modal").style.display = "none";
});

//==================================//
// === AGREGAR ASIGNATURA BUTTON === //
//==================================//
$(".administrador-elementos-agregar").click(function () {
    document.getElementById("agregar-modal").style.display = "block";
});
$("#aceptar-agregar").click(function () {
    document.getElementById("agregar-modal").style.display = "none";
});

$(".side-menu-agregar-asignatura").click(function () {
    document.getElementById("agregar-modal").style.display = "block";
});

//==================================//
// ======= ARCHIVAR BUTTON ======= //
//==================================//
$(".administrador-elementos-archivar").click(function () {
    document.getElementById("archivar-modal").style.display = "block";
});
$(".side-menu-archivar-asignatura").click(function () {
    document.getElementById("archivar-modal").style.display = "block";
});
$("#aceptar-archivar").click(function () {
    document.getElementById("archivar-modal").style.display = "none";
});

//==================================//
// ====== CONFIGURAR BUTTON ======= //
//==================================//
$(".administrador-elementos-config").click(function () {
    document.getElementById("configuracion-modal").style.display = "block";
});
$("#aceptar-configuracion").click(function () {
    document.getElementById("configuracion-modal").style.display = "none";
});
$(".side-menu-configurar-asignatura").click(function () {
    document.getElementById("configuracion-modal").style.display = "block";
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