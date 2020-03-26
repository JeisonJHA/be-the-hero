import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #FFF;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 20px;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(90%);
  }
`;

export const LinkButton = styled(Link)`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #FFF;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-decoration: none;
  font-size: 18px;
  line-height: 20px;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(90%);
  }
`;
