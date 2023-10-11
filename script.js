// 1.1den 100e qeder ededler icerisinde 5e ve 3e bolunenlerin toplamin tapan algoritm




// Toplamı ve indeksi saklamak için değişkenler oluşturun
// var toplam = 0;
// var indeks;

// // 1'den 100'e kadar olan sayıları toplayın ve indeksi görüntüleyin

// not let yerinə const yazanda işləmədi

// let toplam = 0;

// for ( i = 1; i <= 100; i++) {
//     if (i%3===0 ||  i % 5 === 0) {
//         toplam += i;
//     }
// }

// console.log(toplam);


//2.Verilen ededin 2nin quvveti olub olmadigini bildiren algoritm

// let num=2

// if ((Math.log(num) / Math.log(2)) % 1 === 0) {
//     console.log("bu eded 2 nin quvwridir");
// }
// else{
//     console.log("quvvet deyildir");
// }


let number=8
if (number<1) {
    console.log("quveti ola bilmez");
}
else if (number=== 1) {
    console.log("yalnizca 1 butun ededlerin quvvetidir");
}
else{
    while (number > 1) {
        if (number % 2 !== 0) {
            console.log("quvvet deyil");
            break
        }
        number = number / 2;
        
    }
    if (number % 2 == 0) {
        console.log("2 nin quvvetidir");
        break
    }
]
    
// console.log("2 nin quvvetidir");



// function isPowerOfTwo(number) {
//     if (number < 1) {
//         return false; // Negatif sayılar ve sıfır 2'nin kuvveti değildir.
//     }

//     if (number === 1) {
//         return true; // 2^0 = 1, bu yüzden 1 2'nin kuvvetidir.
//     }

//     // number'ı 2'ye bölerek ve her adımda kalanı kontrol ederek 2'nin kuvveti olup olmadığını belirleyin.
//     while (number > 1) {
//         if (number % 2 !== 0) {
//             return false; // 2'ye tam bölünmeyen bir sayı 2'nin kuvveti değildir.
//         }
//         number = number / 2;
//     }

//     return true;
// }
