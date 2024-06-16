import { ContestProps } from "../components/arena/ContestCard";

export function getExp() {
    return 875;
}
export function getLeaderboardPosition() {
    return 128;
}
export function getDailyArenaContests(): ContestProps[] {
    let titles: string[] = [
        "Math Blitz",
        "History Quest",
        "Science Whiz",
        "Geography Challenge",
        "Literature Sprint",
        "Grammar Guru",
        "Physics Puzzle",
        "Art Attack",
        "Music Mania",
        "Coding Craze",
        "Environmental Science Showdown",
        "Economics Express",
        "Spanish Speed",
        "French Flash",
        "Health Hustle"
    ];

    let descriptions: string[] = [
        "Sharpen your math skills in this quick, exciting contest.",
        "Test your knowledge of history in this fast-paced quiz.",
        "Prove your science expertise in this rapid-fire contest.",
        "Show off your geography skills in this challenging quiz.",
        "Demonstrate your literature knowledge in this speedy contest.",
        "Master the intricacies of grammar in this quick contest.",
        "Solve tricky physics problems in this fast-paced quiz.",
        "Unleash your creativity in this exciting art contest.",
        "Test your musical knowledge in this fun, fast-paced quiz.",
        "Showcase your coding skills in this rapid contest.",
        "Compete in environmental science trivia in this quick contest.",
        "Prove your economics knowledge in this fast-paced contest.",
        "Test your Spanish language skills in this rapid quiz.",
        "Show off your French language knowledge in this fast contest.",
        "Demonstrate your understanding of health topics in this quick contest."
    ];

    let dates: Date[] = [
        new Date("2024-07-10T14:48:00.000+09:00"),
        new Date("2024-07-11T14:48:00.000+09:00"),
        new Date("2024-07-12T14:48:00.000+09:00"),
        new Date("2024-07-13T14:48:00.000+09:00"),
        new Date("2024-07-14T14:48:00.000+09:00"),
        new Date("2024-07-15T14:48:00.000+09:00"),
        new Date("2024-07-16T14:48:00.000+09:00"),
        new Date("2024-07-17T14:48:00.000+09:00"),
        new Date("2024-07-18T14:48:00.000+09:00"),
        new Date("2024-07-19T14:48:00.000+09:00"),
        new Date("2024-07-20T14:48:00.000+09:00"),
        new Date("2024-07-21T14:48:00.000+09:00"),
        new Date("2024-07-22T14:48:00.000+09:00"),
        new Date("2024-07-23T14:48:00.000+09:00"),
        new Date("2024-07-24T14:48:00.000+09:00")
    ];

    let contests: ContestProps[] = [];
    titles.forEach((element, idx: number) => {
        let contest = {
            name: element,
            description: descriptions[idx],
            startDate: dates[idx],
            endDate: new Date(dates[idx]),
        };
        contest.endDate.setHours(contest.endDate.getHours() + 24);
        contests.push(contest);
    });
    return contests;
}

export function getWeeklyArenaContests(): ContestProps[] {
    let titles: string[] = [
        "Math Marathon",
        "History Odyssey",
        "Science Olympiad",
        "Geography Expedition",
        "Literature Voyage",
        "Grammar Gauntlet",
        "Physics Challenge",
        "Art Adventure",
        "Music Extravaganza",
        "Coding Marathon",
        "Environmental Science Extravaganza",
        "Economics Tournament",
        "Spanish Fiesta",
        "French Fest",
        "Health Challenge"
    ];

    let descriptions: string[] = [
        "Prove your math prowess in this week-long contest.",
        "Show off your history knowledge in this extended quiz.",
        "Demonstrate your science expertise in this challenging contest.",
        "Embark on a geography journey in this week-long quiz.",
        "Showcase your literature knowledge in this extended contest.",
        "Master the complexities of grammar in this week-long contest.",
        "Solve complex physics problems in this challenging contest.",
        "Unleash your artistic skills in this week-long art contest.",
        "Show off your musical knowledge in this extended contest.",
        "Prove your coding skills in this week-long marathon.",
        "Compete in environmental science trivia in this extended contest.",
        "Prove your economics knowledge in this challenging contest.",
        "Show off your Spanish language skills in this extended quiz.",
        "Showcase your French language knowledge in this week-long contest.",
        "Demonstrate your understanding of health topics in this extended contest."
    ];

    let dates: Date[] = [
        new Date("2024-07-10T14:48:00.000+09:00"),
        new Date("2024-07-11T14:48:00.000+09:00"),
        new Date("2024-07-12T14:48:00.000+09:00"),
        new Date("2024-07-13T14:48:00.000+09:00"),
        new Date("2024-07-14T14:48:00.000+09:00"),
        new Date("2024-07-15T14:48:00.000+09:00"),
        new Date("2024-07-16T14:48:00.000+09:00"),
        new Date("2024-07-17T14:48:00.000+09:00"),
        new Date("2024-07-18T14:48:00.000+09:00"),
        new Date("2024-07-19T14:48:00.000+09:00"),
        new Date("2024-07-20T14:48:00.000+09:00"),
        new Date("2024-07-21T14:48:00.000+09:00"),
        new Date("2024-07-22T14:48:00.000+09:00"),
        new Date("2024-07-23T14:48:00.000+09:00"),
        new Date("2024-07-24T14:48:00.000+09:00")
    ];

    let contests: ContestProps[] = [];
    titles.forEach((element, idx: number) => {
        let contest = {
            name: element,
            description: descriptions[idx],
            startDate: dates[idx],
            endDate: new Date(dates[idx]),
        };
        contest.endDate.setHours(contest.endDate.getHours() + 24 * 7);
        contests.push(contest);
    });
    return contests;
}

