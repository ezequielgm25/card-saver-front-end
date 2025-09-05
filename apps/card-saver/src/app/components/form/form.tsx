import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useCardContext } from '../../../shared/context/card-context';

export function Form() {
  const { card, setCard, saveCard } = useCardContext();

  // getting constants information for validating the date
  const currentYear = new Date().getFullYear() % 100; // getting current year last 2 digits
  const maxYear = currentYear + 5;

  // Schema de validacion con Yup
  const validationSchema = Yup.object({
    cardNumber: Yup.string()
      .matches(/^[0-9]*$/, 'Solo se permiten numeros')
      .max(16, 'Máximo 16 caracteres')
      .required('El Número de tarjeta es un campo requerido'),

    expirationDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'El Formato valido es: mm/yy')
      .test('valid-date', 'Fecha invalida', (value) => {
        if (!value) return false;
        const [mm, yy] = value.split('/').map(Number);

        // Validar mes y año
        if (mm < 1 || mm > 12) return false;
        if (yy < 22 || yy > maxYear) return false;

        return true;
      })
      .required('Fecha de vencimiento es un campo requerida'),

    ownerName: Yup.string()
      .matches(/^[a-zA-ZÀ-ÿ\s]+$/, 'Solo se permiten letras')
      .max(20, 'Maximo 20 caracteres')
      .required('Nombre del titular es un campo requerido'),

    cvv: Yup.string()
      .matches(/^[0-9]{3,4}$/, 'CVV debe tener 3 o 4 dígitos')
      .required('CVV es un campo requerido'),
  });

  return (
    <div className="formWrapper flex flex-col  p-5">
      <Formik
        initialValues={{
          cardNumber: '',
          expirationDate: '',
          ownerName: '',
          cvv: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
         saveCard(values);
         setSubmitting(false);
         resetForm();
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
          setFieldValue,
          resetForm,
        }) => (
          <form
            className="h-full w-full m-6 inline"
            onSubmit={handleSubmit}
          >
            {/* First Row */}
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div className="formInputContainer">
                <label htmlFor="cardNumber">Numero de Tarjeta</label>
                <input
                  className="formInput"
                  type="text"
                  name="cardNumber"
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/[^0-9]/g, ''); // quita letras
                    setFieldValue('cardNumber', onlyNums);
                  }}
                  onBlur={handleBlur}
                  value={values.cardNumber}
                />
                {/* Mensaje de error */}
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="formInputContainer">
                <label htmlFor="expirationDate">Fecha de Vencimiento</label>
                <input
                  className="formInput "
                  type="text"
                  name="expirationDate"
                    onChange={(e) => {
                    setFieldValue('expirationDate', e.target.value);
                    /// setting the changes to the card contect to be reflected in the card layout
                    setCard({
                      cardNumber: card.cardNumber,
                      expirationDate: e.target.value,
                      ownerName: card.ownerName,
                      cvv: card.cvv,
                    });
                  }}
                  onBlur={handleBlur}
                  value={values.expirationDate}
                />
                {/* Mensaje de error */}
                <ErrorMessage
                  name="expirationDate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
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
                  onChange={(e) => {
                    setFieldValue('ownerName', e.target.value);
                    /// setting the changes to the card contect to be reflected in the card layout
                    setCard({
                      cardNumber: card.cardNumber,
                      expirationDate: card.expirationDate,
                      ownerName: e.target.value,
                      cvv: card.cvv,
                    });
                  }}
                  onBlur={handleBlur}
                  value={values.ownerName}
                />
                <ErrorMessage
                  name="ownerName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
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
                <ErrorMessage
                  name="cvv"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            {/* Button Section */}
            <div className="buttonSection flex gap-4 ml-5">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow"
                disabled={isSubmitting || errors === null}
              >
                Agregar Tarjeta
              </button>
              {/* clearing the form if it is touched*/}
              <button
                type="reset"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow"
                disabled={isSubmitting}
                onClick={touched ? () => resetForm() : undefined}
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
