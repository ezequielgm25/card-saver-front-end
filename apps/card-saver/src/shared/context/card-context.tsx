import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { addCard, getCards } from '../../services/card-services';
import { Card } from '../../types/general-types';

type CardContextType = {
  card: Card;
  cardsList: Card[];
  setCard: Dispatch<SetStateAction<Card>>;
  saveCard: Dispatch<Card>;
};

const cardContext = createContext<CardContextType>({
  card: {
    cardNumber: '',
    expirationDate: '',
    ownerName: '',
    cvv: '',
  },
  cardsList: [],
  setCard: () => {
    throw new Error('setCard must be used within a CardContextProvider');
  },
  saveCard: () => {
    throw new Error('setCard must be used within a CardContextProvider');
  },
});

export function CardContextProvider({ children }: PropsWithChildren) {
  const [card, setCard] = useState<Card>({
    cardNumber: '123456789123458',
    expirationDate: '12/30',
    ownerName: 'Ezequiel Garcia SII TEST',
    cvv: '123',
  });

  const [cardsList, setCardsList] = useState<Card[]>([]);

  const saveCard = (values: Card) => {
    addCard(values).then(() => fetchCards());
  };
  const fetchCards = async () => {
    try {
      const cards = await getCards();
      setCardsList((cards || []).reverse());
    } catch (error) {
      console.error('Error al obtener tarjetas:', error);
    }
  };
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <cardContext.Provider value={{ card, cardsList, setCard, saveCard }}>
      {children}
    </cardContext.Provider>
  );
}

export function useCardContext() {
  return useContext(cardContext);
}
