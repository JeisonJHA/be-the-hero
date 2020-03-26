import styled from 'styled-components';

export default styled.input`
  width: ${props => props.width ? props.width : "100%"};
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;
