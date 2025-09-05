import { CardContextProvider } from '../../shared/context/card-context';
import CardLayout from './card-layout/card-layout';
import CardsList from './cards-list/cards-lists';
import Form from './form/form';

export function PageContainer({ title }: { title: string }) {
  return (
    <div className="wrapper flex items-center justify-center min-h-screen bg-gray-100">
      <CardContextProvider>
                <div className="flex flex-col items-center gap-10">

        <CardLayout />
        <Form />
        <CardsList />
                </div>

      </CardContextProvider>
    </div>
  );
}

export default PageContainer;
