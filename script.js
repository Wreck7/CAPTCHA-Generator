btn.addEventListener("click", e =>{
    e.target = generateRandom();
})
function generateRandom() {
    const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strLength = 7;
    let result = "";
    for (let i = 0; i < strLength; i++) {
        let rand = Math.floor(Math.random() * characters.length)
        result += characters.substring(rand, rand+1)
    }
    para.innerHTML = result
}