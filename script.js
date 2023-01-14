function randomPassword() {
    let character = "abcderfghijklmnopqrstuvwxyz1234567890-=[];',./?<>{}-=!@#$%^&*()";
    let password = "";
    let leng = 12;

        for (let i = 0; i < leng; i++) {
            let random = Math.floor(Math.random() * character.length);
            password += character.substring(random, random +1);
        }

        document.getElementById("display-password").value = password;
};