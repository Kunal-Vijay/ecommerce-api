# Ecommerce-API (shopping website)

# Installation

1. Clone the repository
```sh
git clone git@github.com:Kunal-Vijay/ecommerce-api.git
```

2. Install dependencies
```sh
 npm i 
```
3. Run server
```sh
node ./index.js
```

# Environment Variables
```sh
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.srzpb.mongodb.net/ecommerce?retryWrites=true&w=majority

PASS_SEC=etisecremmoce

JWT_SEC=encryptofied

```
# Routes

# Authentication
Register
```sh
POST
http://localhost:5000/api/auth/register

{
    "username":"name",
    "email":"email@gmail.com",
    "password":"pwd"
}
```
Login
```sh
POST
http://localhost:5000/api/auth/login

{
    "username":"name",
    "password":"pwd"
}
```

# User
Get user
```sh
GET
http://localhost:5000/api/users/find/62c599ddcd19ca8a42dcf206
```
Get all users
```sh
GET
http://localhost:5000/api/users/find?new=true
```
Update user
```sh
PUT
http://localhost:5000/api/users/62c443c343a12be53c7a9f9e

{
    "username":"nameupdated"
}
```
Delete user
```sh
DELETE
http://localhost:5000/api/users/62c43ec8463d51921bf9c091
```
# Product
Create Product
```sh
POST
http://localhost:5000/api/products/

{
    "title":"Nike Shoes 2",
    "desc": "Shoes",
    "img": "test",
    "categories":["shoes","woman","man"] ,
    "size": "L",
    "color": "Blue",
    "price": 15
}
```
Update Product
```sh
PUT
http://localhost:5000/api/products/62c6cb6f56f6b30d14863210

{
    "title":"Puma T shirt",
    "desc": "T -shirt",
    "img": "test",
    "categories":["tshirts","man"] ,
    "size": "M",
    "color": "red",
    "price": 10
}
```
Get product
```sh
GET
http://localhost:5000/api/products/find/62c6cb6f56f6b30d14863210
```
Get all products
```sh
GET
http://localhost:5000/api/products/find?category=man
```
Delete Product
```sh
DELETE
http://localhost:5000/api/products/62c6d915256b8534463efab9
```
# Orders
Create Order
```sh
POST
http://localhost:5000/api/orders

{
"userId": "62c599ddcd19ca8a42dcf206",
"products":[
{
"productId":"21ewef",
"quantity":2
},
{
"productId":"21ewefasdasd",
"quantity":1
}],
"amount": 100,
"address": "USA"
}
```
Sales
```sh
GET
http://localhost:5000/api/orders/sale
```
