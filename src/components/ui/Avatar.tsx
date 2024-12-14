import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Avatar({ src, alt, size = 'md' }: AvatarProps) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} rounded-full object-cover`}
    />
  );
}