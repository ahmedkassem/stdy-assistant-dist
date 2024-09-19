import{h as c,e as a,a as m,j as u,k as f}from"./auth.e7344c06.js";import{I as p,Y as h}from"./index.5b84cc0c.js";import{a as d}from"./axios.b7ad0ed5.js";async function x(t,e,s){try{const r=await d.get("/expenses?instructor="+t.id+"&date_gte="+e.startOf("day").format("YYYY-MM-DD")+"&date_lte="+s.endOf("day").format("YYYY-MM-DD"),c());if(r.status==200)return r.data;console.log(r.statusText)}catch(r){console.log(r)}return[]}async function g(t){try{const e=await d.post("/expenses",t,c());if(e.status==200)return e.data;console.log(e.statusText)}catch(e){console.log(e)}return null}const C=p("expensesS",{state(){const t="YYYY-MM-DD";return{selectedCourse:null,showCreateNewExpenseForm:!1,dateFormat:t,working:!1,selectedInstructor:null,expenses:[],filter:"",fdate:a().format(t),tdate:a().format(t),date:a().format(t),amount:0,name:"",description:"",columns:[{label:"id",name:"id",sortable:!0,field:e=>e.id,sort:(e,s)=>e.id-s.id},{label:"course",name:"course",sortable:!0,field:e=>{var s;return(s=e.course)==null?void 0:s.name}},{label:"date",name:"date",sortable:!0,field:e=>a(e.date).format("DD-MM-YYYY hh:mm A"),sort:(e,s)=>a(e.date).isBefore(a(s.date))?-1:1},{label:"name",name:"name",sortable:!0,field:e=>e.name,sort:(e,s)=>e.name.localeCompare(s.name)},{label:"description",name:"description",sortable:!0,field:e=>e.description,sort:(e,s)=>e.description.localeCompare(s.description)},{label:"amount",name:"amount",sortable:!0,field:e=>e.amount,sort:(e,s)=>e.amount-s.amount}],nameOptions:["utilities","rent","salaries","other"]}},getters:{instructorCourses(){var s,r,o;if(this.selectedInstructor==null)return[];const t=[],e=m();for(const n of(r=(s=e.user)==null?void 0:s.courseOptions)!=null?r:[])((o=n.value.instructor)==null?void 0:o.id)==this.selectedInstructor.id&&t.push(n);return t},sum(){return u.exports.sum(this.expenses.map(t=>t.amount))},filteredExpenses(){var e;const t=(e=this.columns)!=null?e:[];return this.filter.length==0?this.expenses:this.expenses.filter(s=>s==null?!1:t.map(o=>typeof o.field=="string"?" ":o.field(s)).join(" ").toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase())>=0)},sumFiltered(){return u.exports.sum(this.filteredExpenses.map(t=>t.amount))}},actions:{async getAllExpenses(){this.selectedInstructor!=null&&(this.working=!0,this.expenses=await x(this.selectedInstructor,a(this.fdate,this.dateFormat),a(this.tdate,this.dateFormat)),this.working=!1)},async create(){var t;this.selectedInstructor!=null&&(this.working=!0,await g({instructor:this.selectedInstructor.id,amount:this.amount,name:this.name,description:this.description,date:a(this.date,this.dateFormat).toISOString(),course:(t=this.selectedCourse)==null?void 0:t.id}),this.working=!1,this.showCreateNewExpenseForm=!1)},wrapCsvValue(t){let e=t;return e=e==null?"":String(e),e=e.split('"').join('""'),`${e}`},exportCSV(){var s,r,o;if(this.columns==null)return;const t=[this.columns.map(n=>this.wrapCsvValue(n.label))].concat(this.expenses.map(n=>{var i;return n==null?"":((i=this.columns)!=null?i:[]).map(l=>this.wrapCsvValue(typeof l.field=="string"?"":l.field(n))).join(",")})).join(`\r
`);f(((o=(r=(s=this.selectedInstructor)==null?void 0:s.user)==null?void 0:r.profile)==null?void 0:o.name)+"-"+a().format("YYYY-MM-DD hh:mm A")+"-expenses-report.csv","\uFEFF"+t,"text/csv")!==!0&&h.create({message:"Browser denied file download...",color:"negative",icon:"warning"})}}});export{C as e,x as g};
