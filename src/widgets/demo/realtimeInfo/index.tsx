import * as mapWork from "./map"
import { useLifecycle } from "@mars/common/uses/useLifecycle"
import { MarsDialog } from "@mars/components/MarsUI"
import styles from "./index.module.less"

export default function (props) {
    useLifecycle(mapWork)
    return (
        <MarsDialog 
            title="实时信息一览表" 
            top={100} 
            left={100} 
            width={300} 
            height={420}
            customClass={styles["realtime-info"]}
            {...props}
        >
            <div className={styles["realtime-info-content"]}>
                <div className={styles["realtime-title"]}>实时信息</div>
                <div className={styles["realtime-info-item"]}>
                    <div className={styles["realtime-info-label"]}>温度：</div>
                    <div className={styles["realtime-info-value"]}>150℃</div>
                </div>
                <div className={styles["realtime-info-item"]}>
                    <div className={styles["realtime-info-label"]}>位置：</div>
                    <div className={styles["realtime-info-value"]}>江苏省南京市江宁区</div>
                </div>
                <div className={styles["realtime-info-item"]}>
                    <div className={styles["realtime-info-label"]}>更新时间：</div>
                    <div className={styles["realtime-info-value"]}>2025-05-22 10:00:00</div>
                </div>
            </div>
            <div className={styles["realtime-info-content"]}>
                <div className={styles["realtime-title"]}>出站信息</div>
                <div className={styles["realtime-info-item"]}>
                    <div className={styles["realtime-info-label"]}>出站温度：</div>
                    <div className={styles["realtime-info-value"]}>160℃</div>
                </div>
                <div className={styles["realtime-info-item"]}>
                    <div className={styles["realtime-info-label"]}>出站时间：</div>
                    <div className={styles["realtime-info-value"]}>2025-05-22 10:00:00</div>
                </div>
            </div>
            <div className={styles["realtime-info-content"]}>
                <div className={styles["realtime-title"]}>今日汇总</div>
                <div className={styles["realtime-info-item"]}>
                    <div className={styles["realtime-info-label"]}>趟数：</div>
                    <div className={styles["realtime-info-value"]}>5趟</div>
                </div>
                <div className={styles["realtime-info-item"]}>
                    <div className={styles["realtime-info-label"]}>吨数：</div>
                    <div className={styles["realtime-info-value"]}>50吨</div>
                </div>
            </div>
        </MarsDialog>
    )
};
