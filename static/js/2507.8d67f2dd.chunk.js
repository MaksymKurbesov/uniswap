"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2507],{26303:(e,n,i)=>{i.d(n,{t:()=>c});var t=i(92936),r=i(45779),o=i(61152);function s(e,n,i){const t=n.getContext("2d");if(t){let{width:r,height:o}=e;const s=r/o;o=i,r=Math.round(s*i),n.width=r*devicePixelRatio,n.height=o*devicePixelRatio,n.style.width=r+"px",n.style.height=o+"px",t.scale(devicePixelRatio,devicePixelRatio),t.clearRect(0,0,r,o),t.drawImage(e,0,0,r,o)}}const d=o.default.div.withConfig({displayName:"PositionNFT__NFTGrid",componentId:"sc-236359cc-0"})`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,l=o.default.canvas.withConfig({displayName:"PositionNFT__NFTCanvas",componentId:"sc-236359cc-1"})`
  grid-area: overlap;
`,a=o.default.img.withConfig({displayName:"PositionNFT__NFTImage",componentId:"sc-236359cc-2"})`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`;function c({image:e,height:n}){const[i,o]=(0,r.useState)(!1),c=(0,r.useRef)(null),u=(0,r.useRef)(null);return(0,t.jsxs)(d,{onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{u.current&&c.current&&s(u.current,c.current,n),o(!1)},children:[(0,t.jsx)(l,{ref:c}),(0,t.jsx)(a,{ref:u,src:e,hidden:!i,onLoad:()=>{u.current&&c.current&&s(u.current,c.current,n)}})]})}},98640:(e,n,i)=>{i.d(n,{Z:()=>d});var t=i(92936),r=i(36664);const o=r.ZP.button`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,s=r.ZP.span`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:n})=>n?e.surface1:"none"};
  color: ${({theme:e,isActive:n})=>n?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:n})=>n?e.neutral2:e.neutral3};
  }
`;function d({currencyA:e,currencyB:n,handleRateToggle:i}){var r,d;const l=null===(r=e)||void 0===r?void 0:r.wrapped,a=null===(d=n)||void 0===d?void 0:d.wrapped,c=l&&a&&l.sortsBefore(a);return l&&a?(0,t.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:i,children:(0,t.jsxs)(o,{width:"fit-content",children:[(0,t.jsx)(s,{isActive:c,fontSize:"12px",children:c?e.symbol:n.symbol}),(0,t.jsx)(s,{isActive:!c,fontSize:"12px",children:c?n.symbol:e.symbol})]})}):null}},38043:(e,n,i)=>{i.d(n,{b:()=>u});var t=i(11604),r=i(48630),o=i(44913),s=i(29717),d=i(45779);function l(e,n,i,t,r,o,s){try{var d=e[o](s),l=d.value}catch(a){return void i(a)}d.done?n(l):Promise.resolve(l).then(t,r)}function a(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var o=e.apply(n,i);function s(e){l(o,t,r,s,d,"next",e)}function d(e){l(o,t,r,s,d,"throw",e)}s(void 0)}))}}const c="data:application/json;base64,";function u(e,n,i){const l=function(e,n){const i=(0,s.GL)(!1,n),t=(0,s.en)(!1,n);return e===o.Qe.V3?i:t}(i??o.Qe.V3,n),{data:u,isLoading:h,error:x}=(0,r.a)({queryKey:["PositionTokenURI",e,n,i],queryFn:a((function*(){var n,i;const r=e instanceof t.O$?e.toHexString():null===(n=e)||void 0===n?void 0:n.toString(16);return r?yield null===(i=l)||void 0===i?void 0:i.tokenURI(r):null}))});return(0,d.useMemo)((()=>{if(x||!e)return{valid:!1,loading:!1};if(h)return{valid:!0,loading:!0};if(!u)return{valid:!1,loading:!1};if(!u||!u.startsWith(c))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(u.slice(c.length)))}}catch(n){return{valid:!1,loading:!1}}}),[x,h,u,e])}},78087:(e,n,i)=>{i.d(n,{t:()=>h});var t=i(11604),r=i(76078),o=i(29717),s=i(24055),d=i(78164),l=i(45779),a=i(88362);function c(e,n,i,t,r,o,s){try{var d=e[o](s),l=d.value}catch(a){return void i(a)}d.done?n(l):Promise.resolve(l).then(t,r)}const u=t.O$.from(2).pow(128).sub(1);function h(e,n,i=!1){var t,h;const x=(0,o.GL)(!1),p=null===(t=(0,s.Wk)(n?x:null,"ownerOf",[n]).result)||void 0===t?void 0:t[0],m=null===(h=n)||void 0===h?void 0:h.toHexString(),v=(0,d.ZP)(),[f,y]=(0,l.useState)();return(0,l.useEffect)((()=>{!function(){var e,n=(e=function*(){if(x&&m&&p)try{const e=yield x.callStatic.collect({tokenId:m,recipient:p,amount0Max:u,amount1Max:u},{from:p});y([e.amount0,e.amount1])}catch{}},function(){var n=this,i=arguments;return new Promise((function(t,r){var o=e.apply(n,i);function s(e){c(o,t,r,s,d,"next",e)}function d(e){c(o,t,r,s,d,"throw",e)}s(void 0)}))});return function(){return n.apply(this,arguments)}}()()}),[x,m,p,v]),e&&f?[r.CurrencyAmount.fromRawAmount(i?e.token0:(0,a.B)(e.token0),f[0].toString()),r.CurrencyAmount.fromRawAmount(i?e.token1:(0,a.B)(e.token1),f[1].toString())]:[void 0,void 0]}},17125:(e,n,i)=>{i.d(n,{W:()=>a,n:()=>l});var t=i(11604),r=i(29717),o=i(24055),s=i(45779);function d(e){var n;const i=(0,r.GL)(),d=(0,s.useMemo)((()=>e?e.map((e=>[t.O$.from(e)])):[]),[e]),l=(0,o.es)(i,"positions",d),a=(0,s.useMemo)((()=>l.some((({loading:e})=>e))),[l]),c=(0,s.useMemo)((()=>l.some((({error:e})=>e))),[l]),u=(0,s.useMemo)((()=>{if(!a&&!c&&e)return l.map(((n,i)=>{const t=e[i],r=n.result;return{tokenId:t,fee:r.fee,feeGrowthInside0LastX128:r.feeGrowthInside0LastX128,feeGrowthInside1LastX128:r.feeGrowthInside1LastX128,liquidity:r.liquidity,nonce:r.nonce,operator:r.operator,tickLower:r.tickLower,tickUpper:r.tickUpper,token0:r.token0,token1:r.token1,tokensOwed0:r.tokensOwed0,tokensOwed1:r.tokensOwed1}}))}),[a,c,l,e]);return{loading:a,positions:null===(n=u)||void 0===n?void 0:n.map(((e,n)=>({...e,tokenId:d[n][0]})))}}function l(e){var n;const i=d(e?[e]:void 0);return{loading:i.loading,position:null===(n=i.positions)||void 0===n?void 0:n[0]}}function a(e){var n,i;const l=(0,r.GL)(),{loading:a,result:c}=(0,o.Wk)(l,"balanceOf",[e??void 0]),u=null===(i=c)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.toNumber(),h=(0,s.useMemo)((()=>{if(u&&e){const n=[];for(let i=0;i<u;i++)n.push([e,i]);return n}return[]}),[e,u]),x=(0,o.es)(l,"tokenOfOwnerByIndex",h),p=(0,s.useMemo)((()=>x.some((({loading:e})=>e))),[x]),m=(0,s.useMemo)((()=>e?x.map((({result:e})=>e)).filter((e=>!!e)).map((e=>t.O$.from(e[0]))):[]),[e,x]),{positions:v,loading:f}=d(m);return{loading:p||a||f,positions:v}}},32507:(e,n,i)=>{i.d(n,{Z:()=>ze,p:()=>Se});var t=i(92936),r=i(11604),o=i(5985),s=i(44913),d=i(76078),l=i(89878),a=i(67978),c=i(42704),u=i(3115),h=i(32409),x=i(26303),p=i(70174),m=i(38081),v=i(58543),f=i(23652),y=i(24644),j=i(98640),g=i(92241),w=i(26901),T=i(55478),b=i(83792),k=i(61808),P=i(61190),D=i(97704),I=i(22722),L=i(29717),A=i(74015),C=i(67189),M=i(64063),S=i(38043),z=i(78087),$=i(17125),R=i(24055),Z=i(44958),K=i(36664),O=i(61152),q=i(83639),E=i(45779),F=i(437),B=i(43454),U=i(6282),N=i(74695),G=i(90379),W=i(67153),H=i(56363),_=i(77134),Q=i(8806),J=i(1596),V=i(74231),X=i(3684),Y=i(92139),ee=i(9450),ne=i(48313),ie=i(45878),te=i(64077),re=i(97994),oe=i(30754),se=i(25105),de=i(89081),le=i(58730),ae=i(85209),ce=i(88671),ue=i(64972),he=i(88362);function xe(e,n,i,t,r,o,s){try{var d=e[o](s),l=d.value}catch(a){return void i(a)}d.done?n(l):Promise.resolve(l).then(t,r)}function pe(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var o=e.apply(n,i);function s(e){xe(o,t,r,s,d,"next",e)}function d(e){xe(o,t,r,s,d,"throw",e)}s(void 0)}))}}const me=(0,K.ZP)(u.DF)`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,ve=K.ZP.div`
  padding: 68px 16px 16px 16px;

  min-width: 800px;
  max-width: 960px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    min-width: 100%;
    padding: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    min-width: 100%;
    padding: 16px;
  }
`,fe=K.ZP.div`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,ye=(0,K.ZP)((({end:e,...n})=>(0,t.jsx)(H.T.DeprecatedLabel,{...n})))`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,je=K.ZP.span`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,ge=(0,K.ZP)(H.T.DeprecatedMain)`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,we=K.ZP.span`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,Te=(0,K.ZP)(b.m0)`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,be=(0,K.ZP)(Te)`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,ke=(0,K.ZP)(u.gn)`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  font-size: 16px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: fit-content;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: fit-content;
  }
`,Pe=(0,K.ZP)(B.Link)`
  text-decoration: none;
  ${_.iV}
`,De=(0,K.ZP)(H.T.H1Medium)`
  margin-right: 10px;
`;function Ie({inverted:e,pool:n,currencyQuote:i,currencyBase:r}){var o,s;const{formatPrice:d}=(0,ue.Gb)();return n&&i&&r?(0,t.jsx)(h.hl,{padding:"12px",children:(0,t.jsxs)(T.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(je,{children:(0,t.jsx)(re.Trans,{i18nKey:"common.currentPrice"})}),(0,t.jsx)(H.T.DeprecatedMediumHeader,{textAlign:"center",children:d({price:e?n.token1Price:n.token0Price,type:ue.sw.TokenTx})}),(0,t.jsx)(je,{children:(0,t.jsx)(re.Trans,{i18nKey:"common.feesEarnedPerBase",values:{symbolA:null===(o=i)||void 0===o?void 0:o.symbol,symbolB:null===(s=r)||void 0===s?void 0:s.symbol}})})]})}):null}const Le=({children:e,chainId:n,address:i})=>{const r=(0,P.dG)({address:i,chain:(0,ee.toGraphQLChain)(n)});return(0,t.jsx)(_.bm,{to:r,children:e})},Ae=({children:e,chainId:n,address:i})=>(0,t.jsx)(_.dL,{href:(0,oe.getExplorerLink)(n,i,oe.ExplorerDataType.TOKEN),children:e});function Ce({chainId:e,currency:n}){var i,r;const o=null===(i=n)||void 0===i?void 0:i.address,s=(0,X.Jw)(e),d=(0,P.bx)(s)?Le:Ae;return(0,t.jsx)(d,{chainId:e,address:o,children:(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(v.Z,{currency:n,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsxs)(H.T.DeprecatedMain,{children:[null===(r=n)||void 0===r?void 0:r.symbol," \u2197"]})]})})}const Me=({priceLower:e,priceUpper:n,quote:i,base:t,invert:r})=>{var o,s;return{priceUpper:r?null===(o=e)||void 0===o?void 0:o.invert():n,priceLower:r?null===(s=n)||void 0===s?void 0:s.invert():e,quote:r?t:i,base:r?i:t}};function Se(){return(0,t.jsx)(ve,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,t.jsx)(H.T.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,t.jsx)(re.Trans,{i18nKey:"common.positionUnavailable",children:"Position unavailable"})}),(0,t.jsx)(H.T.BodyPrimary,{style:{marginBottom:"32px"},children:(0,t.jsx)(re.Trans,{i18nKey:"pool.position.networkConnect"})}),(0,t.jsx)(me,{as:B.Link,to:"/pool",width:"fit-content",children:(0,t.jsx)(re.Trans,{i18nKey:"pool.back"})})]})})}function ze(){const{chainId:e}=(0,I.m)();return(0,X.Nb)(e)?(0,t.jsx)(Re,{}):(0,t.jsx)(Se,{})}const $e=(0,K.ZP)(b.DA)({flexWrap:"wrap",gap:8});function Re(){var e,n,i,K,xe,me,Le,Ae,ze,Re,Ze,Ke,Oe,qe,Ee,Fe,Be,Ue,Ne,Ge,We,He,_e,Qe,Je,Ve,Xe,Ye,en,nn;const tn=(0,de.useTrace)(),{tokenId:rn}=(0,U.UO)(),on=(0,I.m)(),sn=(0,X.Jw)(on.chainId),dn=(0,A.z)(),ln=(0,O.useTheme)(),{formatCurrencyAmount:an,formatDelta:cn,formatTickPrice:un}=(0,ue.Gb)(),{defaultChainId:hn}=(0,V.useEnabledChains)(),xn=function(e){if(e)try{return r.O$.from(e)}catch(n){return}}(rn),{loading:pn,position:mn}=(0,$.n)(xn),{token0:vn,token1:fn,fee:yn,liquidity:jn,tickLower:gn,tickUpper:wn,tokenId:Tn}=mn||{},bn=null===(e=jn)||void 0===e?void 0:e.eq(0),kn=(0,S.b)(xn),Pn=(0,D.dQ)(vn),Dn=(0,D.dQ)(fn),In=Pn?(0,he.B)(Pn):void 0,Ln=Dn?(0,he.B)(Dn):void 0,[An,Cn]=(0,E.useState)(!1),Mn=(0,Z.Z)(sn).wrapped.symbol,Sn=Pn&&Dn&&yn?l.Pool.getAddress(Pn,Dn,yn):void 0,[zn,$n]=(0,M.AI)(Pn??void 0,Dn??void 0,yn),Rn=(0,E.useMemo)((()=>{if($n&&jn&&"number"===typeof gn&&"number"===typeof wn)return new l.Position({pool:$n,liquidity:jn.toString(),tickLower:gn,tickUpper:wn})}),[jn,$n,gn,wn]),Zn=(0,C.Z)(yn,gn,wn),Kn=(0,y.N)(Rn),[On,qn]=(0,E.useState)(!1),{priceLower:En,priceUpper:Fn,base:Bn}=Me({priceLower:Kn.priceLower,priceUpper:Kn.priceUpper,quote:Kn.quote,base:Kn.base,invert:On}),Un=Dn?null===(n=Bn)||void 0===n?void 0:n.equals(Dn):void 0,Nn=Un?In:Ln,Gn=Un?Ln:In,Wn=(0,E.useMemo)((()=>En&&$n&&Fn?function(e,n,i){try{if(!n.greaterThan(e))return 100;if(!n.lessThan(i))return 0;const t=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(i.toSignificant(15)),o=Number.parseFloat(n.toSignificant(15)),s=Math.floor(1/((Math.sqrt(t*r)-Math.sqrt(r*o))/(o-Math.sqrt(r*o))+1)*100);if(s<0||s>100)throw Error("Out of range");return s}catch{return}}(Un?Fn.invert():En,$n.token0Price,Un?En.invert():Fn):void 0),[Un,$n,En,Fn]),[Hn,_n]=(0,z.t)($n??void 0,null===(i=mn)||void 0===i?void 0:i.tokenId,An),Qn=$n?An?$n.token0:(0,he.B)($n.token0):void 0,Jn=$n?An?$n.token1:(0,he.B)($n.token1):void 0,[Vn,Xn]=(0,E.useState)(!1),[Yn,ei]=(0,E.useState)(null),ni=(0,G.ub)(Yn??void 0),[ii,ti]=(0,E.useState)(!1),{price:ri}=(0,te.useUSDCPrice)(Pn??void 0),{price:oi}=(0,te.useUSDCPrice)(Dn??void 0),si=(0,E.useMemo)((()=>{var e,n;if(!ri||!oi||!Hn||!_n)return null;const i=null===(e=Hn)||void 0===e?void 0:e.wrapped,t=null===(n=_n)||void 0===n?void 0:n.wrapped;if(!i||!t)return null;const r=ri.quote(i),o=oi.quote(t);return r.add(o)}),[ri,oi,Hn,_n]),di=(0,E.useMemo)((()=>{if(!ri||!oi||!Rn)return null;const e=ri.quote(Rn.amount0),n=oi.quote(Rn.amount1);return e.add(n)}),[ri,oi,Rn]),li=(0,G.h7)(),ai=(0,L.GL)(),ci=(0,E.useCallback)(pe((function*(){if(!Qn||!Jn||"connected"!==on.status||!ai||!Tn||!dn)return;Xn(!0);const{calldata:e,value:n}=l.NonfungiblePositionManager.collectCallParameters({tokenId:Tn.toString(),expectedCurrencyOwed0:Hn??d.CurrencyAmount.fromRawAmount(Qn,0),expectedCurrencyOwed1:_n??d.CurrencyAmount.fromRawAmount(Jn,0),recipient:on.address}),i={to:ai.address,data:e,value:n},t=yield dn.getChainId();if(on.chainId!==t)throw new ce.CJ;dn.estimateGas(i).then((e=>{const n={...i,gasLimit:(0,le.y)(e)};return dn.sendTransaction(n).then((e=>{var n,i;ei(e.hash),Xn(!1),(0,ie.sendAnalyticsEvent)(o.vp.COLLECT_LIQUIDITY_SUBMITTED,{transaction_hash:e.hash,...(0,p.l)({trace:tn,fee:yn,currency0:Qn,currency1:Jn,version:s.Qe.V3,poolId:Sn,chainId:on.chainId,currency0AmountUsd:Hn??d.CurrencyAmount.fromRawAmount(Qn,0),currency1AmountUsd:_n??d.CurrencyAmount.fromRawAmount(Jn,0)})}),li(e,{type:W.i.COLLECT_FEES,currencyId0:(0,ae.H)(Qn),currencyId1:(0,ae.H)(Jn),expectedCurrencyOwed0:(null===(n=Hn)||void 0===n?void 0:n.quotient.toString())??d.CurrencyAmount.fromRawAmount(Qn,0).toExact(),expectedCurrencyOwed1:(null===(i=_n)||void 0===i?void 0:i.quotient.toString())??d.CurrencyAmount.fromRawAmount(Jn,0).toExact()})}))})).catch((e=>{Xn(!1),se.logger.error(e,{tags:{file:"PositionPage",function:"collectCallback"}})}))})),[Qn,Jn,on.status,on.address,on.chainId,ai,Tn,dn,Hn,_n,tn,yn,Sn,li]),ui=null===(K=(0,R.Wk)(Tn?ai:null,"ownerOf",[Tn]).result)||void 0===K?void 0:K[0],hi=ui===on.address||(null===(xe=mn)||void 0===xe?void 0:xe.operator)===on.address,xi=Un?Hn:_n,pi=Un?_n:Hn,mi=$n&&"number"===typeof gn?$n.tickCurrent<gn:void 0,vi=$n&&"number"===typeof wn?$n.tickCurrent>=wn:void 0,fi="boolean"===typeof mi&&"boolean"===typeof vi&&(!mi&&!vi);function yi(){var e,n,i,r,o,s;return(0,t.jsxs)(T.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,t.jsx)(h.hl,{padding:"12px 16px",children:(0,t.jsxs)(T.Tz,{gap:"md",children:[(0,t.jsxs)(b.m0,{children:[(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(v.Z,{currency:null===(e=xi)||void 0===e?void 0:e.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(H.T.DeprecatedMain,{children:xi?an({amount:xi}):"-"})]}),(0,t.jsx)(H.T.DeprecatedMain,{children:null===(i=xi)||void 0===i||null===(n=i.currency)||void 0===n?void 0:n.symbol})]}),(0,t.jsxs)(b.m0,{children:[(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(v.Z,{currency:null===(r=pi)||void 0===r?void 0:r.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(H.T.DeprecatedMain,{children:pi?an({amount:pi}):"-"})]}),(0,t.jsx)(H.T.DeprecatedMain,{children:null===(s=pi)||void 0===s||null===(o=s.currency)||void 0===o?void 0:o.symbol})]})]})}),(0,t.jsx)(Q.xv,{fontSize:12,fontStyle:"italic",color:"$neutral2",children:(0,t.jsx)(re.Trans,{i18nKey:"pool.collectingFeesWithdraw"})}),(0,t.jsx)(u.DF,{"data-testid":"modal-collect-fees-button",onClick:ci,children:(0,t.jsx)(re.Trans,{i18nKey:"common.collect.button"})})]})}const ji=Boolean(hi&&((null===(me=Hn)||void 0===me?void 0:me.greaterThan(0))||(null===(Le=_n)||void 0===Le?void 0:Le.greaterThan(0)))&&In&&Ln&&(In.isNative||Ln.isNative)&&!Yn);return mn||pn?pn||zn===M.tK.LOADING||!yn?(0,t.jsxs)(q.pr,{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]}):(0,t.jsx)(ne.default,{logImpression:!0,page:o.yJ.POOL_PAGE,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.Helmet,{children:(0,t.jsx)("title",{children:(0,re.t)("liquidityPool.positions.page.title",{quoteSymbol:null===(Ae=Nn)||void 0===Ae?void 0:Ae.symbol,baseSymbol:null===(ze=Gn)||void 0===ze?void 0:ze.symbol})})}),(0,t.jsxs)(ve,{children:[(0,t.jsx)(w.Z,{isOpen:ii,onDismiss:()=>ti(!1),attemptingTxn:Vn,hash:Yn??"",reviewContent:()=>(0,t.jsx)(w.p,{title:(0,t.jsx)(re.Trans,{i18nKey:"pool.collectFees"}),onDismiss:()=>ti(!1),topContent:yi}),pendingText:(0,t.jsx)(re.Trans,{i18nKey:"common.collecting.fees"})}),(0,t.jsxs)(T.Tz,{gap:"md",children:[(0,t.jsxs)(T.Tz,{gap:"sm",children:[(0,t.jsx)(B.Link,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pool",children:(0,t.jsxs)(ge,{children:["\u2190 ",(0,t.jsx)(re.Trans,{i18nKey:"pool.back"})]})}),(0,t.jsxs)(Te,{children:[(0,t.jsxs)($e,{children:[(0,t.jsx)(f.ge,{currencies:[Gn,Nn],size:24}),(0,t.jsx)(Pe,{to:Sn?(0,P.Ah)(Sn,(0,ee.toGraphQLChain)(sn??hn)):"",children:(0,t.jsxs)(De,{children:["\xa0",null===(Re=Nn)||void 0===Re?void 0:Re.symbol,"\xa0/\xa0",null===(Ze=Gn)||void 0===Ze?void 0:Ze.symbol]})}),(0,t.jsx)(a.Z,{style:{marginRight:"8px"},children:(0,t.jsx)(fe,{children:cn(parseFloat(new d.Percent(yn,1e6).toSignificant()))})}),(0,t.jsx)(c.Z,{removed:bn,inRange:fi})]}),hi&&(0,t.jsxs)(be,{children:[In&&Ln&&yn&&Tn?(0,t.jsx)(u.Ux,{as:B.Link,to:`/add/${(0,ae.H)(In)}/${(0,ae.H)(Ln)}/${yn}/${Tn}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,t.jsx)(re.Trans,{i18nKey:"pool.increaseLiquidity"})}):null,Tn&&!bn?(0,t.jsx)(u.Hm,{as:B.Link,to:`/remove/${Tn}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,t.jsx)(re.Trans,{i18nKey:"pool.removeLiquidity"})}):null]})]})]}),(0,t.jsxs)(Te,{align:"flex-start",children:[(0,t.jsx)(_.Pw,{style:{height:"100%",marginRight:12},children:"result"in kn?(0,t.jsxs)(h.Wm,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,t.jsx)(x.t,{image:kn.result.image,height:400}),"number"===typeof on.chainId&&ui&&!hi?(0,t.jsx)(_.dL,{href:(0,oe.getExplorerLink)(on.chainId,ui,oe.ExplorerDataType.ADDRESS),children:(0,t.jsx)(re.Trans,{i18nKey:"pool.owner"})}):null]}):(0,t.jsx)(h.Wm,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,t.jsx)(m.tG,{})})}),(0,t.jsxs)(T.Tz,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,t.jsx)(h.Wm,{children:(0,t.jsxs)(T.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsxs)(T.Tz,{gap:"md",children:[(0,t.jsx)(ye,{children:(0,t.jsx)(re.Trans,{i18nKey:"common.liquidity"})}),(null===(Ke=di)||void 0===Ke?void 0:Ke.greaterThan(new d.Fraction(1,100)))?(0,t.jsx)(H.T.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:an({amount:di,type:ue.sw.FiatTokenPrice})}):(0,t.jsx)(H.T.DeprecatedLargeHeader,{color:ln.neutral1,fontSize:"36px",fontWeight:535,children:"-"})]}),(0,t.jsx)(h.hl,{padding:"12px 16px",children:(0,t.jsxs)(T.Tz,{gap:"md",children:[(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(Ce,{chainId:on.chainId??Y.UniverseChainId.Mainnet,currency:Nn}),(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(H.T.DeprecatedMain,{children:an({amount:Un?null===(Oe=Rn)||void 0===Oe?void 0:Oe.amount0:null===(qe=Rn)||void 0===qe?void 0:qe.amount1})}),"number"!==typeof Wn||bn?null:(0,t.jsx)(a.Z,{style:{marginLeft:"10px"},children:(0,t.jsxs)(fe,{children:[Un?Wn:100-Wn,"%"]})})]})]}),(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(Ce,{chainId:on.chainId??Y.UniverseChainId.Mainnet,currency:Gn}),(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(H.T.DeprecatedMain,{children:an({amount:Un?null===(Ee=Rn)||void 0===Ee?void 0:Ee.amount1:null===(Fe=Rn)||void 0===Fe?void 0:Fe.amount0})}),"number"!==typeof Wn||bn?null:(0,t.jsx)(a.Z,{style:{marginLeft:"10px"},children:(0,t.jsxs)(fe,{children:[Un?100-Wn:Wn,"%"]})})]})]})]})})]})}),(0,t.jsx)(h.Wm,{children:(0,t.jsxs)(T.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsx)(T.Tz,{gap:"md",children:(0,t.jsxs)(b.m0,{style:{alignItems:"flex-start"},children:[(0,t.jsxs)(T.Tz,{gap:"md",children:[(0,t.jsx)(ye,{children:(0,t.jsx)(re.Trans,{i18nKey:"pool.uncollectedFees"})}),(null===(Be=si)||void 0===Be?void 0:Be.greaterThan(new d.Fraction(1,100)))?(0,t.jsx)(H.T.DeprecatedLargeHeader,{color:ln.success,fontSize:"36px",fontWeight:535,children:an({amount:si,type:ue.sw.FiatTokenPrice})}):(0,t.jsx)(H.T.DeprecatedLargeHeader,{color:ln.neutral1,fontSize:"36px",fontWeight:535,children:"-"})]}),hi&&((null===(Ue=Hn)||void 0===Ue?void 0:Ue.greaterThan(0))||(null===(Ne=_n)||void 0===Ne?void 0:Ne.greaterThan(0))||Yn)?(0,t.jsx)(ke,{"data-testid":"collect-fees-button",disabled:Vn||!!Yn,confirmed:!!Yn&&!ni,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>ti(!0),children:Yn&&!ni?(0,t.jsx)(H.T.DeprecatedMain,{color:ln.neutral1,children:(0,t.jsx)(re.Trans,{i18nKey:"pool.collected"})}):ni||Vn?(0,t.jsxs)(H.T.DeprecatedMain,{color:ln.neutral1,children:[" ",(0,t.jsx)(k.bb,{children:(0,t.jsx)(re.Trans,{i18nKey:"pool.collecting"})})]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(H.T.DeprecatedMain,{color:ln.white,children:(0,t.jsx)(re.Trans,{i18nKey:"pool.collectFees"})})})}):null]})}),(0,t.jsx)(h.hl,{padding:"12px 16px",children:(0,t.jsxs)(T.Tz,{gap:"md",children:[(0,t.jsxs)(b.m0,{children:[(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(v.Z,{currency:null===(Ge=xi)||void 0===Ge?void 0:Ge.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(H.T.DeprecatedMain,{children:null===(He=xi)||void 0===He||null===(We=He.currency)||void 0===We?void 0:We.symbol})]}),(0,t.jsx)(b.DA,{children:(0,t.jsx)(H.T.DeprecatedMain,{children:xi?an({amount:xi}):"-"})})]}),(0,t.jsxs)(b.m0,{children:[(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(v.Z,{currency:null===(_e=pi)||void 0===_e?void 0:_e.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(H.T.DeprecatedMain,{children:null===(Je=pi)||void 0===Je||null===(Qe=Je.currency)||void 0===Qe?void 0:Qe.symbol})]}),(0,t.jsx)(b.DA,{children:(0,t.jsx)(H.T.DeprecatedMain,{children:pi?an({amount:pi}):"-"})})]})]})}),ji&&(0,t.jsx)(T.Tz,{gap:"md",children:(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(H.T.DeprecatedMain,{children:(0,t.jsx)(re.Trans,{i18nKey:"pool.collectAs",values:{nativeWrappedSymbol:Mn}})}),(0,t.jsx)(J.r,{id:"receive-as-weth",checked:An,onCheckedChange:()=>Cn((e=>!e)),variant:"branded"})]})})]})})]})]}),(0,t.jsx)(h.Wm,{children:(0,t.jsxs)(T.Tz,{gap:"md",children:[(0,t.jsxs)(b.m0,{children:[(0,t.jsxs)(b.DA,{children:[(0,t.jsx)(ye,{display:"flex",style:{marginRight:"12px"},children:(0,t.jsx)(re.Trans,{i18nKey:"pool.priceRange"})}),(0,t.jsx)(_.v_,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{removed:bn,inRange:fi}),(0,t.jsx)("span",{style:{width:"8px"}})]})})]}),(0,t.jsx)(b.DA,{children:Gn&&Nn&&(0,t.jsx)(j.Z,{currencyA:Gn,currencyB:Nn,handleRateToggle:()=>qn(!On)})})]}),(0,t.jsxs)(b.m0,{children:[(0,t.jsx)(h.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(T.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(je,{children:(0,t.jsx)(re.Trans,{i18nKey:"pool.minPrice"})}),(0,t.jsx)(H.T.DeprecatedMediumHeader,{textAlign:"center",children:un({price:En,atLimit:Zn,direction:N.Mb.LOWER,numberType:ue.sw.TokenTx})}),(0,t.jsxs)(je,{children:[" ",(0,t.jsx)(re.Trans,{i18nKey:"common.feesEarnedPerBase",values:{symbolA:null===(Ve=Nn)||void 0===Ve?void 0:Ve.symbol,symbolB:null===(Xe=Gn)||void 0===Xe?void 0:Xe.symbol}})]}),fi&&(0,t.jsx)(Q.xv,{fontSize:11,color:"$neutral3",children:(0,t.jsx)(re.Trans,{i18nKey:"pool.position.100"})})]})}),(0,t.jsx)(we,{children:"\u27f7"}),(0,t.jsx)(h.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(T.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(je,{children:(0,t.jsx)(re.Trans,{i18nKey:"pool.maxPrice"})}),(0,t.jsx)(H.T.DeprecatedMediumHeader,{textAlign:"center",children:un({price:Fn,atLimit:Zn,direction:N.Mb.UPPER,numberType:ue.sw.TokenTx})}),(0,t.jsxs)(je,{children:[" ",(0,t.jsx)(re.Trans,{i18nKey:"common.feesEarnedPerBase",values:{symbolA:null===(Ye=Nn)||void 0===Ye?void 0:Ye.symbol,symbolB:null===(en=Gn)||void 0===en?void 0:en.symbol}})]}),fi&&(0,t.jsx)(Q.xv,{fontSize:11,color:"$neutral3",children:(0,t.jsx)(re.Trans,{i18nKey:"pool.position.100.at",values:{symbol:null===(nn=Nn)||void 0===nn?void 0:nn.symbol}})})]})})]}),(0,t.jsx)(Ie,{inverted:Un,pool:$n,currencyQuote:Nn,currencyBase:Gn})]})})]})]}),(0,t.jsx)(g.c,{})]})}):(0,t.jsx)(Se,{})}}}]);
//# sourceMappingURL=2507.8d67f2dd.chunk.js.map