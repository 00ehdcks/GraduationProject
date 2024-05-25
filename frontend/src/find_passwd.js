const wrapper = document.querySelector('.wrapper');
const btnSendMail = document.querySelector('.send_mail_btn');
const btnCheck = document.querySelector('.change_passwd_btn');
const btnReSend = document.querySelector('.resend');
const editMail = document.querySelector('.goto_edit_mail');

let isBtnDisabled = false;
const changePasswdPageUrl = '../pubilc/change_passwd.html';

btnSendMail.addEventListener('click', () => {
  wrapper.classList.add('active');
  // check_code.classList.add('show');
});

editMail.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnReSend.addEventListener('click', () => {
  alert('메일 다시 보내기');
});
