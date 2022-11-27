import styled from '@emotion/styled';

export const BaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  text-align: center;
`;

export const THead = styled.thead`
  color: black;
  background-color: green;
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid gray;
  color: black;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid gray;
  color: black;
  background-color: green;
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f2f2f2`;
