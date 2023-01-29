import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 40px;
    right: 11px;
  }
`;

export const SearchResults = styled.div`
  position: relative;
  top: ${({ theme }) => `-${theme.spacing(25)}`};
  border: 1px solid ${({ theme }) => theme.colors.outline};
  border-top: none;
  z-index: 400;
  padding: ${({ theme }) => theme.spacing(15)};
  padding-top: 0;
  border-bottom-left-radius: ${({ theme }) => theme.radius('sm')};
  border-bottom-right-radius: ${({ theme }) => theme.radius('sm')};
  max-height: ${({ theme }) => theme.spacing(130)};
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SearchResult = styled.button`
  ${({ theme }) => theme.typography('placeholder')};
  padding: ${({ theme }) => theme.spacing(16)};
  cursor: pointer;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
`;