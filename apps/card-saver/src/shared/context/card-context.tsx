import {PropsWithChildren, createContext, useContext} from 'react';


const cardContext = createContext({
    cardNumber: '',
    expirationDate: '',
    ownerName: '',
    cvv: '',
  });

export function CardContextProvider({children}: PropsWithChildren) {
  const card = {
    cardNumber: '123456789123458',
    expirationDate: '12/45',
    ownerName: 'Ezequiel Garcia',
    cvv: '123',
  };
  return <cardContext.Provider value={card}>{children}</cardContext.Provider>;
}

export function useCardContext() {
  return useContext(cardContext);
}
