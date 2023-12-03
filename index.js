function introduction(name) {
    return `Hi, my name is ${name}.`;
}

let name = "Keya";
let result = introduction( name );
console.log(result);

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

let output = introductionWithLanguage(name, language);
console.log(output);

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

let outcome = introductionWithLanguageOptional("Keya", "Python");
console.log(outcome);
