'use client';

import React, { createContext, useContext, useState, useEffect } from "react";
import BookingModal from "./BookingModal";

interface BookingContextType {
  openBooking: () => void;
  closeBooking: () => void;
  isOpen: boolean;
}

const BookingContext = createContext<BookingContextType>({
  openBooking: () => {},
  closeBooking: () => {},
  isOpen: false,
});

export function useBooking() {
  return useContext(BookingContext);
}

export default function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = () => setIsOpen(true);
  const closeBooking = () => setIsOpen(false);

  // Global click interceptor for any #book link or book button
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href");
      const text = target.textContent?.trim().toLowerCase() || "";

      if (
        href === "#book" ||
        href === "#booking" ||
        target.classList.contains("trigger-booking-modal") ||
        (href?.includes("wa.me") && text.includes("book"))
      ) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking, isOpen }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
}
