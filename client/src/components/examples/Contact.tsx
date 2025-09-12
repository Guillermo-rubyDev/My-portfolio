import { TooltipProvider } from "@/components/ui/tooltip";
import Contact from '../Contact';

export default function ContactExample() {
  return (
    <TooltipProvider>
      <Contact />
    </TooltipProvider>
  )
}