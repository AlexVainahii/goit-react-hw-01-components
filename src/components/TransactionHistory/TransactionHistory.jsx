import PropTypes from 'prop-types';
import { BaseTable, Td, Th, THead, Tr } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </THead>
      <tbody>
        {items.map(item => {
          return (
            <Tr key={item.id}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
