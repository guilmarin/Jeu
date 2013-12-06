package domain;

import org.jongo.marshall.jackson.oid.Id;

public class Link {
    @Id
    private String _id;
    private String icone;
    private int x;
    private int y;
    private int size;
    private String destination;

    public Link(String _id, String icone, int x, int y, int size, String destination) {
        this._id = _id;
        this.icone = icone;
        this.x = x;
        this.y = y;
        this.size = size;
        this.destination = destination;
    }

    public Link(){}

    public String getIcone() {
        return icone;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public void setIcone(String icone) {

        this.icone = icone;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Link link = (Link) o;

        if (size != link.size) return false;
        if (x != link.x) return false;
        if (y != link.y) return false;
        if (destination != null ? !destination.equals(link.destination) : link.destination != null) return false;
        if (icone != null ? !icone.equals(link.icone) : link.icone != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = icone != null ? icone.hashCode() : 0;
        result = 31 * result + x;
        result = 31 * result + y;
        result = 31 * result + size;
        result = 31 * result + (destination != null ? destination.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Link{" +
                "_id='" + _id + '\'' +
                ", icone='" + icone + '\'' +
                ", x=" + x +
                ", y=" + y +
                ", size=" + size +
                ", destination='" + destination + '\'' +
                '}';
    }
}
