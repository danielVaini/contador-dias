import styled from 'styled-components';

export const Container = styled.div`

  max-height: 500px;
  width: 100vw;
  height: 50vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;
export const Data = styled.div`
  display: flex;

> input{
  outline: 0;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;

}

 input:first-of-type{
   margin-right: 100px;
 }
`;
export const Response = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
 flex-direction:column;

  margin-top: 40px;

  > p {
    margin-top:100px;
  }
`;
