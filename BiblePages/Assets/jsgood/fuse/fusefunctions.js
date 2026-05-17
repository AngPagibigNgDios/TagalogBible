function closeSearch() {
  var x = document.getElementById("searchResults");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    // set focus back to the search box
      document.getElementById("searchBox").focus();  }
        }
    function gobackToSearchBar() {
      document.getElementById("searchBox").focus(); // put cursor back in search box
  }