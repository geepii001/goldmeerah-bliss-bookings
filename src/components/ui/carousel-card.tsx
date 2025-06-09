'use client'
import { useState, useEffect, useRef } from "react";

// Define the type for card data
interface CardData {
  id: number;
  imgUrl: string;
  content: string;
}

interface CardProps {
  data: CardData[];
  showCarousel?: boolean;
  cardsPerView?: number;
}

const Card = ({ data, showCarousel = true, cardsPerView = 3 }: CardProps) => {
  // ... existing code from the provided carousel component ...
};

export default Card;