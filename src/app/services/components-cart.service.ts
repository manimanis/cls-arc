import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsCartService {

  cart = {};

  constructor() {
    if (window.localStorage && window.localStorage.getItem('cart') !== null) {
      this.cart = JSON.parse(window.localStorage.getItem('cart'));
    }
  }

  createCart(compId: string, initFn = (array) => { }) {
    if (!this.cart[compId]) {
      this.cart[compId] = [];
      this.saveCart();
    }
    initFn(this.cart[compId]);
  }

  getCart(compId: string) {
    if (!this.cart[compId]) {
      this.createCart(compId);
    }
    return this.cart[compId];
  }

  itemInCart(compId: string, item: any) {
    const cart = this.getCart(compId);
    for (const cartItem of cart) {
      if (cartItem.equals(item)) {
        return true;
      }
    }
    return false;
  }

  indexOfItem(compId: string, item: any) {
    const cart = this.getCart(compId);
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].equals(item)) {
        return i;
      }
    }
    return -1;
  }

  addToCart(compId: string, item: any) {
    const cart = this.getCart(compId);
    cart.push(item);
    this.saveCart();
  }

  removeFromCart(compId: string, item: any) {
    const idx = this.indexOfItem(compId, item);
    const cart = this.getCart(compId);
    if (idx !== -1) {
      cart.splice(idx, 1);
    }
    this.saveCart();
  }

  saveCart() {
    window.localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
