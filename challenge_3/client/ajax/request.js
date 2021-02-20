var request = {
  createUser: (data, successCb) => {
    $.ajax({
      method: 'POST',
      url: '/user',
      data: { form: JSON.stringify(data) },
      success: successCb,
      error: () => console.log(`failed to sign up ${data.username}`)
    });
  },

  saveLoc: (data, successCb) => {
    $.ajax({
      method: 'POST',
      url: '/location',
      data: { form: JSON.stringify(data) },
      success: successCb,
      error: () => console.log(`failed to collect location @ ${data.address}`)
    });
  }
}