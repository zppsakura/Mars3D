import { MarsPannel } from "@mars/components/MarsUI"
import { useEffect } from "react"
import { useLifecycle } from "@mars/common/uses/useLifecycle"
import * as mapWork from "./map"

export default function (props) {
  useLifecycle(mapWork)

  return (
    <MarsPannel right={10} top={10} {...props}>
      <div style={{ padding: "10px" }}>
        点击地图添加文本标注
      </div>
    </MarsPannel>
  )
} 
