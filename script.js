const dataContainer = document.getElementById('data-container');

async function fetchData() {
    try {
        const response = await fetch('http://65.108.42.172:15657/abci_info');
        const data = await response.json();

        // Veriyi işle ve görüntüle
        console.log(data); // Veriyi konsolda incele
        // ... Veriyi HTML'e ekleme kodu ...

    } catch (error) {
        console.error('Veri alırken hata oluştu:', error);
    }
}

fetchData();
