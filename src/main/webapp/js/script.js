$(document).ready(function() {
	var vue = "../img/Ping.jpg";
	var Img = document.createElement("img");
	Img.setAttribute("id", "vue");
	Img.setAttribute("src", vue);
	var div_jeu = document.getElementById("jeu");
	var div_liens = document.getElementById("liens");
	div_jeu.insertBefore(Img,div_liens);

	var navig = charge_vue(vue);

	function charge_vue(vue){// Affiche l'image de fond et les liens correspondants.
		div_liens.innerHTML="";
		document.getElementById("vue").src = vue;
		return recupere_liens(vue);
	}
	
	function recupere_liens(vue){// Affiche les liens et retourne la liste des arrivées et icônes.
		// Récupérer les liens dans la BD.
		var liens = base(vue);
		
		// Afficher les liens à l'aide de icone, position_x, position_y, taille.
		
		var n = liens.arrivees.length;
		for(i=0; i<n; i++){
			var lien = document.createElement("img");
			lien.setAttribute("src", liens.icones[i]);
			lien.style.marginLeft = liens.positions_x[i] + "%";
			lien.style.marginTop = liens.positions_y[i] + "%";
			lien.style.width = liens.tailles[i] + "%";
			div_liens.appendChild(lien);
		}
		
		// Garder les arrivées et les icônes dans arrivees et icones.
		
		var arrivees = liens.arrivees;
		var icones = liens.icones;
		return {arrivees : arrivees, icones : icones};
	}

	function base(vue){// Fonction qui remplace la base pour le moment
		var arrivees = new Array();
		var icones = new Array();
		var positions_x = new Array();
		var positions_y = new Array();
		var tailles = new Array();
		if (vue == "../img/Ping.jpg"){
			arrivees.push("../img/Tableau.jpg","../img/Sortie.jpg","../img/Mur.jpg");
			icones.push("../img/Fleche_g.png","../img/Fleche_b.png","../img/Fleche_d.png");
			positions_x.push(35,45,55);
			positions_y.push(65,65,65);
			tailles.push(10,10,10);
		}
		else if (vue == "../img/Mur.jpg"){
			arrivees.push("../img/Ping.jpg","../img/Tableau.jpg","../img/Sortie.jpg");
			icones.push("../img/Fleche_g.png","../img/Fleche_b.png","../img/Fleche_d.png");
			positions_x.push(35,45,55);
			positions_y.push(65,65,65);
			tailles.push(10,10,10);
		}
		else if (vue == "../img/Tableau.jpg"){
			arrivees.push("../img/Sortie.jpg","../img/Mur.jpg","../img/Ping.jpg");
			icones.push("../img/Fleche_g.png","../img/Fleche_b.png","../img/Fleche_d.png");
			positions_x.push(35,45,55);
			positions_y.push(65,65,65);
			tailles.push(10,10,10);
		}
		else if (vue == "../img/Sortie.jpg"){
			arrivees.push("../img/Mur.jpg","../img/Ping.jpg","../img/Tableau.jpg","../img/Fin.jpg");
			icones.push("../img/Fleche_g.png","../img/Fleche_b.png","../img/Fleche_d.png","../img/Porte.png");
			positions_x.push(35,45,55,73);
			positions_y.push(65,65,65,42);
			tailles.push(10,10,10,7);
		}
		
		return {arrivees : arrivees, icones : icones, positions_x : positions_x, positions_y : positions_y, tailles : tailles};	
	}

	$("#liens").on("click","img",function(){
		var icone = this.getAttribute("src");
		var index = navig.icones.indexOf(icone);
		var arrivee = navig.arrivees[index];
		navig = charge_vue(arrivee);
	});
});