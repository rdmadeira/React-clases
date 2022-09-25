import React, { useMemo } from 'react';

const factorial = (n) => {
  return n <= 1 ? 1 : n * factorial(n - 1);
};

const FactorialOf = ({ num, increment }) => {
  /* El uso de useMemo, hace con que React solamente compara el valor retornado de factorial, y renderiza si hubo cambios en este valor */
  const fact = useMemo(() => factorial(num), [num]);
  console.log(num);
  return (
    <div>
      <p>
        El factorial de {num} es {fact}
      </p>
      <button onClick={increment}>Next</button>
    </div>
  );
};

// El uso de React.memo es para que el calculo complejo de factorial no se ejecute todo tiempo al renderizar por cambio de estado del componente App.
// La funcion pasada como parametro es para considerar apenas la prop num como valor de referencia, porque increment es una funcion y para javascript,
// f1() === f1() es false porque se guarda en memorias de referencia distintas, pero el num es un valor numerico.
// funcion, objeto y array son valores de referencia, los number, string y booleanos son valores absolutos
// Una manera con memo:
/* export default React.memo(FactorialOf, (prevProps, nextProps) => {
  return prevProps.num === nextProps.num;
}); */

/* La otra manera es usar el hook useCallback, que persiste la función de referencia, y no renderiza, si la función no cambia */
export default React.memo(FactorialOf);
