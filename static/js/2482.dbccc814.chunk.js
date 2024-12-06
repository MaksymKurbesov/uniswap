"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2482],{10404:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(45779),o=r(68090),i=r.n(o);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=(0,t.forwardRef)((function(e,n){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,c=l(e,["color","size"]);return t.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),t.createElement("circle",{cx:"12",cy:"12",r:"10"}),t.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),t.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));a.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},a.displayName="AlertCircle";const c=a},33882:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(45779),o=r(68090),i=r.n(o);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=(0,t.forwardRef)((function(e,n){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,c=l(e,["color","size"]);return t.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),t.createElement("circle",{cx:"12",cy:"12",r:"10"}),t.createElement("polyline",{points:"16 12 12 8 8 12"}),t.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));a.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},a.displayName="ArrowUpCircle";const c=a},40187:(e,n,r)=>{r.d(n,{Z:()=>U});var t=r(92936),o=r(5985),i=r(46781),s=r(3115),l=r(83557),a=r(38081),c=r(58543),d=r(23652),u=r(87478),p=r(26410),h=r(83792),m=r(96238),v=r(22722),f=r(36664),y=r(61152),g=r(36399),x=r(45779),b=r(97047),w=r(43969),O=r(56363),k=r(45003),j=r(3684),P=r(48313),$=r(97994),N=r(64972);const A=f.ZP.div`
  ${k.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,E=f.ZP.div`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:r})=>!r&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,T=(0,f.ZP)(s.Ux)`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,g._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,I=f.ZP.div`
  ${k.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,_=f.ZP.div`
  ${k.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,g._j)(.2,e.neutral2)};
  }
`,C=(0,f.ZP)(_)`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,D=f.ZP.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,Z=(0,f.ZP)(i.r)`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,z=f.ZP.span`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${w.j$.sm}px) {
    font-size: 16px;
  }
`,S=f.ZP.button`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,B=(0,f.ZP)(u.II)`
  ${a._Q};
  text-align: left;
`,R=(0,f.ZP)(m.Kh)`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function U({value:e,onUserInput:n,onMax:r,showMaxButton:i,onCurrencySelect:s,currency:u,otherCurrency:m,id:f,showCurrencyAmount:g,currencyField:w,renderBalance:k,fiatValue:_,hideBalance:U=!1,pair:V=null,hideInput:K=!1,locked:M=!1,loading:W=!1,...G}){var L,F,q,X,Q;const{t:J}=(0,$.useTranslation)(),[H,Y]=(0,x.useState)(!1),ee=(0,v.m)(),ne=(0,j.Nb)(ee.chainId),re=(0,b.ZP)(ee.address,u??void 0),te=(0,y.useTheme)(),{formatCurrencyAmount:oe}=(0,N.Gb)(),ie=(0,x.useCallback)((()=>{Y(!1)}),[Y]);return(0,t.jsxs)(A,{id:f,hideInput:K,...G,children:[!M&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(E,{hideInput:K,disabled:!ne,children:[(0,t.jsxs)(I,{style:K?{padding:"0",borderRadius:"8px"}:{},selected:!s,children:[!K&&(0,t.jsx)(B,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:W,maxDecimals:null===(L=u)||void 0===L?void 0:L.decimals}),(0,t.jsx)(R,{$fullWidth:K,children:(0,t.jsx)(T,{disabled:!ne,visible:void 0!==u,selected:!!u,hideInput:K,className:"open-currency-select-button",onClick:()=>{s&&Y(!0)},pointerEvents:s?void 0:"none",children:(0,t.jsxs)(D,{children:[(0,t.jsxs)(h.DA,{children:[V?(0,t.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,t.jsx)(d.ge,{currencies:[V.token0,V.token1],size:24})}):u&&(0,t.jsx)(c.Z,{style:{marginRight:"0.5rem"},currency:u,size:24}),V?(0,t.jsxs)(z,{className:"pair-name-container",children:[null===(F=V)||void 0===F?void 0:F.token0.symbol,":",null===(q=V)||void 0===q?void 0:q.token1.symbol]}):(0,t.jsx)(z,{className:"token-symbol-container",active:Boolean(u&&u.symbol),children:(u&&u.symbol&&u.symbol.length>20?u.symbol.slice(0,4)+"..."+u.symbol.slice(u.symbol.length-5,u.symbol.length):null===(X=u)||void 0===X?void 0:X.symbol)||(0,t.jsx)($.Trans,{i18nKey:"tokens.selector.button.choose"})})]}),s&&(0,t.jsx)(Z,{selected:!!u})]})})})]}),Boolean(!K&&!U&&u)&&(0,t.jsx)(C,{children:(0,t.jsxs)(h.m0,{children:[(0,t.jsx)(a.EG,{$loading:W,children:_&&(0,t.jsx)(l.x,{fiatValue:_})}),ee&&(0,t.jsxs)(h.DA,{style:{height:"17px"},children:[(0,t.jsx)(O.T.DeprecatedBody,{onClick:r,color:te.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!U&&u&&re)&&((null===(Q=k)||void 0===Q?void 0:Q(re))||(0,t.jsx)($.Trans,{i18nKey:"swap.balance.amount",values:{amount:oe({amount:re,type:N.sw.TokenNonTx})}}))}),Boolean(i&&re)&&(0,t.jsx)(P.default,{logPress:!0,eventOnTrigger:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,t.jsx)(S,{onClick:r,children:J("common.max").toUpperCase()})})]})]})})]})}),s&&(0,t.jsx)(p.Z,{isOpen:H,onDismiss:ie,onCurrencySelect:s,selectedCurrency:u,otherSelectedCurrency:m,showCurrencyAmount:g,currencyField:w})]})}},90162:(e,n,r)=>{r.d(n,{q:()=>a});var t=r(42433),o=r(45779),i=r(90379),s=r(67153);function l(e){const n=(0,i.h7)();return(0,o.useCallback)((()=>e().then((e=>{if(e){const{response:r,tokenAddress:t,spenderAddress:o,amount:i}=e;n(r,{type:s.i.APPROVAL,tokenAddress:t,spender:o,amount:i.quotient.toString()})}}))),[n,e])}function a(e,n){const[r,o]=(0,t.o)(e,n,i.wB);return[r,l(o)]}},42433:(e,n,r)=>{r.d(n,{U:()=>v,o:()=>f});var t=r(16790),o=r(5985),i=r(22722),s=r(29717),l=r(77960),a=r(53242),c=r(45779),d=r(45878),u=r(25105),p=r(58730);function h(e,n,r,t,o,i,s){try{var l=e[i](s),a=l.value}catch(c){return void r(c)}l.done?n(a):Promise.resolve(a).then(t,o)}function m(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function s(e){h(i,t,o,s,l,"next",e)}function l(e){h(i,t,o,s,l,"throw",e)}s(void 0)}))}}var v=(e=>(e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED",e))(v||{});function f(e,n,r){var h,v,f,y;const{chainId:g}=(0,i.m)(),x=(null===(v=e)||void 0===v||null===(h=v.currency)||void 0===h?void 0:h.isToken)?e.currency:void 0,b=function(e,n,r){var t,o;const s=(0,i.m)(),a=(null===(o=e)||void 0===o||null===(t=o.currency)||void 0===t?void 0:t.isToken)?e.currency:void 0,{tokenAllowance:d}=(0,l.Fx)(a,s.address,n),u=r(a,n);return(0,c.useMemo)((()=>e&&n?e.currency.isNative?"APPROVED":d?d.lessThan(e)?u?"PENDING":"NOT_APPROVED":"APPROVED":"UNKNOWN":"UNKNOWN"),[e,u,n,d])}(e,n,r),w=(0,s.Ib)(null===(f=x)||void 0===f?void 0:f.address,void 0,null===(y=x)||void 0===y?void 0:y.chainId),O=(0,c.useCallback)(m((function*(){function r(n){var r,t,o;"string"===typeof n?u.logger.debug("useApproval","approve",n):u.logger.debug("useApproval","approve","Failed to approve amount",{error:n,tokenChain:null===(r=x)||void 0===r?void 0:r.chainId,token:null===(t=x)||void 0===t?void 0:t.address,chainId:g,amountToApprove:null===(o=e)||void 0===o?void 0:o.toFixed()})}if("NOT_APPROVED"!==b)return r("approve was called unnecessarily");if(!g)return r("no chainId");if(!x)return r("no token");if(!w)return r("tokenContract is null");if(!e)return r("missing amount to approve");if(!n)return r("no spender");let i=!1;const s=yield w.estimateGas.approve(n,t.Bz).catch((()=>(i=!0,w.estimateGas.approve(n,e.quotient.toString()))));return w.approve(n,i?e.quotient.toString():t.Bz,{gasLimit:(0,p.y)(s)}).then((r=>{var t;const i={chain_id:g,token_symbol:null===(t=x)||void 0===t?void 0:t.symbol,token_address:(0,a.DT)(x)};return(0,d.sendAnalyticsEvent)(o.Je.APPROVE_TOKEN_TXN_SUBMITTED,i),{response:r,tokenAddress:x.address,spenderAddress:n,amount:e}})).catch((e=>{throw r(e),e}))})),[b,x,w,e,n,g]);return[b,O]}}}]);
//# sourceMappingURL=2482.dbccc814.chunk.js.map