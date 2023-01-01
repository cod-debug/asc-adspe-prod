"use strict";(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[421],{7421:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var l=a(9835);function o(e,t,a,o,s,i){const r=(0,l.up)("SpecialIndex");return(0,l.wg)(),(0,l.j4)(r)}var s=a(799),i=a(6970);const r={class:"q-pa-md q-mt-lg q-ml-lg"},n={class:"text-h6 page-title text-dark col-md-6"},c=(0,l.Uk)(" S2 APPLICATION - SPECIAL"),d={class:"text-right col-md-6"},p={class:"row q-my-lg"},m={class:"col-md-9 col-sm-12"},u={class:"col-md-3 q-px-md col-sm-12"},_={class:"shadow-2 q-pa-sm"},g=(0,l._)("b",null,"Legend: ",-1),w={width:"100%"},h={width:"5%"},b={class:"q-pt-xs"},y={class:"q-pr-md"},f=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),k={key:0,class:"table_container"},I={key:0,class:"no-data-found q-mt-md"},A=(0,l.Uk)(" NO DATA FOUND... "),C={key:2,class:"text-right q-mt-md"},N={key:1,class:"text-center q-pa-lg"},v={class:"loading-page"},E={class:"q-pa-md q-gutter-sm"},L=(0,l._)("div",{class:"text-h6 text-center"},"LOCK APPLICATION?",-1);function S(e,t,a,o,S,q){const T=(0,l.up)("q-icon"),O=(0,l.up)("q-btn"),W=(0,l.up)("q-card-section"),P=(0,l.up)("q-separator"),D=(0,l.up)("q-input"),R=(0,l.up)("q-badge"),x=(0,l.up)("q-tab"),U=(0,l.up)("q-tabs"),Z=(0,l.up)("q-td"),V=(0,l.up)("q-tr"),Q=(0,l.up)("q-table"),M=(0,l.up)("q-pagination"),z=(0,l.up)("q-spinner-ios"),G=(0,l.up)("q-card-actions"),F=(0,l.up)("q-card"),Y=(0,l.up)("q-dialog"),B=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(F,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"row"},{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l.Wm)(T,{name:"list"}),c]),(0,l._)("div",d,[(0,l.Wm)(O,{label:0==e.localTimer?"":e.localTimer+" sec",elevated:"",size:"md",icon:"sync",onClick:q.refresh,disabled:e.localTimer>0,color:"primary"},null,8,["label","onClick","disabled"])])])),_:1}),(0,l.Wm)(P,{inset:""}),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l._)("div",p,[(0,l._)("div",m,[(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)((e=>q.getList(!0)),["prevent"])),method:"POST"},[(0,l.Wm)(D,{"bottom-slots":"",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=t=>e.search=t),outlined:"",label:"Search Applications",hint:"Hit ''Enter'' key or click search icon to search application."},{append:(0,l.w5)((()=>[(0,l.Wm)(T,{name:"search",onClick:t[0]||(t[0]=e=>q.getList(!0))})])),_:1},8,["modelValue"])],32)]),(0,l._)("div",u,[(0,l._)("div",_,[g,(0,l._)("table",w,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.legends,((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t},[(0,l._)("td",h,[(0,l._)("div",{class:(0,i.C_)(`legend ${e.color}`)},null,2)]),(0,l._)("td",b,[(0,l._)("small",null,[(0,l._)("strong",null,(0,i.zw)(e.title),1)])])])))),128))])])])]),(0,l.Wm)(U,{modelValue:e.active_tab,"onUpdate:modelValue":[t[3]||(t[3]=t=>e.active_tab=t),t[4]||(t[4]=e=>q.getList())],align:"left",class:"text-dark","indicator-color":"primary"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.tabs,((e,t)=>((0,l.wg)(),(0,l.j4)(x,{name:e.code,onClick:t=>q.setActiveTab(e.code),key:t,color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{label:e.count,color:"red-14",rounded:"",floating:""},null,8,["label"]),(0,l._)("strong",y,(0,i.zw)(e.name),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"]),f,e.is_loading?((0,l.wg)(),(0,l.iD)("div",N,[(0,l._)("div",v,[(0,l.Wm)(z,{color:"white",size:"3rem"})])])):((0,l.wg)(),(0,l.iD)("div",k,[e.table_data.length<=0?((0,l.wg)(),(0,l.iD)("div",I,[(0,l.Wm)(T,{name:"warning"}),A])):((0,l.wg)(),(0,l.j4)(Q,{key:1,columns:e.columns,bordered:"",rows:e.table_data,"row-key":"id","hide-bottom":"","rows-per-page-options":[e.take],onRowClick:q.update},{body:(0,l.w5)((e=>[(0,l.Wm)(V,{props:e,class:(0,i.C_)(q.hasOwner(e.row)?q.isOwned(e.row)?"bg-yellow":"bg-hrey-4":"bg-white"),hover:"",style:{cursor:"pointer"},onClick:t=>q.update(e.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{key:"referrence_code",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.referrence_code||"--"),1)])),_:2},1032,["props"]),(0,l.Wm)(Z,{key:"application_type",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.application_type),1)])),_:2},1032,["props"]),(0,l.Wm)(Z,{key:"company_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.company_name),1)])),_:2},1032,["props"]),(0,l.Wm)(Z,{key:"brand",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.brand),1)])),_:2},1032,["props"]),(0,l.Wm)(Z,{key:"type_medium_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(Array.isArray(e.row.type_medium_name)?e.row.type_medium_name.join(", "):e.row.type_medium_name),1)])),_:2},1032,["props"]),(0,l.Wm)(Z,{key:"status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.status),1)])),_:2},1032,["props"]),(0,l.Wm)(Z,{key:"internal_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.internal_status),1)])),_:2},1032,["props"]),(0,l.Wm)(Z,{key:"payment_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.payment_status),1)])),_:2},1032,["props"])])),_:2},1032,["props","class","onClick"])])),_:1},8,["columns","rows","rows-per-page-options","onRowClick"])),e.max_page>0?((0,l.wg)(),(0,l.iD)("div",C,[(0,l.Wm)(M,{modelValue:e.current,"onUpdate:modelValue":[t[5]||(t[5]=t=>e.current=t),t[6]||(t[6]=e=>q.getList())],max:e.max_page,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])])):(0,l.kq)("",!0)])),(0,l._)("template",null,[(0,l._)("div",E,[(0,l.Wm)(Y,{modelValue:e.lockModal,"onUpdate:modelValue":t[7]||(t[7]=t=>e.lockModal=t),persistent:"","transition-show":"scale",modern:"","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{class:"bg-red-14 text-white",style:{width:"300px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[L])),_:1}),(0,l.Wm)(G,{align:"center",class:"bg-white text-red q-py-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{flat:"",label:"CONFIRM",onClick:q.confirmLock},null,8,["onClick"]),(0,l.wy)((0,l.Wm)(O,{flat:"",label:"CANCEL"},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])])),_:1})])),_:1})])}var q=a(6827);const T={data:()=>({pinkModel:!1,search:"",is_loading:!0,lockModal:!1,tabs:[{name:"ORIGINAL",code:"ORIGINAL",count:0},{name:"REVISION",code:"REVISION",count:0},{name:"COMPLIANCE",code:"COMPLIANCE",count:0}],legends:[{color:"gold",title:"FOR APPROVAL"},{color:"green",title:"APPROVED"},{color:"red",title:"DISAPPROVED"}],localTimer:null,refresh_sec:0,active_tab:"ORIGINAL",columns:[{name:"referrence_code",align:"left",label:"REFERENCE CODE",field:"referrence_code",sortable:!0},{name:"application_type",align:"left",label:"TYPE OF APPLICATION",field:"application_type",sortable:!0},{name:"company_name",align:"left",label:"COMPANY NAME",field:"company_name",sortable:!0},{name:"brand",align:"left",label:"BRAND",field:"brand",sortable:!0},{name:"type_medium_name",align:"left",label:"TYPE OF MEDIUM",field:"type_medium_name",sortable:!0},{name:"internal_status",align:"left",label:"INTERNAL STATUS",field:"internal_status",sortable:!0},{name:"payment_status",align:"left",label:"PAYMENT STATUS",field:"payment_status",sortable:!0}],table_data:[],take:10,max_page:0,current:1}),computed:{userID(){return localStorage.getItem("ui")}},mounted(){this.initApp()},watch:{},methods:{initApp(){this.refresh(),this.localTimer=localStorage.getItem("timer"),this.getList(),this.tabs.map((async e=>{e.count=await this.getCount(e.code)}))},isOwned(e){return!!e.isLocked&&(console.log(e.assigned_user.id,localStorage.getItem("ui")),e.assigned_user.id==localStorage.getItem("ui"))},hasOwner(e){return e.isLocked},setActiveTab(e){this.active_tab=e,this.current=1},refresh(){let e=this,t=e.localTimer<=0?60:e.localTimer;e.refresh_sec=60,localStorage.setItem("timer",t),setInterval((()=>{t>0&&(t--,localStorage.setItem("timer",t),this.localTimer=localStorage.getItem("timer"))}),1e3)},redirect(){window.location.href="https://www.facebook.com/"},update(e){this.selected_item=e,e.isLocked?this.isOwned(e)?this.$router.push({name:"individual-application-update",params:{id:e.id}}):q.Z.create({message:"This application does not belong to you.",position:"top-right",closeBtn:"X",timeout:2e3,color:"red"}):this.lockModal=!0},async getList(e){let t=this;e&&(t.current=1),t.is_loading=!0;let a={data:{form_group:"INDIVIDUAL",application_type:["SPECIAL SCREENING","SPECIAL SCREENING AND CLEARING"],processType:t.active_tab,form_type:"s2",search:t.search},params:{take:t.take,page:t.current}},{data:l,status:o}=await t.$store.dispatch("s1/getS1Applications",a);[200,201].includes(o)?(t.table_data=l.data.map((e=>({...e,company_name:e.company.name,type_medium_name:e.type_of_medium.length>0?e.type_of_medium.map((e=>e.type_of_medium)):"--",is_self_assigned:!0})))||[],t.max_page=l.lastPage||0,t.is_loading=!1):t.is_loading=!1},async getCount(e){let t=this,a={data:{form_group:"INDIVIDUAL",application_type:["SPECIAL SCREENING","SPECIAL SCREENING AND CLEARING"],processType:e,search:t.search},params:{take:t.take,page:t.current}},{data:l,status:o}=await t.$store.dispatch("s1/getS1Applications",a);return l.count},async confirmLock(){let e=this,t={assigned_user_id:this.userID,id:e.selected_item.id},{data:a,status:l}=await this.$store.dispatch("ascUser/lockApp",t);[200,201].includes(l)&&(q.Z.create({message:a.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),e.lockModal=!1,this.getList())}}};var O=a(1639),W=a(4458),P=a(3190),D=a(2857),R=a(8879),x=a(926),U=a(6611),Z=a(7817),V=a(900),Q=a(990),M=a(1463),z=a(9546),G=a(7220),F=a(996),Y=a(8359),B=a(2074),$=a(1821),j=a(2146),H=a(9984),K=a.n(H);const X=(0,O.Z)(T,[["render",S]]),J=X;K()(T,"components",{QCard:W.Z,QCardSection:P.Z,QIcon:D.Z,QBtn:R.Z,QSeparator:x.Z,QInput:U.Z,QTabs:Z.Z,QTab:V.Z,QBadge:Q.Z,QTable:M.Z,QTr:z.Z,QTd:G.Z,QPagination:F.Z,QSpinnerIos:Y.Z,QDialog:B.Z,QCardActions:$.Z}),K()(T,"directives",{ClosePopup:j.Z});const ee={data:()=>({}),components:{SpecialIndex:J}},te=(0,O.Z)(ee,[["render",o]]),ae=te}}]);