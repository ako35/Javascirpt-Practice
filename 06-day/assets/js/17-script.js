const notlar = [
    {
        id: 1,
        isim: "Ali",
        not: 75
    },
    {
        id: 2,
        isim: "Veli",
        not: 85
    },
    {
        id: 3,
        isim: "Ayse",
        not: 95
    },
    {
        id: 4,
        isim: "Can",
        not: 100
    },
    {
        id: 5,
        isim: "Mehmet",
        not: 90
    },
    {
        id: 6,
        isim: "Ahmet",
        not: 85
    },
    {
        id: 7,
        isim: "Fatma",
        not: 75
    },
    {
        id: 8,
        isim: "Veli",
        not: 85
    },
    {
        id: 9,
        isim: "Hatice",
        not: 95
    },
    {
        id: 10,
        isim: "Canberk",
        not: 100
    }
]

let ortalama = notlar.reduce((a, b) => a + b.not, 0) / notlar.length;

console.log(ortalama);

let yeniNotlar = notlar.map(not => {
    if(not.not > ortalama) {
        not.not = (not.not * 1.2).toFixed(1);
    }
    else {
        not.not = (not.not * 1.1).toFixed(1);
    }
    return not;
})

console.log(yeniNotlar);

// dizideki sayilarin ortalamasini bulun ortalamadan yuksek olanlari baska bir diziye atarak yazdirin
