package domain;

public class Link {
    private String linkName;
    private int position_x;
    private int position_y;
    private int scale;
    private String direction;

    public Link(String linkName, int position_x, int position_y, int scale, String direction) {
        this.linkName = linkName;
        this.position_x = position_x;
        this.position_y = position_y;
        this.scale = scale;
        this.direction=direction;
    }

    public String getLinkName() {
        return linkName;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public void setLinkName(String linkName) {

        this.linkName = linkName;
    }

    public int getPosition_x() {
        return position_x;
    }

    public void setPosition_x(int position_x) {
        this.position_x = position_x;
    }

    public int getPosition_y() {
        return position_y;
    }

    public void setPosition_y(int position_y) {
        this.position_y = position_y;
    }

    public int getScale() {
        return scale;
    }

    public void setScale(int scale) {
        this.scale = scale;
    }
}
