// import React from 'react';
// import Image from "next/image";
// import Image1 from "../../public/e-commerce/leatest-products/1.png";
// import Image2 from "../../public/e-commerce/leatest-products/2.png";
// import Image3 from "../../public/e-commerce/leatest-products/4.png";
// import Image4 from "../../public/e-commerce/leatest-products/4.png";
// import Image5 from "../../public/e-commerce/leatest-products/5.png";
// import Image6 from "../../public/e-commerce/leatest-products/6.png";
// import {useAppDispatch} from "../../hooks/useStore";
// import {ECommerceItem} from "../../types/e-commerce/ECommerceItem";
// import {MoveToBasketlist, MoveToWishlist} from "./MoveToLists";
//
// const LeatestProducts = () => {
//
//   const dispatch = useAppDispatch()
//   const handleItemClick = (e: React.MouseEvent<HTMLDivElement>, basketItem: ECommerceItem) => {
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
//     <div className="leatest-products">
//       <div className="leatest-products__container">
//         <div className="leatest-products__title title">
//           Leatest Products
//         </div>
//
//         <form action="#" className="leatest-products__filter">
//           <div className="leatest-products__select">
//             <input type="radio" name="leatest-products" id="leatest-products__choice1" value="1" defaultChecked/>
//             <label htmlFor="leatest-products__choice1">New Arrival</label>
//           </div>
//           <div className="leatest-products__select">
//             <input type="radio" name="leatest-products" id="leatest-products__choice2" value="2" />
//             <label htmlFor="leatest-products__choice2">Best Seller</label>
//           </div>
//           <div className="leatest-products__select">
//             <input type="radio" name="leatest-products" id="leatest-products__choice3" value="3" />
//             <label htmlFor="leatest-products__choice3">Featured</label>
//           </div>
//           <div className="leatest-products__select">
//             <input type="radio" name="leatest-products" id="leatest-products__choice4" value="4" />
//             <label htmlFor="leatest-products__choice4">Special Offer</label>
//           </div>
//         </form>
//
//         <div className="leatest-products__flex">
//             <div className="item"
//                  onClick={(e) => handleItemClick(e, {
//                    name: 'Comfort Handy Craft',
//                    price: '$42.00',
//                    image: Image1
//                  })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__sale">Sale</div>
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image1} layout="fill" objectFit="contain"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Comfort Handy Craft
//                 </div>
//                 <div className="details__price">
//                   <span className="details__current">
//                     $42.00
//                   </span>
//                   <div className="details__old">
//                     $65.00
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="item"  onClick={(e) => handleItemClick(e, {
//               name: 'Comfort Handy Craft',
//               price: '$42.00',
//               image: Image2
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__sale">Sale</div>
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image2} layout="fill" objectFit="contain"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Comfort Handy Craft
//                 </div>
//                 <div className="details__price">
//                   <span className="details__current">
//                     $42.00
//                   </span>
//                   <div className="details__old">
//                     $65.00
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="item"  onClick={(e) => handleItemClick(e, {
//               name: 'Comfort Handy Craft',
//               price: '$42.00',
//               image: Image3
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image3} layout="fill" objectFit="contain"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Comfort Handy Craft
//                 </div>
//                 <div className="details__price">
//                   <span className="details__current">
//                     $42.00
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="item"  onClick={(e) => handleItemClick(e, {
//               name: 'Comfort Handy Craft',
//               price: '$42.00',
//               image: Image4
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__sale">Sale</div>
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image4} layout="fill" objectFit="contain"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Comfort Handy Craft
//                 </div>
//                 <div className="details__price">
//                   <span className="details__current">
//                     $42.00
//                   </span>
//                   <div className="details__old">
//                     $65.00
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="item"  onClick={(e) => handleItemClick(e, {
//               name: 'Comfort Handy Craft',
//               price: '$42.00',
//               image: Image5
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image5} layout="fill" objectFit="contain"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Comfort Handy Craft
//                 </div>
//                 <div className="details__price">
//                   <span className="details__current">
//                     $42.00
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="item"  onClick={(e) => handleItemClick(e, {
//               name: 'Comfort Handy Craft',
//               price: '$42.00',
//               image: Image6
//             })}>
//               <div className="image-wrapper">
//                 <div className="image-wrapper__panel">
//                   <div className="image-wrapper__sale">Sale</div>
//                   <div className="image-wrapper__icons">
//                     <div className="image-wrapper__icons-basket" />
//                     <div className="image-wrapper__icons-wishlist" />
//                   </div>
//                 </div>
//                 <div className="image-wrapper__image">
//                   <Image src={Image6} layout="fill" objectFit="contain"/>
//                 </div>
//               </div>
//               <div className="details">
//                 <div className="details__title">
//                   Comfort Handy Craft
//                 </div>
//                 <div className="details__price">
//                   <span className="details__current">
//                     $42.00
//                   </span>
//                   <div className="details__old">
//                     $65.00
//                   </div>
//                 </div>
//               </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default LeatestProducts;

export {}