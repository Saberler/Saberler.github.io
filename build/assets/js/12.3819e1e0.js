(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{499:function(e,t,n){"use strict";n.r(t);var i={props:{email:{type:String,default:()=>"dfunme@qq.com"}},data:()=>({subject:"人事邀请",body:"请在此处编辑你的正文"}),computed:{emailLink(){return`mailto:${this.email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`}},methods:{sendEmail(e){e.preventDefault();const t=document.createElement("a");t.href=this.emailLink,t.click()}}},o=n(3),s=Object(o.a)(i,(function(){var e=this._self._c;return e("div",[e("a",{attrs:{href:this.emailLink},on:{click:this.sendEmail}},[this._v("发送邮件")])])}),[],!1,null,"71ddaf43",null);t.default=s.exports}}]);