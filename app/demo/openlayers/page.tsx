"use client";

import { useState, useEffect, useRef } from "react";
import Navigation from "../../components/Navigation";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export default function OpenLayersDemo() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Component mounted, mapRef:", mapRef.current);
    
    if (!mapRef.current) {
      console.error("Map ref is null");
      return;
    }

    try {
      console.log("Creating map instance...");
      
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [12956000, 4863000], // Web Mercator projection for Beijing
          zoom: 12,
        }),
      });

      console.log("Map created successfully:", map);
      setIsLoaded(true);

      // 监听地图渲染完成
      map.once("rendercomplete", () => {
        console.log("Map render complete");
      });

      return () => {
        console.log("Cleaning up map");
        map.setTarget(undefined);
      };
    } catch (error) {
      console.error("Error creating map:", error);
    }
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 shadow-lg p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              OpenLayers 地理信息可视化演示
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              地图加载状态：{isLoaded ? "✅ 已加载" : "⏳ 加载中..."}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4">
          <div
            ref={mapRef}
            className="w-full h-[600px] bg-blue-100 rounded-xl shadow-2xl border-4 border-white dark:border-gray-700 overflow-hidden"
            style={{ minHeight: '600px', backgroundColor: '#e0f2fe' }}
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">
                {isLoaded ? "地图正在显示..." : "地图容器初始化中..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
