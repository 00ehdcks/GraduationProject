const wrapper = document.querySelector('.wrapper');
const btnSee1 = document.querySelector('.see_btn_1');
const btnSee2 = document.querySelector('.see_btn_2');
const btnNSee1 = document.querySelector('.nsee_btn_1');
const btnNSee2 = document.querySelector('.nsee_btn_2');
const passwd = document.querySelector('.passwd');
const passwd_check = document.querySelector('.passwd_check');
const warn_passwd = document.querySelector('.warn_passwd');
const btnChangePasswd = document.querySelector('.change_passwd_btn');

btnChangePasswd.addEventListener('click', () => {
  wrapper.classList.add('active');
});

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

passwd_check.addEventListener('input', function () {
  checkPasswordMatch();
  setWrapper();
});

function checkPasswordMatch() {
  const password = passwd.value;
  const confirmPassword = passwd_check.value;

  warn_passwd.style.display = password === confirmPassword ? 'none' : 'block';
}
