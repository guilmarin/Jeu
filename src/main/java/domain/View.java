package domain;


import org.bson.types.ObjectId;
import org.jongo.marshall.jackson.oid.Id;

import java.util.ArrayList;

public class View {
    @Id
    private ObjectId _id;
    private String name;
    private ArrayList<Link> links;

    public View(ObjectId _id, String name, ArrayList<Link> links) {
        this._id = _id;
        this.links = links;
        this.name = name;
    }

    public View(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        View view = (View) o;

        if (links != null ? !links.equals(view.links) : view.links != null) return false;
        if (name != null ? !name.equals(view.name) : view.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + (links != null ? links.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "View{" +
                "_id=" + _id +
                ", name='" + name + '\'' +
                ", links=" + links +
                '}';
    }
}
