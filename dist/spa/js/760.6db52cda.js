(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[760],{2760:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>ja});var l=t(9835);function o(e,a,t,o,i,n){const s=(0,l.up)("DetailsIndex",!0);return(0,l.wg)(),(0,l.j4)(s)}var i=t(6970),n=t(799);const s={class:"q-pa-md q-mt-lg q-ml-lg"},d={class:"text-h6 page-title text-dark col-md-6"},m=(0,l.Uk)(" S1 APPLICATION - INDIVIDUAL"),r={class:"text-right col-md-6"},u=(0,l._)("div",{class:"col-md-6 col-lg-6 col-sm-12"},[(0,l._)("strong",{class:"text-red-14 bold"},"Submission Date: September 28, 2022")],-1),c={class:"col-md-6 col-lg-6 col-sm-12 text-right"},p={class:"row q-mt-md"},_={class:"col-md-4 col-lg-4 col-sm-12 q-px-sm"},f={class:"col-md-4 col-lg-4 col-sm-12 q-px-sm"},g=(0,l._)("hr",{class:"q-my-xl"},null,-1),b={key:1,class:"text-center"},h=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),y=(0,l._)("strong",{class:"text-grey-14"},"INTERNAL",-1),v=(0,l._)("strong",{class:"text-grey-14"},"EXTERNAL",-1),w={class:"q-mt-md"},D={class:"row"},q={class:"col-12 col-md-4"},V={class:"form-group"},I=(0,l._)("div",{class:"col-12 col-md-4"},null,-1),k={class:"col-12 col-md-4"},W={class:"form-group text-right"};function x(e,a,t,o,x,A){const U=(0,l.up)("q-icon"),S=(0,l.up)("q-btn"),T=(0,l.up)("q-card-section"),M=(0,l.up)("q-separator"),C=(0,l.up)("q-badge"),E=(0,l.up)("q-section"),L=(0,l.up)("q-input"),Z=(0,l.up)("ClientInformation"),z=(0,l.up)("PresentorInformation"),N=(0,l.up)("MaterialInformation"),Q=(0,l.up)("q-list"),O=(0,l.up)("q-spinner-hourglass"),$=(0,l.up)("q-tab"),R=(0,l.up)("q-tabs"),P=(0,l.up)("RichText"),F=(0,l.up)("q-card"),B=(0,l.up)("q-select");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(F,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{class:"row"},{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l.Wm)(U,{name:"list"}),m]),(0,l._)("div",r,[(0,l.Wm)(S,{label:"VIEW APPLICATION",elevated:"",class:"q-mr-sm position-right",size:"md",icon:"list",color:"red-14",onClick:A.backToList},null,8,["onClick"])])])),_:1}),(0,l.Wm)(M,{inset:""}),(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(E,{class:"row"},{default:(0,l.w5)((()=>[u,(0,l._)("div",c,[(0,l.Wm)(C,{color:A.paymentStatusColor(e.payment_status).bg,class:(0,i.C_)(`q-pa-sm text-${A.paymentStatusColor(e.payment_status).text}`)},{default:(0,l.w5)((()=>[(0,l._)("strong",null,(0,i.zw)(e.payment_status)+": "+(0,i.zw)(A.intFormatter(e.amount)),1)])),_:1},8,["color","class"])])])),_:1}),(0,l._)("div",p,[(0,l._)("div",_,[(0,l.Wm)(L,{modelValue:e.application_type,"onUpdate:modelValue":a[0]||(a[0]=a=>e.application_type=a),label:"Application Type",outlined:"",disable:""},null,8,["modelValue"])]),(0,l._)("div",f,[(0,l.Wm)(L,{modelValue:e.form_group,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form_group=a),label:"Submission Type",outlined:"",disable:""},null,8,["modelValue"])])]),g,e.is_loading?((0,l.wg)(),(0,l.iD)("div",b,[(0,l.Wm)(O,{color:"primary",size:"5rem"})])):((0,l.wg)(),(0,l.j4)(Q,{key:0,class:"rounded-borders"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"q-mb-sm"}),(0,l.Wm)(M),(0,l.Wm)(z,{class:"q-mb-sm"}),(0,l.Wm)(M),(0,l.Wm)(N,{appId:e.$route.params.id,class:"q-mb-sm"},null,8,["appId"])])),_:1}))])),_:1}),(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,{square:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(R,{modelValue:e.tab,"onUpdate:modelValue":a[2]||(a[2]=a=>e.tab=a),dense:"","indicator-color":"blue",class:"text-grey-14"},{default:(0,l.w5)((()=>[(0,l.Wm)($,{name:"internal_comments_tab",label:"Internal Comments"}),(0,l.Wm)($,{name:"external_comments_tab",label:"External Comments"})])),_:1},8,["modelValue"]),h])),_:1}),(0,l.Wm)(T,null,{default:(0,l.w5)((()=>["internal_comments_tab"==e.tab?((0,l.wg)(),(0,l.j4)(n.uT,{key:0,appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOut"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[y,(0,l.Wm)(P,{modelValue:e.internal_comment_input,"onUpdate:modelValue":a[3]||(a[3]=a=>e.internal_comment_input=a)},null,8,["modelValue"])])])),_:1})):(0,l.kq)("",!0),"external_comments_tab"==e.tab?((0,l.wg)(),(0,l.j4)(n.uT,{key:1,appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOut"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[v,(0,l.Wm)(P,{modelValue:e.external_comment_input,"onUpdate:modelValue":a[4]||(a[4]=a=>e.external_comment_input=a)},null,8,["modelValue"])])])),_:1})):(0,l.kq)("",!0),(0,l._)("div",w,[(0,l.Wm)(S,{label:"Save",size:"sm",icon:"comment_bank",color:A.disable_comment_btn?"grey-14":"red-14",disabled:A.disable_comment_btn,onClick:A.saveComment,class:"q-mr-sm"},null,8,["color","disabled","onClick"]),(0,l.Wm)(S,{label:"Cancel",size:"sm",icon:"cancel",color:A.disable_comment_btn?"grey-14":"red-14",disabled:A.disable_comment_btn},null,8,["color","disabled"])])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l._)("div",D,[(0,l._)("div",q,[(0,l._)("div",V,[(0,l.Wm)(B,{modelValue:e.screener_id,"onUpdate:modelValue":a[5]||(a[5]=a=>e.screener_id=a),options:e.screener_options,outlined:"",size:"sm",label:"ASSIGN A SCREENER","option-label":"fullname","option-value":"id"},null,8,["modelValue","options"]),(0,l.Wm)(S,{color:"red-14",label:"FORWARD TO AD SCREENER",onClick:a[6]||(a[6]=e=>A.reassign(1005)),icon:"verified",class:"q-mr-sm q-mt-sm",disable:!e.screener_id},null,8,["disable"])])]),I,(0,l._)("div",k,[(0,l._)("div",W,[(0,l.Wm)(B,{modelValue:e.adspe_id,"onUpdate:modelValue":a[7]||(a[7]=a=>e.adspe_id=a),options:e.adspe_options,outlined:"",size:"sm",label:"REASSIGN EVALUATOR","option-label":"fullname","option-value":"id"},null,8,["modelValue","options"]),(0,l.Wm)(S,{color:"red-14",label:"RE-ASSIGN TO EVALUATOR",onClick:a[8]||(a[8]=e=>A.reassign(1008)),icon:"verified",class:"q-mr-sm q-mt-sm",disable:!e.adspe_id},null,8,["disable"])])])])])),_:1})])),_:1})])}const A=(0,l._)("div",{class:"row q-pa-none"},[(0,l._)("div",{class:"col-md-4"},[(0,l._)("strong",null,"Client Information")]),(0,l._)("div",{class:"col-md-4 text-grey-14"}," Affiliation and Company details ")],-1),U={class:"row items-center"},S={class:"row"},T={class:"col-md-7 col-lg-7 col-sm-12 q-pa-sm"},M={class:"col-md-5 col-lg-5 col-sm-12 q-pa-sm"},C={class:"row"},E={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"},L={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"},Z={class:"col-md-4 col-lg-4 col-sm-12 q-pa-sm"};function z(e,a,t,o,i,n){const s=(0,l.up)("q-avatar"),d=(0,l.up)("q-item-section"),m=(0,l.up)("q-icon"),r=(0,l.up)("q-select"),u=(0,l.up)("q-input"),c=(0,l.up)("q-form"),p=(0,l.up)("q-card-section"),_=(0,l.up)("q-card"),f=(0,l.up)("q-expansion-item");return(0,l.wg)(),(0,l.j4)(f,{"header-class":"text-dark bg-blue-2 shadow-3"},{header:(0,l.w5)((()=>[(0,l.Wm)(d,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,l.Wm)(d,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,l.w5)((()=>[A])),_:1}),(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l._)("div",U,[(0,l.Wm)(m,{name:"perm_contact_calendar",color:"dark",size:"24px"})])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"text-dark bordere-dark q-mb-md",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l._)("div",S,[(0,l._)("div",T,[(0,l.Wm)(r,{outlined:"",label:"Client Company Name",modelValue:n.parentData.company_name,"onUpdate:modelValue":a[0]||(a[0]=e=>n.parentData.company_name=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",M,[(0,l.Wm)(r,{outlined:"",label:"Client Membership Affiliation",modelValue:n.parentData.affiliate_name,"onUpdate:modelValue":a[1]||(a[1]=e=>n.parentData.affiliate_name=e),disable:""},null,8,["modelValue"])])]),(0,l._)("div",C,[(0,l._)("div",E,[(0,l.Wm)(u,{outlined:"",label:"Brand",modelValue:n.parentData.brand,"onUpdate:modelValue":a[2]||(a[2]=e=>n.parentData.brand=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",L,[(0,l.Wm)(u,{outlined:"",label:"Product",modelValue:n.parentData.product,"onUpdate:modelValue":a[3]||(a[3]=e=>n.parentData.product=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",Z,[(0,l.Wm)(u,{outlined:"",label:"Category",modelValue:n.parentData.category,"onUpdate:modelValue":a[4]||(a[4]=e=>n.parentData.category=e),disable:""},null,8,["modelValue"])])])])),_:1})])),_:1})])),_:1})])),_:1})}const N={data:()=>({company_name:"",affiliation_name:""}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},mounted(){},methods:{}};var Q=t(1639),O=t(651),$=t(1233),R=t(1357),P=t(2857),F=t(4458),B=t(3190),Y=t(8326),G=t(7887),H=t(6611),j=t(9984),X=t.n(j);const K=(0,Q.Z)(N,[["render",z]]),J=K;X()(N,"components",{QExpansionItem:O.Z,QItemSection:$.Z,QAvatar:R.Z,QIcon:P.Z,QCard:F.Z,QCardSection:B.Z,QForm:Y.Z,QSelect:G.Z,QInput:H.Z});const ee=(0,l._)("div",{class:"row q-pa-none"},[(0,l._)("div",{class:"col-md-4"},[(0,l._)("strong",null,"Presentor Information")]),(0,l._)("div",{class:"col-md-4 text-grey-14"}," Personal Details ")],-1),ae={class:"row items-center"},te={class:"row"},le={class:"col-sm-12 q-pa-sm"},oe={class:"col-sm-12 q-pa-sm"},ie={class:"col-sm-12 q-pa-sm"},ne={class:"row"},se={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},de={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},me={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"},re={class:"col-md-6 col-lg-6 col-sm-12 q-pa-sm"};function ue(e,a,t,o,i,n){const s=(0,l.up)("q-avatar"),d=(0,l.up)("q-item-section"),m=(0,l.up)("q-icon"),r=(0,l.up)("q-input"),u=(0,l.up)("q-form"),c=(0,l.up)("q-card-section"),p=(0,l.up)("q-card"),_=(0,l.up)("q-expansion-item");return(0,l.wg)(),(0,l.j4)(_,{"header-class":"text-dark bg-blue-2 shadow-3",bordered:""},{header:(0,l.w5)((()=>[(0,l.Wm)(d,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,l.Wm)(d,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,l.w5)((()=>[ee])),_:1}),(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l._)("div",ae,[(0,l.Wm)(m,{name:"person",color:"dark",size:"24px"})])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"text-dark border-dark q-mb-md",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l._)("div",te,[(0,l._)("div",le,[(0,l.Wm)(r,{outlined:"",label:"Name of Applicant",modelValue:n.parentData.applicant_fullname,"onUpdate:modelValue":a[0]||(a[0]=e=>n.parentData.applicant_fullname=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",oe,[(0,l.Wm)(r,{outlined:"",label:"Company Name",modelValue:n.parentData.company_name,"onUpdate:modelValue":a[1]||(a[1]=e=>n.parentData.company_name=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",ie,[(0,l.Wm)(r,{outlined:"",label:"Address",modelValue:n.parentData.address,"onUpdate:modelValue":a[2]||(a[2]=e=>n.parentData.address=e),disable:""},null,8,["modelValue"])])]),(0,l._)("div",ne,[(0,l._)("div",se,[(0,l.Wm)(r,{outlined:"",label:"Mobile Number",modelValue:n.parentData.company_phone,"onUpdate:modelValue":a[3]||(a[3]=e=>n.parentData.company_phone=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",de,[(0,l.Wm)(r,{outlined:"",label:"Email Address",modelValue:n.parentData.company_email,"onUpdate:modelValue":a[4]||(a[4]=e=>n.parentData.company_email=e),type:"text-pass",disable:""},null,8,["modelValue"])]),(0,l._)("div",me,[(0,l.Wm)(r,{outlined:"",label:"Telephone Number",modelValue:n.parentData.phone,"onUpdate:modelValue":a[5]||(a[5]=e=>n.parentData.phone=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",re,[(0,l.Wm)(r,{outlined:"",label:"Alternate Telephone Number",disable:""})])])])),_:1})])),_:1})])),_:1})])),_:1})}const ce={data:()=>({company_name:""}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},mounted(){}},pe=(0,Q.Z)(ce,[["render",ue]]),_e=pe;X()(ce,"components",{QExpansionItem:O.Z,QItemSection:$.Z,QAvatar:R.Z,QIcon:P.Z,QCard:F.Z,QCardSection:B.Z,QForm:Y.Z,QInput:H.Z});const fe=(0,l._)("div",{class:"row q-pa-none"},[(0,l._)("div",{class:"col-md-4"},[(0,l._)("strong",null,"Material Information")]),(0,l._)("div",{class:"col-md-4 text-grey-14"}," Ads Details ")],-1),ge={class:"row items-center"},be={class:"row"},he={class:"col-sm-12 q-pa-sm"},ye={class:"col-sm-6 q-pa-sm"},ve={class:"col-sm-6 q-pa-sm"},we=(0,l.Uk)(" Type of Medium "),De={class:"row"},qe={class:"col-sm-12 q-pa-sm"},Ve={class:"q-gutter-sm"},Ie={key:0},ke={key:0,class:"col-12 col-md-12 q-pa-sm"},We={key:1,class:"col-4 col-md-4 q-pa-sm"},xe={key:2,class:"col-4 col-md-4 q-pa-sm"},Ae={key:3,class:"col-4 col-md-4 q-pa-sm"},Ue={key:4,class:"col-4 col-md-4 q-pa-sm"},Se={key:5,class:"col-4 col-md-4 q-pa-sm"},Te={key:1},Me={class:"col-sm-12 q-pa-sm"},Ce={class:"q-gutter-sm"},Ee={class:"col-12"},Le={class:"table w-100"},Ze={width:"50%"},ze={key:0,width:"50%",class:"q-pa-sm"},Ne={key:1,width:"50%"},Qe=(0,l._)("p",{class:"text-center text-grey-14 q-ma-none"},"ORIGINAL",-1),Oe=(0,l._)("hr",null,null,-1),$e=(0,l._)("b",null,"ORIGINAL",-1),Re=(0,l._)("br",null,null,-1),Pe={class:"q-mt-sm"},Fe=(0,l.Uk)(" MAIN DOCUMENT "),Be={class:"row"},Ye={class:"col-sm-12 q-pa-sm"},Ge={class:"q-gutter-sm"},He={class:""},je=(0,l._)("label",null,"File Path:",-1),Xe=(0,l._)("br",null,null,-1),Ke={class:"text-grey-14"},Je={class:"col-sm-12 q-pa-sm text-right"},ea=(0,l.Uk)(" VIEW DOCUMENT "),aa={key:0},ta={class:"q-mt-sm"},la=(0,l.Uk)(" SUPPORT DOCUMENT "),oa={class:"row"},ia={class:"col-sm-12 q-pa-sm"},na={class:"q-gutter-sm"},sa={class:""},da=(0,l._)("label",null,"File Path:",-1),ma=(0,l._)("br",null,null,-1),ra={class:"text-grey-14"},ua={class:"col-sm-12 q-pa-sm text-right"},ca=(0,l.Uk)(" VIEW DOCUMENT "),pa={class:"q-mt-xl"},_a={key:0,class:"row"},fa={class:"col-12"},ga={class:"row"},ba={key:0,class:"col-12 col-md-4 q-pa-sm"},ha={key:1,class:"col-12 col-md-4 q-pa-sm"},ya={key:2,class:"col-12 col-md-4 q-pa-sm"},va={key:3,class:"col-12 col-md-4 q-pa-sm"},wa={key:4,class:"col-12 col-md-4 q-pa-sm"},Da={key:5,class:"col-12 col-md-4 q-pa-sm"};function qa(e,a,t,o,n,s){const d=(0,l.up)("q-avatar"),m=(0,l.up)("q-item-section"),r=(0,l.up)("q-icon"),u=(0,l.up)("q-input"),c=(0,l.up)("q-select"),p=(0,l.up)("q-card"),_=(0,l.up)("q-card-section"),f=(0,l.up)("q-radio"),g=(0,l.up)("q-checkbox"),b=(0,l.up)("q-btn"),h=(0,l.up)("q-form"),y=(0,l.up)("q-expansion-item");return(0,l.wg)(),(0,l.j4)(y,{"header-class":"text-dark bg-blue-2 shadow-3",bordered:""},{header:(0,l.w5)((()=>[(0,l.Wm)(m,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{icon:"label_important",color:"blue-2","text-color":"dark"})])),_:1}),(0,l.Wm)(m,{style:{"font-size":"18px","flex-wrap":"unset"}},{default:(0,l.w5)((()=>[fe])),_:1}),(0,l.Wm)(m,{side:""},{default:(0,l.w5)((()=>[(0,l._)("div",ge,[(0,l.Wm)(r,{name:"ads_click",color:"dark",size:"24px"})])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"text-dark border-dark q-mb-md",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{bordered:"",square:!0,class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l._)("div",be,[(0,l._)("div",he,[(0,l.Wm)(u,{outlined:"",label:"Ad Title *",modelValue:s.parentData.ad_title,"onUpdate:modelValue":a[0]||(a[0]=e=>s.parentData.ad_title=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",ye,[(0,l.Wm)(c,{outlined:"",label:"Reference Code of Previously-Approved Material",modelValue:s.parentData.referrence_code,"onUpdate:modelValue":a[1]||(a[1]=e=>s.parentData.referrence_code=e),disable:""},null,8,["modelValue"])]),(0,l._)("div",ve,[(0,l.Wm)(u,{type:"text",outlined:"",label:"Tagline",modelValue:s.parentData.tag_line,"onUpdate:modelValue":a[2]||(a[2]=e=>s.parentData.tag_line=e),disable:""},null,8,["modelValue"])])])])),_:1}),(0,l.Wm)(p,{bordered:"",square:!0,class:"q-pa-md q-mt-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),we])),_:1}),(0,l._)("div",De,[(0,l._)("div",qe,[(0,l._)("div",Ve,[(0,l.Wm)(f,{dense:"",modelValue:s.parentData.type_of_media,"onUpdate:modelValue":a[3]||(a[3]=e=>s.parentData.type_of_media=e),val:"SINGLE MEDIA",label:"Single Media",disable:""},null,8,["modelValue"]),(0,l.Wm)(f,{dense:"",modelValue:s.parentData.type_of_media,"onUpdate:modelValue":a[4]||(a[4]=e=>s.parentData.type_of_media=e),val:"MULTIMEDIA",label:"Multimedia",disable:""},null,8,["modelValue"])])])]),"SINGLE MEDIA"==s.parentData.type_of_media?((0,l.wg)(),(0,l.iD)("div",Ie,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.parentData.type_of_medium,((a,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"row"},[0==t?((0,l.wg)(),(0,l.iD)("div",ke,[(0,l.Wm)(c,{outlined:"",label:"Single Media *",modelValue:a.type_of_medium,"onUpdate:modelValue":e=>a.type_of_medium=e,options:e.medium_options,"option-label":"desc","option-value":"desc",disable:""},null,8,["modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0),a.type_of_medium.execution&&0==t?((0,l.wg)(),(0,l.iD)("div",We,[(0,l.Wm)(c,{outlined:"",label:"Execution *",modelValue:a.execution,"onUpdate:modelValue":e=>a.execution=e,options:e.execution_options,"option-label":"type","option-value":"type",disable:""},null,8,["modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0),a.type_of_medium.language&&0==t?((0,l.wg)(),(0,l.iD)("div",xe,[(0,l.Wm)(c,{outlined:"",label:"Language / Dialect",modelValue:a.dialect,"onUpdate:modelValue":e=>a.dialect=e,options:e.language_options,"option-label":"dialect","option-value":"dialect",disable:""},null,8,["modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0),a.type_of_medium.length&&0==t?((0,l.wg)(),(0,l.iD)("div",Ae,[(0,l.Wm)(u,{outlined:"",label:"Duration (in seconds)",modelValue:a.lengthSize,"onUpdate:modelValue":e=>a.lengthSize=e,disable:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0),a.type_of_medium.size&&0==t?((0,l.wg)(),(0,l.iD)("div",Ue,[(0,l.Wm)(u,{outlined:"",label:"Dimension",modelValue:a.lengthSize,"onUpdate:modelValue":e=>a.lengthSize=e,hint:"e.i format: 8 x 11 inches",disable:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0),a.type_of_medium.others&&0==t?((0,l.wg)(),(0,l.iD)("div",Se,[(0,l.Wm)(u,{outlined:"",label:"Others",modelValue:a.others,"onUpdate:modelValue":e=>a.others=e,disable:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0)])))),128))])):(0,l.kq)("",!0),"MULTIMEDIA"==s.parentData.type_of_media?((0,l.wg)(),(0,l.iD)("div",Te,[(0,l._)("div",Me,[(0,l._)("div",Ce,[(0,l.Wm)(f,{dense:"",modelValue:e.isMoving,"onUpdate:modelValue":a[5]||(a[5]=a=>e.isMoving=a),val:!0,label:"MULTIMEDIA-MOVING",disable:""},null,8,["modelValue"]),(0,l.Wm)(f,{dense:"",modelValue:e.isMoving,"onUpdate:modelValue":a[6]||(a[6]=a=>e.isMoving=a),val:!1,label:"MULTIMEDIA-STATIC (MAX OF 5 LAYOUT)",disable:""},null,8,["modelValue"])])]),(0,l._)("div",Ee,[(0,l._)("div",null,[(0,l._)("table",Le,[(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.type_of_medium_options,((t,o)=>((0,l.wg)(),(0,l.iD)("tr",{key:o,class:"row"},[(0,l._)("td",Ze,[(0,l.Wm)(g,{label:t.val,val:t.type_of_medium,modelValue:e.type_of_mediums_updated,"onUpdate:modelValue":a[7]||(a[7]=a=>e.type_of_mediums_updated=a),disable:""},null,8,["label","val","modelValue"])]),e.isMoving||"DIGITAL STATIC"==t.val?e.isMoving&&0==o?((0,l.wg)(),(0,l.iD)("td",Ne,[(0,l.Wm)(u,{modelValue:t.lengthSize,"onUpdate:modelValue":e=>t.lengthSize=e,"input-class":"text-right",disable:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])])):(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("td",ze,[(0,l.Wm)(u,{modelValue:t.lengthSize,"onUpdate:modelValue":e=>t.lengthSize=e,"input-class":"text-right",disable:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])]))])))),128))])])])])])):(0,l.kq)("",!0),(0,l.Wm)(_)])),_:1}),(0,l.Wm)(p,{bordered:"",square:!0,class:"q-pa-md q-mt-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"q-pa-sm"},{default:(0,l.w5)((()=>[Qe,Oe])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{bordered:"",class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"q-pa-sm"},{default:(0,l.w5)((()=>[$e,Re,(0,l._)("div",Pe,[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),Fe])])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l._)("div",Be,[(0,l._)("div",Ye,[(0,l._)("div",Ge,[(0,l._)("div",He,[je,Xe,(0,l._)("label",Ke,(0,i.zw)(s.parentData.origMainDocUrl),1)])])]),(0,l._)("div",Je,[(0,l.Wm)(b,{color:"red-14",onClick:a[8]||(a[8]=e=>s.viewDoc(s.parentData.origMainDocUrl))},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"open_in_new"}),ea])),_:1})])])])),_:1}),s.parentData.subDocUrl?((0,l.wg)(),(0,l.iD)("hr",aa)):(0,l.kq)("",!0),s.parentData.subDocUrl?((0,l.wg)(),(0,l.j4)(_,{key:1,class:"q-pa-sm"},{default:(0,l.w5)((()=>[(0,l._)("div",ta,[(0,l.Wm)(r,{name:"bookmark",class:"text-red-15",style:{"font-size":"24px"}}),la])])),_:1})):(0,l.kq)("",!0),s.parentData.subDocUrl?((0,l.wg)(),(0,l.j4)(_,{key:2},{default:(0,l.w5)((()=>[(0,l._)("div",oa,[(0,l._)("div",ia,[(0,l._)("div",na,[(0,l._)("div",sa,[da,ma,(0,l._)("label",ra,(0,i.zw)(s.parentData.origMainDocUrl),1)])])]),(0,l._)("div",ua,[(0,l.Wm)(b,{color:"red-14",onClick:a[9]||(a[9]=e=>s.viewDoc(s.parentData.subDocUrl))},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"open_in_new"}),ca])),_:1})])])])),_:1})):(0,l.kq)("",!0)])),_:1}),(0,l._)("div",pa,[e.type_of_document?((0,l.wg)(),(0,l.iD)("div",_a,[(0,l._)("div",fa,[(0,l.Wm)(c,{outlined:"",label:"Type Of Document *",modelValue:e.type_of_document,"onUpdate:modelValue":a[10]||(a[10]=a=>e.type_of_document=a),"option-label":"name","option-value":"id",options:e.documents_type,rules:[e=>!!e||"Field is required"]},null,8,["modelValue","options","rules"])])])):(0,l.kq)("",!0),(0,l._)("div",ga,["Yes"==e.type_of_document.launch?((0,l.wg)(),(0,l.iD)("div",ba,[(0,l.Wm)(u,{label:"Date of launch *",modelValue:e.date_of_launch,"onUpdate:modelValue":a[11]||(a[11]=a=>e.date_of_launch=a),outlined:"",type:"date",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])):(0,l.kq)("",!0),"Yes"==e.type_of_document.expire?((0,l.wg)(),(0,l.iD)("div",ha,[(0,l.Wm)(u,{label:"Expiration Date *",modelValue:e.expiration_date,"onUpdate:modelValue":a[12]||(a[12]=a=>e.expiration_date=a),type:"date",outlined:"",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])):(0,l.kq)("",!0),"Yes"==e.type_of_document.basis?((0,l.wg)(),(0,l.iD)("div",ya,[(0,l.Wm)(u,{label:"Has Basis *",modelValue:e.basis,"onUpdate:modelValue":a[13]||(a[13]=a=>e.basis=a),outlined:"",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])):(0,l.kq)("",!0),"Yes"==e.type_of_document.variant?((0,l.wg)(),(0,l.iD)("div",va,[(0,l.Wm)(u,{label:"Has Variant *",modelValue:e.variant,"onUpdate:modelValue":a[14]||(a[14]=a=>e.variant=a),outlined:"",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])):(0,l.kq)("",!0),"Yes"==e.type_of_document.remarks?((0,l.wg)(),(0,l.iD)("div",wa,[(0,l.Wm)(u,{label:"Has Remarks *",modelValue:e.remarks,"onUpdate:modelValue":a[15]||(a[15]=a=>e.remarks=a),outlined:"",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])):(0,l.kq)("",!0),"Yes"==e.type_of_document.input?((0,l.wg)(),(0,l.iD)("div",Da,[(0,l.Wm)(u,{label:"Has Input *",modelValue:e.input,"onUpdate:modelValue":a[16]||(a[16]=a=>e.input=a),outlined:"",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])):(0,l.kq)("",!0)]),(0,l.Wm)(b,{class:"bg-red-14 text-white",style:{width:"100%"},block:"",label:"Add to List",icon:"task_alt"})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var Va=t(6827);const Ia={props:["appId"],data:()=>({company_name:"",single_media:"",language:null,type_of_medium_options:[],type_of_mediums_updated:[],type_of_mediums_length:[],size:0,length:0,execution:"",others:[],execution_options:[],medium_options:[],language_options:[],multimedia_options:[],multimedia_moving_static:[],isMoving:null,is_moving_length:"",type_of_document:"",documents_type:[],current:1,max:0,req_size:1e4,loading_list:!0,date_of_launch:new Date("MM/DD/YYYY"),expiration_date:new Date("MM/DD/YYYY")}),computed:{parentData(){return this.$parent.$parent.$parent.$parent}},watch:{isMoving(e,a){let t=this;[!0,!1].includes(e)&&(this.type_of_medium_options=this.multimedia_options.filter((a=>a.isMoving==e)),"MULTIMEDIA"==this.parentData.type_of_media&&(this.type_of_mediums_updated=this.parentData.type_of_medium_parsed,this.type_of_medium_options.map((e=>{t.parentData.type_of_medium.map((a=>{if(e.type_of_medium==a.type_of_medium)return{...e,lengthSize:a.lengthSize}}))}))))},type_of_document(e,a){console.log(e,"DATE OF LAUNCH")}},mounted(){this.initApp()},methods:{async getDocType(){let e=this,a={page:e.current,size:e.req_size,order:"name:asc",search:""};e.loading_list=!0;let{data:t,status:l}=await e.$store.dispatch("admin_api/getAllTypeOfDocu",a);if([200,201].includes(l)){console.log(t.rows);let a=t.rows.map((e=>{let a={...e};for(let t in e)"id"!=t&&"status"!=t&&"name"!=t?a[t]=e[t]?"Yes":"No":"status"==t&&(a[t]=e[t]?"Active":"Inactive");return a}));console.log(a),e.documents_type=a,e.current=t.cpage,e.max=t.tpage,e.loading_list=!1}else e.loading_list=!1},async saveUpdate(){let e=this,a={form_group:this.parentData.form_group,type_of_media:this.parentData.type_of_media,ad_title:this.parentData.ad_title,tag_line:this.parentData.tag_line,application_type:this.parentData.application_type,type_of_mediums:[]};this.type_of_medium_options.map(((e,t)=>this.type_of_mediums_updated.map(((t,l)=>{e.type_of_medium==t&&(e.type_of_medium=t,delete e.val,a.type_of_mediums.push(e))})))),"SINGLE MEDIA"==this.parentData.type_of_media&&(console.log(this.parentData.type_of_medium,"CURRENT TYPE OF MEDIUM"),a.type_of_mediums=this.parentData.type_of_medium.map((e=>({...e,type_of_medium:e.type_of_medium.desc})))),a={data:a,id:this.appId},e.parentData.type_of_medium_parsed=a.data.type_of_mediums.map((e=>e.type_of_medium)),console.log(a,"UPDATE PAYLOAD");let{data:t,status:l}=await e.$store.dispatch("s1/updateApp",a);[200,201].includes(l)?(Va.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),e.initApp()):Va.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},viewDoc(e){window.open(e,"_blank")},initApp(){var e,a,t;let l=this;this.parentData.type_of_media,this.getAllExecution(),this.getAllMediums(),this.getAllLanguage(),this.getDocType(),this.multimedia_options=[{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"CINEMA",type_of_medium:"CINEMA"},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"COLLATERALSC",type_of_medium:"COLLATERALSC"},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"DIGITAL VIDEO",type_of_medium:"DIGITAL VIDEO"},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"E-OOH",type_of_medium:""},{dialect:"",exececution:"",isMoving:!0,length:"",lengthSize:"",others:"",val:"TELEVISION",type_of_medium:"TELEVISION"},{dialect:"",exececution:"",isMoving:!1,length:"",lengthSize:"",others:"",val:"COLLATERALS",type_of_medium:"COLLATERALS"},{dialect:"",exececution:"",isMoving:!1,length:"",lengthSize:"",others:"",val:"DIGITAL STATIC",type_of_medium:"DIGITAL STATIC"},{dialect:"",exececution:"",isMoving:!1,length:"",lengthSize:"",others:"",val:"OOH",type_of_medium:"OOH"},{dialect:"",exececution:"",isMoving:0,length:"",lengthSize:"",others:"",val:"PRINT",type_of_medium:"PRINT"}],this.isMoving=!(null===(e=this.parentData)||void 0===e||!e.type_of_medium)&&0!=(null===(a=this.parentData)||void 0===a||null===(t=a.type_of_medium[0])||void 0===t?void 0:t.isMoving),"MULTIMEDIA"==this.parentData.type_of_media&&(this.type_of_mediums_updated=this.parentData.type_of_medium_parsed,console.log(this.type_of_mediums_updated,"MULTIMEDIA!!!")),this.type_of_medium_options=this.multimedia_options.filter((e=>e.isMoving==l.isMoving)),this.parentData.type_of_medium_new.map((e=>{this.type_of_medium_options.map(((a,t)=>{e.type_of_medium==a.type_of_medium&&(l.type_of_medium_options[t].lengthSize=e.lengthSize)}))})),console.log(this.parentData.type_of_medium_parsed,"CHECK MEDIUMS"),this.type_of_mediums_updated=this.parentData.type_of_medium_parsed},async getAllExecution(){let e=this,a={page:1,size:1e3,order:"type:asc",search:""},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllExecutionTypes",a);e.execution_options=t.rows},async getAllMediums(){let e=this,a={page:1,size:1e3,order:"desc:asc",search:""},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllMediums",a);e.medium_options=t.rows;let o=e.parentData.type_of_medium_parsed[0];"SINGLE MEDIA"==e.parentData.type_of_media&&t.rows.map(((a,t)=>{o==a.desc&&(e.parentData.type_of_medium[0].type_of_medium=a,console.log(a))}))},async getAllLanguage(){let e=this,a={page:1,size:1e3,order:"dialect:asc",search:""},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllDialects",a);e.language_options=t.rows}}};var ka=t(1480),Wa=t(1221),xa=t(8879);const Aa=(0,Q.Z)(Ia,[["render",qa]]),Ua=Aa;function Sa(e,a,t,o,i,n){const s=(0,l.up)("q-icon"),d=(0,l.up)("q-item-section"),m=(0,l.up)("q-color"),r=(0,l.up)("q-item"),u=(0,l.up)("q-list"),c=(0,l.up)("q-btn-dropdown"),p=(0,l.up)("q-editor");return(0,l.wg)(),(0,l.j4)(p,{modelValue:i.editor,"onUpdate:modelValue":a[4]||(a[4]=e=>i.editor=e),"toolbar-bg":"grey-3",ref:"editor","content-style":{fontFamily:e.Calibri},onClick:n.initEditor,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:e.$q.lang.editor.fontSize,icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-2","size-1"]},{label:e.$q.lang.editor.default_font,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font"]},"token","removeFormat","bold","italic","strike","underline","subscript","superscript","quote","unordered","ordered","outdent","indent","undo","redo"]],fonts:i.fonts},{token:(0,l.w5)((()=>[(0,l.Wm)(c,{dense:"","no-caps":"",ref:"token","no-wrap":"",unelevated:"",color:"white","text-color":"primary",label:"Higlight / Text Color",size:"sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{dense:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{tag:"label",clickable:"",onClick:a[1]||(a[1]=e=>n.color("backColor",i.highlight))},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:"highlight"})])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:i.highlight,"onUpdate:modelValue":a[0]||(a[0]=e=>i.highlight=e),"default-view":"palette","no-header":"","no-footer":"",palette:["#ffccccaa","#ffe6ccaa","#ffffccaa","#ccffccaa","#ccffe6aa","#ccffffaa","#cce6ffaa","#ccccffaa","#e6ccffaa","#ffccffaa","#ff0000aa","#ff8000aa","#ffff00aa","##00ff00aa","#00ff80aa","#00ffffaa","#0080ffaa","#0000ffaa","#8000ffaa","#ff00ffaa"],class:"my-picker"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(r,{tag:"label",clickable:"",onClick:a[3]||(a[3]=e=>n.color("foreColor",i.foreColor))},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:"format_paint"})])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:i.foreColor,"onUpdate:modelValue":a[2]||(a[2]=e=>i.foreColor=e),"no-header":"","no-footer":"","default-view":"palette",palette:["#ff0000","#ff8000","#ffff00","##00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff"],class:"my-picker"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1},8,["modelValue","content-style","onClick","toolbar","fonts"])}X()(Ia,"components",{QExpansionItem:O.Z,QItemSection:$.Z,QAvatar:R.Z,QIcon:P.Z,QCard:F.Z,QCardSection:B.Z,QForm:Y.Z,QInput:H.Z,QSelect:G.Z,QRadio:ka.Z,QCheckbox:Wa.Z,QBtn:xa.Z});const Ta={data(){return{foreColor:"#000000",highlight:"#ffff00aa",editor:"Select some text, then select a highlight or text color!",fonts:{default_font:"Calibri",calibri_body:"Calibri",arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}}},mounted(){this.$nextTick((()=>{this.initEditor()}))},methods:{initEditor(){document.querySelector(".q-editor__toolbars-container").addEventListener("click",(()=>{let e=document.getElementsByTagName("font"),a=e.length;for(var t=0;t<a;t++){let a=e[t].innerHTML;switch(a){case"Very small":e[t].innerHTML="10 PT",document.querySelector("font");break;case"A bit small":e[t].innerHTML="11 PT";break}console.log()}}))},color(e,a){const t=this.$refs.editor;this.$refs.token.hide(),t.caret.restore(),t.runCmd(e,a),t.focus()}}};var Ma=t(4695),Ca=t(8479),Ea=t(3246),La=t(490),Za=t(1819);const za=(0,Q.Z)(Ta,[["render",Sa]]),Na=za;X()(Ta,"components",{QEditor:Ma.Z,QBtnDropdown:Ca.Z,QList:Ea.Z,QItem:La.Z,QItemSection:$.Z,QIcon:P.Z,QColor:Za.Z});t(3195);const Qa={components:{ClientInformation:J,PresentorInformation:_e,MaterialInformation:Ua,RichText:Na},computed:{disable_comment_btn(){return("internal_comments_tab"!==this.tab||""===this.internal_comment_input)&&("external_comments_tab"!==this.tab||""===this.external_comment_input)},comment_type(){return"internal_comments_tab"==this.tab?"internal_comment":"external_comment"},selectedId(){return this.$route.params.id}},data:()=>({is_loading:!0,internal_comment_input:"",external_comment_input:"",tab:"internal_comments_tab",refresh_sec:0,id:42,form_type:"s1",form_group:"",referrence_code:null,application_type:"REGULAR",slugified_app_type:"regular",process_type:"ORIGINAL",brand:"BRAND D",product:"SAMPLE PRODUCT IN D",category:"SAVOURY FOODS & SEASONINGS",type_of_media:"MULTIMEDIA",hasBirFormFiled:0,isRejected:null,payment_status:"UNPAID",isPaidByApplicant:0,amount:null,ad_title:"ET EST QUIS MINUS Q",tag_line:"INCIDUNT QUIA CULPA",hasNoSubDocs:1,origMainDocUrl:"https://uat-asc-bucket.s3.amazonaws.com/70d6feda7c00a839d4030e373f1d8bc5.pdf",subDocUrl:"https://uat-asc-bucket.s3.amazonaws.com/70d6feda7c00a839d4030e373f1d8bc5.pdf",complianceMainDocUrl:null,complianceSubDocUrl:null,decisionFormURL:null,stampMaterialUrl:null,hasSubmitted:1,internal_comment:null,external_comment:null,applicant_status:"S1 APPLICATION SUBMITTED",internal_status:"S1 APPLICATION SUBMITTED",decision_status:null,release_status:null,isLocked:1,forCompliance:0,forS2:0,application_date:"2022-11-14T13:22:10.115Z",submission_date:"2022-11-14",submission_time:"20:56:36",decision_status_date:null,release_date:null,issued_date:null,valid_until_date:null,modified_at:"2022-11-16T18:25:13.000Z",archived_at:null,verifiedDateByEvaluator:null,verifiedDateByAdSpe:null,verifiedDateByScreener:null,verifiedDateByReviewer:null,revision_count:0,loading_list:!1,reviewer_id:null,adspe_id:null,screener_id:null,affiliate_name:"",screener_options:[],type_of_medium_parsed:[],type_of_medium_new:[]}),mounted(){this.initApp()},methods:{paymentStatusColor(e){switch(e){case"FOR PAYMENT":return{bg:"yellow-5",text:"dark"};case"PAID":return{bg:"green-5",text:"white"};case"UNPAID":return{bg:"red-14",text:"white"}}},intFormatter(e){const a=Intl.NumberFormat("en-US",{style:"currency",currency:"PHP"});return e/=100,a.format(e)},initApp(){this.getSpecific(),this.getAllUsers()},backToList(){this.$router.push({name:"individual-application-list"})},async getAllUsers(){let e=this;e.loading_list=!0;let a={page:1,size:1e3,order:"fname:asc",search:"",filter:"asc"},{data:t,status:l}=await e.$store.dispatch("admin_api/getAllUsers",a);e.screener_options=t.rows.filter((e=>"scrner"==e.type)),e.adspe_options=t.rows.filter((e=>"evaltr"==e.type))},async getSpecific(){var e,a;let t=this;t.is_loading=!0;let l={id:t.selectedId},{data:o,status:i}=await t.$store.dispatch("asc_user/getSpecific",l);console.log(o);for(let n in o)t[n]=o[n];t.applicant_fullname=`${t.applicant.fname} ${t.applicant.mname} ${t.applicant.lname}`||"--",t.company_name=`${t.company.name}`||"--",t.address=`${t.company.address}`||"--",t.phone=`${t.applicant.phone}`||"--",t.company_phone=`${t.company.phone}`||"--",t.company_email=`${t.applicant.email}`||"--",t.internal_comment_input=`${null!=t.internal_comment?t.internal_comment:""}`||"",t.external_comment_input=`${null!=t.external_comment?t.external_comment:""}`||"",t.affiliate_name=(null===(e=o.company)||void 0===e||null===(a=e.affiliate)||void 0===a?void 0:a.name)||"--",t.type_of_medium_parsed=t.type_of_medium.map((e=>e.type_of_medium)),t.type_of_medium_new=o.type_of_medium,t.$nextTick((()=>{t.is_loading=!1}))},async saveComment(){let e=this,a={id:e.selectedId,data:{internal_comment:e.internal_comment_input}};"external_comment"===e.comment_type&&(a={id:e.selectedId,data:{external_comment:e.external_comment_input}});let{data:t,status:l}=await e.$store.dispatch("asc_user/comment",a);[200,201].includes(l)?Va.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}):Va.Z.create({message:t.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})},async reassign(e){let a=this,t={id:this.$route.params.id,data:{assigned_user_id:1005==e?a.screener_id.id:a.adspe_id.id,assigned_userRole:e}},{data:l,status:o}=await a.$store.dispatch("asc_user/reassign",t);[200,201].includes(o)?(Va.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),this.$router.push({name:"individual-application-list"})):Va.Z.create({message:l.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"red"})}}};var Oa=t(926),$a=t(990),Ra=t(3358),Pa=t(7817),Fa=t(900);const Ba=(0,Q.Z)(Qa,[["render",x]]),Ya=Ba;X()(Qa,"components",{QCard:F.Z,QCardSection:B.Z,QIcon:P.Z,QBtn:xa.Z,QSeparator:Oa.Z,QBadge:$a.Z,QInput:H.Z,QList:Ea.Z,QSpinnerHourglass:Ra.Z,QTabs:Pa.Z,QTab:Fa.Z,QSelect:G.Z});const Ga={data:()=>({}),components:{DetailsIndex:Ya}},Ha=(0,Q.Z)(Ga,[["render",o]]),ja=Ha},3195:()=>{}}]);