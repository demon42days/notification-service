# notification-service


## 1. 
create a .env file in the root directory of the application
and put in there the next variable:
DB_URI=mongodb+srv://73696d6f6e6b79:GgLQe8zOwq4Kr4tq@cluster0.rzfbbsv.mongodb.net/

i'm using a mongo database to persist the information.

## 2. 
npm install

## 3. 
npm run build

## 4. 
npm start

## 5. 
can set the rules using the endpoint '/rule'
    inside the "rules" object, you can put the name of the rule (news, status, marketing, etc) and set the time in minutes and the limit of mails to send in that time.

for example:

### POST:
curl --location 'http://localhost:3001/rule' \
--header 'Content-Type: application/json' \
--data '{
  "rules": {
    "news": {
        "time": 1440,
        "limit": 1
    },
    "status": {
        "time": 1,
        "limit": 2
    },
    "marketing": {
        "time": 60,
        "limit": 3
    }
  }
}'

### PUT
curl --location --request PUT 'http://localhost:3001/rule' \
--header 'Content-Type: application/json' \
--data '{
  "rules": {
    "news": {
        "time": 1440,
        "limit": 1
    },
    "status": {
        "time": 1,
        "limit": 2
    },
    "marketing": {
        "time": 60,
        "limit": 3
    }
  }
}'

### GET
curl --location 'http://localhost:3001/rule' \
--data ''


## 6. 
Use the next endpoint to send a mail "/notification"

For example:

### POST 

curl --location 'http://localhost:3001/notification' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "news",
    "email": "demianperona@gmail.com"
}'


"type" is the type of notification mail to send
"email" is the recipient's email

