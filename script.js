function word(word, reading, meaning, explain) {
    this.word = word;
    this.reading = reading;
    this.meaning = meaning;
    this.explain = explain;

    this.show = function() {
        const word = document.getElementById("word");
        const reading = document.getElementById("reading");
        const meaning = document.getElementById("meaning");
        const explain = document.getElementById("explain");

        word.innerText = this.word;
        reading.innerText = this.reading;
        meaning.innerText = this.meaning;
        explain.innerText = this.explain;
    }
}

let data = [
    new word("δημοκρατίαz", "デモクラティア", "民主政", "古代アテナイで行われた民主政治の事で、当時では平等と考えられていた抽選で公職者が決められていた。また、アテナイと同様の民主政は古代インドにも存在した。"),
    new word("ρητορική", "レートリケー", "弁論術", "古代アテナイの民主制で市民を煽動するために重要になる演説の技術の総称。ソフィスト教育で教えられた他、中世の大学の自由七科にも含まれている。"),
];
let index = 0;

function next() {
    index++;
    if (index == data.length) {
        index = 0;
    }
    data[index].show();
}

document.addEventListener("DOMContentLoaded", function() {
    data[0].show();
})