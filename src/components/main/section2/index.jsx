import "./styles.css";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

export default function Section2() {
  return (
    <section className="section2">
      <div className="container-section2-card1">
        <h3>Ingredients</h3>

        <div className="container-section2-card1-subcard">
          <span id="section2-span">Graham Cracker Crust</span>
          <div id="section2-texts">
            <div id="section2-square"></div>
            <p>
              1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong>{" "}
              (about 10 full sheet
              <br></br> graham crackers)
            </p>
          </div>
          <div id="section2-texts">
            <div id="section2-square"></div>
            <p>
              5 Tablespoons (70g) <strong>unsalted butter</strong>, melted
            </p>
          </div>
          <div id="section2-texts">
            <div id="section2-square"></div>
            <p>
              1/4 cup (50g) <strong>granulated sugar</strong>
            </p>
          </div>
        </div>

        <div className="container-section2-card1-subcard">
          <span id="section2-span">Cheesecake</span>
          <div id="section2-texts">
            <div id="section2-square"></div>
            <p>
              four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>,
              softened to room<br></br> temperature
            </p>
          </div>
          <div id="section2-texts">
            <div id="section2-square"></div>
            <p>
              1 cup (200g) <strong>granulated sugar</strong>
            </p>
          </div>
          <div id="section2-texts">
            <div id="section2-square"></div>
            <p>
              1 cup (240g) full-fat <strong>sour cream</strong>, at room
              temperature
            </p>
          </div>
          <div id="section2-texts">
            <div id="section2-square"></div>
            <p>
              1 teaspoon <strong>pure vanilla extract</strong>
            </p>
          </div>
          <div id="section2-texts">
            <div id="section2-square"></div>
            <p>
              2 teaspoons <strong>fresh lemon juice</strong> (optional, but
              recommended)
            </p>
          </div>
          <div id="section2-texts">
            <div id="section2-square"></div>
            <p>
              3 large <strong>eggs</strong>, at room temperature
            </p>
          </div>
          <div id="section2-texts">
            <div id="section2-square"></div>
            <p>
              topping suggestions:{" "}
              <i>
                salted caramel, lemon curd, strawberry
                <br></br> topping, chocolate ganache, red wine chocolate
                ganache, fresh<br></br> fruit, whipped cream, or raspberry sauce
              </i>
              (recipe in notes)
            </p>
          </div>
        </div>
      </div>

      <div className="container-section2-card2">
        <div className="container-section2-card2-subcard colororange">
          <div className="container-section2-card2-subcard-img-1440">
            <LocalDiningIcon 
            sx={{fontSize:30, color: "orange"}}/>
          </div>

          <div className="container-section2-card2-subcard-img-374">
            <LocalDiningIcon 
            sx={{fontSize:14, color: "orange"}}/>
          </div>

          <div className="container-section2-card2-subcard-information">
            <span>YIELDS</span>
            <p id="colororange">12 servings</p>
          </div>
        </div>

        <div className="container-section2-card2-subcard-flexible">
        <div className="container-section2-card2-subcard">
          <div className="container-section2-card2-subcard-img-1440">
            <WatchLaterOutlinedIcon sx={{fontSize:30}}/>
          </div>

          <div className="container-section2-card2-subcard-img-374">
            <WatchLaterOutlinedIcon sx={{fontSize:14}}/>
          </div>
          <div className="container-section2-card2-subcard-information">
            <span>PREP TIME</span>
            <p>45 minutes</p>
          </div>
        </div>

        <div className="container-section2-card2-subcard">
          <div className="container-section2-card2-subcard-img-1440">
            <WatchLaterOutlinedIcon sx={{fontSize:30}}/>
          </div>

          <div className="container-section2-card2-subcard-img-374">
            <WatchLaterOutlinedIcon sx={{fontSize:14}}/>
          </div>
          <div className="container-section2-card2-subcard-information">
            <span>COOK TIME</span>
            <p>1 hour</p>
          </div>
        </div>

        <div className="container-section2-card2-subcard">
          <div className="container-section2-card2-subcard-img-1440">
            <WatchLaterOutlinedIcon sx={{fontSize:30}}/>
          </div>

          <div className="container-section2-card2-subcard-img-374">
            <WatchLaterOutlinedIcon sx={{fontSize:14}}/>
          </div>
          <div className="container-section2-card2-subcard-information">
            <span>TOTAL TIME</span>
            <p>7,75 hours</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
