"use client";

import { createContext, useContext, useRef, useState } from "react";
import type { ReactNode } from "react";

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

type Notif = {
  id: number;
  message: string;
  visible: boolean;
};

type ShopContextValue = {
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (name: string, price: number) => void;
  changeQty: (name: string, delta: number) => void;
  clearCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  notifs: Notif[];
  showNotif: (message: string) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

export function useShop(): ShopContextValue {
  const ctx = useContext(ShopContext);
  if (!ctx) {
    throw new Error("useShop harus dipakai di dalam <ShopProvider>");
  }
  return ctx;
}

export default function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifs, setNotifs] = useState<Notif[]>([]);
  const notifId = useRef(0);

  function showNotif(message: string) {
    const id = ++notifId.current;
    setNotifs((list) => [...list, { id, message, visible: false }]);

    setTimeout(() => {
      setNotifs((list) =>
        list.map((n) => (n.id === id ? { ...n, visible: true } : n)),
      );
    }, 10);

    setTimeout(() => {
      setNotifs((list) =>
        list.map((n) => (n.id === id ? { ...n, visible: false } : n)),
      );
      setTimeout(() => {
        setNotifs((list) => list.filter((n) => n.id !== id));
      }, 300);
    }, 2500);
  }

  function addToCart(name: string, price: number) {
    setCart((items) => {
      const exists = items.some((item) => item.name === name);
      if (exists) {
        return items.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...items, { name, price, quantity: 1 }];
    });
    showNotif(`${name} berhasil ditambahkan!`);
  }

  function changeQty(name: string, delta: number) {
    setCart((items) =>
      items
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        changeQty,
        clearCart,
        searchQuery,
        setSearchQuery,
        notifs,
        showNotif,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
