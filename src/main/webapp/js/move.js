$(document).ready(function() {

    var start = "Ping";
    var view = {};

    var Img = document.createElement("img");
    Img.setAttribute("id", "vue");
    Img.setAttribute("src", "../img/" + start + ".jpg");
    var div_game = document.getElementById("jeu");
    var div_links = document.getElementById("liens");
    var div_pnjs = document.getElementById("pnjs");
    div_game.insertBefore(Img,div_links);
    div_game.insertBefore(Img,div_pnjs);


    changeView(start);

    function show(view){
        div_links.innerHTML = "";
        div_pnjs.innerHTML="";
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
        if(view.pnjs != null){
            var pnjs = view.pnjs;
            var length = pnjs.length;
            for(var i=0; i<length; i++){
                var pnj = document.createElement("img");
                pnj.setAttribute("src", "../img/" + pnjs[i].icone + ".png");
                pnj.setAttribute("id", pnjs[i]._id);
                pnj.style.marginLeft = pnjs[i].x + "%";
                pnj.style.marginTop = pnjs[i].y + "%";
                pnj.style.width = pnjs[i].size + "%";
                div_pnjs.appendChild(pnj);
            }
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

    function getPnj(_id){
        var pnjs = view.pnjs;

        for(var i = 0; i<pnjs.length; i++){
            if(_id == pnjs[i]._id){
                pnj = pnjs[i]
            }
        }
        return pnj;
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

    $("#pnjs").on("click","img",function(){
        var pnj=getPnj(this.getAttribute("id"));

        var nom_PNJ = pnj.name;
        var texte = pnj.text;
        var oui = document.createElement("img");
        oui.setAttribute("id", "oui");
        oui.setAttribute("src", "../img/oui.jpg");
        oui.style.width = "7%";
        document.getElementById("reponse").appendChild(oui);

        var non = document.createElement("img");
        non.setAttribute("id", "non");
        non.setAttribute("src", "../img/non.jpg");
        non.style.width = "7%";
        document.getElementById("reponse").appendChild(non);

        document.getElementById("nom_PNJ").innerHTML = nom_PNJ;
        document.getElementById("zone_texte").innerHTML = texte;

        var Croix = document.createElement("img");
        Croix.setAttribute("id", "croix");
        Croix.setAttribute("src", "../img/Croix.png");
        Croix.style.width = "3%";
        document.getElementById("quitter_dialogue").appendChild(Croix);
        div_links.style.display = "none";
    });

    $("#quitter_dialogue").on("click","img",function(){
        document.getElementById("nom_PNJ").innerHTML = "";
        document.getElementById("zone_texte").innerHTML = "";
        document.getElementById("reponse").innerHTML = "";
        document.getElementById("quitter_dialogue").innerHTML = "";
        div_links.style.display = "block";
    });

    $("#reponse").on("click","img",function(){
        var id = this.getAttribute("id");
        if (id == "oui"){
            document.getElementById("zone_texte").innerHTML = pnj.accept;
        }
        if (id == "non"){
            document.getElementById("zone_texte").innerHTML = pnj.decline;
        }
        document.getElementById("reponse").innerHTML = "";
    });
});