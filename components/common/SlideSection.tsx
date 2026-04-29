"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import { ArrowRight, ArrowLeft } from "@/public/icons";


enum SliderType {
    Product = "product",
    Category = "category",
    Banner = "banner",
}

enum ButtonPosition {
    Left = "left",
    Right = "right"
}

interface SlideSectionProps {
    type?: SliderType,
    items?: any[],
    flag: string,
    title: string,
    isCounter?: boolean
    buttonPosition?: ButtonPosition,
}
function SlideSection({
    type,
    items,
    flag,
    title,
    isCounter,
    buttonPosition

}: SlideSectionProps) {
    return (
        <div className="w-full flex flex-col px-33.75">
            <div className="w-full flex items-center gap-4">
                <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
                <p className="text-[#DB4444] font-semibold">{flag || 'Today'}</p>
            </div>

            <div className="w-full flex justify-between items-center gap-4">
                <div>
                    <p className="text-4xl font-semibold">{title || 'Flash Sales'}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <button className="w-12 h-12 flex justify-center items-center rounded-full bg-[#F5F5F5]">
                        <Image src={ArrowLeft} alt="left" />
                    </button>
                    <button className="w-12 h-12 flex justify-center items-center rounded-full bg-[#F5F5F5]">
                        <Image src={ArrowRight} alt="right" />
                    </button>
                </div>
            </div>

            <div>
            </div>
        </div>
    )
}

export default SlideSection