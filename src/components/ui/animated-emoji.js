'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';

/**
 * Animated emoji component that creates a confetti effect when clicked
 * @component
 */
export const AnimatedEmoji = ({ emoji, label, className }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);

    // Create confetti effect with the emoji
    const count = 50;
    const defaults = {
      origin: { y: 1 },
      shapes: [emoji],
      scalar: 2,
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    // Reset animation state
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center transition-transform ${
        isAnimating ? 'scale-125' : ''
      } ${className || ''}`}
      aria-label={label}>
      {emoji}
    </button>
  );
};
