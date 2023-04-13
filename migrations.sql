CREATE TABLE IF NOT EXISTS coffee_destination (
    id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    shop_name VARCHAR(255),
    shop_description TEXT,
    shop_scenery VARCHAR(255),
    shop_type VARCHAR(255),
    shop_budget DECIMAL(10,2),
    shop_logo_url TEXT,
    shop_thumbnail_url TEXT
);

-- type yang ada:
-- TYPE_MODERN, TYPE_ANGKRINGAN, TYPE_WARUNG

-- scenery yang ada:
-- SCENERY_BEACH, SCENERY_URBAN, SCENERY_MOUNTAINS

INSERT INTO coffee_destination
    (shop_name, shop_description, shop_scenery, shop_type, shop_budget)
VALUES
    ('Tegu Kopi', 'Tes Deskripsi Tegu Kopi', 'SCENERY_MOUNTAINS', 'TYPE_MODERN', 50000),
    ('Akasa Kopi', 'Tes Deskripsi Akasa Kopi', 'SCENERY_MOUNTAINS', 'TYPE_MODERN', 70000),
    ('Angkringan Kintamani', 'Tes Deskripsi Warunk Kintamani', 'SCENERY_MOUNTAINS', 'TYPE_ANGKRINGAN', 25000),
    ('Warunk Kintamani', 'Tes Deskripsi Warunk Kintamani', 'SCENERY_MOUNTAINS', 'TYPE_WARUNG', 30000),
    ('Bali Beach Modern', 'Tes Deskripsi Bali Beach Modern', 'SCENERY_BEACH', 'TYPE_MODERN', 30000),
    ('Warunk Samping Jalan', 'Tes Deskripsi Warunk Samping Jalan', 'SCENERY_URBAN', 'TYPE_WARUNG', 10000),
    ('Angkringan Samping Jalan', 'Tes Angkringan samping jalan', 'SCENERY_URBAN', 'TYPE_ANGKRINGAN', 5000),
    ('Warunk Sanur Coffee', 'Tes Warunk Sanur Coffee', 'SCENERY_BEACH', 'TYPE_WARUNG', 10000),
    ('Angkringan Tsunami', 'Tes Angkringan Tsunami', 'SCENERY_BEACH', 'TYPE_ANGKRINGAN', 5000)