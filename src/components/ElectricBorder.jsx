import React from 'react';

const ElectricBorder = ({
  children,
  color = '#10b981',   // emerald-500
  speed = 1,
  chaos = 0.12,
  thickness = 2,
  style = {},
}) => {
  const filterId = `electric-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="electric-border-wrapper" style={{ position: 'relative', ...style }}>
      {/* SVG Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="turbulence"
              baseFrequency={chaos}
              numOctaves="3"
              result="noise"
              seed="1"
            >
              <animate
                attributeName="seed"
                values="1;5;1"
                dur={`${3 / speed}s`}
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={thickness * 4} />
          </filter>
        </defs>
      </svg>

      {/* Border element */}
      <div
        style={{
          position: 'absolute',
          inset: -thickness,
          borderRadius: 'inherit',
          border: `${thickness}px solid ${color}`,
          filter: `url(#${filterId})`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
};

export default ElectricBorder;