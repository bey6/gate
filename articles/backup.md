### 堆叠

```json
option = {
    title: {
        text: '十一月增值类型堆叠表'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['自我增值', '被动增值', '主动增值']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: [
            '刘备',
            '千亮',
            '蔡伟',
            '林瑜',
            '李少康',
            '徐福彪',
            '王宇鹏',
            '于国强'
        ]
    },
    series: [
        {
            name: '自我增值',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [0, 0, 0, 6, 3, 0, 0, 3]
        },
        {
            name: '被动增值',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [1, 0, 2, 2, 0, 4, 6, 2]
        },
        {
            name: '主动增值',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [6, 6, 2, 0, 3, 2, 0, 1]
        },
    ]
};
```

### 数量11

```json
option = {
    title: {
        text: '十一月客户增值数量表'  ,
        left: 'center',
    },
    xAxis: {
        type: 'category',
        data: [
            '刘备',
            '千亮',
            '蔡伟',
            '林瑜',
            '李少康',
            '徐福彪',
            '王宇鹏',
            '于国强'
        ]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [7, 6, 4, 8, 6, 6, 6, 6],
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            color: '#369',
            fontSize: 24,
            fontWeight: 700,
        }
    }]
};
```

### 南丁格尔半径

```json
option = {
    title: {
        text: '十月 DI 值分布情况一栏',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data:  [
            '刘备',
            '千亮',
            '蔡伟',
            '林瑜',
            '李少康',
            '徐福彪',
            '王宇鹏',
            '于国强']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '50%'],
            roseType: 'radius',
            data: [
                {value: 15, name: '刘备', label: { show: true,  formatter: '{b} : {c} ({d}%)' }},
                {value: 12,  name: '千亮', label: { show: true,  formatter: '{b} : {c} ({d}%)' }},
                {value: 7, name: '蔡伟', label: { show: true,  formatter: '{b} : {c} ({d}%)' }},
                {value: 14, name: '林瑜', label: { show: true,  formatter: '{b} : {c} ({d}%)' }},
                {value: 12, name: '李少康', label: { show: true,  formatter: '{b} : {c} ({d}%)' }},
                {value: 14, name: '徐福彪', label: { show: true,  formatter: '{b} : {c} ({d}%)' }},
                {value: 19, name: '王宇鹏', label: { show: true,  formatter: '{b} : {c} ({d}%)' }},
                {value: 11, name: '于国强', label: { show: true,  formatter: '{b} : {c} ({d}%)' }}
            ]
        }
    ]
};

```