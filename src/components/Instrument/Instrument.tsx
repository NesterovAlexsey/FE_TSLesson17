// Создайте компанент Instrument
// требуется передать в него три пропса:
// название
// дата производства
// тип интрумента, наприме: ударный, щипковый, смычковый
// Создайте три элемента с разными значениями пропсов
// Дополнительно - подключите стили
import React from 'react';

interface Props {
  name: string;
  dateOfCreation: number;
  typeOfInstrument: string;
}

function Instrument(props:Props): JSX.Element {
  let { name, dateOfCreation, typeOfInstrument } = props;
  return (
    <div>
      <h2>Музыкальный инструмент</h2>
      <p>Название: {name}; Дата производства: {dateOfCreation}; Тип инструмента: {typeOfInstrument}; </p>
    </div>
  );
}

export default Instrument;
