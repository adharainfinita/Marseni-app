-- CREATE DATABASE IF NOT EXISTS uService_pg
SELECT 'CREATE DATABASE marseniusers'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'marseniusers')\gexec  