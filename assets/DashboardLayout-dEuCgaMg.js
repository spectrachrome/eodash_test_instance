import{q as _,L as w,M as c,r as x,Z as v,P as a,Q as l,R as m,_ as h,T as e,S as g,m as y,U as b,F as k,V as C,W as V,a as A,$}from"./index-AssLQkKW.js";import{V as E}from"./VBtn-DuPe7EWy.js";import{V as L}from"./index-oOmAPs_8.js";import{V as B}from"./VMain-ARa_-U8S.js";import"./color-DwgsCfwx.js";import"./dimensions-Bh2cPFQk.js";import"./ssrBoot-DSaZAHYH.js";class M extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(o,r,s){r!==s&&(this[o]=s),this.render()}}class S extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          background: lightgrey;
          border: 1px solid darkgrey;
          border-radius: 4px;
          padding: 4px 8px;
          overflow: hidden;


          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(o,r,s){r!==s&&(this[o]=s),this.render()}}customElements.define("eox-layout",M);customElements.define("eox-layout-item",S);const T=["gap"],z={style:{"z-index":"0"},x:"0",y:"0",h:"12",w:"12"},H=["x","y","h","w"],O={__name:"DashboardLayout",setup(u){const o=_(w),[r]=c([o.template?.background]),s=o.template?.widgets,d=c(s),p=x([]),{slideBtns:n,slideInOut:f}=v(p,s);return(I,W)=>(a(),l(B,null,{default:m(()=>[h("eox-layout",{gap:e(o).template.gap??2},[h("eox-layout-item",z,[(a(),l(g(e(r).component),y({id:"bg-widget"},e(r).props),null,16))]),(a(!0),b(k,null,C(e(s),(i,t)=>(a(),b("eox-layout-item",{ref_for:!0,ref_key:"itemEls",ref:p,key:t,style:{position:"relative",overflow:"visible","z-index":"1","border-radius":"0px",background:"rgb(var(--v-theme-surface))"},x:i.layout.x,y:i.layout.y,h:i.layout.h,w:i.layout.w},[e(n)[t].enabled?(a(),l(E,{key:0,position:"absolute",variant:"tonal",style:V(e(n)[t].style),class:"slide-btn",onClick:D=>e(f)(t)},{default:m(()=>[A(L,{icon:e(n)[t].active?e(n)[t].icon.in:e(n)[t].icon.out},null,8,["icon"])]),_:2},1032,["style","onClick"])):$("v-if",!0),(a(),l(g(e(d)[t].value.component),y({key:e(d)[t].value.id,ref_for:!0},e(d)[t].value.props),null,16))],8,H))),128))],8,T)]),_:1}))}};export{O as default};
