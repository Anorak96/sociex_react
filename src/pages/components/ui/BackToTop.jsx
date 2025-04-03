import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsVisible(window.scrollY > 300); // Show when scrolled down 300px
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button onClick={scrollToTop} style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                display: isVisible ? "block" : "none",
                padding: "10px 15px",
                background: "black",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
            onMouseOver={(e) => (e.target.style.background = "#0056b3")}
            onMouseOut={(e) => (e.target.style.background = "black")}
        >
            <FaAngleUp />
        </button>
    )
}

export default BackToTop