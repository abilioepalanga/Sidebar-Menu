function toggleSidebar(element) {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");
    element.classList.toggle("close");
}
function toggleSidebarOpen(element) {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("close")) {
        sidebar.classList.remove("close");
        element.classList.remove("close");
    }
}
