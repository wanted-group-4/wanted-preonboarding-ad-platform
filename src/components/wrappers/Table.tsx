import styled from '@emotion/styled';

const Table = styled.table`
  margin: auto;
  width: 100%;
  text-align: center;
  font-size: 14px;
  border-top: 3px solid #178;
  border-collapse: collapse;
  th {
    color: #168;
    background: #f0f6f9;
    padding: 10px;
    border: 1px solid #ddd;
    &:first-child {
      border-left: 0;
    }
    &:last-child {
      border-right: 0;
    }
  }
  td {
    padding: 10px;
    border: 1px solid #ddd;
    &:first-child {
      border-left: 0;
    }
    &:last-child {
      border-right: 0;
    }
  }
`;

export default Table;
