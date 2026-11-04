CREATE TABLE "members" (
	"id" serial PRIMARY KEY,
	"email" text NOT NULL UNIQUE,
	"first_name" text DEFAULT '' NOT NULL,
	"last_name" text DEFAULT '' NOT NULL,
	"phone" text DEFAULT '' NOT NULL,
	"country" text DEFAULT '' NOT NULL,
	"city" text DEFAULT '' NOT NULL,
	"age_group" text DEFAULT '' NOT NULL,
	"interest" text DEFAULT '' NOT NULL,
	"experience" text DEFAULT '' NOT NULL,
	"goal" text DEFAULT '' NOT NULL,
	"source" text DEFAULT '' NOT NULL,
	"agree_updates" boolean DEFAULT true NOT NULL,
	"payment_status" text DEFAULT 'PENDING' NOT NULL,
	"access_status" text DEFAULT 'RESERVED' NOT NULL,
	"amount_paid" double precision DEFAULT 0 NOT NULL,
	"reference_number" text DEFAULT '' NOT NULL,
	"password_hash" text DEFAULT '' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "waitlist" (
	"id" serial PRIMARY KEY,
	"email" text NOT NULL UNIQUE,
	"first_name" text DEFAULT '' NOT NULL,
	"interest" text DEFAULT '' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
