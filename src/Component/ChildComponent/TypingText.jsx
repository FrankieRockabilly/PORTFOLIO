    // src/components/TypingText.jsx
    import { useEffect, useRef, useState } from "react";

    const titles = ["Developer", "Programmer", "IT Support", "UI/UX"];

    const TypingText = () => {
    const [displayText, setDisplayText] = useState("");
    const indexRef = useRef(0);
    const subIndexRef = useRef(0);
    const deletingRef = useRef(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
        const currentWord = titles[indexRef.current];

        if (!deletingRef.current) {
            setDisplayText(currentWord.substring(0, subIndexRef.current + 1));
            subIndexRef.current += 1;

            if (subIndexRef.current === currentWord.length) {
                setTimeout(() => {
                    deletingRef.current = true;
                }, 1000); // delay 1 detik sebelum mulai menghapus
                }
        } else {
            setDisplayText(currentWord.substring(0, subIndexRef.current - 1));
            subIndexRef.current -= 1;

            if (subIndexRef.current === 0) {
            deletingRef.current = false;
            indexRef.current = (indexRef.current + 1) % titles.length;
            }
        }
        }, deletingRef.current ? 50 : 100);

        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        // <h1 className="text-[11rem] font-extrabold opacity-[0.09] tracking-wide text-gray-500 overflow-hidden whitespace-nowrap absolute top-0 left-0 z-[-1] pointer-events-none pt-56">
        <h1 className="text-black">
        I'm <span className="text-primary">{displayText} </span>
        </h1>
    );
    };

    export default TypingText;
