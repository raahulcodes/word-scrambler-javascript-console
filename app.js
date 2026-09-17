let word = "APPLE";

function wordScrambler(wordd)
{
    let newWord = "";
    let wordLength = wordd.length;

    for(let i=0;i<wordLength;i++)
    {
        let randomIndex = Math.floor(Math.random()*wordd.length);
        newWord += wordd.charAt(randomIndex);
        wordd = wordd.slice(0, randomIndex) + wordd.slice(randomIndex+1);
    }

    console.log("Original: " + word);
    console.log("Scrambled: " + newWord);
}

wordScrambler(word);

