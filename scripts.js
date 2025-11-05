// Simple JS: mobile nav toggle, year injection, and contact form validation
(function(){
// year
const year = new Date().getFullYear();
document.querySelectorAll('[id^="year"]').forEach(el=>el.textContent = year);


// nav toggles (works for multiple pages with different IDs)
function attachToggle(idToggle, idNav){
const t = document.getElementById(idToggle);
const n = document.getElementById(idNav);
if(!t || !n) return;
t.addEventListener('click', ()=>{
n.style.display = (n.style.display === 'block') ? 'none' : 'block';
});
}
attachToggle('nav-toggle','main-nav');
attachToggle('nav-toggle-2','main-nav-2');
attachToggle('nav-toggle-3','main-nav-3');
attachToggle('nav-toggle-4','main-nav-4');
attachToggle('nav-toggle-5','main-nav-5');


// contact form handler (no backend) — show a friendly message
const form = document.getElementById('contact-form');
if(form){
const status = document.getElementById('form-status');
const btn = document.getElementById('send-btn');
btn.addEventListener('click', ()=>{
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
if(!name || !email || !message){
status.textContent = 'Please fill every field.';
return;
}
// simple fake send
status.textContent = 'Thanks, ' + name + '! Your message was noted (demo).';
form.reset();
});
}
})();
