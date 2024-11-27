import { Message } from "ai"

export function getWordCount(str: string): number {
    // https://stackoverflow.com/questions/18679576/counting-words-in-string
    return str.trim().split(/\s+/).length
}

export function getWordMessagesCount(messages: Message[]) {
    /**
     * Calculates the length of the `msg.content` for both the 
     * Assistant and User roles and returns the sum of the total number of words
     */
    const totalWordCount = messages.reduce((accumulator, msg) => {
        return accumulator + getWordCount(msg.content)
    }, 0)
    return totalWordCount
}
