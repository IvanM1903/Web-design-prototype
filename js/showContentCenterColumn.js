$(document).ready(function(){
    $("#mostrarContenidoAsignatura").css({
        "color":"#000099",
        "font-weight":"bold"
    });
    $("#calificacionesAsignatura").hide();
    $("#estudiantesAsignatura").hide();
    $(".foroAsignatura").hide();

    $("#mostrarContenidoAsignatura").click(function(){
        $("#mostrarContenidoAsignatura").css({
            "color":"#000099",
            "font-weight":"bold"
        });
        $("#mostrarEstudiantesAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#mostrarForoAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#mostrarCalificacionesAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#calificacionesAsignatura").slideUp(800);
        $("#estudiantesAsignatura").slideUp(800);
        $(".foroAsignatura").slideUp(800);
        $("#contenidoAsignatura").slideDown(800);
    });
    $("#mostrarEstudiantesAsignatura").click(function(){
        $("#mostrarEstudiantesAsignatura").css({
            "color":"#000099",
            "font-weight":"bold"
        });
        $("#mostrarContenidoAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#mostrarForoAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#mostrarCalificacionesAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#contenidoAsignatura").slideUp(800);
        $("#calificacionesAsignatura").slideUp(800);
        $(".foroAsignatura").slideUp(800);
        $("#estudiantesAsignatura").slideDown(800);
    });
    $("#mostrarForoAsignatura").click(function(){
        $("#mostrarForoAsignatura").css({
            "color":"#000099",
            "font-weight":"bold"
        });
        $("#mostrarContenidoAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#mostrarEstudiantesAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#mostrarCalificacionesAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#contenidoAsignatura").slideUp(800);
        $("#calificacionesAsignatura").slideUp(800);
        $("#estudiantesAsignatura").slideUp(800);
        $(".foroAsignatura").slideDown(800);
    });
    $("#mostrarCalificacionesAsignatura").click(function(){
        $("#mostrarCalificacionesAsignatura").css({
            "color":"#000099",
            "font-weight":"bold"
        });
        $("#mostrarContenidoAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#mostrarForoAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#mostrarEstudiantesAsignatura").css({
            "color":"#000",
            "font-weight":"normal"
        });
        $("#contenidoAsignatura").slideUp(800);
        $("#estudiantesAsignatura").slideUp(800);
        $(".foroAsignatura").slideUp(800);
        $("#calificacionesAsignatura").slideDown(800);
    });
});