# how to enter into DB Container: 
-> type this command 

```bash 
sudo docker exec -it calculator_db_1 bash

```
-> then type this command to insert into DB

```bash
psql -U postgres -d calculator 
```

-> Then 
```bash
\dt                          -- list all tables
SELECT * FROM calculations;  -- view saved calculations
\q                           -- quit PostgreSQL prompt
```
