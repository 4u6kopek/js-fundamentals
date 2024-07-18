function matchFullName(input) {
    const regexp = /\b[A-Z][a-z]+ \b[A-Z][a-z]+/g;
    const result = input.match(regexp);
    console.log(result.join(" "));
}

matchFullName(
    "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);