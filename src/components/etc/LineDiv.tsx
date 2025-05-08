import React from 'react'

interface LineDivProps {
  width: string
  margin: string
  borderColor: string
}

const LineDiv: React.FC<LineDivProps> = ({ width, margin, borderColor }) => {
  return (
    <div
      style={{
        width: width,
        margin: margin,
        borderTop: `1px solid ${borderColor}`,
      }}
    />
  )
}

export default LineDiv
