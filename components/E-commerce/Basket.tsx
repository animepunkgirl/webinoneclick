// import Image from "next/image";
// import BasketIcon from "public/e-commerce/header/basket-icon.svg";
// import React, {useEffect, useState} from "react";
// import {useAppDispatch, useAppSelector} from "hooks/useStore";
// import {basketDelete, changeBasketVisible} from "store/e-commerce";
// import {ECommerceItem} from "types/e-commerce/ECommerceItem";
//
// const Basket = () => {
//   const dispatch = useAppDispatch()
//
//   //Basket
//   const {basket, basketVisible} = useAppSelector(store => store.ecommerce)
//
//   const handleDeleteItem = (item: ECommerceItem) => {
//     dispatch(basketDelete(item))
//   }
//
//   const [countedBasketList, setCountedBasketList] = useState<ECommerceItem[]>([])
//   useEffect(() => {
//     let temp = [] as ECommerceItem[]
//     basket.map(item => {
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
//     setCountedBasketList(temp)
//   }, [basket.length])
//
//   return (
//     <li className="header__menu-link">
//       <div className="header__basket">
//         {basket.length != 0 && <div className="header__basket-counter"><span>{basket.length}</span></div>}
//         <Image
//           onClick={() => dispatch(changeBasketVisible(!basketVisible))}
//           src={BasketIcon}
//           layout="fill"
//         />
//         {countedBasketList.length != 0 &&
//         <div className={basketVisible ? "header__basket-list active" : "header__basket-list"}>
//           {countedBasketList.map(item =>
//             <div className="item" key={item.name + item.price + item.image.src}>
//               <div className="item-image">
//                 <Image src={item.image} layout="fill"/>
//               </div>
//               <div className="item-title">{item.name}</div>
//               <div className="item-price">{item.price}</div>
//               <div className="item-count">Quantity: {item.count}</div>
//               <button className="item-delete" onClick={() => handleDeleteItem(item)}>Delete</button>
//             </div>
//           )}
//           <div className="btn-wrapper">
//               <button className="header__buy-btn btn">Buy now</button>
//           </div>
//         </div>}
//       </div>
//     </li>
//   );
// };
//
// export default Basket;

export {}