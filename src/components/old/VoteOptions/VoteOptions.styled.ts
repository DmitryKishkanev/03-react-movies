import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Button = styled.button<{ variant?: 'reset' }>`
  padding: 10px 22px;
  background-color: ${({ variant }) =>
    variant === 'reset' ? '#dc3545' : '#0a66c2'};
  color: #fff;
  border: 1px solid
    ${({ variant }) => (variant === 'reset' ? '#dc3545' : '#0a66c2')};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  min-width: 120px;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'reset' ? '#bb2d3b' : '#004182'};
    border-color: ${({ variant }) =>
      variant === 'reset' ? '#b02a37' : '#003060'};
  }
`;

export { Container, Button };
