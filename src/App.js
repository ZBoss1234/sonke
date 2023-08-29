import Cards from "./components/Cards";

import Good from "./components/Good";
import Hero from "./components/Hero";
import Mentorship from "./components/Mentorship";
import Young from "./components/Young";
import Review from "./components/Review";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div> 
      <Hero />
      <Young />
       
      <Cards />
      <Good />
      <Mentorship />
      <Review />
      <Newsletter />
    </div>
  );
}

export default App;
