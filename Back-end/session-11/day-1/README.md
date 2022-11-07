## Docker Container
```
docker container run -d -p 8081:27017 --name day-1 mongo:5
docker container exec -it mongo-aula11 bash

```

## Docker Compose
```
docker compose up --build -d
docker container exec -it day-1 bash
```

## mongoexport / mongoimport
```
mongoexport --jsonArray --db ex01-dia01-bios --type=json --collection bios --out file-json/bios.json

mongoimport --jsonArray --db ex01-dia01-bios --collection bios file-json/bios.json
```