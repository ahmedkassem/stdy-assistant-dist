import{Q as j}from"./QSelect.ada950cf.js";import{_ as R,d as O,Y as x,G as T,P as G,R as g,j as c,Q as K,O as A,K as y,ab as C,N as Q,aV as $}from"./index.5b84cc0c.js";import{Q as N}from"./QDate.d52bf75a.js";import{g as P,f as z,e as S,I as U,a as H,c as J,i as L}from"./auth.e7344c06.js";import{g as W,e as X}from"./expenses.5ebeda1d.js";import{u as Z}from"./vue-i18n.2a004fa8.js";import"./QField.ce38903d.js";import"./QItemLabel.f92634ee.js";import"./selection.4e01e17d.js";import"./use-render-cache.3aae9b27.js";import"./axios.b7ad0ed5.js";import"./index.31a62591.js";import"./_commonjsHelpers.4e997714.js";function _(t,e){const r=new Array(t);for(let i=0;i<t;i++){r[i]=new Array(e);for(let d=0;d<e;d++)r[i][d]=" "}return r}function ee(t){let e,r,i=t.arrData;if(e=t.name,r=t.type,e==null&&(e="export"),r==null&&(r="csv"),i==null&&(i=[]),i.length==0)return;console.log("Exporting data");let d="data:text/csv;charset=utf-8,\uFEFF";r=="xls"&&(d=`sep=,
\r`+d),d+=[...i.map(b=>Object.values(b).join(","))].join(`
`).replace(/(^\[)|(\]$)/gm,"");const D=encodeURI(d),s=document.createElement("a");s.setAttribute("href",D),s.setAttribute("download",e+"."+r),s.click(),console.log("Exporting data done")}const te=O({methods:{async generateReport(){var t,e,r,i,d,D;try{if(this.selectedInstructor==null||this.selectedInstructor.id==null||this.feesS.fdate==null||this.feesS.tdate==null){x.create("error");return}let s=(i=(r=(e=(t=this.authS.user)==null?void 0:t.profile)==null?void 0:e.assistant_courses)==null?void 0:r.filter(l=>{var f,u;return((f=l.instructor)==null?void 0:f.id)==((u=this.selectedInstructor)==null?void 0:u.id)}))!=null?i:[];const b=await P(this.selectedInstructor,this.feesS.fdate,this.feesS.tdate),q=await z(this.selectedInstructor,this.feesS.fdate,this.feesS.tdate),k=await W(this.selectedInstructor,S(this.feesS.fdate),S(this.feesS.tdate)),B=k.map(l=>l.name);let m=[];for(const l of B)m.includes(l)||m.push(l);m.sort();let F=0;const a=_(1e3,12);a[0][0]="Date",a[0][s.length*3+1]="Expenses",a[0][s.length*3+m.length+1]="Net";for(let l=0;l<s.length*3;l+=3){let f=s[l/3];a[0][l+1]=f.name,a[1][l+1]="Attendance",a[1][l+2]="FeesIn",a[1][l+3]="FeesOut"}for(let l=0;l<m.length;l++){const f=m[l];a[1][l+s.length*3+1]=f}let p=2;for(let l=S(this.feesS.fdate);l.isSameOrBefore(S(this.feesS.tdate));l.add(1,"day"),p++){a[p][0]=l.format("YYYY-MM-DD");let f=0;for(let u=0;u<s.length;u++){let I=s[u],V=u*3;if(I.id!=null){let Y=[];for(let o of q)try{((d=o.subscription)==null?void 0:d.course)!=null&&((D=o.subscription)==null?void 0:D.course)==I.id&&S(o.created_at).format("YYYY-MM-DD")==l.format("YYYY-MM-DD")&&Y.push(o)}catch(n){console.log("error in transaction"),console.log(o),console.log(n)}const h=Y.filter(o=>(o==null?void 0:o.type)==U.in).map(o=>{var n;return(n=o==null?void 0:o.amount)!=null?n:0}),v=Y.filter(o=>(o==null?void 0:o.type)==U.out).map(o=>{var n;return(n=o==null?void 0:o.amount)!=null?n:0}),E=b.filter(o=>{var n;return((n=o.course)==null?void 0:n.id)==I.id}).filter(o=>S(o.date).format("YYYY-MM-DD")==l.format("YYYY-MM-DD")).length,M=h.length==0?0:h.reduce((o,n)=>o+n),w=v.length==0?0:v.reduce((o,n)=>o+n);a[p][V+1]=E==0?"":E,a[p][V+2]=M==0?"":M,a[p][V+3]=w==0?"":w,f+=M-w}}for(let u=0;u<m.length;u++){const I=m[u],V=k.filter(h=>h.name==I&&S(h.date).format("YYYY-MM-DD")==l.format("YYYY-MM-DD")),Y=V.length==0?0:V.map(h=>h.amount).reduce((h,v)=>h+v);a[p][u+s.length*3+1]=Y==0?"":Y,f-=Y}a[p][s.length*3+m.length+1]=f,F+=f}a[p][0]="net",a[p][s.length*3+m.length+1]=F,ee({name:"report",type:"csv",arrData:a})}catch(s){console.log(s),x.create("error")}}},data:()=>{const{locale:t,t:e}=Z({useScope:"global"});return{locale:t,t:e,authS:H(),attendanceS:J(),feesS:L(),expencesS:X(),selectedInstructor:null,fdateVisibility:!1,tdateVisibility:!1}}}),se={class:"q-pa-md"},oe={class:"row full-width q-ma-md"},le={class:"row full-width justify-between"},ae={class:"col"},ne={class:"col-1 text-center q-ma-md text-primary"},re=g("div",{class:"col"},null,-1),ie={class:"col"},de={class:"col-1 text-center q-ma-md text-primary"};function ue(t,e,r,i,d,D){return T(),G("div",se,[g("div",oe,[c(j,{modelValue:t.selectedInstructor,"onUpdate:modelValue":e[0]||(e[0]=s=>t.selectedInstructor=s),outlined:"",class:"col q-my-md","emit-value":"","map-options":"",options:t.authS.instructors},null,8,["modelValue","options"]),c(K,{color:"primary",class:"q-ma-md",label:"Generate Report",onClick:t.generateReport},null,8,["onClick"])]),g("div",le,[g("div",ae,[g("b",ne,A(t.t("From")),1),c(C,{outlined:"",modelValue:t.feesS.fdate,"onUpdate:modelValue":e[5]||(e[5]=s=>t.feesS.fdate=s),class:"col"},{append:y(()=>[c(Q,{name:"event",class:"cursor-pointer",onClick:e[4]||(e[4]=s=>t.fdateVisibility=!0)},{default:y(()=>[g("div",null,[c($,{modelValue:t.fdateVisibility,"onUpdate:modelValue":e[3]||(e[3]=s=>t.fdateVisibility=s)},{default:y(()=>[c(N,{modelValue:t.feesS.fdate,"onUpdate:modelValue":[e[1]||(e[1]=s=>t.feesS.fdate=s),e[2]||(e[2]=s=>t.fdateVisibility=!1)],mask:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1},8,["modelValue"])])]),_:1})]),_:1},8,["modelValue"])]),re,g("div",ie,[g("b",de,A(t.t("To")),1),c(C,{outlined:"",modelValue:t.feesS.tdate,"onUpdate:modelValue":e[10]||(e[10]=s=>t.feesS.tdate=s),class:"col"},{append:y(()=>[c(Q,{name:"event",class:"cursor-pointer",onClick:e[9]||(e[9]=s=>t.tdateVisibility=!0)},{default:y(()=>[g("div",null,[c($,{modelValue:t.tdateVisibility,"onUpdate:modelValue":e[8]||(e[8]=s=>t.tdateVisibility=s)},{default:y(()=>[c(N,{modelValue:t.feesS.tdate,"onUpdate:modelValue":[e[6]||(e[6]=s=>t.feesS.tdate=s),e[7]||(e[7]=s=>t.tdateVisibility=!1)],mask:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1},8,["modelValue"])])]),_:1})]),_:1},8,["modelValue"])])])])}var be=R(te,[["render",ue]]);export{be as default};
