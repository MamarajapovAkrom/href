function openTab(tabNumber) {
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
    var selectedTab = document.getElementById("tab" + tabNumber);
    selectedTab.style.display = "block";
  }