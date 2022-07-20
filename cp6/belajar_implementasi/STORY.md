STORY 
Buat API untuk mengakomodasi CRUD poduct 

TASK 
- API get all products (bisa query nama product)
- API create new product (product name harus unique, tidak bisa input nama yang sama)
- API get one product
- API to update product
- API to delete product 

query nama : SELECT * FROM users WHERE username like '%querynya%';


GET ALL : 
method : GET
URL : /users

GET SINGLE : 
method : GET
URL : /users/:id

CREATE NEW :
method : POST
URL : /users
(data user baru ada di json body)

UPDATE : 
method : PUT/PATCH
url : /users/:id
(data user yang diupdate ada di json body)

DELETE : 
method: DELETE
URL : /users/:id
