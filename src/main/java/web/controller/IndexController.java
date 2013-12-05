package web.controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {


    @RequestMapping("/getJSON/{destination}")
    @ResponseBody
    public String DummyJSON(@PathVariable String destination) {
        JSONObject jsonObject = new JSONObject();
        JSONObject link1 = new JSONObject();
        JSONObject link2 = new JSONObject();
        JSONObject link3 = new JSONObject();
        JSONArray links = new JSONArray();


        if(destination.equals("Tableau")){
            jsonObject.put("name", "Tableau");


            link1.put("id", "leftArrow");
            link1.put("icone", "Fleche_g");
            link1.put("x", 35);
            link1.put("y", 65);
            link1.put("size", 10);
            link1.put("destination", "Sortie");


            link2.put("id", "rightArrow");
            link2.put("icone", "Fleche_d");
            link2.put("x", 55);
            link2.put("y", 65);
            link2.put("size", 10);
            link2.put("destination", "Ping");


            link3.put("id", "downArrow");
            link3.put("icone", "Fleche_b");
            link3.put("x", 45);
            link3.put("y", 65);
            link3.put("size", 10);
            link3.put("destination", "Mur");
        }

        if(destination.equals("Sortie")){
            jsonObject.put("name", "Sortie");


            link1.put("id", "leftArrow");
            link1.put("icone", "Fleche_g");
            link1.put("x", 35);
            link1.put("y", 65);
            link1.put("size", 10);
            link1.put("destination", "Mur");


            link2.put("id", "rightArrow");
            link2.put("icone", "Fleche_d");
            link2.put("x", 55);
            link2.put("y", 65);
            link2.put("size", 10);
            link2.put("destination", "Tableau");


            link3.put("id", "downArrow");
            link3.put("icone", "Fleche_b");
            link3.put("x", 45);
            link3.put("y", 65);
            link3.put("size", 10);
            link3.put("destination", "Ping");
        }

        if(destination.equals("Mur")){
            jsonObject.put("name", "Mur");


            link1.put("id", "leftArrow");
            link1.put("icone", "Fleche_g");
            link1.put("x", 35);
            link1.put("y", 65);
            link1.put("size", 10);
            link1.put("destination", "Ping");


            link2.put("id", "rightArrow");
            link2.put("icone", "Fleche_d");
            link2.put("x", 55);
            link2.put("y", 65);
            link2.put("size", 10);
            link2.put("destination", "Sortie");


            link3.put("id", "downArrow");
            link3.put("icone", "Fleche_b");
            link3.put("x", 45);
            link3.put("y", 65);
            link3.put("size", 10);
            link3.put("destination", "Tableau");
        }

        if(destination.equals("Ping")){
            jsonObject.put("name", "Ping");


            link1.put("id", "leftArrow");
            link1.put("icone", "Fleche_g");
            link1.put("x", 35);
            link1.put("y", 65);
            link1.put("size", 10);
            link1.put("destination", "Tableau");


            link2.put("id", "rightArrow");
            link2.put("icone", "Fleche_d");
            link2.put("x", 55);
            link2.put("y", 65);
            link2.put("size", 10);
            link2.put("destination", "Mur");


            link3.put("id", "downArrow");
            link3.put("icone", "Fleche_b");
            link3.put("x", 45);
            link3.put("y", 65);
            link3.put("size", 10);
            link3.put("destination", "Sortie");
        }

        links.add(link1);
        links.add(link2);
        links.add(link3);

        jsonObject.put("links", links);

        return jsonObject.toJSONString();
    }


}
