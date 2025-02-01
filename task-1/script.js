document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (localStorage.getItem('formSubmitted')) {
        alert('Вы уже отправили заявку.');
        return;
    }

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const data = {
        stream_code: 'vv4uf',
        client: {
            phone: phone,
            name: name
        }
    };

    fetch('https://order.drcash.sh/v1/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer RLPUUOQAMIKSAB2PSGUECA'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            localStorage.setItem('formSubmitted', 'true');
            window.location.href = 'thankyou.html';
        } else {
            alert('Ошибка при отправке заявки');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});