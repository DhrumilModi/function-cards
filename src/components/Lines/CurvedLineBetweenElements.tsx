import { useEffect, useState } from "react"
import { CurvedLineProps } from "./Lines.types"

const CurvedLineBetweenElements: React.FC<CurvedLineProps> = ({
  input,
  output,
  p = 0.5,
  strokeColor = "#0066FF",
  strokeWidth = 7,
  strokeOpacity = 0.31,
  id
}) => {
  const [pathD, setPathD] = useState<string>("")
  const [svgBox, setSvgBox] = useState<{
    x: number
    y: number
    width: number
    height: number
  }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  })

  useEffect(() => {
    const updatePath = () => {
      console.log("rect1", input, output)

      if (!input?.current || !output?.current) return

      const rect1 = input.current.getBoundingClientRect()
      const rect2 = output.current.getBoundingClientRect()

      // Get bounding box
      const minX = Math.min(rect1.left, rect2.left)
      const minY = Math.min(rect1.top, rect2.top)
      const maxX = Math.max(rect1.right, rect2.right)
      const maxY = Math.max(rect1.bottom, rect2.bottom)

      // Positions relative to SVG box
      const x1 = rect1.left - minX + rect1.width / 2
      const y1 = rect1.top - minY + rect1.height / 2
      const x2 = rect2.left - minX + rect2.width / 2
      const y2 = rect2.top - minY + rect2.height / 2

      setSvgBox({
        x: minX,
        y: minY,
        width: maxX,
        height: maxY
      })

      let path

      if (y1 === y2) {
        const controlOffset = 85 // Adjust for depth
        const midX = (x1 + x2) / 2
        const controlY = y1 + controlOffset // Bend downward
        console.log("12", id, maxY - minY)

        path = `M ${x1},${y1} Q ${midX},${controlY} ${x2},${y2}`
      } else if (y2 === x1) {
        const controlOffset = 85
        const midY = (y1 + y2) / 2
        const controlX = x1 + controlOffset
        path = `M ${x1},${y1} Q ${controlX},${midY} ${x2},${y2}`
      } else {
        const dx = x2 - x1
        const dy = y2 - y1

        const cpOffsetX1 = dx * p * 0.5
        const cpOffsetY1 = dy * p * 1.28
        const cpOffsetX2 = dx * (1 - p) * 0.5
        const cpOffsetY2 = dy * (1 - p) * 1.28

        const cp1X = x1 + cpOffsetX1
        const cp1Y = y1 + cpOffsetY1
        const cp2X = x2 - cpOffsetX2
        const cp2Y = y2 - cpOffsetY2

        path = `M ${x1},${y1} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${x2},${y2}`
      }

      setPathD(path)
    }

    updatePath()
    window.addEventListener("resize", updatePath)

    return () => {
      window.removeEventListener("resize", updatePath)
    }
  }, [input, output, p])

  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        left: `${svgBox.x}px`,
        top: `${svgBox.y}px`,
        width: `${svgBox.width}px`,
        height: `${svgBox.height}px`
      }}
    >
      <path
        d={pathD}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        strokeLinecap="round"
        fill="none"
        className="transition-all duration-500 ease-in-out"
      />
    </svg>
  )
}

export default CurvedLineBetweenElements
