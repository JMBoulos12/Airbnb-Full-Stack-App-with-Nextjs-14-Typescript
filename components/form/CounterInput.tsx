"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Button } from "../ui/button";
import { useState } from "react";
import Flag from "react-world-flags";

interface CountryInputProps {
  item?: {
    // Mark as optional to handle undefined
    code: string;
  };
  detail: string;
  defaultValue?: number;
}

function CountriesInput({ item, detail, defaultValue }: CountryInputProps) {
  const [count, setCount] = useState(defaultValue || 0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <Card className="mb-4">
      <input type="hidden" name={detail} value={count} />
      <CardHeader className="flex flex-col gap-y-5">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col">
            <h2 className="font-medium capitalize">{detail}</h2>
            <p className="text-muted-foreground text-sm">
              Specify the number of {detail}
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Check if item exists and has a code before rendering the flag */}
            {item && item.code ? (
              <Flag code={item.code} style={{ width: 20, height: 20 }} />
            ) : (
              <span>No flag available</span> // Fallback UI if no item
            )}
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={decreaseCount}
            >
              <LuMinus className="w-5 h-5 text-primary" />
            </Button>
            <span className="text-xl font-bold w-5 text-center">{count}</span>
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={increaseCount}
            >
              <LuPlus className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default CountriesInput;
