import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItem {
  question: string;
  answer: string | JSX.Element;
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

function CustomAccordion({ items }: CustomAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full p-4">
      {items.map((item: AccordionItem, index: number) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="font-bold">{item.question}</AccordionTrigger>
          <AccordionContent>
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default CustomAccordion;
