export interface GameSession {
    id: string;
    title: string;
    gameMaster: string;
    players: string[];
    description: string;
    imageUrl: string;
  }
  
  export interface Asset {
    id: string;
    title: string;
    description: string;
    owner: string;
    imageUrl: string;
  }
  
  export interface CreateGameDto {
    title: string;
    gameMaster: string;
    players: string[];
    description: string;
    image: File;
  }
  
  export interface Profile {
    name: string;
    assets: Asset[];
    games: GameSession[];
  }