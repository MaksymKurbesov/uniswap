"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7297],{10109:(n,e,r)=>{r.d(e,{Z:()=>i});r(45779);const i=r.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},76394:(n,e,r)=>{r.d(e,{q:()=>I,w:()=>w});var i=r(92936),s=r(83792),t=r(17685),o=r(22722),a=r(36664),c=r(61152),u=r(21926),d=r(43454),l=r(6282),m=r(22953),x=r(34946),p=r(2456),y=r(74695),h=r(56363),j=r(45003),g=r(97994);const f=a.ZP.div`
  ${j.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,v=(0,a.ZP)(d.Link)`
  flex: ${({flex:n})=>n??"none"};
  display: flex;
  align-items: center;

  ${({theme:n})=>n.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,T=(0,a.ZP)(h.T.H1Small)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,a.ZP)(u.Z)`
  color: ${({theme:n})=>n.neutral1};
`;function I({origin:n}){return(0,i.jsx)(f,{children:(0,i.jsxs)(s.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(d.Link,{to:n,children:(0,i.jsx)(b,{})}),(0,i.jsx)(T,{children:(0,i.jsx)(g.Trans,{i18nKey:"pool.import.v2"})})]})})}const S=(0,a.ZP)(h.T.H1Small)`
  flex: 1;
  margin: auto;
  text-align: ${({$center:n})=>n?"center":"start"};
`;function w({adding:n,creating:e,autoSlippage:r,positionID:a,children:u}){var d;const{chainId:h}=(0,o.m)(),j=(0,c.useTheme)(),T=(0,x.T)(),{state:I}=(0,l.TH)(),w=(0,l.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(a?`/${a.toString()}`:""),A=(null===(d=I)||void 0===d?void 0:d.from)??w;return(0,i.jsx)(f,{children:(0,i.jsxs)(s.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(v,{to:A,onClick:()=>{n&&(T((0,p.dA)()),T((0,y.dA)()))},flex:u?"1":void 0,children:(0,i.jsx)(b,{stroke:j.neutral2})}),(0,i.jsx)(S,{$center:!u,children:e?(0,i.jsx)(g.Trans,{i18nKey:"pool.create.pair"}):n?(0,i.jsx)(g.Trans,{i18nKey:"common.addLiquidity"}):(0,i.jsx)(g.Trans,{i18nKey:"pool.removeLiquidity"})}),u&&(0,i.jsx)(m.xu,{style:{marginRight:".5rem"},children:u}),(0,i.jsx)(t.Z,{autoSlippage:r,chainId:h,hideRoutingSettings:!0})]})})}},26901:(n,e,r)=>{r.d(e,{p:()=>bn,Z:()=>wn});var i=r(92936),s=r(45386),t=r(10109),o=r(76078),a=r(68707),c=r(97704),u=r(45389),d=r(61592),l=r.n(d),m=(n=>(n[n.Against=0]="Against",n[n.For=1]="For",n[n.Abstain=2]="Abstain",n))(m||{}),x=r(67153),p=r(40834),y=r(97994);function h(n,e,r){return new o.Fraction(n,l().exponentiate(l().BigInt(10),l().BigInt(e))).toSignificant(r)}function j({rawAmount:n,symbol:e,decimals:r,sigFigs:s}){return(0,i.jsxs)(i.Fragment,{children:[h(n,r,s)," ",e]})}function g({rawAmount:n,currencyId:e,sigFigs:r=6}){const s=(0,c.U8)(e);return s?(0,i.jsx)(j,{rawAmount:n,decimals:s.decimals,sigFigs:r,symbol:s.symbol??"???"}):null}function f({info:{recipient:n,uniAmountRaw:e}}){const{ENSName:r}=(0,u.Z)(),s=r??n;return"string"===typeof e?(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.claimFor",components:{currency:(0,i.jsx)(j,{rawAmount:e,symbol:"UNI",decimals:18,sigFigs:4})},values:{username:s}}):(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.claimReward",values:{username:s}})}function v(){return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.submitProposal"})}function T({info:n}){var e,r,s;const t=(0,c.dQ)(n.tokenAddress);return(null===(e=a.BigNumber.from(n.amount))||void 0===e?void 0:e.eq(0))?(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.revoke",values:{tokenSymbol:null===(r=t)||void 0===r?void 0:r.symbol}}):(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.approve",values:{sym:null===(s=t)||void 0===s?void 0:s.symbol}})}function b({info:n}){const e=`${n.governorAddress}/${n.proposalId}`;if(n.reason&&n.reason.trim().length>0)switch(n.decision){case m.For:return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.vote.for",values:{proposalKey:e}});case m.Abstain:return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.vote.abstain",values:{proposalKey:e}});case m.Against:return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.vote.against",values:{proposalKey:e}})}else switch(n.decision){case m.For:return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.decision.for",values:{proposalKey:e,reason:n.reason}});case m.Abstain:return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.decision.abstain",values:{proposalKey:e,reason:n.reason}});case m.Against:return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.decision.against",values:{proposalKey:e,reason:n.reason}})}}function I({info:n}){const e=`${n.governorAddress}/${n.proposalId}`;return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.queueProposal",values:{proposalKey:e}})}function S({info:n}){const e=`${n.governorAddress}/${n.proposalId}`;return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.executeProposal",values:{proposalKey:e}})}function w({info:{delegatee:n}}){const{ENSName:e}=(0,u.Z)(n),r=e??n;return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.delegateSummary",values:{username:r}})}function A({info:{chainId:n,currencyAmountRaw:e,unwrapped:r}}){const s=n?(0,p.nativeOnChain)(n):void 0;var t,o,a,c,u,d;return r?(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.unwrapTo",components:{amount:(0,i.jsx)(j,{rawAmount:e,symbol:(null===(o=s)||void 0===o||null===(t=o.wrapped)||void 0===t?void 0:t.symbol)??"WETH",decimals:18,sigFigs:6})},values:{symbol:(null===(a=s)||void 0===a?void 0:a.symbol)??"ETH"}}):(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.wrapTo",components:{amount:(0,i.jsx)(j,{rawAmount:e,symbol:(null===(c=s)||void 0===c?void 0:c.symbol)??"ETH",decimals:18,sigFigs:6})},values:{symbol:(null===(d=s)||void 0===d||null===(u=d.wrapped)||void 0===u?void 0:u.symbol)??"WETH"}})}function k(){return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.depositLiquidity"})}function K(){return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.withdrawLiquidity"})}function C({info:{baseCurrencyId:n,quoteCurrencyId:e}}){var r,s;const t=(0,c.U8)(n),o=(0,c.U8)(e);return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.migrateLiquidity",values:{baseSymbol:null===(r=t)||void 0===r?void 0:r.symbol,quoteSymbol:null===(s=o)||void 0===s?void 0:s.symbol}})}function E({info:{quoteCurrencyId:n,baseCurrencyId:e}}){var r,s;const t=(0,c.U8)(e),o=(0,c.U8)(n);return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.createPool",values:{baseSymbol:null===(r=t)||void 0===r?void 0:r.symbol,quoteSymbol:null===(s=o)||void 0===s?void 0:s.symbol}})}function P({info:{currencyId0:n,currencyId1:e}}){var r,s;const t=(0,c.U8)(n),o=(0,c.U8)(e);return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.collectFees",values:{symbol0:null===(r=t)||void 0===r?void 0:r.symbol,symbol1:null===(s=o)||void 0===s?void 0:s.symbol}})}function L({info:{baseCurrencyId:n,quoteCurrencyId:e,expectedAmountBaseRaw:r,expectedAmountQuoteRaw:s}}){return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.removeLiquiditySummary",components:{base:(0,i.jsx)(g,{rawAmount:r,currencyId:n,sigFigs:3}),quote:(0,i.jsx)(g,{rawAmount:s,currencyId:e,sigFigs:3})}})}function $({info:{createPool:n,quoteCurrencyId:e,baseCurrencyId:r}}){var s,t,o,a;const u=(0,c.U8)(r),d=(0,c.U8)(e);return n?(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.createAddLiquidity",values:{baseSymbol:null===(s=u)||void 0===s?void 0:s.symbol,quoteSymbol:null===(t=d)||void 0===t?void 0:t.symbol}}):(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.addLiquidity",values:{baseSymbol:null===(o=u)||void 0===o?void 0:o.symbol,quoteSymbol:null===(a=d)||void 0===a?void 0:a.symbol}})}function _({info:{quoteCurrencyId:n,expectedAmountBaseRaw:e,expectedAmountQuoteRaw:r,baseCurrencyId:s}}){return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.addLiquidityv2",components:{baseAmountAndToken:(0,i.jsx)(g,{rawAmount:e,currencyId:s,sigFigs:3}),quoteAmountAndToken:(0,i.jsx)(g,{rawAmount:r,currencyId:n,sigFigs:3})}})}function Z({info:n}){return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.sendSummary",components:{amount:(0,i.jsx)(g,{rawAmount:n.amount,currencyId:n.currencyId,sigFigs:6})},values:{recipient:n.recipient}})}function D({info:n}){return n.tradeType===o.TradeType.EXACT_INPUT?(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.swapExactIn",components:{amount1:(0,i.jsx)(g,{rawAmount:n.inputCurrencyAmountRaw,currencyId:n.inputCurrencyId,sigFigs:6}),amount2:(0,i.jsx)(g,{rawAmount:n.settledOutputCurrencyAmountRaw??n.expectedOutputCurrencyAmountRaw,currencyId:n.outputCurrencyId,sigFigs:6})}}):(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.swapExactOut",components:{amount1:(0,i.jsx)(g,{rawAmount:n.expectedInputCurrencyAmountRaw,currencyId:n.inputCurrencyId,sigFigs:6}),amount2:(0,i.jsx)(g,{rawAmount:n.outputCurrencyAmountRaw,currencyId:n.outputCurrencyId,sigFigs:6})}})}function R({info:n}){var e,r;const{token0CurrencyId:s,token1CurrencyId:t}=n,o=(0,c.U8)(s),a=(0,c.U8)(t);return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.addLiquidity",values:{baseSymbol:null===(e=o)||void 0===e?void 0:e.symbol,quoteSymbol:null===(r=a)||void 0===r?void 0:r.symbol}})}function F({info:n}){const{token0CurrencyId:e,token1CurrencyId:r,token0CurrencyAmountRaw:s,token1CurrencyAmountRaw:t}=n;return(0,i.jsx)(y.Trans,{i18nKey:"account.transactionSummary.removeLiquiditySummary",components:{base:(0,i.jsx)(g,{rawAmount:s,currencyId:e,sigFigs:3}),quote:(0,i.jsx)(g,{rawAmount:t,currencyId:r,sigFigs:3})}})}function q({info:n}){switch(n.type){case x.i.ADD_LIQUIDITY_V3_POOL:return(0,i.jsx)($,{info:n});case x.i.ADD_LIQUIDITY_V2_POOL:return(0,i.jsx)(_,{info:n});case x.i.CLAIM:return(0,i.jsx)(f,{info:n});case x.i.DEPOSIT_LIQUIDITY_STAKING:return(0,i.jsx)(k,{});case x.i.WITHDRAW_LIQUIDITY_STAKING:return(0,i.jsx)(K,{});case x.i.SWAP:return(0,i.jsx)(D,{info:n});case x.i.APPROVAL:return(0,i.jsx)(T,{info:n});case x.i.VOTE:return(0,i.jsx)(b,{info:n});case x.i.DELEGATE:return(0,i.jsx)(w,{info:n});case x.i.WRAP:return(0,i.jsx)(A,{info:n});case x.i.CREATE_V3_POOL:return(0,i.jsx)(E,{info:n});case x.i.MIGRATE_LIQUIDITY_V2_TO_V3:return(0,i.jsx)(C,{info:n});case x.i.COLLECT_FEES:return(0,i.jsx)(P,{info:n});case x.i.REMOVE_LIQUIDITY_V3:return(0,i.jsx)(L,{info:n});case x.i.QUEUE:return(0,i.jsx)(I,{info:n});case x.i.EXECUTE:return(0,i.jsx)(S,{info:n});case x.i.SUBMIT_PROPOSAL:return(0,i.jsx)(v,{});case x.i.SEND:return(0,i.jsx)(Z,{info:n});case x.i.INCREASE_LIQUIDITY:return(0,i.jsx)(R,{info:n});case x.i.DECREASE_LIQUIDITY:return(0,i.jsx)(F,{info:n});case x.i.CREATE_POSITION:case x.i.MIGRATE_LIQUIDITY_V3_TO_V4:case x.i.BRIDGE:return(0,i.jsx)(i.Fragment,{})}}var O=r(67978),U=r(3115),N=r(53972),H=r(36664),z=r(61152);const W=H.ZP.div`
  height: 90px;
  width: 90px;
`,M=z.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,Q=z.keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`,B=H.ZP.circle`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${M} 0.9s ease-in-out;
  animation: ${M} 0.9s ease-in-out;
`,V=H.ZP.polyline`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke-dashoffset: -100;
  -webkit-animation: ${Q} 0.9s 0.35s ease-in-out forwards;
  animation: ${Q} 0.9s 0.35s ease-in-out forwards;
`;function Y({className:n}){const e=(0,z.useTheme)();return(0,i.jsx)(W,{className:n,"data-testid":"animated-confirmation",children:(0,i.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[(0,i.jsx)(B,{className:"path circle",fill:"none",stroke:e.success,strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,i.jsx)(V,{className:"path check",fill:"none",stroke:e.success,strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})})}var G=r(55478),X=r(83792),J=r(22722),nn=r(45779),en=r(33882),rn=r(19733),sn=r(10404),tn=r(90379),on=r(97756),an=r(77134),cn=r(56363),un=r(55892),dn=r(70854),ln=r(33127),mn=r(3684),xn=r(92139),pn=r(9450),yn=r(30754);const hn=H.ZP.div`
  background-color: ${({theme:n})=>n.surface1};
  border-radius: 20px;
  outline: 1px solid ${({theme:n})=>n.surface3};
  width: 100%;
  padding: 16px;
`,jn=(0,H.ZP)(G.Tz)`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`,gn=(0,H.ZP)(G.lg)`
  padding: ${({inline:n})=>n?"20px 0":"32px 0;"};
`,fn=(0,H.ZP)(G.Tz)`
  padding-bottom: 12px;
`;function vn({onDismiss:n,pendingText:e,inline:r}){return(0,i.jsx)(hn,{children:(0,i.jsxs)(G.Tz,{gap:"md",children:[!r&&(0,i.jsxs)(X.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(an.Tw,{onClick:n})]}),(0,i.jsx)(gn,{inline:r,children:(0,i.jsx)(an._1,{src:t.Z,alt:"loader",size:r?"40px":"90px"})}),(0,i.jsxs)(G.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(cn.T.SubHeaderLarge,{color:"neutral1",textAlign:"center",children:(0,i.jsx)(y.Trans,{i18nKey:"transaction.confirmation.waiting"})}),(0,i.jsx)(cn.T.SubHeader,{color:"neutral1",textAlign:"center",children:e}),(0,i.jsx)(cn.T.SubHeaderSmall,{color:"neutral2",textAlign:"center",marginBottom:"12px",children:(0,i.jsx)(y.Trans,{i18nKey:"common.confirmTransaction.button"})})]})]})})}function Tn({onDismiss:n,chainId:e,hash:r,currencyToAdd:t,inline:o}){var a,u,d;const l=(0,z.useTheme)(),{connector:m}=(0,s.G)(),x=null===(a=t)||void 0===a?void 0:a.wrapped,p=(null===(u=(0,c.J3)(x))||void 0===u?void 0:u.logoUrl)??"",[h,j]=(0,nn.useState)(),g=(0,nn.useCallback)((()=>{var n,e,r;(null===(n=x)||void 0===n?void 0:n.symbol)&&(null===(e=m)||void 0===e?void 0:e.watchAsset)&&(null===(r=m)||void 0===r||r.watchAsset({address:x.address,symbol:x.symbol,decimals:x.decimals,image:p}).then((()=>j(!0))).catch((()=>j(!1))))}),[m,p,x]),f=e===xn.UniverseChainId.Mainnet?(0,i.jsx)(y.Trans,{i18nKey:"common.etherscan.link"}):(0,i.jsx)(y.Trans,{i18nKey:"common.viewOnBlockExplorer"});return(0,i.jsx)(hn,{children:(0,i.jsxs)(G.Tz,{children:[!o&&(0,i.jsxs)(X.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(an.Tw,{onClick:n})]}),(0,i.jsx)(gn,{inline:o,children:(0,i.jsx)(en.Z,{strokeWidth:1,size:o?"40px":"75px",color:l.accent1})}),(0,i.jsxs)(fn,{gap:"md",justify:"center",children:[(0,i.jsx)(cn.T.MediumHeader,{textAlign:"center",children:(0,i.jsx)(y.Trans,{i18nKey:"common.transactionSubmitted"})}),t&&(null===(d=m)||void 0===d?void 0:d.watchAsset)&&(0,i.jsx)(U.Sy,{mt:"12px",padding:"6px 12px",width:"fit-content",onClick:g,children:h?(0,i.jsxs)(X.DA,{children:[(0,i.jsx)(y.Trans,{i18nKey:"transaction.confirmation.submitted.currency.added",values:{currency:t.symbol}}),(0,i.jsx)(rn.Z,{size:"16px",stroke:l.success,style:{marginLeft:"6px"}})]}):(0,i.jsx)(X.DA,{children:(0,i.jsx)(y.Trans,{i18nKey:"transaction.confirmation.submitted.currency.add",values:{currency:t.symbol}})})}),(0,i.jsx)(U.DF,{onClick:n,style:{margin:"20px 0 0 0"},"data-testid":"dismiss-tx-confirmation",children:(0,i.jsx)(cn.T.HeadlineSmall,{color:l.deprecated_accentTextLightPrimary,children:o?(0,i.jsx)(y.Trans,{i18nKey:"common.return.label"}):(0,i.jsx)(y.Trans,{i18nKey:"common.close"})})}),e&&r&&(0,i.jsx)(an.dL,{href:(0,yn.getExplorerLink)(e,r,yn.ExplorerDataType.TRANSACTION),children:(0,i.jsx)(cn.T.Link,{color:l.accent1,children:f})})]})]})})}function bn({title:n,bottomContent:e,onDismiss:r,topContent:s,headerContent:t}){var o;return(0,i.jsxs)(hn,{children:[(0,i.jsxs)(G.Tz,{gap:"sm",children:[(0,i.jsxs)(X.ZP,{children:[null===(o=t)||void 0===o?void 0:o(),(0,i.jsx)(X.ZP,{justify:"center",marginLeft:"24px",children:(0,i.jsx)(cn.T.SubHeader,{children:n})}),(0,i.jsx)(an.Tw,{onClick:r,"data-testid":"confirmation-close-icon"})]}),s()]}),e&&(0,i.jsx)(jn,{gap:"16px",children:e()})]})}const In=(0,H.ZP)(O.Z)`
  padding: 6px 8px;
`;function Sn({onDismiss:n,chainId:e,hash:r,pendingText:s,inline:o}){var a;const c=(0,z.useTheme)(),u=(0,tn.kF)(r),d=u&&(0,on.q)(u),l=(null===(a=u)||void 0===a?void 0:a.status)===dn.TransactionStatus.Confirmed,m=d&&u.confirmedTime?(u.confirmedTime-u.addedTime)/1e3:void 0,x=(0,ln.getChainInfo)(e);return(0,i.jsx)(hn,{children:(0,i.jsxs)(G.Tz,{children:[!o&&(0,i.jsxs)(X.m0,{mb:"16px",children:[(0,i.jsx)(In,{children:(0,i.jsxs)(X.DA,{gap:"sm",children:[(0,i.jsx)(N.E,{chainId:e}),(0,i.jsx)(cn.T.SubHeaderSmall,{children:x.label})]})}),(0,i.jsx)(an.Tw,{onClick:n})]}),(0,i.jsx)(gn,{inline:o,children:d?l?(0,i.jsx)(Y,{}):(0,i.jsx)(sn.Z,{strokeWidth:1,size:o?"40px":"90px",color:c.critical}):(0,i.jsx)(an._1,{src:t.Z,alt:"loader",size:o?"40px":"90px"})}),(0,i.jsxs)(G.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(cn.T.SubHeaderLarge,{textAlign:"center",children:r?d?l?(0,i.jsx)(y.Trans,{i18nKey:"common.success"}):(0,i.jsx)(y.Trans,{i18nKey:"common.error.label"}):(0,i.jsx)(y.Trans,{i18nKey:"common.transactionSubmitted"}):(0,i.jsx)(y.Trans,{i18nKey:"transaction.confirmation.pending.wallet"})}),(0,i.jsx)(cn.T.BodySecondary,{textAlign:"center",children:u?(0,i.jsx)(q,{info:u.info}):s}),e&&r?(0,i.jsx)(an.dL,{href:(0,yn.getExplorerLink)(e,r,yn.ExplorerDataType.TRANSACTION),children:(0,i.jsx)(cn.T.SubHeaderSmall,{color:c.accent1,children:(0,i.jsx)(y.Trans,{i18nKey:"common.viewOnExplorer"})})}):(0,i.jsx)("div",{style:{height:"17px"}}),(0,i.jsx)(cn.T.SubHeaderSmall,{color:c.neutral3,marginTop:"20px",children:m?(0,i.jsx)("div",{children:(0,i.jsx)(y.Trans,{i18nKey:"transaction.confirmation.completionTime",components:{highlight:(0,i.jsx)("span",{style:{fontWeight:535,marginLeft:"4px",color:c.neutral1}})},count:m})}):(0,i.jsx)("div",{style:{height:"24px"}})}),(0,i.jsx)(U.DF,{onClick:n,style:{margin:"4px 0 0 0"},children:o?(0,i.jsx)(y.Trans,{i18nKey:"common.return.label"}):(0,i.jsx)(y.Trans,{i18nKey:"common.close"})})]})]})})}function wn({isOpen:n,onDismiss:e,attemptingTxn:r,hash:s,pendingText:t,reviewContent:o,currencyToAdd:a}){const{chainId:c}=(0,J.m)(),u=(0,mn.Nb)(c);return c&&u?(0,i.jsx)(un.AdaptiveWebModal,{isOpen:n,onClose:e,maxHeight:"90vh",p:0,children:(0,pn.isL2ChainId)(c)&&(s||r)?(0,i.jsx)(Sn,{chainId:c,hash:s,onDismiss:e,pendingText:t}):r?(0,i.jsx)(vn,{onDismiss:e,pendingText:t}):s?(0,i.jsx)(Tn,{chainId:c,hash:s,onDismiss:e,currencyToAdd:a}):o()}):null}},44609:(n,e,r)=>{r.d(e,{SS:()=>x,sq:()=>u,MN:()=>d,RF:()=>l,uO:()=>m,I8:()=>c});const i=r.p+"static/media/big_unicorn.595c49962d708abbaaec.png",s=r.p+"static/media/noise.3c7efafc83614205bd1a.png",t=r.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var o=r(55478),a=r(36664);const c=(0,a.ZP)(o.Tz)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,u=a.ZP.span`
  background: url(${i});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:n})=>n&&"filter: saturate(0)"}
`,d=a.ZP.span`
  background: url(${t});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:n})=>n&&"filter: saturate(0)"}
`,l=a.ZP.span`
  background: url(${s});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,m=(0,a.ZP)(o.Tz)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:n})=>n&&"0.4"};
`,x=a.ZP.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},11712:(n,e,r)=>{r.d(e,{Z:()=>a,e:()=>o});var i=r(92936),s=r(36664),t=r(54884);const o=s.ZP.main`
  position: relative;
  margin-top: ${({$margin:n})=>n??"0px"};
  max-width: ${({$maxWidth:n})=>n??"420px"};
  width: 100%;
  background: ${({theme:n})=>n.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:n})=>n.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${t.k.default};
`;function a(n){return(0,i.jsx)(o,{...n})}},83639:(n,e,r)=>{r.d(e,{DC:()=>a,ER:()=>c,bb:()=>u,im:()=>o,pr:()=>d});var i=r(38081),s=r(36664),t=r(22953);const o=s.ZP.div`
  position: relative;
  padding: 20px;
`,a=(0,s.ZP)(t.xv)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:n})=>n.accent1};
`,c=s.ZP.button`
  padding: 0.5rem 1rem;
  background-color: ${({theme:n})=>n.accent2};
  border: 1px solid ${({theme:n})=>n.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:n})=>n.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:n})=>n.accent1};
  :hover {
    border: 1px solid ${({theme:n})=>n.accent1};
  }
  :focus {
    border: 1px solid ${({theme:n})=>n.accent1};
    outline: none;
  }
`,u=s.ZP.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,d=(0,s.ZP)(i.pr)`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`}}]);
//# sourceMappingURL=7297.8fe46461.chunk.js.map