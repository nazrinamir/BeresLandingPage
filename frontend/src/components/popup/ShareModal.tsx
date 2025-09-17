import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTelegramPlane, FaFacebook, FaTwitter } from "react-icons/fa";

type ShareModalProps = {
    onClose: () => void;
    shareUrl?: string;
    shareText?: string;
};

export default function ShareModal({
    onClose,
    shareUrl,
    shareText = "Beres — the easiest way to run your WhatsApp business. Check this out!",
}: ShareModalProps) {
    // Always use your LAN URL unless one is passed in
    const url = useMemo(() => shareUrl ?? "http://192.168.1.64:5173/", [shareUrl]);

    const [copied, setCopied] = useState(false);
    // const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;
    // const canCopy = typeof navigator !== "undefined" && !!navigator.clipboard?.writeText;
    // const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(shareText);

    // share links
    const waLink = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
    const tgLink = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
    const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    const xLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    // const handleNativeShare = async () => {
    //     try {
    //         if (!canNativeShare) return;
    //         await navigator.share({ title: "Beres", text: shareText, url });
    //         onClose();
    //     } catch { }
    // };

    const handleCopy = async () => {
        // Fallback for HTTP / older browsers (works on iOS Safari)
        const legacyCopy = () => {
            try {
                const ta = document.createElement("textarea");
                ta.value = url;
                ta.setAttribute("readonly", "");
                ta.style.position = "fixed";
                ta.style.top = "0";
                ta.style.left = "-9999px";
                document.body.appendChild(ta);
                ta.select();
                const ok = document.execCommand("copy");
                document.body.removeChild(ta);
                return ok;
            } catch {
                return false;
            }
        };

        try {
            // Use async clipboard only in secure contexts (https or localhost)
            if (window.isSecureContext && navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 1200);
                return;
            }
        } catch {
            // fall through to legacy
        }

        const ok = legacyCopy();
        setCopied(ok);
        setTimeout(() => setCopied(false), 1200);
    };

    const open = (href: string) => window.open(href, "_blank", "noopener,noreferrer");

    const targets = [
        { name: "WhatsApp", href: waLink, Icon: FaWhatsapp, color: "#25D366" },
        { name: "Telegram", href: tgLink, Icon: FaTelegramPlane, color: "#229ED9" },
        { name: "Facebook", href: fbLink, Icon: FaFacebook, color: "#1877F2" },
        { name: "X / Twitter", href: xLink, Icon: FaTwitter, color: "#000000" },
    ];

    const QuickLinks = () => (
        <div className="mt-4 overflow-x-auto">
            <div className="flex gap-4 pb-1">
                {targets.map((t) => (
                    <button
                        key={t.name}
                        onClick={() => open(t.href)}
                        className="flex flex-col items-center w-20 shrink-0 focus:outline-none"
                        aria-label={`Share to ${t.name}`}
                    >
                        <div className="h-12 w-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                            <t.Icon size={22} style={{ color: t.color }} aria-hidden />
                        </div>
                        <span className="mt-1.5 text-[12px] text-gray-700 text-center">{t.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );

    const CopyRow = () => (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2">
            <span className="truncate text-sm text-gray-700">{url}</span>
            <button
                onClick={handleCopy}
                className="ml-auto rounded-lg bg-gray-100 px-3 py-1.5 !text-xs !text-black hover:bg-gray-200"
                aria-live="polite"
            >
                {copied ? "Copied!" : "Copy link"}
            </button>
        </div>
    );

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100]">
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/50"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />

                {/* ---------- Mobile: Bottom Sheet (<md) ---------- */}
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-x-0 bottom-0 z-[101] rounded-t-3xl bg-white shadow-2xl pb-[env(safe-area-inset-bottom)] md:hidden"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="pt-3 flex justify-center">
                        <div className="h-1.5 w-12 rounded-full bg-black/15" />
                    </div>
                    <div className="px-5 pb-5">
                        <div className="flex items-center justify-between mt-2 mb-1">
                            <h4 className="text-base font-bold text-[#0B1E18]">Share with Friends and Family</h4>
                            <button onClick={onClose} className="rounded-full px-2 py-1 text-sm hover:bg-black/5" aria-label="Close">
                                ✕
                            </button>
                        </div>

                        {/* <button
                            onClick={handleNativeShare}
                            className="w-full rounded-xl bg-[#A7E34A] text-[#0B1E18] font-semibold py-2.5 mt-3 hover:brightness-105 disabled:opacity-60"
                            disabled={!canNativeShare}
                        >
                            {canNativeShare ? "Share Now" : "Share Now (not supported on this device)"}
                        </button> */}

                        <QuickLinks />
                        <CopyRow />
                    </div>
                </motion.div>

                {/* ---------- Desktop: Centered Modal (md+) ---------- */}
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    className="hidden md:flex fixed inset-0 z-[101] items-center justify-center"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="w-[92%] max-w-md rounded-2xl bg-white p-5 shadow-2xl">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-[#0B1E18]">Share with your friends</h4>
                            <button onClick={onClose} className="rounded-full px-2 py-1 text-sm !text-black hover:bg-black/5" aria-label="Close">
                                ✕
                            </button>
                        </div>

                        <p className="text-sm text-left text-gray-600 mb-4">
                            Spread the word! Share Beres with your friends.
                        </p>

                        {/* <button
                            onClick={handleNativeShare}
                            className="w-full rounded-xl bg-[#A7E34A] text-[#0B1E18] font-semibold py-2.5 mb-3 hover:brightness-105 disabled:opacity-60"
                            disabled={!canNativeShare}
                        >
                            {canNativeShare ? "Share Now" : "Share via links below"}
                        </button> */}

                        {/* Grid with FA icons on desktop */}
                        <div className="grid grid-cols-4 gap-3 mb-2">
                            {targets.map((t) => (
                                <button
                                    key={t.name}
                                    onClick={() => open(t.href)}
                                    className="flex flex-col items-center focus:outline-none"
                                    aria-label={`Share to ${t.name}`}
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                                        <t.Icon size={22} color={t.color} />
                                    </div>
                                    <span className="mt-1.5 text-[12px] text-gray-700 text-center">{t.name}</span>
                                </button>
                            ))}
                        </div>

                        <CopyRow />
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
