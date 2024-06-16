import { serverUrl } from "../data/consts";
import { User, Adventure, UserAdventure } from "../data/interfaces";

export const fetchUser = async (userId: string): Promise<User | null> => {
    const response = await fetch(`${serverUrl}/user/${userId}`);
    if (response.status === 404) {
        return null;
    }
    return response.json();
};

export const fetchAdventure = async (adventureId: string): Promise<Adventure | null> => {
    const response = await fetch(`${serverUrl}/adventure/${adventureId}`);
    if (response.status === 404) {
        return null;
    }
    return response.json();
};

export const calculateCompletionPercentage = (userAdventure: UserAdventure): number => {
    const totalTasks = userAdventure.completed.length;
    const completedTasks = userAdventure.completed.filter((completed) => completed).length;
    return (completedTasks / totalTasks) * 100;
};

