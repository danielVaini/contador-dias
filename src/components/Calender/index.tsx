import React, { useState } from 'react';

import moment from 'moment'
import 'moment/locale/pt-br';

import { Container, Data, Response } from './styles';

const Calender: React.FC = () => {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');

  const now = moment(data1); 
  const past = moment(data2);
  const duration = moment.duration(now.diff(past));

  // Mostra a diferença em dias
  const days = duration.asDays();

  

 
 

  return (
    <Container>
      <Data>
        <label>Data 1:</label>
        <input 
          
          type="date"
     
          onChange={(e) => {setData1(e.target.value)}}
          />
        <label>Data 2:</label>
        <input 
          type="date"
         
          onChange={(e) => {setData2(e.target.value)}}
          />
      </Data>
      <Response>
        <p>Do dia {data1} para o dia {data2}</p>
        <p>Faltam: {days * -1} dias   </p>
      </Response>
    </Container>
  );
}

export default Calender;