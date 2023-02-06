let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
for (let i = 0; i < cities.length; i++) {
    document.querySelector('body').innerHTML='<ol><li class="city">'+cities[i-6]+'</li><li class="city">' +cities[i-5]+ '</li><li class="city">'+cities[i-4]+'</li><li class="city">'+ cities[i-3]+'</li><li class="city">'+cities[i-2]+'</li><li class="city">'
    +cities[i-1]+'</li><li class="city">'+cities[i]+'</li></ol>';
}