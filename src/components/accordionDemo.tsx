import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full p-20 md:py-48">
        <AccordionItem value="item-1">
          <AccordionTrigger>Часто задаваемые вопросы?</AccordionTrigger>
          <AccordionContent>
            Часто отвечаемые ответы.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Часто задаваемые вопросы?</AccordionTrigger>
          <AccordionContent>
            Часто отвечаемые ответы.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Часто задаваемые вопросы?</AccordionTrigger>
          <AccordionContent>
            Часто отвечаемые ответы.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Часто задаваемые вопросы?</AccordionTrigger>
          <AccordionContent>
            Часто отвечаемые ответы.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Часто задаваемые вопросы?</AccordionTrigger>
          <AccordionContent>
            Часто отвечаемые ответы.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Часто задаваемые вопросы?</AccordionTrigger>
          <AccordionContent>
            Часто отвечаемые ответы.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Часто задаваемые вопросы?</AccordionTrigger>
          <AccordionContent>
            Часто отвечаемые ответы.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  };
  