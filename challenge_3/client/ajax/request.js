var request = {
  createUser: (data, cb) => {
    $.ajax({
      method: 'POST',
      url: '/user',
      data: { form: JSON.stringify(data) },
      success: () => console.log(`user ${data.name} sign up successfully sent`),
      error: () => console.log(`failed to sign up ${data[0].name}`)
    });
  }
}