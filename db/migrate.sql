-- sql code, sqlite db

CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS reports (
    week INT NOT NULL,
    report VARCHAR(3000) NOT NULL
);

-- INSERT INTO reports
--     (week, report)
-- VALUES
--     (1, "Redovisningstext kmom01"),
--     (2, "Redovisningstext kmom02"),
--     (3, "Redovisningstext kmom03"),
--     (4, "Redovisningstext kmom04"),
--     (5, "Redovisningstext kmom05"),
--     (6, "Redovisningstext kmom06"),
--     (10, "Redovisningstext kmom07-10")
-- ;
