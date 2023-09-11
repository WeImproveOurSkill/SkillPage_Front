import { styled } from 'styled-components';

function Product(props) {
  const { productPic, productPrice, productName } = props;

  return (
    <Wrapper>
      <Container>
        <ProductImg alt={productPic} src={productPic}></ProductImg>
        <ProductName>{productName}</ProductName>
        <ProductPrice>{productPrice}</ProductPrice>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px 7px 10px 7px;
  margin-bottom: 10px;
  border-bottom: 1px solid lightgray;
`;

const Container = styled.div`
  padding: 10px 0px 0px 10px;
  border: 1px solid white;
`;

const ProductImg = styled.img`
  width: 229px;
  height: 229px;
`;

const ProductName = styled.div`
  padding-top: 20px;
`;

const ProductPrice = styled.div`
  padding-top: 8px;
  font-weight: 900;
`;

export default Product;
