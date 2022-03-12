# 9 Clean Code
### resume
Pada resume ini saya mendapatkan beberapa poin penting dalam materi pada section 9 ini
1. mengenal clean code
2. mengapa perlu meperhatikan clean code
3. karakteristik clean code seperti apa
4. mengenal arti KISS

### clean code
clean code merupakan istilah untuk kode yang dapat mudah dipahami, dibaca, dipahami, dan diubah oleh proggrammer.Bagaimana cara untuk membuat kode kita agar menjadi clean code? caranya dengan melihat karakteristik kodenya dengan beberapa faktornya ada berupa:
1. penamaan mudah dipahami
2. mudah dieja dan dicari
3. singkat namun mendeskripsikan konteks
4. konsisten
5. hindari penambahan konteks yang tidak perlu
6. komentar yang rapi
7. function

## task
### menuliskan kode yang rapi
pada task ini disuruh untuk menganalisis kode yang telah diberikan berikut merupakan hasil analisis kodenya.

1. [Problem 1](#problem-1)
2. [Problem 2](#problem-2)

### Problem 1
```javascript
class user {
    var id;
    var username;
    var password;
}

//pada bagian class atau variable yang mengandung 2 atau lebih kata seharusnya menggunakan huruf kapital pada kata ke 2 dan seterusnya supaya dapat terbaca dengan jelas

//userservise lebih diganti dengan userService
class userservice {
    //users diganti dengan manyUsers agar tidak salah dalam dalam menggunakan variable tersebut
    user[] users  = [];

    //getallusers diganti dengan getAllUsers agar mudah terbaca
    user[] getallusers() {
        //users diganti dengan manyUsers agar mudah di ingan dan di baca
        return users;
    }

    //getuserbyid(userid) diganti dengan getUserById(userId) agar mudah di baca
    user getuserbyid(userid) {
        //users diganti dengan manyUsers dan (userid) diganti dengan userId agar lebih mudah dibaca
        return users.filter(userid);
    }
}
```

### Problem 2
```javascript
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
```