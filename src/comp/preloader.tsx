import { useEffect, useState } from "react";

interface PreloaderProps {
    delay?: number;
    fadeOutDuration?: number;
}

export default function Preloader({
    delay = 100,
    fadeOutDuration = 300,
}: PreloaderProps) {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setFading(true), delay);
            setTimeout(() => setVisible(false), delay + fadeOutDuration);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, [delay, fadeOutDuration]);

    if (!visible) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#1f1f1f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                opacity: fading ? 0 : 1,
                transition: `opacity ${fadeOutDuration}ms ease-in-out`,
                pointerEvents: fading ? "none" : "auto",
            }}
        >
            <h1 style={{ color: "white", fontSize: "2rem", margin: 0 }}>
                maksymilian 
            </h1>
        </div>
    );
}