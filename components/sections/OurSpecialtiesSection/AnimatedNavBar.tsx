import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function AnimatedNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef(null);
  const markerRef = useRef(null);

  const navItems = ["Home", "About", "Services", "Contact"];

  useEffect(() => {
    // Initial animation to position the marker under the first item
    gsap.to(markerRef.current, {
      x: navRef.current.children[activeIndex].offsetLeft,
      width: navRef.current.children[activeIndex].offsetWidth,
      duration: 0.3,
    });
  }, []);

  const handleNavClick = (index) => {
    setActiveIndex(index);
    // Animate the marker to the new active item
    gsap.to(markerRef.current, {
      x: navRef.current.children[index].offsetLeft,
      width: navRef.current.children[index].offsetWidth,
      duration: 0.3,
    });
  };

  return (
    <nav ref={navRef}>
      {navItems.map((item, index) => (
        <button
          key={item}
          onClick={() => handleNavClick(index)}
          style={{ padding: "10px 20px" }}
        >
          {item}
        </button>
      ))}
      <div
        ref={markerRef}
        style={{
          height: "3px",
          backgroundColor: "blue",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 0,
        }}
      />
    </nav>
  );
}

export default AnimatedNavbar;
