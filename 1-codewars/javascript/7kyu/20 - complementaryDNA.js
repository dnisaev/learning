// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

console.log(dnaStrand("ATTGC"))

function dnaStrand(dna){
    let result = ''
    for (let char of dna) {
        switch (char) {
            case 'A':
                result += 'T'
                break
            case 'T':
                result += 'A'
                break
            case 'C':
                result += 'G'
                break
            case 'G':
                result += 'C'
        }
    }
    return result
}

const pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
}

console.log(DNAStrand("ATTGC"))