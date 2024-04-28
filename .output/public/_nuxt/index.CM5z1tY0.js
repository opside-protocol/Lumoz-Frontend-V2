import{_ as $,e as l,f as _,h as e,t as o,n as k,a6 as y,a7 as T,a8 as a,a9 as g,q as w,aa as f,p as K,m as Z,ab as z,ac as b,k as v,ad as P,ae as j,r as E,af as F,l as I,ag as B,ah as H,ai as M,aj as O,ak as V,j as m,v as G,b as L,al as R}from"./entry.C-k5VI3Z.js";import{_ as Y,a as Q,E as J,b as X}from"./wallet.vue.B8QyeP9h.js";const ee=""+new URL("banner.CUrpT2qk.avif",import.meta.url).href,te={},se={class:"lg:flex items-center py-8"},ne={class:"lg:w-2/3 lg:pr-1/8"},oe={class:"slideShine text-3xl text-center lg:text-5xl lg:text-left font-bold"},re={class:"font-bold text-center lg:text-left text-lg py-4 lg:py-8"},ie={class:"text-center lg:text-left"},ce=e("img",{src:ee,class:"w-2/3 ml-1/6 mt-8 lg:w-1/3 lg:ml-0 lg:mt-0",alt:""},null,-1);function ae(c,n){return l(),_("div",se,[e("div",ne,[e("div",oe,o(c.$t("home.title")),1),e("div",re,o(c.$t("home.content1")),1),e("div",ie,o(c.$t("home.content2")),1)]),ce])}const le=$(te,[["render",ae]]),de={key:0,class:"flex flex-col items-center justify-center"},_e={class:"flex font-bold"},ue={class:"ml-1"},me=k({__name:"white-status",setup(c){const n=y(),t=T();return(r,d)=>a(t).account?(l(),_("div",de,[e("div",_e,[e("div",null,o(r.$t("home.white.my1")),1),e("div",ue,o(a(n).user.preTier===-1?r.$t("home.white.none"):"Tier "+(a(n).user.preTier||"-")),1)])])):g("",!0)}}),pe=c=>(K("data-v-43e4b54a"),c=c(),Z(),c),he={class:"flex justify-between"},fe={class:"flex items-center"},ve={class:"text-sm"},we={key:0,class:"mt-4 flex items-center"},be={class:"flex-1 tier-pro-bg h-2.5 mx-4 rounded-full"},$e={class:"flex text-sm"},xe={class:"text-primary-900"},ge=pe(()=>e("div",null,"/",-1)),ke=k({__name:"tier1",props:{dark:{type:Boolean,default:!0},index:{default:0}},setup(c){const n=y(),t=c,r=w(()=>{if(!t.index)return"-";const i=n.prices.find(p=>p.tier_number==t.index);return i?i.price+" USD":"-"}),d=w(()=>{if(t.dark||!n.pre.volume)return"w-0";const i=Math.floor(Number(n.pre.sell_count)/Number(n.pre.volume)*100);return i===0?"w-0":`w-${i}/100`});return(i,p)=>(l(),_("div",{class:f(["rounded-lg mb-4",i.dark?"bg-[#343335]":"tier-box"])},[e("div",{class:f(["p-4",i.dark?"":"tuer-box-inner"])},[e("div",he,[e("div",fe,[e("div",{class:f(["font-bold",i.dark?"":"slideShine"])},"Tier "+o(i.index),3),e("div",{class:f(["ml-8",i.dark?"text-[#FF6b00]":"text-primary-900"])},o(i.dark?i.$t("home.white.close"):i.$t("home.white.open")),3)]),e("div",ve,o(i.$t("home.white.price"))+": "+o(a(r)),1)]),i.dark?g("",!0):(l(),_("div",we,[e("div",null,o(i.$t("home.white.pro")),1),e("div",be,[e("div",{class:f(["rounded-full tier-pro-con h-full",a(d)])},null,2)]),e("div",$e,[e("div",xe,o(a(n).pre.sell_count),1),ge,e("div",null,o(a(n).pre.volume),1)])]))],2)],2))}}),ye=$(ke,[["__scopeId","data-v-43e4b54a"]]),Se={},Ce={class:"bg-[#232323] p-4 rounded-2xl border border-[#FFFFFF22]"};function Fe(c,n){return l(),_("div",Ce,[z(c.$slots,"default")])}const q=$(Se,[["render",Fe]]),Te={class:"text-2xl slideShineY font-bold mb-8"},Ue={class:"h-100 overflow-y-auto"},Ae={key:1},De=k({__name:"white-get-tier",setup(c){const n=y();return(t,r)=>{const d=ye,i=q;return l(),b(i,null,{default:v(()=>[e("div",Te,o(t.$t("home.white.t1")),1),e("div",Ue,[a(n).pre.current_tier_number?(l(),b(d,{key:0,index:a(n).pre.current_tier_number,dark:!1},null,8,["index"])):g("",!0),a(n).pre.current_tier_number>1?(l(),_("div",Ae,[(l(!0),_(P,null,j(a(n).pre.current_tier_number-1,p=>(l(),b(d,{key:p,index:p,dark:""},null,8,["index"]))),128))])):g("",!0)])]),_:1})}}}),Ne="data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30%207.5C42.4264%207.5%2052.5%2017.5736%2052.5%2030C52.5%2042.4264%2042.4264%2052.5%2030%2052.5C25.9018%2052.5%2022.0595%2051.4043%2018.75%2049.4899C15.3342%2047.514%2012.486%2044.6658%2010.5101%2041.25'%20stroke='url(%23paint0_linear_1470_10924)'%20stroke-width='5'%20stroke-linecap='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1470_10924'%20x1='10.5101'%20y1='17.5'%20x2='50.5375'%20y2='41.9393'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23000'/%3e%3cstop%20offset='0.71875'%20stop-color='%23000'/%3e%3cstop%20offset='1'%20stop-color='%23000'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Ee={class:"text-2xl slideShineY font-bold mb-8"},Ie={class:"flex items-center justify-between"},Be={class:"mr-4"},He=["onClick"],Pe=["src"],je={class:"p-8 border home-deposit-box rounded-2xl mt-4 border-[#FFFFFF22]"},qe={class:"flex justify-between"},We={class:"font-bold"},Ke={class:"flex justify-between mt-8"},Ze={class:"font-bold"},ze={class:"flex justify-between mt-8"},Me={class:"text-right"},Oe={class:"font-bold"},Ve={class:"text-xs"},Ge={class:"mt-8 mb-4 flex items-center justify-center"},Le={class:"flex items-center justify-center"},Re={key:0,src:Ne,class:"w-6 mr-2 img-rotate",alt:""},Ye=k({__name:"white-deposit",setup(c){const n=T(),t=y(),r=E(F[0].name),d=E(!1),i=w(()=>{if(!t.pre.current_tier_number)return"-";const s=t.prices.find(h=>h.tier_number==t.pre.current_tier_number);return s?s.price+" USD":"-"}),p=w(()=>r.value==="ZKFair"?t.depositAmount.zkfair+" ZKF":r.value==="Merlin"?t.depositAmount.merlin+" BTC":r.value==="Arbitrum One"?t.depositAmount.arbitrum+" ETH":"-"),C=w(()=>r.value==="ZKFair"?`1 ZKF = ${t.tokenPrices.zkf} USD(Price Now)`:r.value==="Merlin"?`1 BTC = ${t.tokenPrices.btc} USD(Price Now)`:r.value==="Arbitrum One"?`1 ETH = ${t.tokenPrices.eth} USD(Price Now)`:"-"),x=w(()=>t.user.whiteDeposited===1),W=async()=>{if(!(d.value||x.value)){d.value=!0;try{const s=F.find(u=>u.name===r.value);let h=0;switch(s==null?void 0:s.name){case"ZKFair":h=t.depositAmount.zkfair;break;case"Merlin":h=t.depositAmount.merlin;break;case"Arbitrum One":h=t.depositAmount.arbitrum;break}if(!await n.checkAndSwitchNetwork(s))throw new Error;if(await n.setNetwork(s==null?void 0:s.name,s==null?void 0:s.chainId),s&&s.name==="ZKFair"){let u=new B(s.zkfAddress,s.rpcUrl,s.chainId);const D=await u.allowance(n.account,s.depositContract);if(Number(D)<h){u=new B(s.zkfAddress,"",null,H().web3Provider.getSigner());const N=await u.approve(s.depositContract);if(!N){d.value=!1;return}await N.wait()}}let S;S=await new M(s.depositContract,s==null?void 0:s.rpcUrl,s==null?void 0:s.chainId,H().web3Provider.getSigner()).deposit(s.name==="ZKFair"?0:h),await S.wait(),t.depositSuccess(t.pre.current_tier_number),t.getUser(),O("Deposit success!"),d.value=!1}catch{V("Deposit failed!"),d.value=!1}}};return(s,h)=>{const U=Y,S=Q,A=q;return l(),b(A,null,{default:v(()=>[e("div",Ee,o(s.$t("home.white.deposit")),1),e("div",Ie,[e("div",Be,o(s.$t("home.white.network")),1),e("div",null,[(l(!0),_(P,null,j(a(F),u=>(l(),_("div",{class:"hvr-float",key:u.name},[e("div",{class:f(["p-2 py-2 mr-4 rounded-xl flex items-center border-2 cursor-pointer hover:border-primary-900",a(r)===u.name?"bg-[#BEFE001A] border-primary-900 text-primary-900":"bg-[#353533] border-[#353533]"]),onClick:D=>r.value=u.name},[e("img",{src:u.img,alt:"",class:"w-6 mr-2"},null,8,Pe),I(" "+o(u.name),1)],10,He)]))),128))])]),e("div",je,[e("div",qe,[e("div",null,o(s.$t("home.white.current")),1),e("div",We,"Tier "+o(a(t).pre.current_tier_number),1)]),e("div",Ke,[e("div",null,o(s.$t("home.white.pricepnode")),1),e("div",Ze,o(a(i)),1)]),e("div",ze,[e("div",null,o(s.$t("home.white.depositToken")),1),e("div",Me,[e("div",Oe,o(a(p))+" (50 USD)",1),e("div",Ve,o(a(C)),1)])])]),e("div",Ge,[a(n).account?(l(),b(S,{key:1,class:f(["w-32",a(d)||a(x)?"cursor-not-allowed":""]),light:a(x),onClick:W},{default:v(()=>[e("div",Le,[a(d)?(l(),_("img",Re)):g("",!0),I(" "+o(a(t).user.whiteDeposited===1?s.$t("home.white.deposited"):s.$t("home.white.confirm")),1)])]),_:1},8,["class","light"])):(l(),b(U,{key:0}))])]),_:1})}}}),Qe=$(Ye,[["__scopeId","data-v-681beb4a"]]),Je={},Xe=e("div",{class:"text-2xl lg:text-4xl font-bold text-center my-8"},"FAQ",-1);function et(c,n){const t=J,r=X;return l(),_("div",null,[Xe,e("div",null,[m(r,{value:1,class:"white-faq"},{default:v(()=>[m(t,{title:c.$t("home.white.faq.t1"),name:"1"},{default:v(()=>[e("div",null,o(c.$t("home.white.faq.c1")),1)]),_:1},8,["title"])]),_:1}),m(r,{value:1,class:"white-faq mt-8"},{default:v(()=>[m(t,{title:c.$t("home.white.faq.t2"),name:"1"},{default:v(()=>[e("div",null,o(c.$t("home.white.faq.c2")),1)]),_:1},8,["title"])]),_:1})])])}const tt=$(Je,[["render",et]]),st={},nt={class:"text-2xl lg:text-4xl font-bold text-center"},ot={class:"py-8 text-center px-8 lg:w-2/3 lg:ml-1/6 lg:px-0"},rt={class:"py-8 grid lg:grid-cols-2 gap-8"};function it(c,n){const t=me,r=De,d=Qe,i=tt;return l(),_("div",null,[e("div",null,[e("div",nt,o(c.$t("home.white.title")),1),e("div",ot,o(c.$t("home.white.content")),1)]),m(t),e("div",rt,[m(r),m(d)]),m(i)])}const ct=$(st,[["render",it]]),at=window.setInterval,lt={class:"container mx-auto"},ut=k({__name:"index",setup(c){let n=null;const t=y(),r=T();G(()=>{n&&clearInterval(n),r.account&&t.getUser(r.account),t.getPrices(),t.getDepositAmount(),t.getTokenPrice(),d(),n=at(()=>{d()},1e3*60)}),L(()=>r.account,()=>{r.account?(t.resetUser(),t.getUser(r.account)):t.resetUser()}),R(()=>{n&&clearInterval(n)});const d=()=>{t.getWhiteTiers()};return(i,p)=>{const C=le,x=ct;return l(),_("div",lt,[m(C),m(x)])}}});export{ut as default};
