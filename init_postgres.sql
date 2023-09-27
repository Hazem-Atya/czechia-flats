CREATE TABLE IF NOT EXISTS flats (
	id serial PRIMARY KEY,
	title VARCHAR ( 255 )  NOT NULL,
	price VARCHAR ( 255 ) NOT NULL,
	locality VARCHAR ( 255 ) NOT NULL,
	image_url VARCHAR ( 255 ) NOT NULL
);