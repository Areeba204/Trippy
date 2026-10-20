import Mountain1 from "../assets/01.jpg";
 import Mountain2 from "../assets/02.jpg";
 import Mountain3 from "../assets/05.jpg";
 import Mountain4 from "../assets/04.jpg";
 import "./DestinationStyles.css"
 import DestinationData from "./DesinationData";
 
 
 const Destination=() => {
    return(
        <div className="destination">
        <h1>Popular Destinations</h1>
          <p> Tours give you the opportunity to see a lot, within a time frame</p>
         
<DestinationData
className="first-des" 
     heading="Taal Volcano, Batangas"
     text="Discover the breathtaking beauty of Taal Volcano in Batangas, Philippines, a destination famous for its stunning lake views and remarkable volcanic landscapes. Surrounded by lush greenery and peaceful scenery, this natural wonder offers a memorable escape for nature lovers and adventure seekers. Capture beautiful photographs, explore nearby attractions, and experience the incredible charm of the Philippines with Trippy."
     img1={Mountain1}
     img2={Mountain2} 
/>
<DestinationData 
className="first-des-reverse" 
     heading="Mt.Daguldul, Batangas"
     text="Mount Daguldul in Batangas, Philippines, is a beautiful hiking destination known for its lush forests, peaceful surroundings, and breathtaking mountain views. Nature lovers can enjoy scenic trails, fresh air, and the beauty of tropical plants along the way. Reaching the summit offers a rewarding experience with panoramic views of the surrounding landscape. It is a perfect destination for adventure seekers and outdoor enthusiasts.
"
     img1={Mountain3}
     img2={Mountain4} 
/>
          </div>
          
    );
 } ;
 export default Destination;