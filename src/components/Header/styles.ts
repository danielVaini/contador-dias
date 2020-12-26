import styled from 'styled-components';

export const Container = styled.div`
  
  max-height: 720px;
  
  width: 100vw;
  height: min(720px, 50vh);

  display: flex;
  align-items: center;
  justify-content: center;



`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: min(27px, 100%);

  > h1 {
    margin-bottom: 20px;
  }
`;
