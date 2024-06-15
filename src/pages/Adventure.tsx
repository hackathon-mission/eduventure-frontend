import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Adventure = () => {
    const { adventureId } = useParams();
    console.log(adventureId);
    useEffect(() => {
        // Perform data fetching based on productId
    }, [adventureId]);

    return <div>Adventure</div>;
};
