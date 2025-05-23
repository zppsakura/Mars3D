import * as mapWork from "./map"
import { useLifecycle } from "@mars/common/uses/useLifecycle"
import { MarsDialog,MarsTable } from "@mars/components/MarsUI"
import {useEffect, useState,useRef} from 'react';
import axios from 'axios';
import * as echarts from "echarts";
import styles from "./index.module.less"

export default function (props) {
    useLifecycle(mapWork)
    const [list,setList]=useState([])
    const [chartData,setChartData]=useState([])
    const chartRef = useRef(null); // 用于获取 DOM 元素
    const columns=[
        {
            title:'车辆名称'
        },
        {
            title:'出站时间'
        },
        {
            title:'出料重量'
        },
        {
            title:'出站温度'
        },
        {
            title:'卸料温度'
        }
    ]
    const getList=async ()=>{
        const url='';
        const res=await axios.get(url)
    }
    useEffect(()=>{
        getList()
    },[])
    useEffect(() => {
        // 初始化 ECharts 实例
        const chartInstance = echarts.init(chartRef.current);
    
        // 配置项
        const option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow", // 阴影指示器
            },
          },
          legend: {
            data: ["销售额", "利润"], // 图例
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: ["1月", "2月", "3月", "4月", "5月", "6月"], // X 轴数据
              axisTick: {
                alignWithLabel: true,
              },
              axisLabel:{
                color:'#fff'
              }
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "燃料消耗Nm³", // 左侧 Y 轴
              nameTextStyle:{
                color:'#fff'
              },
              position: "left",
              axisLabel: {
                formatter: "{value}",
                color:'#fff'
              },
            },
            {
              type: "value",
              name: "出料重量(吨))", // 右侧 Y 轴
              nameTextStyle:{
                color:'#fff'
              },
              position: "right",
              axisLabel: {
                formatter: "{value}",
                color:'#fff'
              },
            },
          ],
          series: [
            {
              name: "燃料消耗Nm³",
              type: "bar",
              data: [120, 200, 150, 80, 70, 110], // 销售额数据
              itemStyle: {
                color: "#5470C6", // 柱状图颜色
              },
            },
            {
                name:'单位消耗量',
                type:'line',
                data: [120, 200, 150, 80, 70, 110],
                lineStyle:{
                    color:'#ffa500'
                },
                itemStyle:{
                    color:'#ffa500'
                }
            },
            {
              name: "出料重量(吨)",
              type: "bar",
              data: [20, 50, 30, 40, 35, 60], // 利润数据
              yAxisIndex: 1, // 使用右侧 Y 轴
              itemStyle: {
                color: "#91CC75", // 柱状图颜色
              },
            },
          ],
        };
    
        // 设置配置项
        chartInstance.setOption(option);
    
        // 窗口大小变化时重新渲染
        const handleResize = () => {
          chartInstance.resize();
        };
        window.addEventListener("resize", handleResize);
    
        // 组件卸载时销毁实例
        return () => {
          window.removeEventListener("resize", handleResize);
          chartInstance.dispose();
        };
      }, [chartData]);
    return (
        <MarsDialog 
            title="今日出料" 
            top={60} 
            left={100} 
            bottom={20} 
            width={700} 
            customClass={styles["practice-demo"]}
            {...props}
        >
            <div className={styles.title}>今日出料明细</div>
            <MarsTable columns={columns} dataSource={list} pagination={false} scroll={{y:350}}/>
            <div className={styles.title}>油料消耗趋势</div>
            <div
                ref={chartRef}
                style={{ width: "100%", height: "250px" }}
            ></div>
        </MarsDialog>
    )
};
