import React from 'react'

interface RangeSliderProps {
  value: number
  onChange: (value: number) => void
  onMouseUp: () => void
}

const RangeSlider: React.FC<RangeSliderProps> = ({ value, onChange, onMouseUp }) => {
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      onMouseUp={onMouseUp}
      style={{
        accentColor: 'white',
        color: 'white',
        width: '200px',
        appearance: 'none',
        height: '10px',
        borderRadius: '5px',
        outline: 'none',
        background: `linear-gradient(to right, #fff ${value}%, #000 ${value}%)`,
      }}
    />
  )
}

export default RangeSlider
