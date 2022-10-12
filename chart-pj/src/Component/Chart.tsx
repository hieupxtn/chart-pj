import * as echarts from 'echarts/core';
import {
  BarChart,
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from 'echarts/charts';
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  DatasetComponent,
  DatasetComponentOption,
  TransformComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import ReactEcharts from 'echarts-for-react';
import { validateData } from '../utils/validateData';

type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

export const Chart = ({
  dataXNameChart1,
  dataChart1,
  dataXNameChart2,
  data1Chart2,
  data2Chart2,
}: {
  dataXNameChart1: number[] | string[];
  dataChart1: any[];
  dataXNameChart2: number[] | string[];
  data1Chart2: number[] | string[];
  data2Chart2: number[] | string[];
}): JSX.Element => {
  const Option1: ECOption = {
    title: {
      text: 'ChartTitle1',
    },
    color: ['#79aca9', '#79aca9', '#79aca9', '#79aca9', '#79aca9', '#79aca9'],
    xAxis: {
      type: 'category',
      data: dataXNameChart1,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        fontSize: 13,
        color: '#000',
      },
      name: 'chartNameX',
    },
    yAxis: {
      type: 'value',
      max: 100,
      min: 0,
      name: 'chartNameY',
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#b2b2b2'],
          width: 1,
          type: 'solid',
        },
      },
      splitNumber: 10,
    },
    series: [
      {
        data: validateData(12, dataChart1),
        type: 'bar',
        showBackground: false,
        itemStyle: {
          borderRadius: [20, 20, 0, 0],
        },
        label: {
          show: true,
          position: 'top',
          color: '#000',
        },
      },
    ],
    grid: {
      left: '5%',
    },
  };
  const Option2: ECOption = {
    title: {
      text: 'ChartTitle2',
    },
    color: ['#79aca9', '#4381e5', '#79aca9', '#4381e5', '#79aca9', '#4381e5'],
    xAxis: {
      type: 'category',
      data: dataXNameChart2,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        fontSize: 13,
        color: '#000',
      },
      name: 'chartNameX',
      nameGap: 5,
      nameRotate: 0,
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      name: 'chartNameY',
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#b2b2b2'],
          width: 1,
          type: 'solid',
        },
      },
      splitNumber: 10,
    },
    series: [
      {
        data: validateData(6, data1Chart2),
        type: 'bar',
        showBackground: false,
        datasetIndex: 1,
        select: {
          itemStyle: {
            borderColor: '#79aca9',
          },
        },
        itemStyle: {
          borderRadius: [15, 15, 0, 0],
        },
        label: {
          show: true,
          position: 'top',
          color: '#000',
        },
      },
      {
        data: validateData(6, data2Chart2),
        type: 'bar',
        showBackground: false,
        datasetIndex: 2,
        itemStyle: {
          borderRadius: [15, 15, 0, 0],
        },
        label: {
          show: true,
          position: 'top',
          color: '#000',
        },
      },
    ],
    grid: {
      left: '5%',
    },
  };
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 20,
        }}
      >
        <div
          style={{
            flex: 1,
            background: '#EEEEEE',
          }}
        >
          <ReactEcharts
            option={Option1}
            theme={'theme_name'}
            style={{
              height: '600px',
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            background: '#EEEEEE',
          }}
        >
          <ReactEcharts
            option={Option2}
            theme={'theme_name'}
            style={{
              height: '600px',
            }}
          />
        </div>
      </div>
    </div>
  );
};
