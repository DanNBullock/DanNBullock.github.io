/*
The following is a description of the javascript code that will be used to produce a interactive toolbar for the CV page
located at <repository_root>/_pages/cv-html-template_2.html.  This file is stored as <repository_root>/_includes/CV_toolbar.js.

This object will be embedded in a CSS div at the top of the page.

At the top of the cv page, include a tool-bar which dynamically reformats the content of the page, in accordance 
with options toggled in this bar.  Specifically, our first tool-bar element will be a pop out interface which allows the 
user to select from amongst the site.data.curriculumVitae.experience entries in accordance with the 
entry.position.type categorical designation.  Thus, upon interacting with the root 'include/exclude' toggle tool 
in the tool bar, a pop-out-box interface will appear with a check-box-like interface for each unique option 
found across all entires for entry.position.type.  It is important to keep in mind that these entires 
(entry.position.type) can be instantiated as a comma separated list of several categories, such that a given 
entry might be assigned to more than a single categorical designation.  As such, the content of this popout box 
should reflect the unique elements derived from the result of concatenating the entry.position.type field 
contents and subsequently separating the content at commas.  To continue, with respect to the toggle-box 
interface itself, rather than simply being a binary, include/exclude toggle, there will be a check-box like 
interface, except that the options available (demarcated by a red X, a green check,  a blue circle, an orange 
dash, and a default status indicator of a  blank box) will be iteratively rotated through upon user click 
(starting with a default status of blank, proceeding through the x, to the check, to the circle, to the dash, 
and finally returning to the initial blank box status).  Each of these symbolic toggles are associated with one 
of the entry.position.type categories and correspond to a desired display preference for all entries with the 
associated entry.position.type category.   Specifically, the red x results in all entires of the associated 
category being removed from the displayed 'Experience' content entires.  The green check permits the display of 
entires with the associated category.  The blue ciricle requires the display of the associated category of 
entries.  The yellow dash denotes the removal of the associated category of entries from the main 'Experience' 
content element, and the move of this content to a more condensed and abbreviated subjection just below the main 
'experience' element, which will be described in a moment.  Finally, the default blank box imposes no specific 
inclusion or exclusion status for the associated category.  The priority of these is as follows in sequence: 
blue circle (requirement), red x (exclusion), yellow dash (abbreviation), green check (permitted), and blank 
(no specificiaton), such that a status found earlier in this list over-rides a status found later in the list.

Insofar as the abbreviated section is concerned, it is denoted by a subsection header one level lower than the 
one used by 'Experience' and is entitled 'Other experience'.  The content in this section is displayed in a 
table with three columns, the first of which occupies 50% of the container width, while the remaining two each 
occupy equal portions of the remaining half.  The content in these columns correspond to the following 
information from each experience entry:  the role title (entry.position.title), the associated institution 
(entry.institution.name), and the spans of time reflected in entry.duration.

*/

// Define debounce function to delay triggering of the re-render
function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

// Function to render the experience section
function renderExperience() {
    // Select the experience section container
    const experienceSection = document.querySelector('.experience');

    // Trigger re-rendering by forcing browser to recalculate styles
    void experienceSection.offsetWidth;
}

// Function to update the display statuses of experience entries
function updateDisplayStatuses(category, newStateIndex) {
    // Update display status for the corresponding category
    sortedExperience.forEach(function(entryData) {
        if (entryData.position.type === category) {
            entryData.displayStatus = iconStates[newStateIndex];
        }
    });
    // Trigger delayed re-render
    debouncedRenderExperience();
}

// Debounced version of the renderExperience function
const debouncedRenderExperience = debounce(renderExperience, 5000); // 5000 ms = 5 seconds

// Function to handle click events on category icons
function handleIconClick(icon) {
    const category = icon.dataset.category;
    const currentStateIndex = getCurrentStateIndex(icon);
    const newStateIndex = (currentStateIndex + 1) % iconStates.length;
    icon.className = 'icon fas ' + iconStates[newStateIndex];
    // Update display status for the corresponding category
    updateDisplayStatuses(category, newStateIndex);
}

// Function to get the current state index of an icon
function getCurrentStateIndex(icon) {
    const currentState = icon.className.split(' ')[2]; // Third class is the current state
    return iconStates.indexOf(currentState);
}

// Function to create and display the toolbar interface
function createToolbarInterface() {
    // Create and style checkboxes based on unique categories
    allCategories.forEach(function(category) {
        // Create container div for checkbox
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox-container');

        // Create checkbox input
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = category;
        checkbox.dataset.category = category;
        checkbox.classList.add('hidden-checkbox');

        // Create icon placeholder for checkbox
        const icon = document.createElement('i');
        icon.classList.add('icon', 'fas', getCategoryIconClass(category));

        // Append checkbox and icon to container
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(icon);

        // Create label for checkbox
        const label = document.createElement('label');
        label.textContent = category;

        // Append container and label to pop-out interface
        popOutInterface.appendChild(checkboxContainer);
        popOutInterface.appendChild(label);
    });

    // Add click event listeners to all icons
    const icons = document.querySelectorAll('.icon');
    icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            handleIconClick(icon);
        });
    });
}

// Define possible states for icons
const iconStates = ['fa-circle', 'fa-times', 'fa-minus', 'fa-check', '']; // Blue, Red, Dash, Green, Blank

// Function to get the Font Awesome icon class for a category
function getCategoryIconClass(category) {
    // Define mapping of categories to icon classes
    const iconClasses = {
        'require': 'fa-circle', // Blue circle icon
        'exclude': 'fa-times', // Red X icon
        'abbreviate': 'fa-minus', // Dash icon
        'permit': 'fa-check', // Green check icon
        'default': '' // Default blank icon
    };
    // Return corresponding icon class for category, default to blank icon
    return iconClasses[category] || iconClasses['default'];
}

// Call the function to create and display the toolbar interface
createToolbarInterface();
