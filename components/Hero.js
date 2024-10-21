import { Fugaz_One, ZCOOL_KuaiLe } from 'next/font/google';
import React from 'react'
import Button from './Button';
import Calendar from './Calendar';
import Link from 'next/link';
import CallToAction from './CallToAction';
import Elf from '@/components/Elf' 
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });


const zcool = ZCOOL_KuaiLe({
    subsets: ['latin',], // 支持中文和拉丁字符
    weight: ['400'], // 设置字体的权重范围
  });

export default function Hero() {
    return (
        <div className='py-4 md:py-10 flex flex-col gap-16 sm:gap-24'>
            <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + zcool.className}><span className='textGradient'>Mood</span> helps you track your <span className='textGradient'>daily</span> mood!</h1>
            
            

            <div className='flex justify-center gap-4'>
            <Elf></Elf>
            <div>
            <h2 className='text-xl sm:text-2xl md:text-3xl text-center w-full mx-auto max-w-[600px] mb-16 pt-4'>Create your mood record and see how you feel <span className='font-semibold'>on every day of every year.</span></h2>
            <CallToAction />
            </div>
            </div>
            
           
           
        </div>
    )
}
