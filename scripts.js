document.getElementById('search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let query = e.target.value.toLowerCase();
        switch(query) {
            case 'cake':
                window.location.href = 'cakes.html';
                break;
            case 'biriyani':
                window.location.href = 'biriyanis.html';
                break;
            case 'starter':
                window.location.href = 'starters.html';
                break;
            case 'juice':
                window.location.href = 'juices.html';
                break;
            case 'ice cream':
                window.location.href = 'icecreams.html';
                break;
            default:
                alert('No matching recipes found.');
        }
    }
});
