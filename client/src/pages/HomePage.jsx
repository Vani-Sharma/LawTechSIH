import { LandingPageComponent } from "../features/Home/Landing";
import { Navbar } from "../features/navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPageComponent />
    </>
  );
}

export default HomePage;
