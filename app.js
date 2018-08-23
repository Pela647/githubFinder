const gitHub = new GitHub,
  ui = new UI;

// search inout 

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if (userText !== '') {
    // make http call
    gitHub.getUser(userText)
      .then(data => {
        // console.log(data);
        if (data.profile.message === 'Not Found') {
          // alert('user not found');
          ui.showAlert('user not found', 'alert alert-danger');
        } else {
          console.log(data);
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    //clear profile
    ui.clearProfile();

  }
});