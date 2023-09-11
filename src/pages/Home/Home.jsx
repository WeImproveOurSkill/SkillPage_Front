import { styled } from 'styled-components';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Carousel from './Carousel';
import Product from '../../components/Product/Product';

function Home() {
  return (
    <div>
      <Header />
      <Content>
        <Carousel />
        <ProductWrapper>
          {DUMMY_PRODUCTS.map((product) => (
            <Product
              key={product.productId}
              productId={product.productId}
              productPic={product.productPic}
              productPrice={product.productPrice}
              productName={product.productName}
            />
          ))}
        </ProductWrapper>
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
  height: auto;
  position: relative;
  min-height: 100%;
  padding-bottom: 100px;
`;

const ProductWrapper = styled.div`
  display: flex;
  width: 1280px;
  padding-top: 80px;
  flex-wrap: wrap;
`;

const DUMMY_PRODUCTS = [
  {
    productId: 'c1',
    productPic:
      'https://gd.image-gmkt.com/%EC%BD%94%EC%B9%B4%EC%BD%9C%EB%9D%BC-%EC%A0%9C%EB%A1%9C-%EC%BD%9C%EB%9D%BC-%EC%9D%8C%EB%A3%8C%EC%88%98%EC%BA%94-190ML-X-30%EC%BA%94/li/042/329/1745329042.g_350-w-et-pj_g.jpg',
    productPrice: 3000,
    productName: '코카콜라 제로'
  },
  {
    productId: 'c2',
    productPic:
      'https://gd.image-gmkt.com/%EC%BD%94%EC%B9%B4%EC%BD%9C%EB%9D%BC-%EC%A0%9C%EB%A1%9C-%EC%BD%9C%EB%9D%BC-%EC%9D%8C%EB%A3%8C%EC%88%98%EC%BA%94-190ML-X-30%EC%BA%94/li/042/329/1745329042.g_350-w-et-pj_g.jpg',
    productPrice: 3000,
    productName: '코카콜라 제로'
  },
  {
    productId: 'c3',
    productPic:
      'https://gd.image-gmkt.com/%EC%BD%94%EC%B9%B4%EC%BD%9C%EB%9D%BC-%EC%A0%9C%EB%A1%9C-%EC%BD%9C%EB%9D%BC-%EC%9D%8C%EB%A3%8C%EC%88%98%EC%BA%94-190ML-X-30%EC%BA%94/li/042/329/1745329042.g_350-w-et-pj_g.jpg',
    productPrice: 3000,
    productName: '코카콜라 제로'
  },
  {
    productId: 'c4',
    productPic:
      'https://gd.image-gmkt.com/%EC%BD%94%EC%B9%B4%EC%BD%9C%EB%9D%BC-%EC%A0%9C%EB%A1%9C-%EC%BD%9C%EB%9D%BC-%EC%9D%8C%EB%A3%8C%EC%88%98%EC%BA%94-190ML-X-30%EC%BA%94/li/042/329/1745329042.g_350-w-et-pj_g.jpg',
    productPrice: 3000,
    productName: '코카콜라 제로'
  },
  {
    productId: 'c5',
    productPic:
      'https://gd.image-gmkt.com/%EC%BD%94%EC%B9%B4%EC%BD%9C%EB%9D%BC-%EC%A0%9C%EB%A1%9C-%EC%BD%9C%EB%9D%BC-%EC%9D%8C%EB%A3%8C%EC%88%98%EC%BA%94-190ML-X-30%EC%BA%94/li/042/329/1745329042.g_350-w-et-pj_g.jpg',
    productPrice: 3000,
    productName: '코카콜라 제로'
  },
  {
    productId: 'p1',
    productPic:
      'https://gd.image-gmkt.com/%ED%8E%A9%EC%8B%9C-%EC%A0%9C%EB%A1%9C-%EC%BD%9C%EB%9D%BC-250ML-30%EC%BA%94/li/273/882/1737882273.g_350-w-et-pj_g.jpg',
    productPrice: 2000,
    productName: '펩시 제로'
  },
  {
    productId: 'p2',
    productPic:
      'https://gd.image-gmkt.com/%ED%8E%A9%EC%8B%9C-%EC%A0%9C%EB%A1%9C-%EC%BD%9C%EB%9D%BC-250ML-30%EC%BA%94/li/273/882/1737882273.g_350-w-et-pj_g.jpg',
    productPrice: 2000,
    productName: '펩시 제로'
  },
  {
    productId: 'p3',
    productPic:
      'https://gd.image-gmkt.com/%ED%8E%A9%EC%8B%9C-%EC%A0%9C%EB%A1%9C-%EC%BD%9C%EB%9D%BC-250ML-30%EC%BA%94/li/273/882/1737882273.g_350-w-et-pj_g.jpg',
    productPrice: 2000,
    productName: '펩시 제로'
  },
  {
    productId: 'p4',
    productPic:
      'https://gd.image-gmkt.com/%ED%8E%A9%EC%8B%9C-%EC%A0%9C%EB%A1%9C-%EC%BD%9C%EB%9D%BC-250ML-30%EC%BA%94/li/273/882/1737882273.g_350-w-et-pj_g.jpg',
    productPrice: 2000,
    productName: '펩시 제로'
  }
];

export default Home;
