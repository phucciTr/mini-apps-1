var request = {
  createUser: (data, cb) => {
    $.ajax({
      method: 'POST',
      url: '/user',
      data: { form: JSON.stringify(data) },
      success: () => console.log(`${data} successfully sent`),
      error: () => console.log(`failed to send ${data}`)
    });
  }
}