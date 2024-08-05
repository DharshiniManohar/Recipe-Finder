document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate fetching order details
    const orderNumber = document.getElementById('order-number').value;
    const orderDetails = {
        '12345': {
            status: 'Shipped',
            items: '12 Blueberry Muffins',
            date: '2024-07-15',
            address: '123 Muffin Lane, Bakery City, BC 12345'
        },
        '67890': {
            status: 'Delivered',
            items: '6 Chocolate Muffins',
            date: '2024-07-20',
            address: '456 Cocoa Street, Sweet Town, ST 67890'
        }
        // Add more fake orders here
    };

    const details = orderDetails[orderNumber];

    if (details) {
        document.getElementById('status').textContent = details.status;
        document.getElementById('items').textContent = details.items;
        document.getElementById('date').textContent = details.date;
        document.getElementById('address').textContent = details.address;
        document.getElementById('order-details').classList.remove('hidden');
    } else {
        alert('Order number not found. Please check and try again.');
        document.getElementById('order-details').classList.add('hidden');
    }
});
