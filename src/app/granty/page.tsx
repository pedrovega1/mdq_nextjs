"use client"; // top to the file

import React from 'react'


import { BentoGridThirdDemo } from "@/components/demobento";
import EmblaCarousel from '@/components/ui/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import '@/css/embla.css'
import { Accordiongrant } from "@/components/Accordion_grant1";

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <main>
      <BentoGridThirdDemo />


    </main>
  );
}
