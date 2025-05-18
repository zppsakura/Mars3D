import React, { useEffect, useRef } from "react"
import { useLifecycle } from "@mars/common/uses/useLifecycle"
import * as mapWork from "./map"

const Roller: React.FC = () => {
  useLifecycle(mapWork)
  return null
}

export default Roller 
