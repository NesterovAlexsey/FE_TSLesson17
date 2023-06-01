// Создайте компанент Instrument
// требуется передать в него три пропса:
// название
// дата производства
// тип интрумента, наприме: ударный, щипковый, смычковый
// Создайте три элемента с разными значениями пропсов
// Дополнительно - подключите стили
import React from 'react';
import styles from './Instrument.module.css';

interface Props {
  name: string;
  dateOfCreation: number;
  typeOfInstrument: string;
}

function Instrument(props:Props): JSX.Element {
  let { name, dateOfCreation, typeOfInstrument } = props;
  return (
    <div className={styles.mainData}>
      <h2 className={styles.general}>Музыкальный инструмент</h2>
      <p>Название: {name}; Дата производства: {dateOfCreation}; Тип инструмента: {typeOfInstrument}; </p>
    </div>
  );
}

export default Instrument;
