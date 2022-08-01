- rata2 belum get detail user

GET ALL ===> mendapat semua users
GET SINGLE FILE ===> mendapatkan 1 user saja
POST CREATE ===> membuat user
PUT EDIT ===> edit user
DELETE DELETE ===> delete user


====================================================================

- jangan rubah user id
id (Primary Key) => jangan dirubah
username => boleh dirubah
password => boleh dirubah

====================================================================

- mendapatkan user id dari param

API untuk edit data user
URL = localhost:8080/users/:userId
Contoh : localhost:8080/users/1 <== standard

==== tidak umum ====
localhost:8080/users?userId=1
localhost:8080/users
{
    userId: 1
    username: ....
    password: ....
}


====================================================================
- createdAt dan updatedAt sudah otomatis terupdate
API create user

====================================================================
- jangan upload .env
.env.example

NODE_ENV = 
DB_PASS = 

====================================================================
- file naming consistency, 1_nama_file

const response_server = "";
const responseServer = () => {};
const ResponseServer = ""; // class 
const _responseServer = () => {}; // private method / private function

