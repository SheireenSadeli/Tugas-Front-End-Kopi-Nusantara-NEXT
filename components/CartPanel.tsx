"use client";

import { useEffect, useRef, useState } from "react";
import { formatRupiah } from "@/lib/format";
import { useShop } from "./ShopProvider";

export default function CartPanel() {
  const { cart, cartOpen, setCartOpen, changeQty, clearCart, showNotif } =
    useShop();
  const [confirming, setConfirming] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function resetConfirm() {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
    setConfirming(false);
  }

  function handleBuy() {
    if (cart.length === 0) {
      showNotif("Keranjang kamu kosong!");
      return;
    }

    if (!confirming) {
      setConfirming(true);
      timer.current = setTimeout(() => setConfirming(false), 3000);
      return;
    }

    showNotif("Terima kasih telah berbelanja di Kopi Nusantara!");
    clearCart();
    setCartOpen(false);
    resetConfirm();
  }

  return (
    <div className={`shopping-cart-button${cartOpen ? " active" : ""}`}>
      <h3>Keranjang Saya</h3>

      <div className="content-cart">
        {cart.length === 0 ? (
          <p className="message-cart">Tidak ada barang yang dibeli...</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <div className="item-info">
                <p>{item.name}</p>
                <span>{formatRupiah(item.price * item.quantity)}</span>
              </div>
              <div className="qty-controls">
                <button
                  type="button"
                  className="btn-qty btn-minus"
                  aria-label={`Kurangi ${item.name}`}
                  onClick={() => changeQty(item.name, -1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  className="btn-qty btn-plus"
                  aria-label={`Tambah ${item.name}`}
                  onClick={() => changeQty(item.name, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="info-cart">
        <div className="total-cart">
          <p className="content-total-cart">
            Total: <span id="price">{formatRupiah(total)}</span>
          </p>
        </div>

        <button
          type="button"
          className={`submit-cart${confirming ? " confirm-mode" : ""}`}
          id="submit-cart"
          onClick={handleBuy}
        >
          {confirming ? "Yakin beli sekarang?" : "Beli"}
        </button>
      </div>
    </div>
  );
}
