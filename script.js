const calculateCharacter = () => {

let isim = prompt("İsim girin:");
let tweet = prompt("Tweet Girin.");
// let tweet = "Bu bir Twittir.";
let tweetCount = tweet.length; // tweet içindeki değerin karakter uzunluğu.
let tweetLeft =150-tweetCount; // 


console.log(tweetCount,"karakter yazdınız,",tweetLeft,"karakteriz kaldı.");
console.log(`${tweetCount} karakter yazdınız, ${tweetLeft} karakteriniz kaldı.`);
alert(`${tweetCount} karakter yazdınız, ${tweetLeft} karakteriniz kaldı.`);

}

// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);