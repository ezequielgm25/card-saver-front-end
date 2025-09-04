import { Formik } from 'formik';

export function Form() {
  return (
    <div className="formwrapper">
      <Formik
        initialValues={
          {
            /* Empty for the moment */
          }
        }
        validate={(values) => {
          return []; /// Empty for the moment
        }}
        onSubmit={(values, { setSubmitting }) => {
          /// Empty for the moment
          return;
        }}
      >
        <form onSubmit={() => console.log('Nothing for now')}>
          <div className="forminput">
            <label htmlFor="cardnumber">Numero de Tarjeta</label>
            <input
              type="text"
              name="cardNumber"
              onChange={() => console.log('Nothing for now')}
              onBlur={() => console.log('Nothing for now')}
              value={''}
            />
          </div>
          <div className="forminput">
            <label htmlFor="expirationDate">Fecha de Vencimiento</label>
            <input
              type="text"
              name="expirationDate"
              onChange={() => console.log('Nothing for now')}
              onBlur={() => console.log('Nothing for now')}
              value={''}
            />
          </div>
          <div className="forminput">
            <label htmlFor="ownerName">Nombre Titular</label>
            <input
              type="text"
              name="expirationDate"
              onChange={() => console.log('Nothing for now')}
              onBlur={() => console.log('Nothing for now')}
              value={''}
            />
          </div>
          <div className="forminput">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              name="cvv"
              onChange={() => console.log('Nothing for now')}
              onBlur={() => console.log('Nothing for now')}
              value={''}
            />{' '}
          </div>
        </form>
      </Formik>
    </div>
  );
}

export default Form;
