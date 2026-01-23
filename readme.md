# BMI-App

A small, responsive web app that calculates Body Mass Index (BMI) from a user's height and weight. Built with plain HTML, CSS and JavaScript — lightweight and easy to run locally or host on GitHub Pages.

## Features
- Calculate BMI using metric (kg / cm) or imperial (lb / in) inputs
- Instant result with BMI value and category (Underweight / Normal / Overweight / Obesity)
- Clear validation and friendly UI
- Responsive layout for mobile and desktop

## Demo
Open `index.html` in your browser or host the repository with GitHub Pages.

## Technologies
- HTML
- CSS
- JavaScript

(Repository language breakdown: CSS ~43%, HTML ~35%, JavaScript ~21%)

## Quick start

1. Clone the repo
```bash
git clone https://github.com/jaghori-dev/BMI-App.git
cd BMI-App
```

2. Open locally
- Option A: Double-click `index.html` or open it in your browser.
- Option B: Serve with a simple static server:
```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

3. Enter your height and weight, choose units (if applicable), and click Calculate.

## How it works
- Metric: BMI = weight (kg) / (height (m))^2
- Imperial: BMI = 703 * weight (lb) / (height (in))^2

BMI categories (standard):
- Underweight: BMI < 18.5
- Normal weight: 18.5 ≤ BMI < 25
- Overweight: 25 ≤ BMI < 30
- Obesity: BMI ≥ 30

## Project structure (typical)
- index.html — main UI
- css/ or styles.css — styling
- js/ or script.js — calculation and interaction logic
- assets/ — images or icons (optional)

Adjust paths if your repository organizes files differently.

## Accessibility & Validation
- Include descriptive labels for form inputs
- Validate numeric input and show helpful errors
- Ensure buttons and color choices meet contrast/accessibility guidelines

## Deployment
- GitHub Pages: enable Pages in repo settings and set branch to `main` (or the branch you use).
- Any static host (Netlify, Vercel, Surge) works as well.

## Contributing
Contributions welcome! Suggestions, bug fixes, and improvements (better validation, unit toggles, animations, tests) are appreciated. Open an issue or submit a PR with a brief description of your change.

When contributing:
- Fork the repo
- Create a feature branch: `git checkout -b feat/my-change`
- Commit, push, and open a pull request

## License
This README uses a permissive example license. If you want to add a license to this repository, consider MIT:

```
MIT License
[...your license text...]
```

Replace or update with the project's actual license as needed.

## Contact
Maintainer: jaghori-dev (GitHub)
Feel free to open issues for questions or feature requests.