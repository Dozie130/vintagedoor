
import { Info as InfoIcon } from "lucide-react";

interface InfoProps {
  className?: string;
}

const Info = ({ className }: InfoProps) => {
  return (
    <InfoIcon className={className || "h-5 w-5"} />
  );
};

export default Info;
