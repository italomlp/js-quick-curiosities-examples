let speak;

export class Pet {
    #speech;

    constructor(speech) {
        this.#speech = speech;
    }

    static {
        speak = pet => console.log(pet.#speech);
    }

    static isSpeakable(pet) {
        return !!pet.#speech;
    }
}

export const petSpeak = pet => speak(pet);
