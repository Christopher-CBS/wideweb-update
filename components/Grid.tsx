"use client"
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
   <section className='py-60' id='uxdesign'>
    <h1 className='heading'>
      Conception {' '} 
      <span className='text-purple'>Graphique</span>

    </h1>
    <BentoGrid className="w-full py-20">
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
            <BentoGridItem 
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            />
        ))}
    </BentoGrid>
   </section>
  )
}

export default Grid