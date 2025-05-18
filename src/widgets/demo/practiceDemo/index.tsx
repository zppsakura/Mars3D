import * as mapWork from "./map"
import { useLifecycle } from "@mars/common/uses/useLifecycle"
import { MarsDialog } from "@mars/components/MarsUI"
import styles from "./index.module.less"

export default function (props) {
    useLifecycle(mapWork)
    return (
        <MarsDialog 
            title="测试练习" 
            top={100} 
            left={100} 
            bottom={60} 
            width={260} 
            customClass={styles["practice-demo"]}
            {...props}
        >
            123321
        </MarsDialog>
    )
};
