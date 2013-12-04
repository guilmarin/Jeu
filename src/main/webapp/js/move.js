$(document).ready(function() {

    var view={"name" : "../img/Ping.jpg",
        "links": [{"id" : "leftArrow", "icone":"../img/Fleche_g.png", "x":35, "y":65, "size":10 , "destination":"../img/Tableau.jpg"},
                {"id" : "rightArrow", "icone":"../img/Fleche_d.png", "x":55, "y":65, "size":10 , "destination":"../img/Mur.jpg"},
                {"id" : "downArrow", "icone":"../img/Fleche_b.png", "x":45, "y":65, "size":10 , "destination":"../img/Sortie.jpg"}
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
        document.getElementById("vue").src = view.name;
        var links=view.links;
        n=links.length;
        for(i=0; i<n; i++){
            var link = document.createElement("img");
            link.setAttribute("src", links[i].icone);
            link.setAttribute("id", links[i].id);
            link.style.marginLeft = links[i].x + "%";
            link.style.marginTop = links[i].y + "%";
            link.style.width = links[i].size + "%";
            div_links.appendChild(link);
        }
    }

    $("#liens").on("click","img",function(){
        var id = this.getAttribute("id");
        var links=view.links;
        var destination=view.name;
        for(i=0;i<links.length;i++){
            if(id==links[i].id){
                destination=links[i].destination;
            }
        }

        alert(destination);


    });



});