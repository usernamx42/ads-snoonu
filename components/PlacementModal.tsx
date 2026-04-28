"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
  label: string;
  description: string;
  image: string;
  audience: string;
  pct: number;
  reachLabel: string;
  audienceLabel: string;
  closeLabel: string;
};

export default function PlacementModal({
  open,
  onClose,
  label,
  description,
  image,
  audience,
  pct,
  reachLabel,
  audienceLabel,
  closeLabel,
}: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="placement-modal-title"
        >
          <div className="absolute inset-0 bg-off-black/70 backdrop-blur-sm" />

          <motion.div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute top-4 end-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-off-black transition-colors cursor-pointer"
            >
              <X size={18} weight="bold" />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="flex items-center justify-center bg-off-black p-8 md:p-10 md:w-[280px] shrink-0">
                <div
                  className="relative shrink-0"
                  style={{
                    width: 220,
                    height: 408,
                    borderRadius: 36,
                    background: "#1a1a1a",
                    padding: 8,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden bg-white" style={{ borderRadius: 28 }}>
                    <Image
                      src={image}
                      alt={label}
                      fill
                      sizes="220px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 60,
                      height: 7,
                      borderRadius: 4,
                      background: "#0a0a0a",
                    }}
                  />
                </div>
              </div>

              <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                <h3
                  id="placement-modal-title"
                  className="text-3xl md:text-4xl font-black text-off-black tracking-tight leading-none"
                >
                  {label}
                </h3>
                <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
                  {description}
                </p>

                <div className="mt-8 pt-6 border-t border-zinc-200">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                    {audienceLabel}
                  </p>
                  <p className="mt-2 text-4xl md:text-5xl font-black text-brand-red tabular-nums tracking-tight leading-none">
                    {audience}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-muted">
                    {reachLabel.replace("{pct}", String(pct))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
