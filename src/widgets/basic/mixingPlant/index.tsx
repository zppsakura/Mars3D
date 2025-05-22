import React, { useEffect, useRef } from "react"
import { useLifecycle } from "@mars/common/uses/useLifecycle"
import * as mapWork from "./map"

const MixingPlant: React.FC = () => {
  useLifecycle(mapWork)
  return null
}

export default MixingPlant; 
