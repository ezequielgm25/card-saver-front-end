import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type Card = {
  cardNumber: string;
  expirationDate: string;
  ownerName: string;
  cvv: string;
};

type CardContextType = {
  card: Card;
  setCard: Dispatch<SetStateAction<Card>>;
};

const cardContext = createContext<CardContextType>({
  card: {
    cardNumber: "",
    expirationDate: "",
    ownerName: "",
    cvv: "",
  },
  setCard: () => {
    throw new Error("setCard must be used within a CardContextProvider");
  },
});

export function CardContextProvider({ children }: PropsWithChildren) {
  const [card, setCard] = useState<Card>({

    cardNumber: '123456789123458',
    expirationDate: '12/45',
    ownerName: 'Ezequiel Garcia',
    cvv: '123',

  });

  return (
    <cardContext.Provider value={{ card, setCard }}>
      {children}
    </cardContext.Provider>
  );
}

export function useCardContext() {
  return useContext(cardContext);
}
