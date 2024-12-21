import re
import posixpath

from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.files import File, Files
from mkdocs.structure.pages import Page
from re import Match

def on_page_markdown(
    markdown: str, *, page: Page, config: MkDocsConfig, files: Files
):

    # Replace callback
    def replace(match: Match):
        type, args = match.groups()
        args = args.strip()
        if type == "example":
            return _badge_for_example(args, page, files)

        # Otherwise, raise an error
        raise RuntimeError(f"Unknown shortcode: {type}")

    # Find and replace all external asset URLs in current page
    return re.sub(
        r"<!-- md:(\w+)(.*?) -->",
        replace, markdown, flags = re.I | re.M
    )

# Create badge
def _badge(icon: str, text: str = "", type: str = ""):
    classes = f"mdx-badge mdx-badge--{type}" if type else "mdx-badge"
    return "".join([
        f"<span class=\"{classes}\" style=\"font-size: 0.85em; float: right; margin-left: 0.35em;\">",
        *([f"<span class=\"mdx-badge__icon\" style=\"padding: 4px; background: var(--md-accent-fg-color--transparent); border-radius: 2px;\">{icon}</span>"] if icon else []),
        *([f"<span class=\"mdx-badge__text\" style=\"padding: 4px 6px; box-shadow: 0 0 0 1px inset var(--md-accent-fg-color--transparent); border-radius: 2px;\">{text}</span>"] if text else []),
        f"</span>",
    ])

# Create badge for example
def _badge_for_example(text: str, page: Page, files: Files):
    return "\n".join([
        _badge_for_example_download(text, page, files),
    ])

# Create badge for example download
def _badge_for_example_download(text: str, page: Page, files: Files):
    icon = "material-folder-download"
    href = f"{text}"
    return _badge(
        icon = f"[:{icon}:]({href} 'Download example')",
        text = f"[`.zip`]({href})",
        type = "right"
    )

