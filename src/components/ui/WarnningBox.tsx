// components/WarningBox.tsx
import React from 'react';
import styled from 'styled-components';

// Define the responsive styles for the warning box
const WarningBoxContainer = styled.div`
  background-color: #ffe6e6;
  border: 1px solid #f99;
  color: #f33;
  padding: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
    padding: 6px;
  }
`;

const WarningBox: React.FC = () => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <WarningBoxContainer>
      <p>You don&apos;t have enough VEX.</p>
      <p>Send some VEX to your account,</p>
      <p> or Click <a style={{ color: 'rgb(156, 163, 175)' }} href='https://t.me/vexfaucetbot'>here</a> to faucet.</p>
    </WarningBoxContainer>
  );
};

export default WarningBox;
