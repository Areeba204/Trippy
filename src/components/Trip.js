import "./TripStyles.css";
import TripData  from "./TripData";
import Trip1 from "../assets/05.jpg";
import Trip2  from "../assets/08.jpg";
import Trip3 from "../assets/06.jpg";

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover new destinations using Google Maps</p>
             <div className="tripcard">
                <TripData
                image={Trip1}
                heading= "Trip in Indonesia"
                text="Indonesia is a beautiful travel destination famous for its tropical beaches, green mountains, and cultural attractions. Visitors can explore Bali, enjoy delicious local food, discover ancient temples, and experience breathtaking sunsets. It is a perfect place for nature lovers.
"
                  />
                   <TripData
                image={Trip2}
                heading= "Trip in Malaysia"
                text="Malaysia is a beautiful travel destination known for its stunning beaches, lush rainforests, and modern cities. Visitors can explore Kuala Lumpur, admire the famous Petronas Towers, enjoy delicious local food, and discover beautiful islands.
"

                  />
                    <TripData
                image={Trip3}
                heading= "Trip in France"
                text="France is a beautiful travel destination famous for its romantic atmosphere, historic landmarks, and charming streets. Visitors can explore the Eiffel Tower in Paris, admire beautiful architecture, enjoy delicious French cuisine, and discover stunning countryside views.
"
                  />
                  
                </div>     
        </div>
    );
}
export default Trip;