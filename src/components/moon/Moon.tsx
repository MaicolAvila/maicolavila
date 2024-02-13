"use client";

import React, { use, useCallback, useEffect, useRef, useState } from "react";

function MoonAnimation() {
  const moon = useRef<HTMLDivElement>(null);
  const prevScrollPosition = useRef(0);

  const handleScroll = useCallback(() => {
    const scrollableDiv = document.getElementById(
      "content-scrollable"
    ) as HTMLElement;
    const scrollPosition = scrollableDiv.scrollTop;
    const scrollDifference = scrollPosition - prevScrollPosition.current;
    prevScrollPosition.current = scrollPosition;

    let newX = parseFloat(moon.current!.style.right) + scrollDifference / 10;
    let newY =
      parseFloat(moon.current!.style.top) - (scrollDifference * 2) / 10;
    let opacity =
      parseFloat(moon.current!.style.opacity) - scrollDifference / 100;

    if (moon.current) {
      moon.current.style.right = `${newX}%`;
      moon.current.style.top = `${newY}%`;
      moon.current.style.opacity = opacity.toString();
    }

  }, []);

  useEffect(() => {
    const scrollableDiv = document.getElementById(
      "content-scrollable"
    ) as HTMLElement;
    if (scrollableDiv === null) return;
    scrollableDiv.addEventListener("scroll", handleScroll);

    return () => {
      scrollableDiv.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      ref={moon}
      id="luna"
      className="luna"
      style={{ top: "5%", right: "1%", opacity: 1 }}
    ></div>
  );
}

export default MoonAnimation;
