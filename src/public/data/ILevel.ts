interface word {
    audioExample: string;
    textExample: string;
    textExampleTranslate: string;
    id: number;
    word: string;
    wordTranslate: string;
}

interface round {
    levelData: {
        id: string;
        name: string;
        imageSrc: string;
        cutSrc: string;
        author: string;
        year: string;
    };
    words: word[];
}

export interface ILevel {
    rounds: round[];
    roundsCount: number;
}
