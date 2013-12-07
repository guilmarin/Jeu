package domain;


import org.jongo.marshall.jackson.oid.Id;

import java.util.ArrayList;

public class View {
    @Id
    private String _id;
    private ArrayList<Link> links;

    public View(String _id, ArrayList<Link> links) {
        this.links = links;
        this._id = _id;
    }

    public View(){}

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        View view = (View) o;

        if (links != null ? !links.equals(view.links) : view.links != null) return false;
        if (_id != null ? !_id.equals(view._id) : view._id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = _id != null ? _id.hashCode() : 0;
        result = 31 * result + (links != null ? links.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "View{" +
                "_id='" + _id + '\'' +
                ", links=" + links +
                '}';
    }
}
