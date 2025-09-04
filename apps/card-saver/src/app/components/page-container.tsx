import CardInformation from "./card-information/card-information";
import Form from "./form/form";

export function PageContainer({ title }: { title: string }) {
  return (
    
      <div className="wrapper">
       <Form/>
       <CardInformation/>
      </div>
  );
}

export default PageContainer;
