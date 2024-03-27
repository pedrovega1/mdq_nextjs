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

const OPTIONS: EmblaOptionsType = {loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  export function Accordiongrant() {
    return (
      <Accordion type="single" collapsible className="w-full p-20 py-48">
        <AccordionItem value="item-1">
          <AccordionTrigger>Гранты для журналистов</AccordionTrigger>
          <AccordionContent>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  };
  