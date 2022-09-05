BEGIN;

DROP TABLE IF EXISTS users,
post,
comment CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES post(id) ON DELETE CASCADE,
    content VARCHAR(255) NOT NULL
);

-- for test
insert into
    users(username, first_name, last_name, email, password)
values
    (
        'tareq_hisham',
        'tareq',
        'hisham',
        'tareq@gmail.com',
        '123456789'
    ),
    (
        'naser_wael',
        'naser',
        'wael',
        'naser@gmail.com',
        '0123456789'
    );

insert into
    post(title, content)
values
    ('Sports', 'Cr7 G.O.A.T !!!!!!!!!!!'),
    ('Social Media', 'Twitter Facebook !!!!!!!!!!');

COMMIT;