import { useCardContext } from '../../../shared/context/card-context';
import CardInformation from '../card-information/card-information';

export function CardsList() {
  const { cardsList } = useCardContext();

  /// Message to be return in case there is not data comming
  if (!cardsList || cardsList.length === 0) {
    return (
      <div className="flex flex-col items-center w-full max-h-[500px] border-black border rounded-md py-2">
        <p className="text-blue-600 font-bold">No hay tarjetas registradas.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-h-[500px] border-black border rounded-md overflow-y-auto py-2">
      <p className="text-blue-600 font-bold mb-2">
        Tarjetas registradas en la DB.
      </p>
      {cardsList.map((card, index) => (
        <CardInformation key={index} card={card} />
      ))}
    </div>
  );
}

export default CardsList;
