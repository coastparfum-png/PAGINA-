-- Coast Parfum — Initial Database Schema
-- Run this in your Supabase SQL editor

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE products (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            text UNIQUE NOT NULL,
  name            text NOT NULL,
  brand           text NOT NULL,
  size_ml         integer NOT NULL,
  fragrance_type  text NOT NULL CHECK (fragrance_type IN ('EDT','EDP','EXP','PARFUM')),
  price_clp       integer NOT NULL,
  gender          text NOT NULL CHECK (gender IN ('female','male','unisex')),
  description     text,
  notes_top       text,
  notes_heart     text,
  notes_base      text,
  gradient_class  text,
  accent_color    text,
  in_stock        boolean NOT NULL DEFAULT true,
  featured        boolean NOT NULL DEFAULT false,
  limited         boolean NOT NULL DEFAULT false,
  sort_order      integer DEFAULT 0,
  created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE contact_requests (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_slug  text REFERENCES products(slug),
  product_name  text,
  source        text DEFAULT 'website',
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "products_public_read" ON products FOR SELECT USING (true);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "contacts_insert" ON contact_requests FOR INSERT WITH CHECK (true);
