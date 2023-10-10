import React, { useEffect, useRef, useState } from "react";

const useDraw = (onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void) => {
  const [points, setPoints] = useState<any[]>([]);
  const [fragPoints, setFragPoints] = useState<any[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouseDown, setMouseDown] = useState(false);
  const prevPoint = useRef<Point | null>(null);

  const handleUndo = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    fragPoints.pop();
    const firstPoint = fragPoints.pop();

    const firstIndex = points.findLastIndex(
      (p) => p?.x == firstPoint?.x && p?.y == firstPoint?.y
    );

    const tempPoints = points.slice(0, firstIndex);

    const canvas = canvasRef.current;
    if (!canvas) return;
    ctx.reset();

    for (let i = 0, j = 1; j < firstIndex; i += 2, j += 2) {
      onDraw({ ctx, currentPoint: tempPoints[j], prevPoint: tempPoints[i] });
    }
    setPoints(tempPoints);
    setFragPoints(fragPoints);
  };
  const computePointInCanvas = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  };
  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
  };
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      setMouseDown(true);
      const currentPoint = computePointInCanvas(e);
      if (currentPoint) {
        points.push(currentPoint);
        fragPoints.push(currentPoint);
      }
    };
    const hanldeMouseMove = (e: MouseEvent) => {
      if (!mouseDown) return;
      const currentPoint: Point = computePointInCanvas(e) as Point;
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx || !currentPoint) return;
      onDraw({ ctx, currentPoint, prevPoint: prevPoint.current });

      points.push(currentPoint);

      points.push(prevPoint.current);

      prevPoint.current = currentPoint;
    };
    const handleMouseUp = (e: MouseEvent) => {
      setMouseDown(false);

      if (prevPoint.current) {
        points.push(prevPoint.current);

        fragPoints.push(prevPoint.current);
      }

      prevPoint.current = null;
    };

    canvasRef.current?.addEventListener("mousemove", hanldeMouseMove);
    canvasRef.current?.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      canvasRef.current?.removeEventListener("mousemove", hanldeMouseMove);
      canvasRef.current?.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [onDraw]);
  return { canvasRef, clear, handleUndo };
};

export default useDraw;
