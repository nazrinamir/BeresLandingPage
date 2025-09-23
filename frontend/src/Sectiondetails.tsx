// components/SectionDetails.tsx
"use client";
export default function SectionDetails() {
    return (
        <section className="relative bg-[#A7E34A]">
            {/* clamp to ~1055px like your first screenshot */}
            <div className="relative mx-auto max-w-6xl px-6 md:px-10 rounded-tr-[28px] overflow-hidden">
                <div className="bg-[#A7E34A] md:h-[260px] py-10 md:py-0 flex items-center">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center">
                            <h2 className="text-[#0B1E18] tracking-tight leading-[1.15] text-[28px] md:text-[40px] font-extrabold text-left">
                                The tool{" "}
                                <span className="text-[#33861C]">that every</span>{" "}
                                <br className="hidden md:block" />
                                {" "}business owner{" "}
                                <br className="hidden md:block" />
                                {" "}<span className="text-[#33861C]">needs.</span>
                            </h2>
                        </div>
                        <div className="flex items-center md:justify-center mt-4 md:mt-24">
                            <p className="text-[#33861C] !text-xl md:text-lg font-medium max-w-[520px] text-left">
                                <span className="font-extrabold">Beres</span> reduce complexity, save time, and
                                unlock new opportunities for success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}