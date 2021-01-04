//activates and displays the corresponding tab
function activateTab(e, tabId) {
  let i;

  //Element that triggered this function
  let triggeredBy = e.currentTarget;

  let allTabList = document.getElementsByClassName("tab-list-item");

  //Reset all the tab list and remove every active tab
  for (i = 0; i < allTabList.length; i++) {
    allTabList[i].classList.remove("tab-list-active");
  }

  //Add the active class to selected tab only
  triggeredBy.classList.add("tab-list-active");

  //Hide all the other tab content that isnt active
  let allTabContentItem = document.getElementsByClassName("tab-content-item");
  for (i = 0; i < allTabContentItem.length; i++) {
    allTabContentItem[i].style.display = "none";
  }

  //Display the tab that is pointed by the active tab
  document.getElementById(tabId).style.display = "block";
}

//Toggles the theme back and forth to dark-theme and light theme: light theme = absence of dark theme
function toggleTheme() {
  const isDarkTheme = document.body.getAttribute("isDarkTheme");

  //If already dark theme
  if (isDarkTheme) {
    document.body.removeAttribute("isDarkTheme");
    localStorage.setItem("theme", "light");
  } else {
    document.body.setAttribute("isDarkTheme", "true");
    localStorage.setItem("theme", "dark");
  }

  document.body.classList.toggle("dark-theme");
}

function initTheme() {
  const persistedValue = localStorage.getItem("theme");
  //if no localstorage value is set then theme is default
  if (persistedValue === null) {
    return;
  } else {
    //if it is dark
    if (persistedValue === "dark") {
      document.body.setAttribute("isDarkTheme", "true");
      document.body.classList.add("dark-theme");
    } else return;
  }
}
initTheme();
