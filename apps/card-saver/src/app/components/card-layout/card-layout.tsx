import cardLayoutBackground from '../../../assets/credit-card-template.png';
import { useCardContext } from '../../../shared/context/card-context';

export function CardLayout() {
    const {card} = useCardContext();
 
  // function to format the card number and add spaces
  const formatCardNumber = (num: string) =>
    num
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();

  return (
    <div className="flex items-center space-y-6 ">
      {/* card layout*/}
      <div className="relative w-[400px] h-[300] border border-blue-500">
        <img
          src={cardLayoutBackground}
          alt="CardLayout"
          className="w-full h-[300] rounded-xl shadow-lg"
        />

        {/* card number*/}
        <div className="absolute top-[100px] left-[22px] text-white text-3xl tracking-widest">
          {formatCardNumber(card.cardNumber) || '#### #### #### ####'}
        </div>

        {/* card owner name */}
        <div className="absolute bottom-[30px] left-[30px] text-white text-lg uppercase">
          {card.ownerName || 'NOMBRE DEL TITULAR'}
        </div>

        {/* expiration date0*/}
        <div className="absolute bottom-[60px] left-[95px] text-white text-lg">
          {card.expirationDate || 'MM/YY'}
        </div>
      </div>
    </div>
  );
}

export default CardLayout;
