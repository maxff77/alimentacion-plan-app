"use client";

import { useState } from "react";
import { Card, CardBody, CardHeader, Checkbox, Progress, Chip } from "@heroui/react";

interface Indicators {
  week1: string[];
  month1: string[];
  adjustments: string[];
}

interface ProgressTrackerProps {
  indicators: Indicators;
}

export function ProgressTracker({ indicators }: ProgressTrackerProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (item: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setCheckedItems(newChecked);
  };

  const calculateProgress = (items: string[]) => {
    const checked = items.filter(item => checkedItems.has(item)).length;
    return (checked / items.length) * 100;
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-bold">📈 Tracker de Progreso</p>
          <p className="text-small text-default-500">Monitorea tus indicadores de éxito</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="space-y-6">
          {/* Semana 1 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Chip color="primary" variant="flat">Semana 1</Chip>
              <span className="text-xs text-default-500">{Math.round(calculateProgress(indicators.week1))}%</span>
            </div>
            <Progress value={calculateProgress(indicators.week1)} color="primary" className="mb-3" />
            <div className="space-y-2">
              {indicators.week1.map((item, index) => (
                <Checkbox
                  key={`week1-${index}`}
                  isSelected={checkedItems.has(item)}
                  onValueChange={() => toggleItem(item)}
                  size="sm"
                >
                  <span className="text-sm">{item}</span>
                </Checkbox>
              ))}
            </div>
          </div>

          {/* Mes 1 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Chip color="success" variant="flat">Mes 1</Chip>
              <span className="text-xs text-default-500">{Math.round(calculateProgress(indicators.month1))}%</span>
            </div>
            <Progress value={calculateProgress(indicators.month1)} color="success" className="mb-3" />
            <div className="space-y-2">
              {indicators.month1.map((item, index) => (
                <Checkbox
                  key={`month1-${index}`}
                  isSelected={checkedItems.has(item)}
                  onValueChange={() => toggleItem(item)}
                  size="sm"
                >
                  <span className="text-sm">{item}</span>
                </Checkbox>
              ))}
            </div>
          </div>

          {/* Ajustes */}
          <div>
            <Chip color="warning" variant="flat" className="mb-3">Ajustes Necesarios</Chip>
            <div className="space-y-2">
              {indicators.adjustments.map((item, index) => (
                <div key={index} className="p-2 bg-warning-50 dark:bg-warning-900/20 rounded-lg">
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}