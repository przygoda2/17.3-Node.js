// określenie enkodowania przyjmowanych danych
process.stdin.setEncoding('utf-8');

/*
nasłuchiwanie na zdarzenie odczytu
na zdarzenie .on odczytu redable wykonaj funkcję
*/
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    //sprawdzenie czy na wejściu cokolwiek istnieje czy jest coś do wyświetlenia
    if(input !== null) {
        // .trim() pozbycie się wszystkich białych znaków z tekstu
        var instruction = input.toString().trim();
        // switch statement  zamiast if, if else
        switch (instruction) {
            case '/exit':
            /*
            logowanie błędów w konsoli
            process.stdout. przekierowanie wszystkich odpowiedzi do strumienia stdout (razem z błędami)
            process.stderr dedykowane rozwiązanie do przekazywania komunikatów o błędach
            */
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            
            
            case '/version':
                process.stdout.write('Node version is: ' + process.versions.node + '\n');
                process.stdout.write('Language is: ' + process.env.lang + '\n');
                break;

            default:
            //komunikat do przekazywania błędów pojawi się w konsoli
                process.stderr.write('Wrong instruction!\n');
        }
    }
    
});