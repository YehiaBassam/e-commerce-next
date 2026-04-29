'use client'
import Image from "next/image";
import { Cart, Search, Wishlist } from "@/public/icons";
function Navbar() {
    return (
        <div className="w-full bg-white flex justify-between  py-4 text-black border-b border-[#dcdbdb]">
            <div className="w-full flex justify-between items-center px-33.75">
                <div>
                    <h1 className="text-black text-[24px] font-bold">
                        Exclusive
                    </h1>
                </div>
                <div>
                    <ul className="flex gap-12">
                        <li>
                            <p>Home</p>
                        </li>
                        <li>
                            <p>Contact</p>
                        </li>
                        <li>
                            <p>About</p>
                        </li>
                        <li>
                            <p>Sign Up</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center gap-6">
                        <li className="flex items-center gap-9 h-9.5 py-2 pl-5 pr-2 bg-[#F5F5F5] rounded-sm">
                            <input className="bg-[#F5F5F5] h-full"
                                type="text" placeholder="What are you looking for?" />
                            <button className="bg-[#F5F5F5] h-6 w-6">
                                <Image src={Search} alt="search" />
                            </button>
                        </li>
                        <li>
                            <ul className="flex items-center gap-4">
                                <li>
                                    <Image src={Wishlist} alt="wishlist" />
                                </li>
                                <li>
                                    <Image src={Cart} alt="cart" />
                                </li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar