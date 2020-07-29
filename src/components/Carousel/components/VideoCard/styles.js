import styled from 'styled-components';

// export const VideoCardContainer = styled.a`
//   border: 2px solid;
//   border-radius: 4px;
//   text-decoration: none;
//   overflow: hidden;
//   cursor: pointer;
//   color: white;
//   flex: 0 0 298px;
//   width: 298px;
//   height: 197px;
//   background-image: ${({ url }) => `url(${url})`};
//   background-size: cover;
//   background-position: center;
//   border-radius: 10px;
//   position: relative;
//   display: flex;
//   align-items: flex-end;
//   padding: 16px;


//   transition: opacity .3s;
//   &:hover,
//   &:focus {
//     opacity: .5;
//   }

//   &:not(:first-child) {
//     margin-left: 20px;
//   }
// `;

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: .5s;
  &:focus {
    border: 4px solid;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
  @media (min-width: 1024px) {
    &:hover {
      border: 4px solid;
      width: 498px;
    }
  }
`;

VideoCardContainer.Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: #000000a3;
  ${VideoCardContainer}:hover &{
    opacity: 2;
  }
`;

VideoCardContainer.Title.Text = styled.div`
  color: var(--white);
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
