

function iterate(){
    //create config json object
    var config = {}
    config.name =  $("#name").val();
    config.zip = $("#zip").val();
    config.city_id = $("#city_select").val();
    config.subjects=[];
    config.id = $.now();
    if($('#none').prop('checked')){
        config.subjects.push("noNews");
    }
    else{
        $('.md-check').each(function(index){
        
        if($(this).prop('checked')){
            config.subjects.push($(this).prop('id'));
            }
        })  
    }
    
    if(config.name == "" || config.subjects.length<1){
        console.log("no subject");
        $('#checkWarning').modal('show');
    }
    else{
       var config = JSON.stringify(config);
       console.log(config);
     $.ajax({
          url: 'php/config.php',
          dataType: "text",
          data: { data: config },
          method: "POST"
        });
        $('#basic').modal('show');
    }
    
}


function make_city_select(city_data)
{
    console.log('hello');
    var html = '<select id="city_select" >';
    
    for(var i = 0; i < 300; i++)
    {
        var city = city_data[i];
        if(city.country == "US")
        {
            html += '<option value="'+ city['_id'] +'">'+ city.name + '</option>';
        }
    }
    
    html += '</select>';
    $('#city_select_wrapper').html(html);
}


function get_city_mapping()
{
    $.get("/smart_mirror/city.list.us.json")
        .done(function(data) {
            make_city_select(data);
        })
        .fail(function(data, status) {
            console.log("Failed to make get request: "+status+" "+data);
        });
}


$(document).ready(function() {
    get_city_mapping();
    
    $('#submitConfigs').click(function(){
        iterate();
        });

});
