FROM mysql

COPY src/data/database_crud_nodejs.sql /docker-entrypoint-initdb.d/