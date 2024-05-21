import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import Footer from "../Footer/Footer";
import Deck from "../Deck/Deck";
import AppHeader from "../AppHeader/AppHeader";
import Restaurant from "../Restaurant/Restaurant";

const App = () => (
  <div className="app">
    <div className="header">
      <header className="app__header">
        <h1 className="app__heading">CYF Hotel</h1>
      </header>
      <AppHeader />
    </div>
    <Deck />
    <Bookings />

    <Restaurant />

    <Footer
      details={[
        "123 Fake Street, London, E1 4UD",
        "hello@fakehotel.com",
        "0123 456789",
      ]}
    />
  </div>
);

export default App;
