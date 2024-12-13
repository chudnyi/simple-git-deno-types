all: update process check

update:
	scripts/update.ts

process:
	scripts/process.ts

check:
	scripts/check.ts

format-code:
	deno fmt ./scripts
