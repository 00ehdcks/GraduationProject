const wrapper2 = document.querySelector('.wrapper2');
const profile = document.querySelector('.profile');
const post = document.querySelector('.post');
const comment = document.querySelector('.comment');
const text = document.querySelector('.text');
const profile_box = document.querySelector('.profile-box');
const post_box = document.querySelector('.post-list-box');
const comment_box = document.querySelector('.comment-list-box');

profile.addEventListener('click', () => {
  wrapper2.classList.remove('active');
  profile.style.color = '#005fa8';
  post.style.color = 'black';
  comment.style.color = 'black';
  text.textContent = '프로필';
  profile_box.style.display = 'block';
  post_box.style.display = 'none';
  comment_box.style.display = 'none';
});

post.addEventListener('click', () => {
  wrapper2.classList.add('active');
  profile.style.color = 'black';
  post.style.color = '#005fa8';
  comment.style.color = 'black';
  text.textContent = '작성한 글';
  profile_box.style.display = 'none';
  post_box.style.display = 'block';
  comment_box.style.display = 'none';
});

comment.addEventListener('click', () => {
  wrapper2.classList.add('active');
  profile.style.color = 'black';
  post.style.color = 'black';
  comment.style.color = '#005fa8';
  text.textContent = '작성한 댓글';
  profile_box.style.display = 'none';
  post_box.style.display = 'none';
  comment_box.style.display = 'block';
});
