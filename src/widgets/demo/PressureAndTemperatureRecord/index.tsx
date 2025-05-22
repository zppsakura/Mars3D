import * as mapWork from "./map"
import { useLifecycle } from "@mars/common/uses/useLifecycle"
import { MarsDialog,MarsTable } from "@mars/components/MarsUI"
import {useEffect, useState} from 'react';
import axios from 'axios';
import styles from "./index.module.less"

export default function (props) {
    useLifecycle(mapWork)
    const [list,setList]=useState([])
    const columns=[
        {
            title:'压力'
        },
        {
            title:'温度'
        },
        {
            title:'采集时间'
        },
        {
            title:'位置'
        }
    ]
    const getList=async ()=>{
        const url='';
        const res=await axios.get(url)
    }
    useEffect(()=>{
        getList()
    },[])
    return (
        <MarsDialog 
            title="压力温度记录" 
            top={100} 
            left={100} 
            bottom={60} 
            width={700} 
            customClass={styles["practice-demo"]}
            {...props}
        >
            <MarsTable columns={columns} dataSource={list} pagination={false}/>
        </MarsDialog>
    )
};
