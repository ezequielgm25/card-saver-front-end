import { Formik } from 'formik';

export function Form() {
  return (
    <div className="formWrapper flex flex-col min-h-96 max-w-[800px] p-5">
      <Formik
        initialValues={{
          cardNumber: '',
          expirationDate: '',
          ownerName: '',
          cvv: '',
        }}
        validate={(values) => {
          return []; /// Empty for the moment
        }}
        onSubmit={(values, { setSubmitting }) => {
          /// Empty for the moment
          console.log('Hola we are submiting the data');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            className=" h-full w-full m-6 inline  border-amber-400 border  p-9"
            onSubmit={() => console.log('Nothing for now')}
          >
            {/* First Row */}
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div className="formInputContainer">
                <label htmlFor="cardNumber">Numero de Tarjeta</label>
                <input
                  className="formInput"
                  type="text"
                  name="cardNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cardNumber}
                />
              </div>
              <div className="formInputContainer">
                <label htmlFor="expirationDate">Fecha de Vencimiento</label>
                <input
                  className="formInput "
                  type="text"
                  name="expirationDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.expirationDate}
                />
              </div>
            </div>
            {/* Second Row */}
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div className="formInputContainer">
                <label htmlFor="ownerName">Nombre Titular</label>
                <input
                  className="formInput "
                  type="text"
                  name="ownerName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ownerName}
                />
              </div>
              <div className="formInputContainer">
                <label htmlFor="cvv">CVV</label>
                <input
                  className="formInput"
                  type="text"
                  name="cvv"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cvv}
                />
              </div>
            </div>
            {/* Button Section */}
            <div className="buttonSection flex gap-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow"
                disabled={isSubmitting}
              >
                Agregar Tarjeta
              </button>
              <button
                type="reset"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow"
                disabled={isSubmitting}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Form;
