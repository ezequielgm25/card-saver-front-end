import { Formik } from 'formik';

export function Form() {
  return (
    <div className="formWrapper flex flex-col min-h-96 max-w-[800px] p-5">
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
        <form
          className=" h-full w-full m-6 inline  border-amber-400 border  p-9"
          onSubmit={() => console.log('Nothing for now')}
        >
          {/* First Row */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="formInputContainer flex flex-col ">
              <label htmlFor="cardNumber">Numero de Tarjeta</label>
              <input
                className="formInput"
                type="text"
                name="cardNumber"
                onChange={() => console.log('Nothing for now')}
                onBlur={() => console.log('Nothing for now')}
                value={''}
              />
            </div>
            <div className="formInputContainer flex flex-col ">
              <label htmlFor="expirationDate">Fecha de Vencimiento</label>
              <input
                className="formInput "
                type="text"
                name="expirationDate"
                onChange={() => console.log('Nothing for now')}
                onBlur={() => console.log('Nothing for now')}
                value={''}
              />
            </div>
          </div>
  {/* Second Row */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="formInputContainer flex flex-col">
              <label htmlFor="ownerName">Nombre Titular</label>
              <input
                className="formInput "
                type="text"
                name="ownerName"
                onChange={() => console.log('Nothing for now')}
                onBlur={() => console.log('Nothing for now')}
                value={''}
              />
            </div>
            <div className="formInputContainer flex flex-col">
              <label htmlFor="cvv">CVV</label>
              <input
                className="formInput"
                type="text"
                name="cvv"
                onChange={() => console.log('Nothing for now')}
                onBlur={() => console.log('Nothing for now')}
                value={''}
              />{' '}
            </div>
          </div>
          {/* Button Section */}
          <div className="buttonSection flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full shadow"
            >
              Agregar Tarjeta
            </button>
            <button
              type="reset"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow"
            >
              Cancelar
            </button>
          </div>
        </form>
      </Formik>
    </div>
  );
}

export default Form;
