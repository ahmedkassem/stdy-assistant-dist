import{Q as k}from"./QSelect.ada950cf.js";import{Q as v}from"./QSpace.9c3f40fd.js";import{_ as N,d as P,Y as g,J as V,G as i,H as m,P as b,R as S,j as f,Q as c,M as d,O as F,K as C,ab as Q,N as B}from"./index.5b84cc0c.js";import{Q as $}from"./QTable.783f1a7a.js";import{w as q}from"./working-component.7a8a887f.js";import{q as y,c as D,k as A,e as E,a as T,s as W}from"./auth.e7344c06.js";import{u as Y}from"./vue-i18n.2a004fa8.js";import"./QField.ce38903d.js";import"./QItemLabel.f92634ee.js";import"./selection.4e01e17d.js";import"./QList.f07cb638.js";import"./QCircularProgress.6317e4cb.js";import"./axios.b7ad0ed5.js";import"./index.31a62591.js";import"./_commonjsHelpers.4e997714.js";const j=P({components:{workingWidget:q},methods:{copyFullPayment(){let e="",l=this.studentsS.fullPayment.map(n=>{var a,t,s;return(s=(t=(a=n==null?void 0:n.student)==null?void 0:a.user)==null?void 0:t.profile)==null?void 0:s.phoneNumber});l=Array.from(new Set(l)),l.forEach(n=>e+=n+`
`),y(e,{debug:!0,message:"Press #{key} to copy"}),g.create(this.t("Copied to clipboard"))},copyFullPaymentWithNames(){let e="",l=this.studentsS.fullPayment.map(n=>{var a,t,s,o,r,u;return((s=(t=(a=n==null?void 0:n.student)==null?void 0:a.user)==null?void 0:t.profile)==null?void 0:s.phoneNumber)+","+((u=(r=(o=n==null?void 0:n.student)==null?void 0:o.user)==null?void 0:r.profile)==null?void 0:u.name)});l=Array.from(new Set(l)),l.forEach(n=>e+=n+`
`),y(e,{debug:!0,message:"Press #{key} to copy"}),g.create(this.t("Copied to clipboard"))},copy(){let e="",l=this.studentsS.reportStudents.map(n=>{var a,t,s;return(s=(t=(a=n==null?void 0:n.student)==null?void 0:a.user)==null?void 0:t.profile)==null?void 0:s.phoneNumber});l=Array.from(new Set(l)),l.forEach(n=>e+=n+`
`),y(e,{debug:!0,message:"Press #{key} to copy"}),g.create(this.t("Copied to clipboard"))},exportCSV(e){var s;const l=D().wrapCsvValue,n=this.columns,a=[n.map(o=>l(o.label))].concat(e.map(o=>n.map(r=>l(typeof r.field=="string"?"":r.field(o))).join(","))).join(`\r
`);A(((s=this.studentsS.reportSelectedCourse)==null?void 0:s.name)+"-"+E().format("YYYY-MM-DD hh:mm A")+"-students-report.csv","\uFEFF"+a,{mimeType:"text/csv",encoding:"UTF-8"})!==!0&&g.create({message:"Browser denied file download...",color:"negative",icon:"warning"})}},data(){const e=T(),{t:l}=Y({useScope:"global"}),n=W(),a=[{label:l("Name"),name:"name",align:"left",sortable:!0,field:t=>{var s,o,r,u;return(u=(r=(o=(s=t==null?void 0:t.student)==null?void 0:s.user)==null?void 0:o.profile)==null?void 0:r.name)!=null?u:"error"}},{label:l("Mobile"),name:"mobile",align:"left",sortable:!0,field:t=>{var s,o,r,u;return(u=(r=(o=(s=t==null?void 0:t.student)==null?void 0:s.user)==null?void 0:o.profile)==null?void 0:r.phoneNumber)!=null?u:"error"}},{label:l("Parent Phone Number"),name:"Parent Phone Number",align:"left",sortable:!0,field:t=>{var s,o,r;return(r=(o=(s=t==null?void 0:t.student)==null?void 0:s.user)==null?void 0:o.profile)==null?void 0:r.parentPhoneNumber}},{label:l("Barcode"),name:"barcode",align:"left",sortable:!0,field:t=>{var s,o;return(o=(s=t==null?void 0:t.student)==null?void 0:s.barcode)!=null?o:"error"}},{label:l("group"),name:"group",align:"left",sortable:!0,field:t=>(t==null?void 0:t.group)+""},{label:l("Notes"),name:"Notes",align:"left",sortable:!0,field:t=>{var s;return(s=t==null?void 0:t.notes)!=null?s:"error"}},{label:"Note Description",name:"Note Description",align:"left",sortable:!0,field:t=>{var s;return(s=t==null?void 0:t.notesDescription)!=null?s:"error"}},{label:l("Fees"),name:"Fees",align:"left",sortable:!0,field:t=>{var s;return(s=t==null?void 0:t.fees)!=null?s:"error"}},{label:l("Remaining Fees"),name:"Remaining Fees",align:"left",sortable:!0,field:t=>{var s;return(s=t==null?void 0:t.remaining_fees)!=null?s:"error"}},{label:l("Active"),name:"Active",align:"left",sortable:!0,field:t=>{var s;return(s=t==null?void 0:t.active)!=null?s:"error"}}];return{t:l,authS:e,studentsS:n,pagination:{sortBy:"Name",descending:!1,page:1,rowsPerPage:50},columns:a}}}),I={key:1,class:"q-pa-md"},M={class:"row"},R={class:"col"},U={class:"row full-width q-ma-md"},O={key:0},G={class:"row q-my-md justify-between"},H=S("br",null,null,-1),J={key:0,class:"row"},K={key:1,class:"row"};function z(e,l,n,a,t,s){var r,u,h;const o=V("workingWidget");return e.studentsS.working?(i(),m(o,{key:0})):(i(),b("div",I,[S("div",M,[S("div",R,[S("div",U,[f(k,{outlined:"",class:"col q-my-md",modelValue:e.studentsS.reportSelectedCourse,"onUpdate:modelValue":l[0]||(l[0]=p=>e.studentsS.reportSelectedCourse=p),"emit-value":"","map-options":"",options:(r=e.authS.user)==null?void 0:r.courseOptions},null,8,["modelValue","options"]),f(v),e.studentsS.reportSelectedCourse!=null?(i(),m(c,{key:0,class:"q-ma-md",color:"primary",label:e.t("generate report"),onClick:l[1]||(l[1]=p=>e.studentsS.showReport())},null,8,["label"])):d("",!0)]),((u=e.studentsS.reportSelectedCourse)==null?void 0:u.course_students)!=null&&e.studentsS.reportSelectedCourse.course_students.length==0?(i(),b("div",O,F(e.t("There is no students in this course")),1)):d("",!0),S("div",G,[e.studentsS.reportSelectedCourse!=null&&e.studentsS.reportStudents.length>0?(i(),m(c,{key:0,class:"q-mx-md",label:e.t("export CSV"),color:"primary",onClick:l[2]||(l[2]=p=>e.exportCSV(e.studentsS.reportStudents))},null,8,["label"])):d("",!0),e.studentsS.reportSelectedCourse!=null&&e.studentsS.reportStudents.length>0?(i(),m(c,{key:1,color:"primary",label:e.t("Copy Numbers"),onClick:e.copy},null,8,["label","onClick"])):d("",!0),e.studentsS.reportSelectedCourse!=null&&e.studentsS.reportStudents.length>0&&e.studentsS.fullPayment!=null&&e.studentsS.fullPayment.length>0?(i(),m(c,{key:2,class:"col-2",color:"negative",label:e.t("copy full payment"),onClick:l[3]||(l[3]=p=>e.copyFullPayment())},null,8,["label"])):d("",!0),e.studentsS.reportSelectedCourse!=null&&e.studentsS.reportStudents.length>0&&e.studentsS.fullPayment!=null&&e.studentsS.fullPayment.length>0?(i(),m(c,{key:3,class:"col-2",color:"negative",label:e.t("copy full payment with names"),onClick:l[4]||(l[4]=p=>e.copyFullPaymentWithNames())},null,8,["label"])):d("",!0)])])]),H,e.studentsS.reportStudents!=null&&e.studentsS.reportStudents.length>0?(i(),b("div",J,[f($,{pagination:e.pagination,flat:"",bordered:"",class:"full-width",filter:e.studentsS.filter,rows:e.studentsS.reportStudents,columns:e.columns},{"top-right":C(()=>[f(Q,{outlined:"",dense:"",debounce:"300",modelValue:e.studentsS.filter,"onUpdate:modelValue":l[5]||(l[5]=p=>e.studentsS.filter=p),placeholder:e.t("Search")},{append:C(()=>[f(B,{name:"fa-solid fa-magnifying-glass"})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["pagination","filter","rows","columns"])])):d("",!0),((h=e.studentsS.reportSelectedCourse)==null?void 0:h.course_students)!=null&&e.studentsS.reportSelectedCourse.course_students.length==0?(i(),b("div",K," No Elements To Display ")):d("",!0)]))}var ie=N(j,[["render",z]]);export{ie as default};
