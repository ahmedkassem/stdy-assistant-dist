import{d as G,_ as H,G as j,H as D,K as i,j as o,bj as z,R as s,Q as E,O as e,M as I,aZ as L,aV as M}from"./index.5b84cc0c.js";import{Q as O}from"./QSpace.9c3f40fd.js";import{Q as Z}from"./QImg.027cbdca.js";import{a as A}from"./axios.b7ad0ed5.js";import{a as F,i as J,c as W}from"./auth.e7344c06.js";const X=G({data(){var r;const t=F(),n=J(),a=W();return{user:t.user,attendanceS:a,feesTransaction:n.transaction,feesS:n,root:(r=A.defaults.baseURL)!=null?r:""}},methods:{handleKeyUp(t){t.key==="Enter"&&this.print()},print(){window.print()}}}),Y={class:"row"},ss={id:"print-form"},ts={class:"q-my-sm"},es=s("hr",null,null,-1),ns=s("hr",null,null,-1),os={class:"q-my-md"},ls=s("br",null,null,-1),is=s("hr",null,null,-1),rs={class:"row"},as=s("div",{style:{width:"150px"},class:"text-left"},[s("strong",null,"Payment")],-1),ds={style:{width:"100px"},class:"text-center"},cs=s("hr",null,null,-1),us={class:"row"},hs=s("div",{style:{width:"150px"},class:"text-left"},[s("strong",null,"Remaining")],-1),_s=s("div",{style:{width:"0px"}},null,-1),ps={style:{width:"100px"},class:"text-center"},fs=s("hr",null,null,-1),ms={class:"row"},ys=s("div",{style:{width:"150px"},class:"text-left"},[s("strong",null,"Barcode")],-1),vs=s("div",{style:{width:"0px"}},null,-1),ws={style:{width:"100px"},class:"text-center"},gs=s("hr",null,null,-1),xs={class:"row"},bs=s("div",{style:{width:"150px"},class:"text-left"},[s("strong",null,"Type")],-1),Ts=s("div",{style:{width:"0px"}},null,-1),Ss={style:{width:"100px"},class:"text-center"},Cs=s("hr",null,null,-1),Qs={class:"row"},ks=s("div",{style:{width:"150px"},class:"text-left"},[s("strong",null,"User")],-1),Ps=s("div",{style:{width:"0px"}},null,-1),$s={style:{width:"100px"},class:"text-center"},Bs=s("hr",null,null,-1);function Ks(t,n,a,r,Vs,Ns){return j(),D(M,{persistent:"",maximized:"",class:"print-dialog",onKeyup:t.handleKeyUp},{default:i(()=>[o(L,{color:"white text-black",style:{width:"300px"}},{default:i(()=>{var d,c,u,h;return[o(z,{class:"notPrintable"},{default:i(()=>[s("div",Y,[o(E,{color:"primary",onClick:n[0]||(n[0]=l=>t.print()),label:"Print"}),o(O),o(E,{color:"negative",onClick:n[1]||(n[1]=l=>t.feesS.closePrintView()),label:"Close"})])]),_:1}),s("div",ss,[((c=(d=t.feesTransaction)==null?void 0:d.subscription)==null?void 0:c.course)!=null&&((h=(u=t.feesTransaction)==null?void 0:u.subscription)==null?void 0:h.student)!=null?(j(),D(z,{key:0,class:"text-center",style:{width:"300px"}},{default:i(()=>{var l,_,p,f,m,y,v,w,g,x,b,T,S,C,Q,k,P,$,B,K,V,N,U,q,R;return[o(Z,{src:t.root+((f=(p=(_=(l=t.feesTransaction)==null?void 0:l.subscription)==null?void 0:_.course)==null?void 0:p.image)==null?void 0:f.url),style:{width:"120px","max-height":"120px"},class:"q-ma-lg",fit:"contain"},null,8,["src"]),s("div",ts,[s("strong",null,e((m=t.feesTransaction)==null?void 0:m.created_at),1)]),es,s("div",null,[s("strong",null,e((w=(v=(y=t.feesTransaction)==null?void 0:y.subscription)==null?void 0:v.course)==null?void 0:w.name),1)]),ns,s("div",os,[s("strong",null,e((S=(T=(b=(x=(g=t.feesTransaction)==null?void 0:g.subscription)==null?void 0:x.student)==null?void 0:b.user)==null?void 0:T.profile)==null?void 0:S.name),1),ls,s("strong",null,e(($=(P=(k=(Q=(C=t.feesTransaction)==null?void 0:C.subscription)==null?void 0:Q.student)==null?void 0:k.user)==null?void 0:P.profile)==null?void 0:$.phoneNumber),1)]),is,s("div",rs,[as,s("div",ds,[s("strong",null,e((B=t.feesTransaction)==null?void 0:B.amount),1)])]),cs,s("div",us,[hs,_s,s("div",ps,[s("strong",null,e((V=(K=t.feesTransaction)==null?void 0:K.subscription)==null?void 0:V.remaining_fees),1)])]),fs,s("div",ms,[ys,vs,s("div",ws,[s("strong",null,e((U=(N=t.feesTransaction)==null?void 0:N.subscription)==null?void 0:U.student.barcode),1)])]),gs,s("div",xs,[bs,Ts,s("div",Ss,[s("strong",null,"Cash "+e((q=t.feesTransaction)==null?void 0:q.type),1)])]),Cs,s("div",Qs,[ks,Ps,s("div",$s,[s("strong",null,e((R=t.user)==null?void 0:R.username),1)])]),Bs]}),_:1})):I("",!0)])]}),_:1})]),_:1},8,["onKeyup"])}var zs=H(X,[["render",Ks]]);export{zs as f};
