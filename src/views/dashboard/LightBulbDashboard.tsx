import React, { useState } from 'react'
import RangeSlider from '../../components/etc/RangeSlider'
import LineDiv from '../../components/etc/LineDiv'
import { uselightBulbControll } from 'src/react-query/lightBulb'
import { LightBulbQueryParam } from 'src/type/lightBulb/LightBulb'

const LightBulbDashboard = () => {
  const [brightness, setBrightness] = useState<number>(0)
  const controlMutation = uselightBulbControll()

  const bulbColor = `hsl(0, 0%, ${brightness}%)`

  const handleBrightValue = () => {
    controlMutation.mutate({
      ...LightBulbQueryParam,
      brightness,
    })
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="relative d-flex flex-column align-items-center border border-2 border-white pb-0 px-5 py-4 rounded-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="200" height="300">
          <path
            fill="white"
            d="M252.592,496h6.816a108.122,108.122,0,0,0,108-108V332.308a177.481,177.481,0,0,0,66.37-138.531C433.778,95.751,354.027,16,256,16S78.222,95.751,78.222,193.777a177.477,177.477,0,0,0,66.371,138.531V388A108.121,108.121,0,0,0,252.592,496Zm6.816-32h-6.816a76.106,76.106,0,0,1-70.631-48H330.04A76.107,76.107,0,0,1,259.408,464Zm76-80H176.593V344H335.408ZM110.222,193.777C110.222,113.4,175.618,48,256,48s145.778,65.4,145.778,145.777a146.392,146.392,0,0,1-59.817,117.737L341.3,312H170.7l-.665-.486A146.394,146.394,0,0,1,110.222,193.777Z"
            className="ci-primary"
          />
          <circle cx="256" cy="193" r="110" strokeWidth="3" fill={bulbColor} />
        </svg>
        <RangeSlider value={brightness} onChange={setBrightness} onMouseUp={handleBrightValue} />
        <LineDiv width="calc(100% + 100px)" margin="30px -50px" borderColor="white" />

        <p className="text-start d-flex">
          현재 밝기 : <p className="fw-bold">&nbsp; {brightness}% </p>
        </p>
      </div>
    </div>
  )
}

export default LightBulbDashboard
