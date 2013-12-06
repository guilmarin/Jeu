import com.mongodb.DB;
import com.mongodb.MongoClient;
import domain.Link;
import domain.View;
import junit.framework.Assert;
import org.bson.types.ObjectId;
import org.jongo.Jongo;
import org.jongo.MongoCollection;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.net.UnknownHostException;
import java.util.ArrayList;

public class JongoTest {
    private DB db;
    private Jongo jongo;

    @Before
    public void createNewDB() throws UnknownHostException {
        db = new MongoClient().getDB("test");
        jongo = new Jongo(db);

    }

    @After
    public void deleteDB(){
        db.dropDatabase();
    }

    @Test
    public void findJSONTest(){
        MongoCollection views = jongo.getCollection("views");

        views.insert("{name: 'Ping', links: [{id: 'leftArrow', icone: 'Fleche_g', x: 35, y: 65, size: 10, destination: 'Tableau'}," +
                "{id: 'rightArrow', icone: 'Fleche_d', x: 55, y: 65, size: 10, destination: 'Mur'}]}");

        View view_db = views.findOne("{name: 'Ping'}").as(View.class);

        Link link1 = new Link("leftArrow", "Fleche_g", 35, 65, 10, "Tableau");
        Link link2 = new Link("rightArrow", "Fleche_d", 55, 65, 10, "Mur");
        ArrayList<Link> links = new ArrayList<>();
        links.add(link1);
        links.add(link2);
        View view = new View(new ObjectId(), "Ping", links);

        Assert.assertEquals(view, view_db);
    }
}