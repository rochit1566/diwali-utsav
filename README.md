# Diwali Utsav

A beginner-friendly Diwali festival helper website built with Python Flask, HTML, CSS and JavaScript.

## Run in GitHub Codespaces

1. Open this repository in GitHub Codespaces.
2. Open the Terminal menu and choose New Terminal.
3. Install dependencies:

   ```bash
   python -m pip install -r requirements.txt
   ```

4. Start the website:

   ```bash
   python app.py
   ```

5. Open the **Ports** tab, find port `5000`, and click the browser/globe icon.

The home page is served at `/`. A simple health check is available at `/health`.

## Project files

- `app.py` — Flask application
- `templates/index.html` — website content
- `static/style.css` — website design
- `static/script.js` — interactive tools

The first version keeps checklist and budget data in the browser session only; it does not yet save them to a database.
