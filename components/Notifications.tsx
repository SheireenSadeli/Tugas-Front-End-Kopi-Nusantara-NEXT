"use client";

import { useShop } from "./ShopProvider";

export default function Notifications() {
  const { notifs } = useShop();

  return (
    <div id="notif-container">
      {notifs.map((n) => (
        <div
          key={n.id}
          className={`notif-message${n.visible ? " show" : ""}`}
        >
          {n.message}
        </div>
      ))}
    </div>
  );
}
