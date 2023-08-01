import { styled } from 'styled-components';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MainImg from 'asset/HomePhoto.png';

function Home() {
  return (
    <div>
      <Header />
      <Content>
        <Wrap>
          <img src={MainImg} alt='MainImg'></img>
          <img src={MainImg} alt='MainImg'></img>
          {/* <div>오늘의 브랜드</div>
          <div>최근 본 상품과 함께 볼만한 상품</div>
          <div>타임딜</div> */}
        </Wrap>
      </Content>
      <Footer />
    </div>
  );
}

const Wrap = styled.div`
  min-height: 600px;
  /* display: flex; */
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100%;
  padding-bottom: 100px;
`;

export default Home;
