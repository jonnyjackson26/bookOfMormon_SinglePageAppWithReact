class Highlight {
    constructor(startVerse, endVerse, start, end, chapter, bookName) {
        this.startVerse = startVerse;
        this.endVerse = endVerse;
        this.start = start;
        this.end = end;
        this.chapter = chapter;
        this.bookName = bookName;
    }

    toString() {
        return `${this.bookName} ${this.chapter}, verse ${this.startVerse} to ${this.endVerse}, Start: ${this.start}, End: ${this.end}`;
    }
}

