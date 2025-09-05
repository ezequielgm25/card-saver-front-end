import { CardContextProvider } from '../../shared/context/card-context';
import CardInformation from './card-information/card-information';
import CardLayout from './card-layout/card-layout';
import Form from './form/form';

export function PageContainer({ title }: { title: string }) {
  return (
    <div className="wrapper">
      <CardContextProvider>
        <CardLayout />
        <Form />
        <CardInformation />
      </CardContextProvider>
    </div>
  );
}

export default PageContainer;
