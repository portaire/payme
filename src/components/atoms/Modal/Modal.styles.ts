import styled from 'styled-components';

export const Root = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'initial' : 'none')};
`;
// change div to be more semantic where possible
export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius('md')};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  width: 410px;
  padding: ${({ theme }) => theme.spacing(30)};
`;

export const Portal = styled.div``;

export const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  z-index: 100;
`;

export const Trigger = styled.button`
  ${({ theme }) => theme.typography('small-button')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(8)};
  border: none;
  background: ${({ theme }) => theme.colors['tertiary-light']};

  img {
    margin-right: ${({ theme }) => theme.spacing(5)};
  }
`;
