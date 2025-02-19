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
    <div className="flex flex-col ">
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

  const CardComponent = (
    <div className="md:w-[235px] inline-block mt-29.5">
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

  if (func.type === "INPUT") {
    return (
      <div className="inline-block mr-16 ">
        <div className=" flex flex-row items-end ">
          <div className="mr-4">
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

          {CardComponent}
        </div>
      </div>
    )
  } else if (func.type === "OUTPUT") {
    return (
      <div className="inline-block ml-16">
        <div className=" flex flex-row items-end ">
          {CardComponent}
          <div className="ml-4">
            <LabelValue
              value={outputValue}
              type="IN"
              id="OUTPUT"
              disabled
              labelText="Final output y"
              labelType={"success"}
            />
          </div>
        </div>
      </div>
    )
  }

  return <div className="inline-block ml-16 mr-16">{CardComponent}</div>
}

export default FunctionCard
