import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  /* background: #d2d8e2; */
  background: linear-gradient(
    -120deg,
    rgba(26, 48, 68, 0.6),
    rgba(26, 48, 68, 0.7),
    rgba(26, 48, 68, 0.6)
  );
  /* background: linear-gradient(-120deg, #1e2734, rgba(26, 48, 68, 0.7), #1e2734); */
  /* background: #1e2734; */
  padding: 0 30px;
`;
export const Calendar = styled.div`
  align-self: center;
  margin-left: 20px;
  width: 150px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-left: 0px;
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid #eee;
    }

    a {
      font-size: 22px;
      font-weight: bold;
      color: #fff;
    }
  }
  aside {
    display: flex;
    /* margin-right: 100px;
     */
    /* padding-right: 100px; */
    align-items: center;
  }
`;

export const Profile = styled.div`
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    margin-left: 0px;
  `}
  ${media.greaterThan('large')`
    /* screen width is less than 768px (medium) */
    margin-left: 600px;
  `}
  display: flex;
  /* margin-left: 700px; */
  padding-left: 20px;
  font-size: 21px;
  font-weight: bold;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: rgba(255, 255, 255, 0.9);
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      font-weight: bold;
      color: #fff;
    }
  }
  img {
    height: 32px;
    border-radius: 50%;
    width: 32px;
  }
`;
