MODULES  = ./node_modules/.bin
ESLINT = $(MODULES)/eslint
PARCEL  = $(MODULES)/parcel

ENTRY_POINT = index.html
PUBLIC_DIR = public

help:
	@grep -E '^[a-zA-Z\._-]+:.*?#s# .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

bundle: ## bundles source 📦
	$(PARCEL) build $(ENTRY_POINT)

test: ## runs tests, linting 🤓
	$(ESLINT) src/scripts/**/*.js

develop: ## develop source 🎨
	$(PARCEL) $(ENTRY_POINT)

setup: ## sets up project 💼
	npm i && echo "Set up complete 🎉"
