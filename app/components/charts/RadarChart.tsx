"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { RadarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { EChartsOption } from "echarts";

// Register the required components
echarts.use([
  RadarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

interface RadarChartProps {
  width?: string;
  height?: string;
}

const RadarChartComponent: React.FC<RadarChartProps> = ({
  width = "100%",
  height = "400px",
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  let chartInstance: echarts.ECharts | null = null;

  useEffect(() => {
    if (chartRef.current) {
      // Initialize the chart instance
      chartInstance = echarts.init(chartRef.current);

      // Define chart configuration
      const option: EChartsOption = {
        tooltip: {},
        legend: {
          orient: "horizontal",
          bottom: 10,
          textStyle: {
            color: "#4b5563", // dark:text-gray-600
          },
        },
        radar: {
          radius: "60%",
          center: ["50%", "45%"],
          indicator: [
            { name: "React", max: 100 },
            { name: "Vue", max: 100 },
            { name: "TypeScript", max: 100 },
            { name: "HTML", max: 100 },
            { name: "CSS", max: 100 },
            { name: "Javascript", max: 100 },
            { name: "Node.js", max: 100 },
            { name: "Next/Nuxt", max: 100 },
            { name: "Git", max: 100 },
            { name: "Vite/Webpack", max: 100 },
            { name: "微信小程序", max: 100 },
            { name: "AI辅助跨平台框架", max: 100 },
          ],
          axisName: {
            color: "#4b5563", // dark:text-gray-600
            fontWeight: "normal",
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(120,120,120,0.1)",
                "rgba(120,120,120,0.2)",
                "rgba(120,120,120,0.3)",
                "rgba(120,120,120,0.4)",
                "rgba(120,120,120,0.5)",
              ],
            },
          },
          splitArea: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(120,120,120,0.4)",
            },
          },
        },
        series: [
          {
            name: "技术能力",
            type: "radar",
            emphasis: {
              lineStyle: {
                width: 2,
              },
            },
            data: [
              {
                value: [90, 100, 100, 100, 95, 95, 90, 80, 90, 90, 90, 90],
                name: "我的技能",
                areaStyle: {
                  opacity: 0.2,
                  color: "#884dff", // indigo color
                },
                // lineStyle: {
                //   width: 2,
                //   color: "#6366f1", // indigo color
                // },
                // itemStyle: {
                //   color: "", // indigo color
                // },
              },
            ],
          },
        ],
      };

      // Set the option and render the chart
      chartInstance.setOption(option);

      // Handle window resize
      const handleResize = () => {
        if (chartInstance) {
          chartInstance.resize();
        }
      };

      window.addEventListener("resize", handleResize);

      // Cleanup function
      return () => {
        if (chartInstance) {
          chartInstance.dispose();
        }
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width, height }} />;
};

export default RadarChartComponent;
