
import { Plus as PlusIcon } from "lucide-react";

interface PlusProps {
  className?: string;
}

const Plus = ({ className }: PlusProps) => {
  return (
    <PlusIcon className={className || "h-5 w-5"} />
  );
};

export default Plus;
