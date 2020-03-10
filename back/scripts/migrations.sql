CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL,
    CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId")
);

CREATE SCHEMA IF NOT EXISTS business;

CREATE SCHEMA IF NOT EXISTS general;

CREATE SEQUENCE business.order_campaigns START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE SEQUENCE business.order_companies START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE SEQUENCE business.order_company_users START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE SEQUENCE business.order_personas START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE SEQUENCE business.order_questions START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE SEQUENCE business.order_survey_responses START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE SEQUENCE business.order_surveys START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE SEQUENCE business.order_type_questions START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE SEQUENCE general.order_roles START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE SEQUENCE general.order_users START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE TABLE business.type_questions (
    id_type_question numeric NOT NULL DEFAULT (nextval('business.order_type_questions'::regclass)),
    title text NULL,
    type_object text NULL,
    answers_default json NULL,
    CONSTRAINT "PK_type_questions" PRIMARY KEY (id_type_question)
);

CREATE TABLE general.roles (
    id_role numeric NOT NULL DEFAULT (nextval('general.order_roles'::regclass)),
    title text NOT NULL,
    description text NOT NULL,
    administrator boolean NOT NULL,
    permissions json NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    CONSTRAINT "PK_roles" PRIMARY KEY (id_role)
);

CREATE TABLE general.users (
    id_user numeric NOT NULL DEFAULT (nextval('general.order_users'::regclass)),
    full_name text NOT NULL,
    email text NOT NULL,
    password text NULL,
    last_acess timestamp without time zone NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    type_user integer NULL,
    CONSTRAINT "PK_users" PRIMARY KEY (id_user)
);

CREATE TABLE business.companies (
    id_company numeric NOT NULL DEFAULT (nextval('business.order_companies'::regclass)),
    full_name text NOT NULL,
    site text NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    fk_user_create numeric NOT NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    CONSTRAINT "PK_companies" PRIMARY KEY (id_company),
    CONSTRAINT "FK_companies_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE CASCADE
);

CREATE TABLE business.campaigns (
    id_campaign numeric NOT NULL DEFAULT (nextval('business.order_campaigns'::regclass)),
    title text NULL,
    description text NULL,
    date_start timestamp without time zone NULL,
    date_finish timestamp without time zone NULL,
    active boolean NULL,
    fk_company numeric NOT NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    fk_user_create numeric NOT NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    CONSTRAINT "PK_campaigns" PRIMARY KEY (id_campaign),
    CONSTRAINT "FK_campaigns_companies_fk_company" FOREIGN KEY (fk_company) REFERENCES business.companies (id_company) ON DELETE CASCADE,
    CONSTRAINT "FK_campaigns_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE CASCADE
);

CREATE TABLE business.company_users (
    id_company_user numeric NOT NULL DEFAULT (nextval('business.order_company_users'::regclass)),
    fk_company numeric NOT NULL,
    fk_user numeric NOT NULL,
    fk_role numeric NOT NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    fk_user_create numeric NOT NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    CONSTRAINT "PK_company_users" PRIMARY KEY (id_company_user),
    CONSTRAINT "FK_company_users_companies_fk_company" FOREIGN KEY (fk_company) REFERENCES business.companies (id_company) ON DELETE CASCADE,
    CONSTRAINT "FK_company_users_roles_fk_role" FOREIGN KEY (fk_role) REFERENCES general.roles (id_role) ON DELETE CASCADE,
    CONSTRAINT "FK_company_users_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE CASCADE
);

CREATE TABLE business.personas (
    id_persona numeric NOT NULL DEFAULT (nextval('business.order_personas'::regclass)),
    fk_company numeric NOT NULL,
    name text NULL,
    age integer NULL,
    where_live text NULL,
    where_work text NULL,
    what_position text NULL,
    education_personality text NULL,
    url_photo text NULL,
    finishedat timestamp without time zone NULL,
    what_values text NULL,
    do_daily text NULL,
    what_goals text NULL,
    consume_daily text NULL,
    consume_brands text NULL,
    what_dream_do text NULL,
    what_pain text NULL,
    business_impact text NULL,
    fk_parent numeric NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    fk_user_create numeric NOT NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    CONSTRAINT "PK_personas" PRIMARY KEY (id_persona),
    CONSTRAINT "FK_personas_companies_fk_company" FOREIGN KEY (fk_company) REFERENCES business.companies (id_company) ON DELETE CASCADE,
    CONSTRAINT "FK_personas_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE CASCADE
);

CREATE TABLE business.surveys (
    id_survey numeric NOT NULL DEFAULT (nextval('business.order_surveys'::regclass)),
    title text NOT NULL,
    description text NULL,
    thankyou_message text NOT NULL,
    url_survey text NULL,
    language text NULL,
    active boolean NOT NULL,
    fk_company numeric NOT NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    fk_user_create numeric NOT NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    CONSTRAINT "PK_surveys" PRIMARY KEY (id_survey),
    CONSTRAINT "FK_surveys_companies_fk_company" FOREIGN KEY (fk_company) REFERENCES business.companies (id_company) ON DELETE CASCADE,
    CONSTRAINT "FK_surveys_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE CASCADE
);

CREATE TABLE business.questions (
    id_question numeric NOT NULL DEFAULT (nextval('business.order_questions'::regclass)),
    title text NULL,
    low_score_label text NULL,
    high_score_label text NULL,
    visible_score_label boolean NOT NULL,
    required boolean NOT NULL,
    randonize boolean NOT NULL,
    fk_survey numeric NOT NULL,
    fk_type_question numeric NOT NULL,
    sequence integer NOT NULL,
    answers json NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    fk_user_create numeric NOT NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    CONSTRAINT "PK_questions" PRIMARY KEY (id_question),
    CONSTRAINT "FK_questions_surveys_fk_survey" FOREIGN KEY (fk_survey) REFERENCES business.surveys (id_survey) ON DELETE CASCADE,
    CONSTRAINT "FK_questions_type_questions_fk_type_question" FOREIGN KEY (fk_type_question) REFERENCES business.type_questions (id_type_question) ON DELETE CASCADE,
    CONSTRAINT "FK_questions_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE CASCADE
);

CREATE TABLE business.survey_responses (
    id_survey_response numeric NOT NULL DEFAULT (nextval('business.order_survey_responses'::regclass)),
    fk_survey numeric NOT NULL,
    participant_key text NULL,
    name_key text NULL,
    responses json NULL,
    nps_value integer NOT NULL,
    nps_feedback text NULL,
    sendedat timestamp without time zone NULL,
    respondedat timestamp without time zone NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NOT NULL,
    deletedat timestamp without time zone NULL,
    fk_user_create numeric NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    CONSTRAINT "PK_survey_responses" PRIMARY KEY (id_survey_response),
    CONSTRAINT "FK_survey_responses_surveys_fk_survey" FOREIGN KEY (fk_survey) REFERENCES business.surveys (id_survey) ON DELETE CASCADE,
    CONSTRAINT "FK_survey_responses_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE RESTRICT
);

CREATE INDEX "IX_campaigns_fk_company" ON business.campaigns (fk_company);

CREATE INDEX "IX_campaigns_fk_user_create" ON business.campaigns (fk_user_create);

CREATE INDEX "IX_companies_fk_user_create" ON business.companies (fk_user_create);

CREATE INDEX "IX_company_users_fk_company" ON business.company_users (fk_company);

CREATE INDEX "IX_company_users_fk_role" ON business.company_users (fk_role);

CREATE INDEX "IX_company_users_fk_user_create" ON business.company_users (fk_user_create);

CREATE INDEX "IX_personas_fk_company" ON business.personas (fk_company);

CREATE INDEX "IX_personas_fk_user_create" ON business.personas (fk_user_create);

CREATE INDEX "IX_questions_fk_survey" ON business.questions (fk_survey);

CREATE INDEX "IX_questions_fk_type_question" ON business.questions (fk_type_question);

CREATE INDEX "IX_questions_fk_user_create" ON business.questions (fk_user_create);

CREATE INDEX "IX_survey_responses_fk_survey" ON business.survey_responses (fk_survey);

CREATE INDEX "IX_survey_responses_fk_user_create" ON business.survey_responses (fk_user_create);

CREATE INDEX "IX_surveys_fk_company" ON business.surveys (fk_company);

CREATE INDEX "IX_surveys_fk_user_create" ON business.surveys (fk_user_create);

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20190704020839_Csx', '2.2.6-servicing-10079');

ALTER TABLE general.users ADD company_default integer NULL;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20190724041512_company_default_closed_loop', '2.2.6-servicing-10079');

ALTER TABLE business.survey_responses ADD closed_loop boolean NOT NULL DEFAULT FALSE;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20190724042602_closed_loop', '2.2.6-servicing-10079');

ALTER TABLE general.users DROP COLUMN company_default;

ALTER TABLE general.users ADD fk_company_default numeric NOT NULL DEFAULT 0.0;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20190724043152_fk_company_default', '2.2.6-servicing-10079');

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20190725010621_fk_company_default_foreign_key', '2.2.6-servicing-10079');

CREATE SEQUENCE business.order_survey_audiences START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

ALTER TABLE business.surveys ADD message_email text NULL;

ALTER TABLE business.surveys ADD message_sms text NULL;

ALTER TABLE business.surveys ADD message_whatsapp text NULL;

CREATE TABLE business.survey_audiences (
    id_survey_audience numeric NOT NULL DEFAULT (nextval('business.order_survey_audiences'::regclass)),
    fk_survey numeric NOT NULL,
    participant_key text NULL,
    channel integer NOT NULL,
    message text NULL,
    status_message integer NOT NULL,
    sendedat timestamp without time zone NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    fk_user_create numeric NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    CONSTRAINT "PK_survey_audiences" PRIMARY KEY (id_survey_audience),
    CONSTRAINT "FK_survey_audiences_surveys_fk_survey" FOREIGN KEY (fk_survey) REFERENCES business.surveys (id_survey) ON DELETE CASCADE,
    CONSTRAINT "FK_survey_audiences_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE RESTRICT
);

CREATE INDEX "IX_survey_audiences_fk_survey" ON business.survey_audiences (fk_survey);

CREATE INDEX "IX_survey_audiences_fk_user_create" ON business.survey_audiences (fk_user_create);

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20190915212222_IntegrationChatbotMaker_WhatsApp', '2.2.6-servicing-10079');

ALTER TABLE business.survey_audiences ADD answeredat timestamp without time zone NULL;

ALTER TABLE business.survey_audiences ADD openedat timestamp without time zone NULL;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20190919000103_add_opened_answered_dates', '2.2.6-servicing-10079');

CREATE SEQUENCE business.order_contacts START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

ALTER TABLE business.survey_responses ADD tags json NULL;

ALTER TABLE business.survey_audiences ADD tags json NULL;

CREATE TABLE business.contacts (
    id_contact numeric NOT NULL DEFAULT (nextval('business.order_contacts'::regclass)),
    fk_company numeric NOT NULL,
    first_name text NOT NULL,
    last_name text NULL,
    logo_url text NULL,
    type integer NOT NULL,
    register_number text NULL,
    phone text NULL,
    phone_extra text NULL,
    email text NULL,
    website text NULL,
    code_contact_client text NULL,
    segment text NULL,
    region text NULL,
    state text NULL,
    city text NULL,
    neighborhood text NULL,
    address text NULL,
    latitude text NULL,
    longitude text NULL,
    start_contact timestamp without time zone NULL,
    end_contact timestamp without time zone NULL,
    profile_linkedin text NULL,
    profile_facebook text NULL,
    profile_twitter text NULL,
    profile_instagram text NULL,
    tags json NULL,
    active boolean NOT NULL,
    fk_user_create numeric NOT NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    CONSTRAINT "PK_contacts" PRIMARY KEY (id_contact),
    CONSTRAINT "FK_contacts_companies_fk_company" FOREIGN KEY (fk_company) REFERENCES business.companies (id_company) ON DELETE CASCADE,
    CONSTRAINT "FK_contacts_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE CASCADE
);

CREATE INDEX "IX_survey_responses_participant_key_name_key" ON business.survey_responses (participant_key, name_key);

CREATE INDEX "IX_survey_audiences_participant_key_channel" ON business.survey_audiences (participant_key, channel);

CREATE INDEX "IX_contacts_code_contact_client" ON business.contacts (code_contact_client);

CREATE INDEX "IX_contacts_email" ON business.contacts (email);

CREATE INDEX "IX_contacts_fk_company" ON business.contacts (fk_company);

CREATE INDEX "IX_contacts_fk_user_create" ON business.contacts (fk_user_create);

CREATE INDEX "IX_contacts_phone" ON business.contacts (phone);

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20191012090305_contacts_contract_index_participant_key_tags', '2.2.6-servicing-10079');

CREATE SEQUENCE business.order_contracts START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

ALTER TABLE business.contacts ALTER COLUMN id_contact TYPE numeric;
ALTER TABLE business.contacts ALTER COLUMN id_contact SET NOT NULL;
ALTER TABLE business.contacts ALTER COLUMN id_contact SET DEFAULT (nextval('business.order_contacts'::regclass));

ALTER TABLE business.contacts ADD fk_customer numeric NULL;

CREATE TABLE business.contracts (
    id_contract numeric NOT NULL DEFAULT (nextval('business.order_contracts'::regclass)),
    fk_company numeric NOT NULL,
    fk_customer numeric NOT NULL,
    title text NOT NULL,
    type text NULL,
    category text NULL,
    total numeric NOT NULL,
    payment_period text NULL,
    payment_period_days integer NOT NULL,
    start_contract timestamp without time zone NULL,
    end_contract timestamp without time zone NULL,
    code_contract_client text NULL,
    code_customer_client text NULL,
    tags json NULL,
    active boolean NOT NULL,
    fk_user_create numeric NOT NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    CONSTRAINT "PK_contracts" PRIMARY KEY (id_contract),
    CONSTRAINT "FK_contracts_companies_fk_company" FOREIGN KEY (fk_company) REFERENCES business.companies (id_company) ON DELETE CASCADE,
    CONSTRAINT "FK_contracts_contacts_fk_customer" FOREIGN KEY (fk_customer) REFERENCES business.contacts (id_contact) ON DELETE CASCADE,
    CONSTRAINT "FK_contracts_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE CASCADE
);

CREATE INDEX "IX_contacts_fk_customer" ON business.contacts (fk_customer);

CREATE INDEX "IX_contracts_code_contract_client" ON business.contracts (code_contract_client);

CREATE INDEX "IX_contracts_code_customer_client" ON business.contracts (code_customer_client);

CREATE INDEX "IX_contracts_fk_company" ON business.contracts (fk_company);

CREATE INDEX "IX_contracts_fk_customer" ON business.contracts (fk_customer);

CREATE INDEX "IX_contracts_fk_user_create" ON business.contracts (fk_user_create);

ALTER TABLE business.contacts ADD CONSTRAINT "FK_contacts_contracts_fk_customer" FOREIGN KEY (fk_customer) REFERENCES business.contracts (id_contract) ON DELETE RESTRICT;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20191012103427_contract', '2.2.6-servicing-10079');

ALTER TABLE business.survey_audiences ADD name text NULL;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20191012123905_survey_audience_name', '2.2.6-servicing-10079');

ALTER TABLE business.contacts ADD country text NULL;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20191012124827_contact_country', '2.2.6-servicing-10079');

ALTER TABLE business.survey_responses ALTER COLUMN tags TYPE jsonb;
ALTER TABLE business.survey_responses ALTER COLUMN tags DROP NOT NULL;
ALTER TABLE business.survey_responses ALTER COLUMN tags DROP DEFAULT;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20191013102303_chage_survey_response_tags_jsonb', '2.2.6-servicing-10079');

ALTER TABLE business.survey_responses ADD name text NULL;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20191026234214_Add-name--Survey_response', '2.2.6-servicing-10079');

CREATE SEQUENCE general.order_actions START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

CREATE TABLE general.actions (
    id_action numeric NOT NULL DEFAULT (nextval('general.order_actions'::regclass)),
    type text NOT NULL,
    message text NULL,
    createdat timestamp without time zone NOT NULL,
    fk_user_create numeric NOT NULL,
    fk_company numeric NOT NULL,
    CONSTRAINT "PK_actions" PRIMARY KEY (id_action),
    CONSTRAINT "FK_actions_companies_fk_company" FOREIGN KEY (fk_company) REFERENCES business.companies (id_company) ON DELETE CASCADE,
    CONSTRAINT "FK_actions_users_fk_user_create" FOREIGN KEY (fk_user_create) REFERENCES general.users (id_user) ON DELETE CASCADE
);

CREATE INDEX "IX_actions_fk_company" ON general.actions (fk_company);

CREATE INDEX "IX_actions_fk_user_create" ON general.actions (fk_user_create);

CREATE INDEX "IX_actions_type" ON general.actions (type);

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20191105191152_actions', '2.2.6-servicing-10079');

CREATE SEQUENCE business.order_departments START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE NO CYCLE;

ALTER TABLE general.users ADD fk_department numeric NULL;

CREATE TABLE business.department (
    id_department numeric NOT NULL DEFAULT (nextval('business.order_departments'::regclass)),
    name text NOT NULL,
    actived boolean NOT NULL,
    fk_company numeric NOT NULL,
    createdat timestamp without time zone NOT NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    fk_user_create numeric NOT NULL,
    fk_user_update numeric NULL,
    fk_user_delete numeric NULL,
    "Companyid_company" numeric NULL,
    CONSTRAINT "PK_department" PRIMARY KEY (id_department),
    CONSTRAINT "FK_department_companies_Companyid_company" FOREIGN KEY ("Companyid_company") REFERENCES business.companies (id_company) ON DELETE RESTRICT
);

CREATE INDEX "IX_users_fk_department" ON general.users (fk_department);

CREATE INDEX "IX_department_Companyid_company" ON business.department ("Companyid_company");

ALTER TABLE general.users ADD CONSTRAINT "FK_users_department_fk_department" FOREIGN KEY (fk_department) REFERENCES business.department (id_department) ON DELETE SET NULL;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20191127022554_departament-null', '2.2.6-servicing-10079');

