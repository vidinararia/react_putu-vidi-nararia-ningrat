//sebelum
class kendaraan {
    var totalroda = 0
var kecepatanperjam = 0
}

class mobil extends kendaraan {
    void berjalan() {
      tambahkecepatan(10);
    }
    tambahkecepatan(var kecepatanbaru) {
      kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main() {
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}

//sesudah
class kendaraan {
    var totalroda = 0
    var kecepatanperjam = 0
}

class mobil extends kendaraan {
    void berjalan() {
        tambahkecepatan(10);
    }
    tambahkecepatan(var kecepatanbaru) {
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main() {
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}
