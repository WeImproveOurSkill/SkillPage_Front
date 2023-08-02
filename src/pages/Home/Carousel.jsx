import { styled } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { useState } from 'react';

function Carousel() {
  const settings = {
    infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
    speed: 300, // 애미메이션의 속도, 단위는 milliseconds
    slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
    slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
    dots: true,
    arrows: true,
    pauseOnHover: true,
    draggable: true
    // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
    // dotsClass: 'custom_paging',
    // customPaging: function (slider, i) {
    //   const thumb = slider.$slides[i].data();
    //   return '<a class="dot">' + i + '</a>';
    // }
    // centerPadding: '0px' // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    // beforeChange: (_current, next) => {
    //   changeCarouselImage(items[next].imageUrl[1]);
    //   setImg(next);
    // },
    // autoplay: true,
    // autoplaySpeed: 3000, //자동으로 슬라이드되게 만들어준다.
  };
  return (
    <div>
      <StyledSlider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </StyledSlider>
    </div>
  );
}

const StyledSlider = styled(Slider)`
  width: 1920px;
  height: 400px;

  .slick-slide {
    background-color: #eaf8ff;
    width: 100%;
    height: 430px;
    z-index: 1;
    border-bottom: 1px solid lightgray;
  }

  .slick-prev {
    background-color: black;
    opacity: 0.35;
    width: 38.5px;
    height: 30px;
    top: 90%;
    left: 90%;
    z-index: 1;
    padding-top: 2px;
    border-radius: 50% 0% 0% 50%;
  }

  .slick-next {
    background-color: black;
    opacity: 0.35;
    width: 38px;
    height: 30px;
    top: 90%;
    right: 6%;
    z-index: 1;
    padding-top: 2px;
    border-radius: 0% 50% 50% 0%;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: 'Font Awesome Free';
    font-size: 36px;
    color: #ffffff;
  }

  .slides .slick-prev,
  .slides .slick-next {
    position: absolute;
  }

  .slick-dots {
    // 점 스타일 관련 코드
  }
`;

export default Carousel;

//   const [oldSlide, setOldSlide] = useState(0);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [activeSlide2, setActiveSlide2] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     beforeChange: (current, next) => {
//       setOldSlide(current);
//       setActiveSlide(next);
//     },
//     afterChange: (current) => setActiveSlide2(current)
//   };
//   return (
//     <div>
//       <h2>beforeChange and afterChange hooks</h2>
//       <p>
//         BeforeChange {'=>'} oldSlide: <strong>{oldSlide}</strong>
//       </p>
//       <p>
//         BeforeChange {'=>'} activeSlide: <strong>{activeSlide}</strong>
//       </p>
//       <p>
//         AfterChange {'=>'} activeSlide: <strong>{activeSlide2}</strong>
//       </p>
//       <StyledSlider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </StyledSlider>
//     </div>
//   );
