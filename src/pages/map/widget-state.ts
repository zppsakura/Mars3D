import type { WidgetState } from "@mars/common/store/widget"
import { lazy } from "react"

const widgetState: WidgetState = {
  widgets: [
    {
      component: lazy(() => import("@mars/widgets/basic/ToolBar")),
      name: "toolbar"
    },
    {
      component: lazy(() => import("@mars/widgets/basic/QureyPoi")),
      name: "qurey-poi"
    },
    {
      component: lazy(() => import("@mars/widgets/basic/ManageBasemap")),
      name: "manage-basemap",
      group: "manage"
    },
    {
      component: lazy(() => import("@mars/widgets/basic/Layer")),
      name: "layers",
      group: "manage",
      disableOther: ["roamLine"]
    },
    {
      component: lazy(() => import("@mars/widgets/basic/Layer/layerComponent")),
      name: "layerComponent"
    },
    {
      component: lazy(() => import("@mars/widgets/basic/Layer/layerGuihua")),
      name: "layer-picture-guihua"
    },
    {
      component: lazy(() => import("@mars/widgets/basic/Layer/layerHeatmap")),
      name: "layer-picture-heatmap"
    },
    {
      component: lazy(() => import("@mars/widgets/basic/LocationPoint")),
      name: "location-point",
      group: "tools"
    },
    {
      component: lazy(() => import("@mars/widgets/demo/realtimeInfo")),
      name: "realtime-info",
      group: "tools"
    },
    {
      component: lazy(() => import("@mars/widgets/basic/Roller")),
      name: "roller",
      group: "tools"
    },
    {
      component: lazy(() => import("@mars/widgets/basic/mixingPlant")),
      name: "mixing-plant",
      group: "mixing"
    },
    {
      component: lazy(() => import("@mars/widgets/demo/PressureAndTemperatureRecord")),
      name: "pressure-temperature-record",
      group: "pressure"
    },
    {
      component: lazy(() => import("@mars/widgets/demo/DischargeDetails")),
      name: "discharge-details",
      group: "discharge"
    },
  ],
  openAtStart: ["toolbar", "qurey-poi", "realtime-info", "roller", "pressure-temperature-record", "discharge-details","mixing-plant"]
}

export default widgetState
