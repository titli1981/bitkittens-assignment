$(function(){

    $('.summon-cats').on('click',function(){
        $.ajax({
            url: 'http://bitkittens.herokuapp.com/cats.json',
            method: 'GET',
            data: {},
            dataType:'JSON'
        }).done(function(response){
            var catJSON = response
            var catList = catJSON["cats"];
            var catContainer1 = $("<div>");
            var catContainer2 = $("<div>");
            var catContainer3 = $("<div>");

            $('<img>').attr("src",catList[0]['photo'],"alt","Photo of " + catList[0]['name']).appendTo(catContainer1);
            $('#cat1').html(catContainer1);
            $('<img>').attr("src", catList[1]['photo'], "alt", "Photo of" + catList[1]['name']).appendTo(catcontainer2);
            $('#cat2').html(catContainer2);
            $('<img>').attr("src", catList[2]['photo'], "alt", "Photo of" + catList[2]['name']).appendTo(catContainer3);
            $('#cat3').html(catContainer3);
        });
        console.log("hello")

    });

});
