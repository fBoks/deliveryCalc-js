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
    const clear_btn = document.querySelector(".clear-btn");

    dist_numInput.value = 500;
    dist.value = 500;

    dist.onchange = () => {
        dist_numInput.value = dist.value;
    };

    dist_numInput.onchange = () => {
        dist.value = dist_numInput.value;
    };


    btn.addEventListener("click", () => {
      if (weight.value != "" &&
          weight.value > 0 && 
          weight.value <= 50000 &&
          volume.value != "" &&
          volume.value > 0 &&
          volume.value <= 10000) 
      {
        calculation();
      } 
      else 
      {
        alert("Введите вес (от 0 до 50.000) и объем груза (от 0 до 10.000)");
      }
    });
    
    clear_btn.addEventListener("click", () => {
      weight.value = "";
      volume.value = "";
      load.checked = false;
      del.checked = false;
      frag.checked = false;
      dist_numInput.value = 500;
      dist.value = 500;
      price_total.innerHTML = "0.0";
    });

    const calculation = () => {
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
      var sum =
        weight.value * cost_1kg +
        volume.value * cost_1cube +
        cost_loading +
        cost_delToPlace +
        cost_fragile +
        dist.value * cost_1km;
      price_total.innerHTML = sum;
    };
}

script();