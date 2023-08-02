import { styled } from 'styled-components';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Carousel from './Carousel';
import MainImg from 'asset/HomePhoto.png';

function Home() {
  return (
    <div>
      <Header />
      <Content>
        <Carousel />
        <img src={MainImg} alt='MainImg'></img>

        {/* <div>오늘의 브랜드</div>
          <div>최근 본 상품과 함께 볼만한 상품</div>
          <div>타임딜</div> */}
      </Content>
      <Footer />
    </div>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Home;
