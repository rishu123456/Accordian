import { useState } from "react";
import { FaStar } from "react-icons/fa6"
import "./style.css";


export default function StarRating({numberOfStars}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentId) => {
        setRating(getCurrentId);

    }

    const handleLeave = () => {
        setHover(rating);

    }
    const handleMove = (getCurrentId) => {

        setHover(getCurrentId);
    }







    return <div>
        {
            [...Array(numberOfStars)].map((_, index) => {
                index = index + 1;
                return (
                    <FaStar
                        key={index}
                        className={index <= (rating || hover) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMove(index)}
                        onMouseLeave={() => handleLeave()}
                        size={40}
                    />

                );

            })
        }

    </div>
}