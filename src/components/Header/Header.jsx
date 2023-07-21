import { styled } from 'styled-components';

function Header() {
  return (
    <Container>
      <div>
        <div>메뉴</div>
        <div>로고</div>
        <div>검색창</div>
        <div>실시간 순위</div>
        <div>마이페이지</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
`;

export default Header;
