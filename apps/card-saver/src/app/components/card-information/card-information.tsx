import { useCardContext } from "../../../shared/context/card-context";

export function CardInformation() {
 
   const card = useCardContext();

  return (
    <div className="cardInformationWrapper flex flex-col min-h-96 max-w-[800px] p-5">
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div className="formInputContainer">
          <p>Numero de Tarjeta:</p><p>{card.cardNumber}</p>
        </div>
        <div className="formInputContainer">
          <p>Fecha de Vencimiento:</p><p>{card.expirationDate}</p>
        </div>
      </div>
      {/* Second Row */}
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div className="formInputContainer">
          <p>Nombre Titular:</p><p>{card.ownerName}</p>
        </div>
        <div className="formInputContainer">
          <p>CVV:</p><p>{card.cvv}</p>
        </div>
      </div>
    </div>
  );
}

export default CardInformation;
