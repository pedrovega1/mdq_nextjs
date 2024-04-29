import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import '@/css/embla.css'

import '@/css/sandbox.css'
import EmblaCarousel from '@/components/ui/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

  export function Accordiongrant() {
    return (
      <Accordion type="single" collapsible className="w-full p-20 py-48">
        <AccordionItem value="item-1">
          <AccordionTrigger>Гранты для журналистов</AccordionTrigger>
          <AccordionContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  };
  