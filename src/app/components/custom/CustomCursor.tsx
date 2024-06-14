"use client"

import { useState, useEffect } from 'react'

const CustomCursor = () => {

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    width: '32px',
    height: '32px',
    radius: '100%',
    hovered: false,
    dotVisible: true,
    scrolling: false
  })

  useEffect(() => {
    
    window.addEventListener("mousemove", handleMove)
    window.addEventListener("click", handleClick)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("click", handleClick)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMove = (event: MouseEvent) => {
    let updatedCursor = {
      width: "32px",
      height: "32px",
      radius: "100%",
      x: event.clientX - 16,
      y: event.clientY - 16,
      hovered: false
    };

    let hoveredElement : Element | undefined | null = document.elementFromPoint(
      event.clientX,
      event.clientY
    )

    const dataCursorAttribute = hoveredElement?.getAttribute('data-cursor')

    if (dataCursorAttribute) {
      if (dataCursorAttribute !== "true") {
        hoveredElement = hoveredElement?.closest(`[data-cursor="true"]`);
      }
      if (!hoveredElement) return;

      const computedStyle = window.getComputedStyle(hoveredElement);
      const elementBorder = hoveredElement.getBoundingClientRect();

      updatedCursor = {
        x: elementBorder.x,
        y: elementBorder.y,
        width: `${elementBorder.width}px`,
        height: `${elementBorder.height}px`,
        radius: computedStyle.borderRadius !== "0px" ? computedStyle.borderRadius : "4px",
        hovered: true
      }
    }

    setCursor({
      ...updatedCursor,
      dotVisible: true,
      scrolling: false
    });
  };


  const handleClick = () => {

  }

  const handleScroll = () => {

  }

  return (
    <div>
      <div
        className={`custom-cursor border-2 border-black hidden lg:flex 
        ${cursor.hovered || cursor.scrolling
            ? "border-opacity-100 cursor-hover-animation duration-300"
            : "border-opacity-40 duration-150"
          }
        `}
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
          width: cursor.width,
          height: cursor.height,
          borderRadius: cursor.radius,
        }}
      />
      {!(cursor.hovered || !cursor.dotVisible || cursor.scrolling) && (
        <div
          className="fixed w-1 h-1 rounded-full bg-black z-[999] pointer-events-none  hidden md:flex "
          style={{
            transform: `translate3d(${cursor.x + 14}px, ${cursor.y + 14}px, 0)`,
          }}
        />
      )}
    </div>
  )
}

export default CustomCursor