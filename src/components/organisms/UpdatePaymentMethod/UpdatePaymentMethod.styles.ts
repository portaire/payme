import styled from 'styled-components';

// change div to be more semantic where possible
export const Title = styled.div`
  ${({ theme }) => theme.typography('modal-title')};
  margin-bottom: ${({ theme }) => theme.spacing(20)};
`;

export const HalfInputs = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;

  .left {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(9)};
  margin-bottom: ${({ theme }) => theme.spacing(20)};

  & > button {
    width: 100%;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;
