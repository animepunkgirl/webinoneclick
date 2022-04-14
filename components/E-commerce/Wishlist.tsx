// import React, {useEffect, useState} from 'react';
// import Image from "next/image";
// import WishlistIcon from "../../public/e-commerce/header/wishlist-icon.svg";
// import {useAppDispatch, useAppSelector} from "../../hooks/useStore";
// import {ECommerceItem} from "../../types/e-commerce/ECommerceItem";
// import {wishlistDelete, changeWishlistVisible} from "../../store/e-commerce";
//
// const Wishlist = () => {
//   const dispatch = useAppDispatch()
//
//   //Basket
//   const {wishlist, wishlistVisible} = useAppSelector(store => store.ecommerce)
//
//   const handleDeleteItem = (item: ECommerceItem) => {
//     dispatch(wishlistDelete(item))
//   }
//
//   const [countedWishlist, setCountedWishlist] = useState<ECommerceItem[]>([])
//   useEffect(() => {
//     let temp = [] as ECommerceItem[]
//     wishlist.map(item => {
//       const i = temp.findIndex(el => el.name === item.name && el.image == item.image)
//       if(i !== -1) {
//         let tempItem = {...temp[i]}
//         if(tempItem.count)
//           tempItem.count += 1;
//
//         temp[i] = tempItem
//       } else {
//         temp.push(item)
//       }
//     })
//     setCountedWishlist(temp)
//   }, [wishlist.length])
//
//   return (
//     <li className={wishlist.length ? "header__menu-link header__wishlist active" : "header__menu-link header__wishlist"}>
//       <div style={{display: "flex"}} onClick={() => dispatch(changeWishlistVisible(!wishlistVisible))}>
//         Wishlist
//         <div className="header__icon">
//           <Image src={WishlistIcon} layout="fill"/>
//         </div>
//       </div>
//       {countedWishlist.length != 0 &&
//       <div className={wishlistVisible ? "header__basket-list active" : "header__basket-list"}>
//         {countedWishlist.map(item =>
//           <div className="item" key={item.name + item.price + item.image.src}>
//             <div className="item-image">
//               <Image src={item.image} layout="fill"/>
//             </div>
//             <div className="item-title">{item.name}</div>
//             <div className="item-price">{item.price}</div>
//             <div className="item-count">Quantity: {item.count}</div>
//             <button className="item-delete" onClick={() => handleDeleteItem(item)}>Delete</button>
//           </div>
//         )}
//       </div>}
//     </li>
//   );
// };
//
// export default Wishlist;

export {}