import React from "react";
import { FOOTER_CONTENT } from "../../constants";
import ally from "../../assets/ally.png";
function FooterComponent() {
    return (
        <footer className="mt-20 text-neutral-400">
            <div className="max-w-7xl ma-auto px-4 border-t border-neutral-800">
                <div className="grid grid-cols-1 md:grid-cols-5 mt-20 gap-8">
                    <div className="flex items-center space-x-2">
                        <img src={ally} width={80} height={25} alt="image" />
                        <span className="font-extrabold  text-2xl "  >Ally</span>
                        
                    </div>

                    {FOOTER_CONTENT.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-white font-medium mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.url} className="hover:underline">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-neutral-800 pt-8 text-center my-12 border-t text-sm text-neutral-500">
                    <div className="justify-between flex">
                        <div className="text-xs">
                            <p>{FOOTER_CONTENT.platformsText}</p>
                        </div>
                        <div className="text-xs">
                            <p>{FOOTER_CONTENT.copyrightText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
