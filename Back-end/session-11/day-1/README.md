## Docker Container
```
docker container run -d -p 27018:27017 --name mongo-aula11 mongo:5
docker container exec -it mongo-aula11 bash

```

## Docker Compose
```
docker compose up mongo
docker container exec -it mongo-db bash
```

## mongoexport / mongoimport
```
mongoexport --jsonArray --db aula-filter-operators --type=json --collection itens --out data/db/file/produtos.json

mongoimport --jsonArray --db aula-search-operator --collection itens file-json/produtos.json
```