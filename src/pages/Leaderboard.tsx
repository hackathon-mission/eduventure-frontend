import { useState, useEffect } from "react";
import { User } from "../data/interfaces";
import { serverUrl } from "../data/consts";
import { Box } from "@mui/material";

export default function Leaderboard() {
    let [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch(`${serverUrl}/users`)
            .then((res) => res.json())
            .then((data) => {
                data.sort((a: User, b: User) => b.xp - a.xp);
                setUsers(data);
            }).catch((err) => console.log(err));
    }, []);

    return (
        <Box>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User, index: number) => (
                        <tr key={user._id.toString()}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.xp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    )
}
