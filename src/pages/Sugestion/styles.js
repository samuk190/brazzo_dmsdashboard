import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #00f;
      font-size: 24px;
      margin: 0 15px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    list-style: none;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #00f;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }

  img {
    display: block;
    margin-left: 200px;
    margin-top: 0;
    margin-bottom: 0;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    background: #eee;
    position: absolute;
  }
`;
// export const AvatarPhoto = styled.div`
//   img {
//     height: 50px;
//     width: 50px;
//     border-radius: 50%;
//     border: 3px solid rgba(255, 255, 255, 0.3);
//     background: #eee;
//   }
// `;
