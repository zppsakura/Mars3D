import type { WidgetState } from "@mars/common/store/widget"
import { lazy } from "react"

const widgetState: WidgetState = {
  widgets: [
    {
      component: lazy(() => import("@mars/widgets/demo/realtimeInfo")),
      name: "realtime-info"
    }
  ],
  openAtStart: ["realtime-info"]
}

export default widgetState
