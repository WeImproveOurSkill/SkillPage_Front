import { styled } from 'styled-components';

function Footer() {
  return (
    <Container>
      <div>
        11번가(주)는 통신판매중개자로서 오픈마켓 11번가의 거래당사자가 아니며, 입점판매자가 등록한
        상품정보 및 거래에 대해 11번가(주)는 일체 책임을 지지 않습니다.
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  position: relative;
  transform: translateY(0%);
  background-color: #fffd55;
  color: #25b00d;
`;

export default Footer;
