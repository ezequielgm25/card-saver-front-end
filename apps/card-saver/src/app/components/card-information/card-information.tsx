import { Card } from '../../../types/general-types';

export function CardInformation({ card }: { card: Card }) {
  function hideCardNumbers(cardNumber: string): string {
    if (!cardNumber) return '';
    const firstTwo = cardNumber.slice(0, 2);
    const lastFour = cardNumber.slice(-4);
    const masked = '*'.repeat(cardNumber.length - 6);

    return `${firstTwo}${masked}${lastFour}`;
  }

  return (
    <div className="cardInformationWrapper flex flex-col max-w-[600px] p-4 mb-2">
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div className="formInputContainer">
          <p className="font-bold">Numero de Tarjeta:</p>
          <p>{hideCardNumbers(card.cardNumber)}</p>
        </div>
        <div className="formInputContainer">
          <p className="font-bold">Fecha de Vencimiento:</p>
          <p>{card.expirationDate}</p>
        </div>
      </div>
      {/* Second Row */}
      <div className="grid grid-cols-2 gap-6">
        <div className="formInputContainer">
          <p className="font-bold">Nombre Titular:</p>
          <p>{card.ownerName}</p>
        </div>
        <div className="formInputContainer">
          <p className="font-bold">CVV:</p>
          <p>{card.cvv}</p>
        </div>
      </div>
    </div>
  );
}

export default CardInformation;
