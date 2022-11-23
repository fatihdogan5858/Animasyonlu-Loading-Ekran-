const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0/**başlangıç noktası sıfırdan olacak */

let int = setInterval(bluring, 30) /**belirli bir fonksiyonu belirli bir surede tekrarlama için verilen süredir yani o surede işlemi tekrarlar */
/** bluringi 30 mili saniye olarak devam edecek */


function bluring() {

    load++/* loadı her seferinde 1 arttır*/
    if (load > 99) { /* eğer load 99 dan 1 olursa */
        clearInterval(int) /* işlemi durdur clearınterval= işlemi durdur demek */
    }

    loadText.innerText = `${load}%`/** text içinegiriyoruz innertext içine bir html eklemek istiyorsak "${}%" yazıp içine yazmamız lazım */

    loadText.style.opacity = scale(load, 0, 100, 1, 0)/**loadingde style gir opacitye eriş  stackover dan aldığımız scale fonksiyonunu kullan*/

    // scale(load, 0, 100, 1, 0)  scale(load = load üzerinden gerçekleşecek, 0 = en küçük rakam sıfırdan başlayacak, 100= inmax 100 e kadar gidecek , 1 = den  , 0= a gitmesini istiyoruz)
    /*rakam 0 dan yüze gidince kaybolsun*/

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
    function scale(number, inMin, inMax, outMin, outMax) {/**stackoverflowerden aldık  */
    
    return ((number - inMin) * (outMax - outMin)) / (inMax - outMin) + outMin /**stackoverflowerden aldık  */
}

