

function mostrarFamilia(){
    let toast = $("#my-form-status");
    toast.show();
    setTimeout(function(){
        toast.hide();
      }, 5000);

    $("#Familia").show();
    $("#Individual").hide();
//botones
    $("#botonFamilia").addClass("activo");
    $("#botonIndividual").removeClass("activo");
}

function mostrarIndividual(){
    $("#Individual").show();
    $("#Familia").hide();

//botones
    $("#botonFamilia").removeClass("activo");
    $("#botonIndividual").addClass("activo");
}

