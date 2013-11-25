package domain;

import java.util.ArrayList;

public class View {
    private String backgroundName;
    private ArrayList<Link> links;

    public View(ArrayList<Link> links, String backgroundName) {
        this.links = links;
        this.backgroundName = backgroundName;
    }

    public String getBackgroundName() {
        return backgroundName;
    }

    public void setBackgroundName(String backgroundName) {
        this.backgroundName = backgroundName;
    }

    public ArrayList<Link> getLinks() {
        return links;
    }

    public void setLinks(ArrayList<Link> links) {
        this.links = links;
    }

    public void addLink(Link link){
        links.add(link);
    }
}
