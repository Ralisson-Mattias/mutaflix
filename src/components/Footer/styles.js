import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: rgba(30, 39, 46,1.0);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 15px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
