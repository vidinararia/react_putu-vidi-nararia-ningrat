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