// nouislider

const slaider = document.getElementById('slaider-line');

noUiSlider.create(slaider, {

    start: [0, 5000],
    connect: true,
    range: {
        'min': 0,
        'max': 5000
    }
});

let priceMin = document.getElementById('priceMin'),
    priceMax = document.getElementById('priceMax');


slaider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        priceMax.innerHTML = values[handle];
    } else {
        priceMin.innerHTML = values[handle];
    }
});