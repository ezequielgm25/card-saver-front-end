import { useCardContext } from "../../../shared/context/card-context";
import CardInformation from "../card-information/card-information";

export function CardsList() {
 
   const {cardsList} = useCardContext();


  if (!cardsList || cardsList.length === 0) {
    return <p className="text-blue-600">No hay tarjetas registradas.</p>;
  }

  return (
    <div className="cardListWrapper">
      {cardsList.map((card, index) => (
        <CardInformation key={index} card={card} />
      ))}
    </div>
  );

}

export default CardsList;
