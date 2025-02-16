import React from "react"
import Label from "../Label"
import Card from "./Card"
import { useCalculatorContext } from "@/context/CalculatorContext"
import { FunctionCardProps } from "./Card.types"
import { InInputGroup, Input } from "../Input"

interface LabelValueProps {
  value?: string | number
  onChange?: (value: string) => void
  type: "IN" | "OUT"
  id: string
  target?: string
  disabled?: boolean
  labelText: string
  labelType?: "success" | "warning"
}

const LabelValue: React.FC<LabelValueProps> = (props) => {
  return (
    <div className="flex flex-col">
      <Label className="mb-1" type={props.labelType}>
        {props.labelText}
      </Label>
      <InInputGroup {...props} />
    </div>
  )
}

const FunctionCard: React.FC<FunctionCardProps> = ({ func }) => {
  const {
    updateInitialValue,
    equation,
    updateEquation,
    outputValue,
    inputValue,
    initialTarget
  } = useCalculatorContext()

  return (
    <div
      key={func.id}
      className="flex flex-col-reverse xl:flex-row xl:items-end relative"
    >
      {func.type === "INPUT" && (
        <div className="flex flex-col mt-3 xl:mt-0 justify-center gap-30 xl:absolute -left-31.5">
          <LabelValue
            value={inputValue}
            onChange={updateInitialValue}
            type="OUT"
            id="INPUT"
            target={initialTarget}
            labelText="Initial value of x"
            labelType={"warning"}
          />
        </div>
      )}
      {func.type === "OUTPUT" && (
        <div className="flex flex-col mt-3 xl:mt-0 align-bottom xl:absolute -right-33">
          <LabelValue
            value={outputValue}
            type="IN"
            id="OUTPUT"
            disabled
            labelText="Final output y"
            labelType={"success"}
          />
        </div>
      )}
      <Card
        title={`Function: ${func.id}`}
        id={func.id?.toString()}
        target={func.target?.toString()}
      >
        <Input
          label="Equation"
          value={equation?.[func.id]}
          className={"mb-4"}
          onChange={(value) => updateEquation(func.id, value)}
        />
        <Input
          label="Next function"
          value={func.target !== "OUTPUT" ? `Function ${func.target}` : ""}
          disabled
        />
      </Card>
    </div>
  )
}

export default FunctionCard
