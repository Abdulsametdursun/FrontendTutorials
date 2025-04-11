General Information

    All data sent must be in JSON format. Therefore, include content-type: application/json;charset=UTF-8 in the HTTP headers when making a request.

    For multilingual support, add lang=fr-FR to the URL. Example: https://api.adoptez1artisan.com/auth/login?lang=fr-FR. This will return data or error messages in French. Supported languages: en-US, fr-FR.

    Standard JSON format:

        Success response: {"data": {[detailed-data-here]} ,"status": "success"}

        data holds the response for the requested resource.

        status can be either success or error.

        If error is returned, the format changes — data will be absent, and errorMessage will contain an error message based on the selected language. Optionally, exceptionType may also be present for frontend error handling. Example error response:

{
"status": "error",
"errorMessage": "User not authenticated or your account suspended.",
"exceptionType": "UserNotFoundException"
}

Login

POST https://api.adoptez1artisan.com/auth/login

{
"email": "admin@system.com",
"password": "123123"
}

Response:

{
"data": {
"token": "64f625fc7a5467ee776c3ca82ca6e9a3",
"userData": {
"id": 1,
"role_id": 1,
"role_key": "admin",
"lang_code": "en-US",
"firstName": "Admin",
"lastName": "System",
"email": "admin@system.com",
...
}
},
"status": "success"
}

Use the token for Bearer auth in the header of future requests:
authorization: Bearer 64f625fc7a5467ee776c3ca82ca6e9a3
Fetching Application Info

Settings, user data, permissions, panel menu, etc., are retrieved from this endpoint:

GET https://api.adoptez1artisan.com/user/appData

Response:
Open JSON File
Fetching Defined Language Translations

GET https://api.adoptez1artisan.com/languages

Response: (shortened due to length)
Fetching Main Categories

GET https://api.adoptez1artisan.com/public/categories/listMainCategories

Response: Returns an array of main categories.
Fetching Category Details

GET https://api.adoptez1artisan.com/public/categories/getBySlug/[SLUG]

Response:
Open JSON File
Fetching Blogs

GET https://api.adoptez1artisan.com/public/blogs/list?status=active&length=6

Response: Returns an array of blog entries.
Fetching Latest Posted Jobs

GET https://api.adoptez1artisan.com/public/clientProjects/latestJobs?status=pending

Response:
Open JSON File
Searching for Jobs

GET https://api.adoptez1artisan.com/public/clientProjects/searchProjects?page=1&zipCode=75001&categoryId=1&search=

Parameters:

    page: Start from 1

    zipCode: City postal code

    categoryId: Main category ID

    search: Keyword(s)

Response:
Open JSON File
My Bids

GET https://api.adoptez1artisan.com/public/clientProjects/myBids?page=1&zipCode=75001&categoryId=1&search=

Response:
Open JSON File
Fetching Service Details

GET https://api.adoptez1artisan.com/public/services/getBySlug/[SLUG]

Response:
Open JSON File
Socket.io Communication

WebSocket URL: wss://ws.adoptez1artisan.com/socket.io/
Client Event:

    Name: receiveMessage

    Data Format:

{
"user_id": message.user_id,
"uuid": message.uuid,
"message": message.message,
...
}

Server Event:

    Name: sendMessage

    Data Format:

{
"uuid": uuid,
"room_id": self.roomId,
"message": message,
"media_url": null
}

Chat Workflow:

    Chat list:
    GET https://api.adoptez1artisan.com/chat/getMyRooms?page=1

    Latest messages from room:
    GET https://api.adoptez1artisan.com/chat/getMessages?roomId=1&lastMessageId=0

Client emits sendMessage, server stores it via chat API, and sends the message to appropriate sockets. receiveMessage listens for real-time delivery.
Uploading Images

POST https://api.adoptez1artisan.com/uploadManager/upload

    Header: content-type: multipart/form-data

    Form key: file0

Response:

{
"data": {
"urls": [
"https://api.adoptez1artisan.com/storage/uploads/ca6c31d176db33f2d86c781d35fc292599e0b790.png"
]
},
"status": "success"
}

Submitting a Project to a Service

POST https://api.adoptez1artisan.com/client/clientProjects/save

Request:

{
"slug": "SERVIS_SLUG_DEGERI",
"zipCode": "75001",
"steps": {
...
}
}

The steps object is dynamic per service.
Applying to an Existing Project

POST https://api.adoptez1artisan.com/user/makeBid/[project_id]

Request:

{
"bid": "Your bid text here"
}

Project Server Setup

There are four projects: API, Admin Panel, Website, and WebSocket. Each needs its own subdomain:

    Website: adoptez1artisan.com

    API: api.adoptez1artisan.com

    Admin: admin.adoptez1artisan.com

    WebSocket: ws.adoptez1artisan.com

General Notes:

On ISPConfig-based servers, use:

cd ../../web

Update projects with:

cd Adoptez1Artisan
git pull origin master

API Setup:

git clone https://github.com/mehmetcanseyhan/Adoptez1Artisan.git
cd Adoptez1Artisan/adoptez-backend
composer install
cp .env.example .env
nano .env
php artisan migrate
php artisan db:seed

Link public folder to public_html.
WebSocket Setup:

Inside WebsocketServer:

cp .env.example .env
npm install
npm run forever-live

Configure Apache reverse proxy:

ProxyPass / http://127.0.0.1:35000/
RewriteEngine on
...

Frontend Setup:

Similar to API. Use composer, update .env, link public.
Admin Panel Setup:

git clone https://github.com/mehmetcanseyhan/Adoptez1Artisan.git
cd Adoptez1Artisan/adoptez-admin-frontend
yarn
cp .env.example .env
nano .env
yarn deploy

Link build to public_html.
