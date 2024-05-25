const wrap = document.querySelector('.wrapper');
const btnSee1 = document.querySelector('.see_btn_1');
const btnSee2 = document.querySelector('.see_btn_2');
const btnNSee1 = document.querySelector('.nsee_btn_1');
const btnNSee2 = document.querySelector('.nsee_btn_2');
const passwd = document.querySelector('.passwd');
const passwd_check = document.querySelector('.passwd_check');
const btnSendMail = document.querySelector('.send_mail_btn');
const warn_mail = document.querySelector('.warn_mail');
const warn_passwd = document.querySelector('.warn_passwd');
const warn_nick = document.querySelector('.warn_nick');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.icon-close');
const btnReSendMail = document.querySelector('.resend');

let warn_num = [0, 0, 0];

btnSee1.addEventListener('click', () => {
  passwd.type = 'text';
  btnSee1.style.display = 'none';
  btnNSee1.style.display = 'block';
});

btnSee2.addEventListener('click', () => {
  passwd_check.type = 'text';
  btnSee2.style.display = 'none';
  btnNSee2.style.display = 'block';
});

btnNSee1.addEventListener('click', () => {
  passwd.type = 'password';
  btnSee1.style.display = 'block';
  btnNSee1.style.display = 'none';
});

btnNSee2.addEventListener('click', () => {
  passwd_check.type = 'password';
  btnSee2.style.display = 'block';
  btnNSee2.style.display = 'none';
});

btnSendMail.addEventListener('click', () => {
  popup.classList.add('active');
});

btnReSendMail.addEventListener('click', () => {
  alert('메일 다시 보내기');
});

btnClose.addEventListener('click', () => {
  popup.classList.remove('active');
});

passwd_check.addEventListener('input', function () {
  checkPasswordMatch();
  setWrapper();
});

function checkPasswordMatch() {
  const password = passwd.value;
  const confirmPassword = passwd_check.value;

  warn_passwd.style.display = password === confirmPassword ? 'none' : 'block';
  warn_num[1] = password === confirmPassword ? 0 : 1;
}

function setWrapper() {
  let sum = warn_num.reduce((acc, cur) => acc + cur, 0);
  wrap.classList.remove('active1', 'active2', 'active3');
  if (sum > 0) {
    wrap.classList.add('active' + sum);
  }
}
