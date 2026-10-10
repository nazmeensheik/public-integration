
"use strict";

/* Internship records for the demo portal */
const internships = [
    {
        id: 1,
        title: "Java Developer Intern",
        company: "Tech Solutions",
        domain: "Java",
        location: "Hyderabad",
        duration: "3 months",
        description: "Practice Java programming and object-oriented concepts."
    },
    {
        id: 2,
        title: "Frontend Developer Intern",
        company: "Web Innovations",
        domain: "Web Development",
        location: "Remote",
        duration: "2 months",
        description: "Build responsive web pages using HTML, CSS and JavaScript."
    },
    {
        id: 3,
        title: "AI and ML Intern",
        company: "Future AI",
        domain: "AI & ML",
        location: "Remote",
        duration: "4 months",
        description: "Explore machine learning algorithms and sample datasets."
    },
    {
        id: 4,
        title: "Data Science Intern",
        company: "Data Insights",
        domain: "Data Science",
        location: "Bengaluru",
        duration: "3 months",
        description: "Learn data analysis and find useful insights from data."
    },
    {
        id: 5,
        title: "Python Developer Intern",
        company: "CodeWorks",
        domain: "Python",
        location: "Hyderabad",
        duration: "3 months",
        description: "Create simple Python programs and practical applications."
    },
    {
        id: 6,
        title: "Web Design Intern",
        company: "Creative Studio",
        domain: "Web Development",
        location: "Remote",
        duration: "3 months",
        description: "Improve website layouts, accessibility and user experience."
    }
];

const list = document.getElementById("internshipList");
const searchInput = document.getElementById("searchInput");
const domainFilter = document.getElementById("domainFilter");
const clearButton = document.getElementById("clearButton");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const applicationForm = document.getElementById("applicationForm");
const selectedInternship = document.getElementById("selectedInternship");
const formMessage = document.getElementById("formMessage");
const healthStatus = document.getElementById("healthStatus");
const footerHealth = document.getElementById("footerHealth");

/* Simple client-side logging */
function logEvent(message, details) {
    console.info("[InternConnect]", message, details || "");
}

/* Fill the application dropdown */
function loadInternshipOptions() {
    internships.forEach(function (internship) {
        const option = document.createElement("option");
        option.value = String(internship.id);
        option.textContent = internship.title + " - " + internship.company;
        selectedInternship.appendChild(option);
    });
}

/* Create a card for each internship */
function createInternshipCard(internship) {
    const card = document.createElement("article");
    card.className = "internship-card";

    const title = document.createElement("h3");
    title.textContent = internship.title;

    const company = document.createElement("p");
    company.className = "company";
    company.textContent = internship.company;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = internship.description;

    const tags = document.createElement("div");
    tags.className = "tags";

    [internship.domain, internship.location, internship.duration]
        .forEach(function (value) {
            const tag = document.createElement("span");
            tag.className = "tag";
            tag.textContent = value;
            tags.appendChild(tag);
        });

    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = "Apply for this internship";
    button.setAttribute(
        "aria-label",
        "Apply for " + internship.title
    );

    button.addEventListener("click", function () {
        selectedInternship.value = String(internship.id);
        document.getElementById("apply").scrollIntoView({
            behavior: "smooth"
        });
        document.getElementById("fullName").focus();
        logEvent("Internship selected", { id: internship.id });
    });

    card.append(title, company, description, tags, button);
    return card;
}

/* Display internships safely */
function renderInternships(records) {
    list.replaceChildren();

    records.forEach(function (internship) {
        list.appendChild(createInternshipCard(internship));
    });

    resultCount.textContent =
        records.length + (records.length === 1
            ? " internship found"
            : " internships found");

    emptyState.hidden = records.length !== 0;
}

/* Search by title/company and filter by domain */
function filterInternships() {
    try {
        const keyword = searchInput.value.trim().toLowerCase();
        const domain = domainFilter.value;

        const results = internships.filter(function (internship) {
            const matchesKeyword =
                internship.title.toLowerCase().includes(keyword) ||
                internship.company.toLowerCase().includes(keyword) ||
                internship.domain.toLowerCase().includes(keyword);

            const matchesDomain =
                domain === "all" || internship.domain === domain;

            return matchesKeyword && matchesDomain;
        });

        renderInternships(results);
        logEvent("Internship search completed", {
            resultCount: results.length
        });
    } catch (error) {
        showError("Unable to display internships. Please refresh the page.");
        console.error("[InternConnect] Rendering error", error);
    }
}

/* Display an accessible error */
function showError(message) {
    list.replaceChildren();
    emptyState.hidden = true;
    resultCount.textContent = "Something went wrong.";
    healthStatus.textContent = "Portal error";
    healthStatus.classList.add("error");
    footerHealth.textContent = "Please refresh the page.";
    console.error("[InternConnect]", message);
}

/* Check that the core page elements are available */
function runHealthCheck() {
    const elementsAvailable = Boolean(
        list &&
        searchInput &&
        domainFilter &&
        applicationForm &&
        selectedInternship
    );

    if (elementsAvailable) {
        healthStatus.textContent = "Portal ready";
        healthStatus.classList.remove("error");
        footerHealth.textContent = "Interface health check passed.";
        logEvent("Health check passed");
    } else {
        healthStatus.textContent = "Portal error";
        healthStatus.classList.add("error");
        footerHealth.textContent = "Some page elements are missing.";
        logEvent("Health check failed");
    }

    return elementsAvailable;
}

/* Search and filter events */
searchInput.addEventListener("input", filterInternships);
domainFilter.addEventListener("change", filterInternships);

clearButton.addEventListener("click", function () {
    searchInput.value = "";
    domainFilter.value = "all";
    filterInternships();
    searchInput.focus();
    logEvent("Filters cleared");
});

/* Save demo applications in this browser only */
applicationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "";
    formMessage.className = "";

    if (!applicationForm.checkValidity()) {
        applicationForm.reportValidity();
        return;
    }

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const motivation = document.getElementById("motivation").value.trim();
    const internshipId = Number(selectedInternship.value);

    const internship = internships.find(function (item) {
        return item.id === internshipId;
    });

    if (
        fullName.length < 2 ||
        fullName.length > 60 ||
        email.length > 100 ||
        motivation.length < 10 ||
        motivation.length > 500 ||
        !internship
    ) {
        formMessage.textContent =
            "Please check your details and select a valid internship.";
        formMessage.className = "error-text";
        return;
    }

    const application = {
        reference: "APP-" + Date.now(),
        applicant: fullName,
        email: email,
        internship: internship.title,
        motivation: motivation,
        submittedAt: new Date().toISOString()
    };

    try {
        const savedApplications = JSON.parse(
            localStorage.getItem("internConnectApplications") || "[]"
        );

        if (!Array.isArray(savedApplications)) {
            throw new Error("Stored application data is invalid.");
        }

        savedApplications.push(application);

        localStorage.setItem(
            "internConnectApplications",
            JSON.stringify(savedApplications)
        );

        formMessage.textContent =
            "Demo application saved in this browser. Reference: " +
            application.reference;
        formMessage.className = "success";

        logEvent("Demo application saved", {
            reference: application.reference,
            internshipId: internship.id
        });

        applicationForm.reset();
    } catch (error) {
        formMessage.textContent =
            "Could not save the demo application. Check browser storage settings.";
        formMessage.className = "error-text";
        console.error("[InternConnect] Application storage error", error);
    }
});

/* Start the application */
try {
    if (runHealthCheck()) {
        loadInternshipOptions();
        renderInternships(internships);
    } else {
        showError("Required page elements are missing.");
    }
} catch (error) {
    showError("The portal could not initialize.");
    console.error("[InternConnect] Initialization error", error);
}