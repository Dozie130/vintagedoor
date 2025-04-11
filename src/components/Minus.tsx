
import { Minus as MinusIcon } from "lucide-react";

interface MinusProps {
  className?: string;
}

const Minus = ({ className }: MinusProps) => {
  return (
    <MinusIcon className={className || "h-5 w-5"} />
  );
};

export default Minus;
