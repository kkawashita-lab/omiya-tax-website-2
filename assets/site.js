'use strict';
const menu=document.querySelector('.menu');
const nav=document.querySelector('#navigation');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');menu.textContent=open?'×':'☰';nav.classList.toggle('open',open)});
const form=document.querySelector('#contact-form');
form?.addEventListener('submit',e=>{
 e.preventDefault();
 const topics=form.querySelectorAll('[name="ご相談内容"]:checked');
 const err=document.querySelector('#topic-error');
 err.hidden=topics.length>0;
 if(!topics.length){form.querySelector('[name="ご相談内容"]').focus();return;}
 const data=new FormData(form),target=document.querySelector('#confirmation-data');target.replaceChildren();
 for(const key of ['会社名・屋号','お名前','メールアドレス','電話番号','所在地','ご相談内容','ご相談の詳細','面談方法']){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=key;dd.textContent=data.getAll(key).filter(Boolean).join('、')||'未記入';target.append(dt,dd);}
 form.hidden=true;const confirmation=document.querySelector('#confirmation');confirmation.hidden=false;confirmation.focus();confirmation.scrollIntoView({block:'start'});
});
document.querySelector('#back-form')?.addEventListener('click',()=>{document.querySelector('#confirmation').hidden=true;form.hidden=false;form.querySelector('input').focus();form.scrollIntoView({block:'start'});});
