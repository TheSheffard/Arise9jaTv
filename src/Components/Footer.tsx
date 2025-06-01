import Link from "next/link";
import { NavLinks } from "../Components/NavComp/NavFucn";

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-5">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2  text-center gap-8">
                <div>
                    <h2 className="text-2xl font-bold">Arise9ja</h2>
                    <p className="mt-2 text-white font-semibold">
                        <b>Information  You Can Trust : </b>
                        Stay connected with breaking stories and live updates. From polities and technology to entertainment
                        and beyond, we  provide a real-time coverage you can rely on,  making us your dependable source for 24/7 news.

                    </p>

                </div>

                <div className="flex flex-col gap-5">
                    {/* Navigation Links */}
                    <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-red-500">QuickLinks</h3>
                        <div className="flex items-center flex-wrap gap-4">
                            {NavLinks.map((link, index) => (
                                <Link key={index} href={link.to} className="hover:text-red-500  border-gray-200">{link.name}</Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact and Policies */}
                    <div className="flex items-center gap-4">
                        <p className="text-lg font-semibold text-red-500">About The Company</p>
                        <ul className="flex items-center flex-wrap gap-4">
                            <li><Link href="/contactus" className="hover:text-red-500 duration-300">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-red-500 duration-300">Privacy Policy</Link></li>
                            <li><Link href="/termsofuse" className="hover:text-red-500 duration-300">Terms of Use</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-red-500 duration-300">Disclaimer</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8 border-t gap-5 flex  justify-center border-gray-700 pt-4 border-dotted text-white text-sm">
                <p>Copyright © {new Date().getFullYear()} Arise9ja. All rights reserved.</p>
                <p>Developed by <span className="text-white">Rich dot com</span></p>
            </div>
        </footer>
    );
};
