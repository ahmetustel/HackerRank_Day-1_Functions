function factorial() {
  let sayi = document.getElementById("deger").value;
  sayi = Number(sayi);
  sayi = parseInt(sayi);
  let sonuc = 1;
  while (1 <= sayi && sayi <= 10) {
    for (let i = 1; i <= sayi; i++) {
      sonuc *= i;
    }
    return (document.getElementById("demo").innerHTML = sonuc);
  }
}
