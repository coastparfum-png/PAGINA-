CREATE TABLE IF NOT EXISTS products (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug           TEXT UNIQUE NOT NULL,
  name           TEXT NOT NULL,
  brand          TEXT NOT NULL,
  size_ml        INTEGER NOT NULL,
  fragrance_type TEXT NOT NULL,
  price_clp      INTEGER NOT NULL,
  gender         TEXT NOT NULL CHECK (gender IN ('female','male','unisex')),
  description    TEXT,
  notes_top      TEXT,
  notes_heart    TEXT,
  notes_base     TEXT,
  image_url      TEXT,
  image_fallback TEXT,
  in_stock       BOOLEAN DEFAULT true,
  featured       BOOLEAN DEFAULT false,
  sort_order     INTEGER DEFAULT 0,
  created_at     TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read_all" ON products FOR SELECT USING (true);
