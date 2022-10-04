const script = () => {
    var cost_1kg = 5.5,
        cost_1cube = 3500,
        cost_1km = 2,
        cost_loading = 1500,
        cost_delToPlace = 3500,
        cost_fragile = 2000;

    const weight = document.getElementById("weight");
    const volume = document.getElementById("volume");
    const load = document.getElementById("chb1");
    const del = document.getElementById("chb2");
    const frag = document.getElementById("chb3");
    const dist_numInput = document.getElementById("dist-numInput");
    const dist = document.getElementById("dist");
    const btn = document.getElementById("btn");
    const price_total = document.querySelector(".price__total");

    dist_numInput.value = 500;
    dist.value = 500;

    dist.onchange = () => {
        dist_numInput.value = dist.value;
    };

    dist_numInput.onchange = () => {
        dist.value = dist_numInput.value;
    };


    btn.addEventListener("click", () => {
        if (
            weight.value != "" &&
            weight.value >= 0 && 
            volume.value != "" &&
            volume.value >= 0
        ) {
          if (load.checked) {
            cost_loading = 1500;
          }
          else {
            cost_loading = 0;
          }
          if (del.checked) {
            cost_delToPlace = 3500;
          }
          else {
            cost_delToPlace = 0;
          }
          if (frag.checked) {
            cost_fragile = 2000;
          }
          else {
            cost_fragile = 0;
          }

          console.log(weight);
          console.log(volume);

          var sum =
            weight.value * cost_1kg +
            volume.value * cost_1cube +
            cost_loading +
            cost_delToPlace +
            cost_fragile +
            dist.value * cost_1km;
            console.log(sum);
          price_total.innerHTML = sum;
        } else {
          alert("Введите вес и объем груза");
        }
    });
}

script();