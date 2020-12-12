fetch('https://api.github.com/users/NathanReis')
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    document
      .querySelector('#avatar')
      .src = response.avatar_url;

    document
      .querySelector('#name')
      .innerHTML = response.name;

    document
      .querySelector('#company')
      .innerHTML = response.company;

    document
      .querySelector('#location')
      .innerHTML = response.location;
  })
  .catch((error) => {
    console.log(error);
  });