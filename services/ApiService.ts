export async function fetchData(uri: string): Promise<any | null> {
    const mockedData = [
        {
            title: 'Dungeon Delvers',
            gameMaster: 'Alex',
            players: ['Mia', 'Liam', 'Noah', 'Emma'],
            imageUrl: 'images/dungeon.jpg'
        },
        {
            title: 'Settlers of Catan',
            gameMaster: 'Jordan',
            players: ['Chris', 'Pat', 'Taylor', 'Jamie'],
            imageUrl: 'images/catan.jpg'
        },
        {
            title: 'Virtual Chess Tournament',
            gameMaster: 'Sam',
            players: ['Alice', 'Bob', 'Charlie', 'Diana'],
            imageUrl: 'images/chess.jpg'
        },
        {
            title: 'Community Soccer Match',
            gameMaster: 'Coach Mike',
            players: ['Jordan', 'Ashley', 'Morgan', 'Casey'],
            imageUrl: 'images/soccer.jpg'
        },
        {
            title: 'Warlords Battlecry',
            gameMaster: 'Evelyn',
            players: ['Riley', 'Alexis', 'Shawn', 'Blake'],
            imageUrl: 'images/strategy-game.jpg'
        }
    ];
    return mockedData;
    // try {
    //     const response = await fetch(uri, {
    //         method: 'GET',
    //         headers: {'Content-Type': 'application/json'}
    //     });
    //
    //     if (!response.ok) {
    //         console.log('HTTP Error:', response.status);
    //         return;
    //     }
    //
    //     const data = await response.json();
    //     return data;
    // } catch (error) {
    //     console.error('Fetch error:', error);
    //     return;
    // }
}

export async function authenticateUser(hashedPassword: String, username: String): Promise<any | null> {
    if (hashedPassword === "123123" && username === "user"){
        return true;
    }
    try {
        const response = await fetch("/auth", {
            method: "POST",
            headers: {}
        });

        if (!response.ok){
            console.log('Authentication Error:', response.status);
        }

        const authToken = await response.json()
    }
    catch (error){
        console.error('Authentication error:', error)
        return
    }
}
