"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";

interface Item {
  image: string;
  name: string;
}

interface CarouselProps {
  items: Item[];
}

export default function Carousel({ items }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState([...items, ...items, ...items]);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval: NodeJS.Timeout;

    if (!container) return;

    const handleMouseEnter = () => {
      clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
      startAutoScroll();
    };

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        container.scrollLeft += 1; // Ajusta la velocidad de desplazamiento aquí
        console.log(container.scrollLeft, container.scrollWidth);
        if (container.scrollLeft >= container.scrollWidth / 2) {
          // Si alcanza la mitad del contenedor, vuelve al principio
          container.scrollLeft = 0;
        }
      }, 50); // Ajusta la velocidad de desplazamiento aquí
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={styles.carouselContainer} ref={containerRef}>
      <div className={styles.carouselWrapper}>
        {visibleItems.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className={styles.carouselImage}
            />
            <p className={styles.carouselText}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
