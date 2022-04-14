// import React from "react";
// import Image1 from "../../public/e-commerce/features-products/1.png"
// import Image2 from "../../public/e-commerce/features-products/2.png"
// import Image3 from "../../public/e-commerce/features-products/3.png"
// import Image4 from "../../public/e-commerce/features-products/4.png"
// import Image from "next/image"
// import {Swiper, SwiperSlide} from "swiper/react";
// import {useAppDispatch} from "../../hooks/useStore";
// import {ECommerceItem} from "../../types/e-commerce/ECommerceItem";
// import {MoveToWishlist, MoveToBasketlist} from "./MoveToLists";
// import {Pagination} from "swiper";
//
// const FeaturedProducts = () => {
//
//   const dispatch = useAppDispatch()
//
//   const handleItemClick = (e: React.MouseEvent<HTMLElement>, basketItem: ECommerceItem) => {
//     const button = e.target as HTMLDivElement
//     //isBasket
//     if(button.classList.contains('image-wrapper__icons-basket')) {
//       MoveToBasketlist(e, basketItem, dispatch)
//     }
//
//     //isWishlist
//     if(button.classList.contains('image-wrapper__icons-wishlist')) {
//       MoveToWishlist(e, basketItem, dispatch)
//     }
//   }
//
//   return (
//     <div className="featured-products">
//       <div className="featured-products__container">
//         <div className="featured-products__title title">
//           Featured Products
//         </div>
//         <div className="featured-products__slider">
//           <Swiper
//             slidesPerView="auto"
//             modules={[Pagination]}
//             slidesPerGroupAuto
//             pagination={{
//               type: "bullets",
//               clickable: true
//             }}
//             rewind
//           >
//             <SwiperSlide className="item" onClick={(e) => handleItemClick(e, {
//               name: 'Cantilever chair',
//               image: Image1,
//               price: '$42.00'
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                   <button className="image-wrapper__details-btn">
//                     View Details
//                   </button>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image1} layout="fill"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Cantilever chair
//                 </div>
//                 <div className="details__colors">
//                   <div className="left" />
//                   <div className="center" />
//                   <div className="right" />
//                 </div>
//                 <div className="details__code">
//                   Code - Y523201
//                 </div>
//                 <div className="details__price">
//                   $42.00
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="item" onClick={(e) => handleItemClick(e, {
//               name: 'Cantilever chair',
//               image: Image2,
//               price: '$42.00'
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                   <button className="image-wrapper__details-btn">
//                     View Details
//                   </button>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image2} layout="fill"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Cantilever chair
//                 </div>
//                 <div className="details__colors">
//                   <div className="left" />
//                   <div className="center" />
//                   <div className="right" />
//                 </div>
//                 <div className="details__code">
//                   Code - Y523201
//                 </div>
//                 <div className="details__price">
//                   $42.00
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="item" onClick={(e) => handleItemClick(e, {
//               name: 'Cantilever chair',
//               image: Image3,
//               price: '$42.00'
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                   <button className="image-wrapper__details-btn">
//                     View Details
//                   </button>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image3} layout="fill"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Cantilever chair
//                 </div>
//                 <div className="details__colors">
//                   <div className="left" />
//                   <div className="center" />
//                   <div className="right" />
//                 </div>
//                 <div className="details__code">
//                   Code - Y523201
//                 </div>
//                 <div className="details__price">
//                   $42.00
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="item" onClick={(e) => handleItemClick(e, {
//               name: 'Cantilever chair',
//               image: Image4,
//               price: '$42.00'
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                   <button className="image-wrapper__details-btn">
//                     View Details
//                   </button>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image4} layout="fill"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Cantilever chair
//                 </div>
//                 <div className="details__colors">
//                   <div className="left" />
//                   <div className="center" />
//                   <div className="right" />
//                 </div>
//                 <div className="details__code">
//                   Code - Y523201
//                 </div>
//                 <div className="details__price">
//                   $42.00
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="item" onClick={(e) => handleItemClick(e, {
//               name: 'Cantilever chair',
//               image: Image1,
//               price: '$42.00'
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                   <button className="image-wrapper__details-btn">
//                     View Details
//                   </button>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image1} layout="fill"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Cantilever chair
//                 </div>
//                 <div className="details__colors">
//                   <div className="left" />
//                   <div className="center" />
//                   <div className="right" />
//                 </div>
//                 <div className="details__code">
//                   Code - Y523201
//                 </div>
//                 <div className="details__price">
//                   $42.00
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="item" onClick={(e) => handleItemClick(e, {
//               name: 'Cantilever chair',
//               image: Image2,
//               price: '$42.00'
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                   <button className="image-wrapper__details-btn">
//                     View Details
//                   </button>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image2} layout="fill"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Cantilever chair
//                 </div>
//                 <div className="details__colors">
//                   <div className="left" />
//                   <div className="center" />
//                   <div className="right" />
//                 </div>
//                 <div className="details__code">
//                   Code - Y523201
//                 </div>
//                 <div className="details__price">
//                   $42.00
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="item" onClick={(e) => handleItemClick(e, {
//               name: 'Cantilever chair',
//               image: Image3,
//               price: '$42.00'
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                   <button className="image-wrapper__details-btn">
//                     View Details
//                   </button>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image3} layout="fill"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Cantilever chair
//                 </div>
//                 <div className="details__colors">
//                   <div className="left" />
//                   <div className="center" />
//                   <div className="right" />
//                 </div>
//                 <div className="details__code">
//                   Code - Y523201
//                 </div>
//                 <div className="details__price">
//                   $42.00
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="item" onClick={(e) => handleItemClick(e, {
//               name: 'Cantilever chair',
//               image: Image4,
//               price: '$42.00'
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                   <button className="image-wrapper__details-btn">
//                     View Details
//                   </button>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image4} layout="fill"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Cantilever chair
//                 </div>
//                 <div className="details__colors">
//                   <div className="left" />
//                   <div className="center" />
//                   <div className="right" />
//                 </div>
//                 <div className="details__code">
//                   Code - Y523201
//                 </div>
//                 <div className="details__price">
//                   $42.00
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default FeaturedProducts;

export {}