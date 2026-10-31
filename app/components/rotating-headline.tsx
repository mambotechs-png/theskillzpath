"use client";

import { useEffect, useState } from "react";

const HEADLINES = [
  "You finish the course. We hand you the gigs.",
  "Many gigs from our clients after you finish the skill.",
  "Learn crypto trading through real skill — then trade.",
  "Get paid for your work inside our platform or outside it.",
  "Your skill, their budget, your payday.",
];

export function RotatingHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % HEADLINES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span key={index} className="text-gradient block animate-fade-up">
      {HEADLINES[index]}
    </span>
  );
}
