const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

searchButton.addEventListener('click', e => {
    e.preventDefault();
    const searchTerm = searchInput.value;
    // 在这里进行搜索逻辑处理
    const searchResultHTML = `<p>您搜索的内容是：<strong>${searchTerm}</strong></p>`;
    searchResults.innerHTML = searchResultHTML;
});
