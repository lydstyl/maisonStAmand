// Préparer mon dossier
$("input").on("click", function(){
    if($("#dossier").css("display") == "none"){
        $("#dossier").slideDown();
    }else{
        $("#dossier").slideUp();
    }
});