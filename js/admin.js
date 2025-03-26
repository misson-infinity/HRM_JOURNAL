// অ্যাডমিন ড্যাশবোর্ডের জন্য JS
document.addEventListener('DOMContentLoaded', function() {
    // ড্যাশবোর্ড স্ট্যাটস আপডেট (এখানে AJAX কল করা যাবে)
    updateDashboardStats();
    
    // লগআউট ফাংশনালিটি
    const logoutBtn = document.getElementById('logoutBtn');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('adminLoggedIn');
            window.location.href = 'index.html';
        });
    }
});

function updateDashboardStats() {
    // এখানে ডাটাবেস থেকে ডাটা ফেচ করা যাবে
    // উদাহরণ স্বরূপ:
    fetch('api/dashboard-stats')
        .then(response => response.json())
        .then(data => {
            document.getElementById('totalJournals').textContent = data.journals;
            document.getElementById('totalArticles').textContent = data.articles;
            document.getElementById('totalSubscribers').textContent = data.subscribers;
        })
        .catch(error => {
            console.error('Error fetching dashboard stats:', error);
        });
}