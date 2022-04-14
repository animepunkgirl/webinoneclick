import {basketAdd, wishlistAdd} from "../../store/e-commerce";
import React from "react";
import {ECommerceItem} from "../../types/e-commerce/ECommerceItem";
import {AppDispatch} from "../../store";


export const MoveToWishlist = (e: React.MouseEvent<HTMLElement>, basketItem: ECommerceItem, dispatch: AppDispatch) => {

  const productButton = e.target as HTMLDivElement;
  if(!productButton.classList.contains('_hold')) {
    productButton.classList.add('_hold')

    const card = window.document.getElementsByClassName('header__wishlist')[0]
    const image = e.currentTarget.querySelector('.image-wrapper__image') as HTMLElement
    if(image != null) {
      const imageFly = image.cloneNode(true) as HTMLDivElement
      const imageFlyWidth = image.offsetWidth;
      const imageFlyHeight = image.offsetHeight;
      const imageFlyTop = image.getBoundingClientRect().top;
      const imageFlyLeft = image.getBoundingClientRect().left;

      imageFly.setAttribute('class', '_flyImage');
      imageFly.style.left = imageFlyLeft + 'px'
      imageFly.style.top = imageFlyTop + 'px'
      imageFly.style.width = imageFlyWidth + 'px'
      imageFly.style.height = imageFlyHeight + 'px'

      document.getElementsByClassName('e-commerce')[0].append(imageFly)

      const cardFlyLeft = card.getBoundingClientRect().left;
      const cardFlyTop = card.getBoundingClientRect().top;

      imageFly.style.left = cardFlyLeft + 'px';
      imageFly.style.top = cardFlyTop + 'px';
      imageFly.style.width = '0';
      imageFly.style.height = '0'
      imageFly.style.opacity = '0';

      imageFly.addEventListener('transitionend', () => {
        if(productButton.classList.contains('_hold')) {
          imageFly.remove()
          dispatch(wishlistAdd(basketItem))
          productButton.classList.remove('_hold')
        }
      })
    }
  }
}

export const MoveToBasketlist = (e: React.MouseEvent<HTMLElement>, basketItem: ECommerceItem, dispatch: AppDispatch) => {

    const productButton = e.target as HTMLDivElement;
    if(!productButton.classList.contains('_hold')) {
      productButton.classList.add('_hold')

      const card = window.document.getElementsByClassName('header__basket')[0]
      const image = e.currentTarget.querySelector('.image-wrapper__image') as HTMLElement
      if (image != null) {
        const imageFly = image.cloneNode(true) as HTMLDivElement
        const imageFlyWidth = image.offsetWidth;
        const imageFlyHeight = image.offsetHeight;
        const imageFlyTop = image.getBoundingClientRect().top;
        const imageFlyLeft = image.getBoundingClientRect().left;

        imageFly.setAttribute('class', '_flyImage');
        imageFly.style.left = imageFlyLeft + 'px'
        imageFly.style.top = imageFlyTop + 'px'
        imageFly.style.width = imageFlyWidth + 'px'
        imageFly.style.height = imageFlyHeight + 'px'

        document.getElementsByClassName('e-commerce')[0].append(imageFly)

        const cardFlyLeft = card.getBoundingClientRect().left;
        const cardFlyTop = card.getBoundingClientRect().top;

        imageFly.style.left = cardFlyLeft + 'px';
        imageFly.style.top = cardFlyTop + 'px';
        imageFly.style.width = '0';
        imageFly.style.height = '0'
        imageFly.style.opacity = '0';

        imageFly.addEventListener('transitionend', () => {
          if (productButton.classList.contains('_hold')) {
            imageFly.remove()
            dispatch(basketAdd(basketItem))
            productButton.classList.remove('_hold')
          }
        })
      }
    }
}