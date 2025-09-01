import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./ProjPre.css"

export const SlideShow = ({images, to, content}) => {
    const navigate = useNavigate();

    const [bgIndex, setBgIndex] = useState(0);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        let interval;
        if (hovering) {
            interval = setInterval(() => {
                setBgIndex((prev) => (prev + 1) % images.length);
            }, 1000);
        } else {
            setBgIndex(0); // Default to index 0 when not hovering
        }

        return () => clearInterval(interval);
    }, [hovering]);
    return (
        <div
            className="image-container"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
                backgroundImage: `url(${images[bgIndex]})`,
                transition: "background-image 0.5s ease-in-out",
            }}
            onClick={() =>navigate(to)}
        >
            <li>
                <h4 className="font-bold">{content}</h4>
            </li>
        </div>
    )
}
