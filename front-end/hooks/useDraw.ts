import React, { useEffect, useRef, useState } from "react";

const useDraw = (onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void) => {
  const [points, setPoints] = useState<any[]>([]);
  const [fragPoints, setFragPoints] = useState<any[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouseDown, setMouseDown] = useState(false);
  const prevPoint = useRef<Point | null>(null);
  function elementScale(el: HTMLCanvasElement) {
    return el.offsetWidth === 0 ? 0 : el.width / el.offsetWidth;
  }
  function distance(a: Point, b: Point) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let i = 0;
    let j = 1;
    let z = 0;
    while (j < firstIndex) {
      if (
        (points[i]?.x == fragPoints[z]?.x &&
          points[i]?.y == fragPoints[z]?.y) ||
        (points[j]?.x == fragPoints[z]?.x && points[j]?.y == fragPoints[z]?.y)
      ) {
        z++;
        i++;
        j++;
      } else {
        onDraw({ ctx, currentPoint: points[i], prevPoint: points[j] });
        i += 2;
        j += 2;
      }
    }

    setPoints(tempPoints);
    setFragPoints(fragPoints);
  };
  const computePointInCanvas = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / canvas.offsetWidth);
    const y = (e.clientY - rect.top) * (canvas.height / canvas.offsetHeight);
    return { x, y };
  };
  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    fragPoints.length = 0;
    points.length = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      setMouseDown(true);
      const currentPoint: Point = computePointInCanvas(e) as Point;
      if (currentPoint) {
        points.push(currentPoint);
        fragPoints.push(currentPoint);
      }
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx || currentPoint) return;
      onDraw({ ctx, currentPoint: currentPoint, prevPoint: prevPoint.current });
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

      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx || !prevPoint.current) return;
      points.push(prevPoint.current);

      fragPoints.push(prevPoint.current);
      onDraw({
        ctx,
        currentPoint: prevPoint.current!,
        prevPoint: prevPoint.current,
      });
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
  return { canvasRef, clear, handleUndo, elementScale, distance };
};

export default useDraw;
