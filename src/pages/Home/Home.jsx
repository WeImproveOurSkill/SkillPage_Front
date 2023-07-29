import { styled } from 'styled-components';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MainImg from 'asset/HomePhoto.png';

function Home() {
  return (
    <div>
      <Header />
      <Content>
        <div></div>
        <div>
          <img src={MainImg} alt='MainImg'></img>
          {/* <div>오늘의 브랜드</div>
          <div>최근 본 상품과 함께 볼만한 상품</div>
          <div>타임딜</div> */}
        </div>
      </Content>
      <Footer />
    </div>
  );
}

// const Container = styled.div`
//   width: 100%;
// `;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default Home;
