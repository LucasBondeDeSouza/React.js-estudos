import emojipedia from "./Emojipedia"

const newEmojipedia = emojipedia.map((emojiEntry) => {
    return emojiEntry.meaning.substring(0, 100)
})

console.log(newEmojipedia)