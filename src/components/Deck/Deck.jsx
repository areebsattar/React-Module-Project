import Card from "@/components/Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";

const Deck = (props) => {
  return (
    <div className="deck" data-testid="info cards">
      {cardsData.map((city, index) => (
        <Card
          key={index}
          title={city.title}
          url={city.url}
          image={city.image}
        />
      ))}
    </div>
  );
};

export default Deck;
