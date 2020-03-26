import styled from 'styled-components';

export default styled.textarea`
  width: ${props => props.width ? props.width : "100%"};
  min-height: 140px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
  resize: vertical;
`;
 