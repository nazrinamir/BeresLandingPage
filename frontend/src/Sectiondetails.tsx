// components/SectionDetails.tsx
"use client";
export default function SectionDetails() {
    return (
        <section className="relative bg-[#A7E34A]">
            {/* clamp to ~1055px like your first screenshot */}
            <div className="relative mx-auto max-w-6xl px-6 md:px-10 rounded-tr-[28px] overflow-hidden">
                <div className="bg-[#A7E34A] md:h-[260px] py-10 md:py-0 flex items-center">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 place-items-start">
                        <div className="flex items-center">
                            {/* Mobile: exact line alignment */}
                            <h2 className="md:hidden text-[#0B1E18] tracking-tight leading-[1.15] text-[28px] sm:text-[32px] font-extrabold text-left">
                                <span className="block whitespace-nowrap">The tool <span className="text-[#33861C]">that every</span></span>
                                <span className="block whitespace-nowrap">business owner</span>
                                <span className="block whitespace-nowrap text-[#33861C]">needs.</span>
                            </h2>
                            {/* Desktop: keep current layout */}
                            <h2 className="hidden md:block text-[#0B1E18] tracking-tight leading-[1.15] md:text-[40px] font-extrabold text-left">
                                The tool{" "}
                                <span className="text-[#33861C]">that every</span>{" "}
                                <br className="hidden md:block" />
                                {" "}business owner{" "}
                                <br className="hidden md:block" />
                                {" "}<span className="text-[#33861C]">needs.</span>
                            </h2>
                        </div>
                        <div className="flex items-center justify-start md:justify-center mt-4 md:mt-24 w-full">
                            <p className="!text-[#33861C] !text-md md:!text-xl font-medium max-w-[520px] text-right w-full">
                                <span className="font-extrabold">Beres</span> reduces complexity, saves time, and
                                unlocks new opportunities for success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}