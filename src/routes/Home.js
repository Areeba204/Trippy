import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home (){
    return(
        <>
         <Navbar/>
         <Hero
         cName="hero"
         heroImg="https://images.unsplash.com/photo-1792180338007-12d52bb01595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
         title="Your Journey Your Story"
         text="Choose Your Favourite Destination"
         buttonText="Travel Plan"
         url="/"
         btnClass="show"
         
         
         />
         <Destination/>
         <Trip/>
        
         <Footer/>
        </>
    );
}
export default Home;    