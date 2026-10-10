
# Production-Ready Capstone — InternConnect

## Project Overview

InternConnect is a responsive internship portal built with HTML, CSS, and JavaScript. It allows users to explore internship opportunities, search and filter listings, and submit a sample application.

This project demonstrates frontend development, form validation, error handling, logging, responsive design, accessibility, and basic quality assurance.

## Features

- Responsive interface for desktop, tablet, and mobile.
- Internship cards rendered using JavaScript.
- Search by internship title, company, or domain.
- Filter internships by domain.
- Clear filters and display an empty state.
- Application form with required-field validation.
- Application records saved in browser local storage.
- Basic interface health check.
- Console logging for important actions and errors.
- Keyboard-friendly controls and accessible form labels.
- Safe DOM rendering of internship and user-entered text.
- No external libraries, frameworks, databases, or installations.

## Technologies

- HTML5
- CSS3
- JavaScript
- Browser Local Storage
- GitHub Pages

## Project Structure

production-ready-capstone/
    index.html
    style.css
    script.js
    README.md

## How to Run

1. Open the project folder in Visual Studio Code.
2. Make sure all four files are in the same folder.
3. Open `index.html` in a web browser.
4. Search and filter internship listings.
5. Select an internship and test the application form.

No npm install or database setup is required.

## Logging and Health Checks

The JavaScript code uses console logging to record search actions, filter changes, internship selections, application submissions, and errors.

The portal health indicator checks whether essential page elements are available and whether the interface has initialized.

These are frontend checks, not server or API health checks.

## Validation and Security

- HTML required fields and input constraints provide basic client-side validation.
- JavaScript performs additional checks before saving an application.
- DOM text is inserted using `textContent` to reduce HTML injection risks.
- Application records are stored locally in the browser.
- No passwords or authentication details are collected.

Important limitation: client-side validation is not a replacement for server-side validation. A production application needs a secure backend, server-side validation, authentication where required, rate limiting, secure data storage, and appropriate security headers.

## Quality Assurance Checklist

### Functional tests

- [ ] All internship cards load.
- [ ] Searching by title returns matching results.
- [ ] Searching by company returns matching results.
- [ ] Domain filtering works.
- [ ] Clear filters restores all records.
- [ ] No-results message appears for unmatched searches.
- [ ] Invalid form entries are rejected.
- [ ] Valid sample applications are saved locally.
- [ ] Application storage errors display a message.

### Responsive tests

- [ ] Test on desktop.
- [ ] Test on tablet-sized screens.
- [ ] Test on a mobile-sized screen.
- [ ] Check that form fields and buttons fit the screen.

### Accessibility tests

- [ ] Navigate using the keyboard.
- [ ] Check visible focus indicators.
- [ ] Confirm every form field has a label.
- [ ] Confirm status messages are announced appropriately.

### Performance and regression tests

- [ ] Confirm there are no missing CSS or JavaScript files.
- [ ] Check the browser console for unexpected errors.
- [ ] Repeat search and filter tests after changing the layout.
- [ ] Submit a sample application after filtering the listings.

## Deployment

1. Create a public GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Commit the files.
4. Open Settings → Pages.
5. Select Deploy from a branch.
6. Select the `main` branch and `/ (root)`.
7. Click Save and wait for deployment.
8. Open the published website and test its features.

## Limitations and Future Improvements

This is a frontend demonstration, not a complete production backend. Applications are stored in the current browser only and are not sent to a company or shared with other users.

Future improvements could include a real API, secure server-side validation, database persistence, authentication, automated tests, monitoring, and deployment checks.

## Author

Nazmeen