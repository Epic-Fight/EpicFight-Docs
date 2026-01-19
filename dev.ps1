# 1. Define the full list of exclusions as a single string
# The `n (backtick n) creates the new lines that i18n expects
$exclusions = "/includes/`n**/*.pt.md`n**/*.es.md`n**/*.ru.md`n**/*.uk.md`n**/*.pl.md`n**/*.ja.md`n**/*.zh.md`n**/*.ko.md`n**/*.hr.md"

# 2. Set the environment variables
$env:CI = "false"
$env:LANG_EXCLUDE = $exclusions

Write-Host ">>> Starting Fast Dev Mode..." -ForegroundColor Green

# 3. Run the server
mkdocs serve --dirtyreload