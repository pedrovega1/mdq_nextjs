import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Accordionjournal() {
    return (
      <Accordion type="single" collapsible className="w-full p-4 ">
        <AccordionItem value="item-1">
          <AccordionTrigger>А сколько денег?</AccordionTrigger>
          <AccordionContent>
            5 миллионов тенге.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Вопрос</AccordionTrigger>
          <AccordionContent>
            Ответ
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Вопрос</AccordionTrigger>
          <AccordionContent>
            Ответ
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Вопрос</AccordionTrigger>
          <AccordionContent>
            Ответ
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  };
  