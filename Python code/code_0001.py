# Get HTML of webpage
import requests as re

response = re.get("https://example.com")

html = response.text

print(html)
