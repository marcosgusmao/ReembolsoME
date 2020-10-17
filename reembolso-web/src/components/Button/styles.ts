import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #d7d7d7;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: bold;
  margin-top: 16px;
  font-size: 18px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#d7d7d7')};
  }
`;
