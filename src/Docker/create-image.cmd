docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test12noda2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test12noda2/app ../..
