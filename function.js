function factorial() {
  let sayi = document.getElementById("deger").value; //İnput değerin değişkene atılması
  sayi = Number(sayi); // input'un number'a dönüştürülmesi
  sayi = parseInt(sayi); //Tamsayıya dönüştürlmesi
  let sonuc = 1;
  while (1 <= sayi && sayi <= 10) {
    for (let i = 1; i <= sayi; i++) {
      sonuc *= i;
    }
    return (document.getElementById("demo").innerHTML = sonuc);
  }
}
