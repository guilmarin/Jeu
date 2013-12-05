$(document).ready(function() {

    var view={"name" : "Ping",
        "links": [{"id" : "leftArrow", "icone":"Fleche_g", "x":35, "y":65, "size":10 , "destination":"Tableau"},
                {"id" : "rightArrow", "icone":"Fleche_d", "x":55, "y":65, "size":10 , "destination":"Mur"},
                {"id" : "downArrow", "icone":"Fleche_b", "x":45, "y":65, "size":10 , "destination":"Sortie"}
                ]} ;

    var Img = document.createElement("img");

    Img.setAttribute("id", "vue");
    Img.setAttribute("src", view.name);
    var div_game = document.getElementById("jeu");
    var div_links = document.getElementById("liens");
    div_game.insertBefore(Img,div_links);

    show(view);

    function show(view){
        div_links.innerHTML="";
        document.getElementById("vue").src = "../img/" + view.name + ".jpg";
        var links=view.links;
        n=links.length;
        for(var i=0; i<n; i++){
            var link = document.createElement("img");
            link.setAttribute("src", "../img/" + links[i].icone + ".png");
            link.setAttribute("id", links[i].id);
            link.style.marginLeft = links[i].x + "%";
            link.style.marginTop = links[i].y + "%";
            link.style.width = links[i].size + "%";
            div_links.appendChild(link);
        }
    }

    function getDestination(id){
        var links = view.links;
        var destination = view.name;
        for(var i = 0; i<links.length; i++){
            if(id == links[i].id){
                destination = links[i].destination;
            }
        }
        return destination;
    }


    $("#liens").on("click","img",function(){
        var id = this.getAttribute("id");
        var destination = getDestination(id);
        $.ajax({ type: "GET", url:"/getJSON/" + destination, datatype: "json", success: function( newViewString ) {
            var newView = jQuery.parseJSON(newViewString);
            view = newView;
            show(view);
            }
        });
    });
});