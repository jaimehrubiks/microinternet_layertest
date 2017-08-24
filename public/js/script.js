function validar(){

    if(         $("#a_mac_src").val() != "AA:AA:AA:AA:AA:AA" )      return false;
    else if (   $("#a_mac_dst").val() != "BB:BB:BB:BB:BB:BB" )      return false;
    else if (   $("#b_mac_src").val() != "CC:CC:CC:CC:CC:CC" )      return false;
    else if (   $("#b_mac_dst").val() != "DD:DD:DD:DD:DD:DD" )      return false;
    else if (   $("#c_mac_src").val() != "EE:EE:EE:EE:EE:EE" )      return false;
    else if (   $("#c_mac_dst").val() != "00:00:00:00:00:00" )      return false;


    else if (   $("#a_ip_src").val() != "192.168.1.2" )      return false;
    else if (   $("#a_ip_dst").val() != "192.168.3.2" )      return false;
    else if (   $("#b_ip_src").val() != "192.168.1.2" )      return false;
    else if (   $("#b_ip_dst").val() != "192.168.3.2" )      return false;
    else if (   $("#c_ip_src").val() != "192.168.1.2" )      return false;
    else if (   $("#c_ip_dst").val() != "192.168.3.2" )      return false;

    else    return true;
}

$("#enviar").click( function() {
    if ( !validar()){
        console.log("error");
    }
    else{
        console.log("correcto");
    }
});

$(".app").on('input',function(e){
    replicate($(this).val());
});

function replicate(val){
    $(".app").each(function(){
        $(this).val(val);
    })
}

