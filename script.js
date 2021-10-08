$(() => {
  fetch('https://covidnigeria.herokuapp.com/api')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else throw new Error('something went wrong');
    })
    .then((result) => {
      console.log(result.data);

      $('#confirmed_number')[0].innerHTML = result.data.totalConfirmedCases;
      $('#discharged_number')[0].innerHTML = result.data.discharged;
      $('#death_number')[0].innerHTML = result.data.death;
    });
});
