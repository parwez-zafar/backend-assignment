# backend-assignment

I have deployed the backend on Render. Link :- https://ecommerce-backend-api-be95.onrender.com

No need to setup anything. Just open postman and hit these Endpoints

1. http://localhost:4000/api/v1/register // Register user (post Request)
   input:-
   {
   "name":"user1",
   "email":"user11@gmail.com",
   "password":"12345678",
   "avatar": "https://res.cloudinary.com/dgfwgt1dp/image/upload/v1688366815/avatars/eq0xpb78pg4mo8ldgqdj.jpg"
   }

2. https://ecommerce-backend-api-be95.onrender.com/api/v1/login --> Login User (post Request)
   input :-
   {
   "email":"parwezzafar3@gmail.com",
   "password":"12345678"
   }

3. https://ecommerce-backend-api-be95.onrender.com/api/v1/logout --> Logout User (get Request)

4. https://ecommerce-backend-api-be95.onrender.com/api/v1/password/forgot --> forgot password (post request)
   input :-
   {
   "email":"parwezzafar160@gmail.com"
   }

5. https://ecommerce-backend-api-be95.onrender.com/api/v1/password/reset/<resetToken> --> Reset password (put Request)
   input:-
   {
   "password":"12345678",
   "confirmPassword":"12345678"
   }

6. https://ecommerce-backend-api-be95.onrender.com/api/v1/admin/product/new --> create a Product (Admin Post Request)
   input:-
   {
   "name":"Mouse",
   "price":2000,
   "description":"this is a sample Mouse",
   "category":"Moniter",
   "images":"https://res.cloudinary.com/dgfwgt1dp/image/upload/v1691994449/products/lddbog592gmtpgazh8hg.jpg"
   }

7. https://ecommerce-backend-api-be95.onrender.com/api/v1/products ->> get All Products (Get Request)

8. https://ecommerce-backend-api-be95.onrender.com/api/v1/admin/product/646087e56ff817cc6c75f0fc --> Update Product (Admin Put Request)
   input:- product object

9. https://ecommerce-backend-api-be95.onrender.com/api/v1/admin/product/643a6fa48d2b8507046c1484 --> Delete Product (Admin Delete Request)

10. https://ecommerce-backend-api-be95.onrender.com/api/v1/product/64425e5415c9de8e04ac1dd2 --> get Product Details (Get Request)

11. https://ecommerce-backend-api-be95.onrender.com/api/v1/reviews --> get all reviews (Get Request)

12. https://ecommerce-backend-api-be95.onrender.com/api/v1/reviews?reviewId=<review Id>&productId=<product Id> --> delete a review (Delete Request)

13. https://ecommerce-backend-api-be95.onrender.com/api/v1/review --> create or update Review (put Request)
    input:-
    {
    "productId":"643a717ab8fa0b8dd3804396",
    "comment":"keep working",
    "rating":4
    }
14. https://ecommerce-backend-api-be95.onrender.com/api/v1/admin/user/<user Id> ---> delete a user (Admin delete Request)

15. https://ecommerce-backend-api-be95.onrender.com/api/v1/me --> get user Details (Get Request)

16. https://ecommerce-backend-api-be95.onrender.com/api/v1/password/update --> Update Password (put Request)
    input:-
    {
    "oldPassword":"00000000",
    "newPassword":"12345678",
    "confirmNewPassword":"12345678"
    }

17. https://ecommerce-backend-api-be95.onrender.com/api/v1/me/update ---> Update Profile (put Request)
    input:- {user object}

18. https://ecommerce-backend-api-be95.onrender.com/api/v1/admin/users --> get all users (Admin get Request)

19. https://ecommerce-backend-api-be95.onrender.com/api/v1/admin/user/<user Id> --> get single user Details (Admin get Request)

20. https://ecommerce-backend-api-be95.onrender.com/api/v1/order/new --> new Order (Post Request)
    input:-
    {
    "itemsPrice":500,
    "taxPrice":150,
    "shippingPrice":40,
    "totalPrice":690,
    "shippingInfo":{
    "address": "158 Rajput",
    "city": "motihari",
    "state":"Bihar",
    "country": "India",
    "pinCode": 845432,
    "phoneNo": 1234567890
    },
    "orderItems": [
    {
    "product": "64425e5415c9de8e04ac1dd2",
    "name":"Mobile",
    "price": 15000,
    "quantity":3,
    "image": "simple Image"
    }
    ],
    "paymentInfo": {
    "id": "sample payment info",
    "status": "success"
    }
    }

21. https://ecommerce-backend-api-be95.onrender.com/api/v1/orders/me --> My Order (get Request)

22. https://ecommerce-backend-api-be95.onrender.com/api/v1/order/<Order Id> --> get Order details (get Request)

23. https://ecommerce-backend-api-be95.onrender.com/api/v1/admin/orders --> get all user (admin get request)

24. https://ecommerce-backend-api-be95.onrender.com/api/v1/admin/order/<order id> --> Update Order Status (put request)

25. https://ecommerce-backend-api-be95.onrender.com/api/v1/admin/order/<order Id> --> Delete a order (Admin Delete Request)
