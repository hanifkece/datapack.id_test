// Data

const data = [
    'Dirt',
    'Water',
    'Grass Block',
    'Glowstone'
];

// Program

function Output() {
    let x = document.getElementById("$search").value.toLowerCase();
    document.getElementById("$output").innerHTML = x;
}

function Search() {
    const search_value = document.getElementById("$search").value.toLowerCase();
    const data_filtered = data.slice(0);
    const data_section = document.getElementsByClassName('value')[0];

    data_section.innerHTML = "";
    for (let i = 0; i < data_filtered.length; i++) {
        if (data_filtered[i].toLowerCase().includes(search_value)) {
            data_section.innerHTML += "<p>"+data_filtered[i]+"</p>"            
        }
        
    }
}