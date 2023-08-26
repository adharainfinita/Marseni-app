-- CREATE DATABASE IF NOT EXISTS uService_pg
SELECT 'CREATE DATABASE uService_pg'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'uService_pg')\gexec  