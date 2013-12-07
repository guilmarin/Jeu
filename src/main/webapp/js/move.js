$(document).ready(function() {

    var start = "Ping";
    var view = {};

    var Img = document.createElement("img");
    Img.setAttribute("id", "vue");
    Img.setAttribute("src", "../img/" + start + ".jpg");
    var div_game = document.getElementById("jeu");
    var div_links = document.getElementById("liens");
    div_game.insertBefore(Img,div_links);

    changeView(start);

    function show(view){
        div_links.innerHTML = "";
        document.getElementById("vue").src = "../img/" + view._id + ".jpg";
        var links = view.links;
        n = links.length;
        for(var i=0; i<n; i++){
            var link = document.createElement("img");
            link.setAttribute("src", "../img/" + links[i].icone + ".png");
            link.setAttribute("id", links[i]._id);
            link.style.marginLeft = links[i].x + "%";
            link.style.marginTop = links[i].y + "%";
            link.style.width = links[i].size + "%";
            div_links.appendChild(link);
        }
    }

    function getDestination(_id){
        var links = view.links;
        var destination = view._id;
        for(var i = 0; i<links.length; i++){
            if(_id == links[i]._id){
                destination = links[i].destination;
            }
        }
        return destination;
    }


    function changeView(destination){
        $.ajax({ type: "GET", url:"/getJSON/" + destination, datatype: "json", success: function( newViewString ) {
            var newView = jQuery.parseJSON(newViewString);
            view = newView;
            show(view);}
        });
    }


    $("#liens").on("click","img",function(){
        var _id = this.getAttribute("id");
        var destination = getDestination(_id);
        changeView(destination);
    });
});