import { styled } from 'styled-components';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <div>캐러셀</div>
        <div>알고리즘 결과</div>
        <Footer />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
`;

export default Home;
