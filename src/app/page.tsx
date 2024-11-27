'use client'
// import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { AnimatePresence, useScroll } from "framer-motion";
import { projects } from "../../lib/data";
import Card from "@/components/Card";
import Lenis from "lenis";
import { Item } from '@/components/Detail';


export default function Home() {
  const container = useRef(null);
  const [selectedId, setSelectedId] = useState(-1);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  useEffect(() => {
    if (selectedId !== -1) {
      console.log(selectedId)
    }
  }, [selectedId])

  return (
    <main ref={container} className="relative">
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} setSelectedId={setSelectedId} />
        })
      }
      <AnimatePresence>
        {selectedId !== -1 && <Item id={selectedId} key="item" src={projects[selectedId].src} title={projects[selectedId].title} setSelectedId={setSelectedId} />}
      </AnimatePresence>
    </main>
  )

}
