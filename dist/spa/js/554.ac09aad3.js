(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[554],{554:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>$});var l=t(9835);function o(e,a,t,o,s,r){const i=(0,l.up)("ForRelease");return(0,l.wg)(),(0,l.j4)(i)}var s=t(799),r=t(6970);const i={class:"q-pa-md q-mt-lg q-ml-lg"},n={class:"text-h6 page-title text-dark col-md-6"},c=(0,l.Uk)(" S1 APPLICATION - FOR RELEASE"),d={class:"text-right col-md-6"},p={class:"row q-my-lg"},m={class:"col-md-12 col-sm-12"},u={key:0,class:"table_container"},_={key:0,class:"no-data-found"},g=(0,l.Uk)(" NO DATA FOUND... "),w={class:"text-right q-mt-md"},h={key:1,class:"text-center q-pa-lg"},f={class:"loading-page"},k={class:"q-pa-md q-gutter-sm"},y=(0,l._)("div",{class:"text-h6 text-center"},"LOCK APPLICATION?",-1);function b(e,a,t,o,b,A){const C=(0,l.up)("q-icon"),T=(0,l.up)("q-btn"),v=(0,l.up)("q-card-section"),I=(0,l.up)("q-separator"),E=(0,l.up)("q-input"),L=(0,l.up)("q-td"),S=(0,l.up)("q-tr"),W=(0,l.up)("q-table"),q=(0,l.up)("q-pagination"),O=(0,l.up)("q-spinner-ios"),R=(0,l.up)("q-card-actions"),Z=(0,l.up)("q-card"),N=(0,l.up)("q-dialog"),Q=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(Z,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{class:"row"},{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l.Wm)(C,{name:"list"}),c]),(0,l._)("div",d,[(0,l.Wm)(T,{label:0==e.localTimer?"":e.localTimer+" sec",elevated:"",size:"md",icon:"sync",onClick:A.refresh,disabled:e.localTimer>0,color:"primary"},null,8,["label","onClick","disabled"])])])),_:1}),(0,l.Wm)(I,{inset:""}),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l._)("div",p,[(0,l._)("div",m,[(0,l._)("form",{onSubmit:a[2]||(a[2]=(0,s.iM)((e=>A.getList(!0)),["prevent"])),method:"POST"},[(0,l.Wm)(E,{"bottom-slots":"",modelValue:e.search,"onUpdate:modelValue":a[1]||(a[1]=a=>e.search=a),outlined:"",label:"Search Applications",hint:"Hit ''Enter'' key or click search icon to search application."},{append:(0,l.w5)((()=>[(0,l.Wm)(C,{name:"search",onClick:a[0]||(a[0]=e=>A.getList(!0))})])),_:1},8,["modelValue"])],32)])]),e.is_loading?((0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("div",f,[(0,l.Wm)(O,{color:"white",size:"3rem"})])])):((0,l.wg)(),(0,l.iD)("div",u,[e.table_data.length<=0?((0,l.wg)(),(0,l.iD)("div",_,[(0,l.Wm)(C,{name:"warning"}),g])):((0,l.wg)(),(0,l.j4)(W,{key:1,columns:e.columns,flat:"",bordered:"",rows:e.table_data,"row-key":"id","hide-bottom":"","rows-per-page-options":[e.take],onRowClick:A.update},{body:(0,l.w5)((e=>[(0,l.Wm)(S,{props:e,hover:"",style:{cursor:"pointer"},onClick:a=>A.update(e.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{key:"referrence_code",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.referrence_code||"--"),1)])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"application_type",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.application_type),1)])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"company_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.company_name),1)])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"brand",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.brand),1)])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"type_medium_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(Array.isArray(e.row.type_medium_name)?e.row.type_medium_name.join(", "):e.row.type_medium_name),1)])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"internal_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.internal_status),1)])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"payment_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.payment_status),1)])),_:2},1032,["props"])])),_:2},1032,["props","onClick"])])),_:1},8,["columns","rows","rows-per-page-options","onRowClick"])),(0,l._)("div",w,[e.max_page?((0,l.wg)(),(0,l.j4)(q,{key:0,modelValue:e.current,"onUpdate:modelValue":[a[3]||(a[3]=a=>e.current=a),a[4]||(a[4]=e=>A.getList())],max:e.max_page,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])):(0,l.kq)("",!0)])])),(0,l._)("template",null,[(0,l._)("div",k,[(0,l.Wm)(N,{modelValue:e.lockModal,"onUpdate:modelValue":a[5]||(a[5]=a=>e.lockModal=a),persistent:"","transition-show":"scale",modern:"","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"bg-red-14 text-white",style:{width:"300px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[y])),_:1}),(0,l.Wm)(R,{align:"center",class:"bg-white text-red q-py-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{flat:"",label:"CONFIRM",onClick:A.confirmLock},null,8,["onClick"]),(0,l.wy)((0,l.Wm)(T,{flat:"",label:"CANCEL"},null,512),[[Q]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])])),_:1})])),_:1})])}t(8466);var A=t(6827);const C={data:()=>({pinkModel:!1,search:"",is_search:!1,is_loading:!0,lockModal:!1,tabs:[],legends:[{color:"blue",theme_color:"blue-2",title:"ORIGINAL"},{color:"gold",theme_color:"gold",title:"FOR COMPLIANCE"},{color:"green",theme_color:"green-4",title:"REVISION"}],localTimer:null,refresh_sec:0,active_tab:"ALL",columns:[{name:"referrence_code",align:"left",label:"REFERENCE CODE",field:"referrence_code",sortable:!0},{name:"application_type",align:"left",label:"TYPE OF APPLICATION",field:"application_type",sortable:!0},{name:"company_name",align:"left",label:"COMPANY NAME",field:"company_name",sortable:!0},{name:"brand",align:"left",label:"BRAND",field:"brand",sortable:!0},{name:"type_medium_name",align:"left",label:"TYPE OF MEDIUM",field:"type_medium_name",sortable:!0},{name:"internal_status",align:"left",label:"INTERNAL STATUS",field:"internal_status",sortable:!0},{name:"payment_status",align:"left",label:"PAYMENT STATUS",field:"payment_status",sortable:!0}],table_data:[],take:10,max_page:0,current:1}),computed:{userID(){return localStorage.getItem("ui")}},mounted(){this.initApp()},watch:{},methods:{initApp(){this.refresh(),this.localTimer=localStorage.getItem("timer"),this.getList(),this.tabs.map((async e=>{e.count=await this.getCount(e.code)}))},isOwned(e){return!!e.isLocked&&(console.log(e.assigned_user.id,localStorage.getItem("ui")),e.assigned_user.id==localStorage.getItem("ui"))},hasOwner(e){return e.isLocked},setActiveTab(e){this.active_tab=e},refresh(){let e=this,a=e.localTimer<=0?60:e.localTimer;e.refresh_sec=60,localStorage.setItem("timer",a),setInterval((()=>{a>0&&(a--,localStorage.setItem("timer",a),this.localTimer=localStorage.getItem("timer"))}),1e3)},redirect(){window.location.href="https://www.facebook.com/"},update(e){this.selected_item=e,this.$router.push({name:"individual-application-update",params:{id:e.id}})},async getList(){let e=this;e.is_search&&(e.current=1),e.is_loading=!0;let a={data:{release_status:"FOR RELEASE",search:e.search},params:{take:e.take,page:e.current}},{data:t,status:l}=await e.$store.dispatch("asc_user/getPerReleaseStatus",a);[200,201].includes(l)?(e.table_data=t.data.map((e=>({...e,company_name:e.company.name,type_medium_name:e.type_of_medium.length>0?e.type_of_medium.map((e=>e.type_of_medium)):"--",is_self_assigned:!0})))||[],e.max_page=t.lastPage||0,e.is_loading=!1):e.is_loading=!1},async getCount(e){let a=this,t={data:{form_group:"FOR RELEASE",application_type:["REGULAR","BATCH"],search:a.search,process_type:e},params:{take:a.take,page:a.current}},{data:l,status:o}=await a.$store.dispatch("s1/getS1Applications",t);return l.data.length},async confirmLock(){let e=this,a={assigned_user_id:this.userID,id:e.selected_item.id},{data:t,status:l}=await this.$store.dispatch("asc_user/lockApp",a);[200,201].includes(l)&&(A.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),e.lockModal=!1,this.getList())}}};var T=t(1639),v=t(4458),I=t(3190),E=t(2857),L=t(8879),S=t(926),W=t(6611),q=t(7817),O=t(900),R=t(990),Z=t(1463),N=t(9546),Q=t(7220),U=t(996),x=t(8359),P=t(2074),M=t(1821),D=t(2146),F=t(9984),V=t.n(F);const z=(0,T.Z)(C,[["render",b]]),B=z;V()(C,"components",{QCard:v.Z,QCardSection:I.Z,QIcon:E.Z,QBtn:L.Z,QSeparator:S.Z,QInput:W.Z,QTabs:q.Z,QTab:O.Z,QBadge:R.Z,QTable:Z.Z,QTr:N.Z,QTd:Q.Z,QPagination:U.Z,QSpinnerIos:x.Z,QDialog:P.Z,QCardActions:M.Z}),V()(C,"directives",{ClosePopup:D.Z});const j={data:()=>({}),components:{ForRelease:B}},Y=(0,T.Z)(j,[["render",o]]),$=Y},8466:()=>{}}]);