webpackJsonp([1],{"3bww":function(t,e){},"6N8X":function(t,e){},"8Hxs":function(t,e){},BNAH:function(t,e){},Iv1r:function(t,e){},KIGL:function(t,e){},NHnr:function(t,e,i){"use strict";function s(t){i("QVru")}function n(t){i("Iv1r")}function a(t){i("BNAH")}function r(t){i("KIGL")}function l(t){i("6N8X")}function o(t){i("lKTj")}function u(t){i("v75J")}function c(t){i("SWMe")}function h(t){i("poDd")}function d(){return Ve({url:"/invcode",method:"get"})}function p(t){return Ve({url:"/adduser",method:"post",data:t})}function v(t){i("8Hxs")}function m(t){i("kAp1")}function f(t){i("mA8H")}function g(t){i("V38A")}function _(t){i("3bww")}Object.defineProperty(e,"__esModule",{value:!0});var w=i("7+uW"),x=i("v5o6"),b=i.n(x),y=i("/ocq"),S={name:"app"},C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},k=[],V={render:C,staticRenderFns:k},$=V,E=i("VU/8"),T=s,N=E(S,$,!1,T,null,null),B=N.exports,F=i("wmxo"),q=(F.a,String,String,String,String,String,String,Number,String,String,{name:"group",methods:{cleanStyle:F.a},props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number],footerTitle:String,footerTitleColor:String}}),A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.title?i("div",{staticClass:"weui-cells__title",style:t.cleanStyle({color:t.titleColor}),domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:t.cleanStyle({marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter})},[t._t("after-title"),t._v(" "),t._t("default")],2),t._v(" "),t.footerTitle?i("div",{staticClass:"weui-cells__title vux-group-footer-title",style:t.cleanStyle({color:t.footerTitleColor}),domProps:{innerHTML:t._s(t.footerTitle)}}):t._e()],2)},L=[],R={render:A,staticRenderFns:L},I=R,W=i("VU/8"),M=n,j=W(q,I,!1,M,null,null),H=j.exports,O=i("fZjL"),U=i.n(O),z=i("f6Hi"),D=(String,Boolean,{name:"icon",props:{type:String,isMsg:Boolean},computed:{className:function(){return"weui-icon weui_icon_"+this.type+" weui-icon-"+this.type.replace(/_/g,"-")}}}),P=function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:[t.className,t.isMsg?"weui-icon_msg":""]})},K=[],X={render:P,staticRenderFns:K},Q=X,G=i("VU/8"),J=a,Y=G(D,Q,!1,J,null,null),Z=Y.exports,tt=i("xNvf"),et=(tt.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[tt.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},st=[],nt={render:it,staticRenderFns:st},at=nt,rt=i("VU/8"),lt=r,ot=rt(et,at,!1,lt,null,null),ut=ot.exports,ct={name:"inline-desc"},ht=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},dt=[],pt={render:ht,staticRenderFns:dt},vt=pt,mt=i("VU/8"),ft=l,gt=mt(ct,vt,!1,ft,null,null),_t=gt.exports,wt=i("2LX0"),xt=i.n(wt),bt=i("Ewe+"),yt=i.n(bt),St=i("nror"),Ct=i("lFEC"),kt=i.n(Ct),Vt={email:{fn:xt.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return yt()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}},$t=(z.a,String,String,String,String,Number,String,Boolean,Boolean,String,String,String,Function,Number,Number,Boolean,String,String,String,String,String,String,Boolean,String,Number,String,String,String,Boolean,{email:{fn:xt.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return yt()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}}),Et={name:"x-input",created:function(){var t=this;this.currentValue=void 0===this.value||null===this.value?"":this.mask?this.maskValue(this.value):this.value,!this.required||void 0!==this.currentValue&&""!==this.currentValue||(this.valid=!1),this.handleChangeEvent=!0,this.debounce&&(this._debounce=Object(St.a)(function(){t.$emit("on-change",t.currentValue)},this.debounce))},beforeMount:function(){this.$slots&&this.$slots["restricted-label"]&&(this.hasRestrictedLabel=!0),this.$slots&&this.$slots["right-full-height"]&&(this.hasRightFullHeightSlot=!0)},beforeDestroy:function(){this._debounce&&this._debounce.cancel(),window.removeEventListener("resize",this.scrollIntoView)},mixins:[z.a],components:{Icon:Z,InlineDesc:_t,Toast:ut},props:{title:{type:String,default:""},type:{type:String,default:"text"},placeholder:String,value:[String,Number],name:String,readonly:Boolean,disabled:Boolean,keyboard:String,inlineDesc:String,isType:[String,Function],min:Number,max:Number,showClear:{type:Boolean,default:!0},equalWith:String,textAlign:String,autocomplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},autocorrect:{type:String,default:"off"},spellcheck:{type:String,default:"false"},novalidate:{type:Boolean,default:!1},iconType:String,debounce:Number,placeholderAlign:String,labelWidth:String,mask:String,shouldToastError:{type:Boolean,default:!0}},computed:{labelStyles:function(){var t=this.$parent,e=void 0===t?{}:t;return{width:this.labelWidthComputed||e.labelWidth||this.labelWidthComputed,textAlign:e.labelAlign,marginRight:e.labelMarginRight}},labelClass:function(){return{"vux-cell-justify":this.$parent&&("justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign)}},pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidthComputed:function(){var t=this.title.replace(/[^x00-xff]/g,"00").length/2+1;if(t<10)return t+"em"},hasErrors:function(){return U()(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}},showWarn:function(){return!this.novalidate&&!this.equalWith&&!this.valid&&this.firstError&&(this.touched||this.forceShowError)}},mounted:function(){window.addEventListener("resize",this.scrollIntoView)},methods:{scrollIntoView:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;/iphone/i.test(navigator.userAgent),"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName||setTimeout(function(){t.$refs.input.scrollIntoViewIfNeeded(!0)},e)},onClickErrorIcon:function(){this.shouldToastError&&this.firstError&&(this.showErrorToast=!0),this.$emit("on-click-error-icon",this.firstError)},maskValue:function(t){return this.mask?kt.a.toPattern(t,this.mask):t},reset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.dirty=!1,this.currentValue=t,this.firstError="",this.valid=!0},clear:function(){this.currentValue="",this.focus(),this.$emit("on-click-clear-icon")},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},focusHandler:function(t){var e=this;this.$emit("on-focus",this.currentValue,t),this.isFocus=!0,setTimeout(function(){!e.$refs.input||e.$refs.input.scrollIntoViewIfNeeded(!1)},1e3)},onBlur:function(t){this.setTouched(),this.validate(),this.isFocus=!1,this.$emit("on-blur",this.currentValue,t)},onKeyUp:function(t){"Enter"===t.key&&(t.target.blur(),this.$emit("on-enter",this.currentValue,t))},getError:function(){var t=U()(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(void 0!==this.equalWith)return void this.validateEqual();if(this.errors={},!this.currentValue&&!this.required)return void(this.valid=!0);if(!this.currentValue&&this.required)return this.valid=!1,this.errors.required="必填哦",void this.getError();if("string"==typeof this.isType){var t=$t[this.isType];if(t){var e=this.currentValue;if("china-mobile"===this.isType&&"999 9999 9999"===this.mask&&(e=this.currentValue.replace(/\s+/g,"")),this.valid=t.fn(e),!this.valid)return this.forceShowError=!0,this.errors.format=t.msg+"格式不对哦~",void this.getError();delete this.errors.format}}if("function"==typeof this.isType){var i=this.isType(this.currentValue);if(this.valid=i.valid,!this.valid)return this.errors.format=i.msg,this.forceShowError=!0,void this.getError();delete this.errors.format}if(this.min){if(this.currentValue.length<this.min)return this.errors.min="最少应该输入"+this.min+"个字符哦",this.valid=!1,void this.getError();delete this.errors.min}if(this.max){if(this.currentValue.length>this.max)return this.errors.max="最多可以输入"+this.max+"个字符哦",this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){return!this.equalWith&&this.currentValue?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.dirty||this.currentValue.length>=this.equalWith.length)&&this.currentValue!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):void(!this.currentValue&&this.required?this.valid=!1:(this.valid=!0,delete this.errors.equal))},_getInputMaskSelection:function(t,e,i,s){if(!this.mask||s&&0===e)return t;if(0===e&&(e=this.lastDirection),e>0){if(!this.mask.substr(t-e,1).match(/[9SA]/))return this._getInputMaskSelection(t+1,e,i,!0)}return t}},data:function(){return{hasRightFullHeightSlot:!1,hasRestrictedLabel:!1,firstError:"",forceShowError:!1,hasLengthEqual:!1,valid:!0,currentValue:"",showErrorToast:!1,isFocus:!1}},watch:{mask:function(t){t&&this.currentValue&&(this.currentValue=this.maskValue(this.currentValue))},valid:function(){this.getError()},value:function(t){this.currentValue=t},equalWith:function(t){t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()},currentValue:function(t,e){var i=this,s=null;!this.equalWith&&t&&this.validateEqual(),t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate();try{s=this.$refs.input.selectionStart;var n=t.length-e.length;s=this._getInputMaskSelection(s,n,this.maskValue(t)),this.lastDirection=n}catch(t){}this.$emit("input",this.maskValue(t)),this.$nextTick(function(){i.$refs.input.selectionStart!==s&&(i.$refs.input.selectionStart=s,i.$refs.input.selectionEnd=s),i.currentValue!==i.maskValue(t)&&(i.currentValue=i.maskValue(t))}),this._debounce?this._debounce():this.$emit("on-change",t)}}},Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-input weui-cell",class:{"weui-cell_warn":t.showWarn,disabled:t.disabled,"vux-x-input-has-right-full":t.hasRightFullHeightSlot}},[i("div",{staticClass:"weui-cell__hd"},[t.hasRestrictedLabel?i("div",{style:t.labelStyles},[t._t("restricted-label")],2):t._e(),t._v(" "),t._t("label",[t.title?i("label",{staticClass:"weui-label",class:t.labelClass,style:{width:t.labelWidth||t.$parent.labelWidth||t.labelWidthComputed,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight},attrs:{for:"vux-x-input-"+t.uuid},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.inlineDesc?i("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-cell__bd weui-cell__primary",class:t.placeholderAlign?"vux-x-input-placeholder-"+t.placeholderAlign:""},[t.type&&"text"!==t.type?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"text",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),"number"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"number",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"email"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"email",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"password"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"password",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"tel"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"tel",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e()]),t._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.hasRightFullHeightSlot&&!t.equalWith&&t.showClear&&""!==t.currentValue&&!t.readonly&&!t.disabled&&t.isFocus,expression:"!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"}],attrs:{type:"clear"},nativeOn:{click:function(e){return t.clear(e)}}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.showWarn,expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{type:"warn",title:t.valid?"":t.firstError},nativeOn:{click:function(e){return t.onClickErrorIcon(e)}}}),t._v(" "),!t.novalidate&&t.hasLengthEqual&&t.dirty&&t.equalWith&&!t.valid?i("icon",{staticClass:"vux-input-icon",attrs:{type:"warn"},nativeOn:{click:function(e){return t.onClickErrorIcon(e)}}}):t._e(),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.novalidate&&t.equalWith&&t.equalWith===t.currentValue&&t.valid,expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"success"===t.iconType,expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"error"===t.iconType,expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{type:"warn"}}),t._v(" "),t._t("right"),t._v(" "),t.hasRightFullHeightSlot?i("div",{staticClass:"vux-x-input-right-full"},[t._t("right-full-height")],2):t._e()],2),t._v(" "),i("toast",{attrs:{type:"text",width:"auto",time:600},model:{value:t.showErrorToast,callback:function(e){t.showErrorToast=e},expression:"showErrorToast"}},[t._v(t._s(t.firstError))])],1)},Nt=[],Bt={render:Tt,staticRenderFns:Nt},Ft=Bt,qt=i("VU/8"),At=o,Lt=qt(Et,Ft,!1,At,null,null),Rt=Lt.exports,It=i("0FxO"),Wt=i("2IIR"),Mt=i("vLYD"),jt=(Object(Wt.a)(),{name:"cell",components:{InlineDesc:_t},props:Object(Wt.a)(),created:function(){},beforeMount:function(){this.hasTitleSlot=!!this.$slots.title,this.$slots.value},computed:{labelStyles:function(){return Object(F.a)({width:Object(Mt.a)(this,"labelWidth"),textAlign:Object(Mt.a)(this,"labelAlign"),marginRight:Object(Mt.a)(this,"labelMarginRight")})},valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":this.$parent&&("justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign)}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{onClick:function(){!this.disabled&&Object(It.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!0,hasMounted:!1}}}),Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},style:t.style,on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[i("p",[t.title||t.hasTitleSlot?i("label",{staticClass:"vux-label",class:t.labelClass,style:t.labelStyles},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),i("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),i("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?i("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},Ot=[],Ut={render:Ht,staticRenderFns:Ot},zt=Ut,Dt=i("VU/8"),Pt=u,Kt=Dt(jt,zt,!1,Pt,null,null),Xt=Kt.exports,Qt=(Object,Object,{name:"card",props:{header:Object,footer:Object},methods:{onClickFooter:function(){this.footer.link&&Object(It.a)(this.footer.link,this.$router),this.$emit("on-click-footer")}}}),Gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-panel weui-panel_access"},[t.header&&t.header.title?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header.title)},on:{click:function(e){return t.$emit("on-click-header")}}}):t._e(),t._v(" "),t._t("header"),t._v(" "),i("div",{staticClass:"weui-panel__bd"},[i("div",{staticClass:"vux-card-content"},[t._t("content")],2)]),t._v(" "),i("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:"},on:{click:t.onClickFooter}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()]),t._v(" "),t._t("footer")],2)},Jt=[],Yt={render:Gt,staticRenderFns:Jt},Zt=Yt,te=i("VU/8"),ee=c,ie=te(Qt,Zt,!1,ee,null,null),se=ie.exports,ne=(Boolean,Boolean,Boolean,String,String,Boolean,String,Object,Array,{name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&Object(It.a)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}),ae=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},re=[],le={render:ae,staticRenderFns:re},oe=le,ue=i("VU/8"),ce=h,he=ue(ne,oe,!1,ce,null,null),de=he.exports,pe=(String,{name:"box",props:{gap:String}}),ve=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{margin:t.gap}},[t._t("default")],2)},me=[],fe={render:ve,staticRenderFns:me},ge=fe,_e=i("VU/8"),we=_e(pe,ge,!1,null,null,null),xe=we.exports,be=i("//Fk"),ye=i.n(be),Se=i("mtWM"),Ce=i.n(Se),ke=Ce.a.create({baseURL:"/api/v1/",timeout:1e4});ke.interceptors.request.use(function(t){return t},function(t){console.log(t),ye.a.reject(t)}),ke.interceptors.response.use(function(t){return t.data},function(t){return console.log(t.response.status,t.response.data.error),ye.a.reject(t)});var Ve=ke,$e={components:{Group:H,XInput:Rt,Cell:Xt,Card:se,XButton:de,Box:xe,Toast:ut},data:function(){return{isLoading:!1,showToast:!1,email:null,password:null,inviteCode:null}},methods:{submitForm:function(){var t=this;if(this.$refs.email.valid&&this.password&&this.inviteCode){this.isLoading=!0;var e={};e.email=this.email,e.password=this.password,e.code=this.inviteCode,p(e).then(function(e){console.log(e),"SUCCESS"===e?t.$router.push({name:"Result",path:"/result",params:{result:"success"}}):t.$router.push({name:"Result",path:"/result",params:{result:"failed",description:e}})})}else this.isLoading=!1,this.showToast=!0}}},Ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("card",{attrs:{header:{title:"说明"}}},[i("p",{staticClass:"card-padding",attrs:{slot:"content"},slot:"content"},[t._v("\n        1.账号充值卡密以“Pay-”开头，不要和内测码搞混了。"),i("br"),t._v("\n        2.账号充值卡密可以叠加使用，时间累计"),i("br"),t._v("\n        3.永久会员使用月卡可以清除设备记录，依然是永久会员。"),i("br"),t._v("\n        4.限时免费卡密“bslapp.me”，输入即可获得三天会员时间。"),i("br")])]),t._v(" "),i("group",{attrs:{title:"用户信息"}},[i("x-input",{ref:"email",attrs:{title:"邮箱: ",max:40,required:!0,placeholder:"请输入变色龙账户邮箱","is-type":"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),i("x-input",{ref:"password",attrs:{title:"密码: ",max:40,required:!0,placeholder:"请输入变色龙账户密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),i("group",{attrs:{title:"激活码"}},[i("x-input",{ref:"inviteCode",attrs:{title:"激活码卡密: ",max:40,required:!0,placeholder:"请输入激活码卡密"},model:{value:t.inviteCode,callback:function(e){t.inviteCode=e},expression:"inviteCode"}})],1),t._v(" "),i("toast",{attrs:{type:"text",time:800,"is-show-mask":"",text:"请检查你的输入",position:"bottom"},model:{value:t.showToast,callback:function(e){t.showToast=e},expression:"showToast"}}),t._v(" "),i("box",{attrs:{gap:"35px 10px"}},[i("x-button",{attrs:{type:"primary","action-type":"button","show-loading":t.isLoading},nativeOn:{click:function(e){return t.submitForm(e)}}},[t._v("充值到我的账户")])],1)],1)},Te=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vux-demo"},[s("img",{staticClass:"logo",attrs:{src:i("ge4Q")}}),t._v(" "),s("h1",[t._v(" 变色龙账号充值续费 ")])])}],Ne={render:Ee,staticRenderFns:Te},Be=Ne,Fe=i("VU/8"),qe=v,Ae=Fe($e,Be,!1,qe,null,null),Le=Ae.exports,Re={name:"msg",props:["icon","title","description","buttons"],methods:{onClick:function(t,e){"function"==typeof t&&t(),e&&Object(It.a)(e,this.$router)}}},Ie=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-msg"},[i("div",{staticClass:"weui-msg__icon-area"},[i("i",{staticClass:"weui-icon_msg",class:"weui-icon-"+(t.icon||"success")})]),t._v(" "),i("div",{staticClass:"weui-msg__text-area"},[i("h2",{staticClass:"weui-msg__title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),i("p",{staticClass:"weui-msg__desc"},[t._t("description")],2),t._v(" "),t.description?i("p",{staticClass:"weui-msg__desc",domProps:{innerHTML:t._s(t.description)}}):t._e()]),t._v(" "),i("div",{staticClass:"weui-msg__opr-area"},[i("p",{staticClass:"weui-btn-area"},[t._t("buttons",t._l(t.buttons,function(e){return i("a",{staticClass:"weui-btn",class:"weui-btn_"+e.type,attrs:{href:"javascript:;"},on:{click:function(i){return t.onClick(e.onClick,e.link)}}},[t._v(t._s(e.text))])}))],2)])])},We=[],Me={render:Ie,staticRenderFns:We},je=Me,He=i("VU/8"),Oe=m,Ue=He(Re,je,!1,Oe,null,null),ze=Ue.exports,De={name:"divider"},Pe=function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"vux-divider"},[t._t("default")],2)},Ke=[],Xe={render:Pe,staticRenderFns:Ke},Qe=Xe,Ge=i("VU/8"),Je=f,Ye=Ge(De,Qe,!1,Je,null,null),Ze=Ye.exports,ti={components:{Msg:ze,Divider:Ze,XButton:de},created:function(){this.showResult()},methods:{showResult:function(){var t=this.$route.params.result;console.log(t),"success"===t?(this.icon="success",this.title="激活成功",this.description="会员时间已增加，请稍后查询。"):(this.icon="warn",this.title="激活失败",this.description=this.$route.params.description)}},data:function(){return{title:"激活中",description:"msg description",icon:"waiting",buttons:[{type:"primary",text:"确定",link:"/"},{type:"default",text:"返回",link:"/"}]}}},ei=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("msg",{attrs:{title:t.title,description:t.description,buttons:t.buttons,icon:t.icon}})],1)},ii=[],si={render:ei,staticRenderFns:ii},ni=si,ai=i("VU/8"),ri=ai(ti,ni,!1,null,null,null),li=ri.exports,oi=(Boolean,String,String,String,{name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}),ui=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},ci=[],hi={render:ui,staticRenderFns:ci},di=hi,pi=i("VU/8"),vi=g,mi=pi(oi,di,!1,vi,null,null),fi=mi.exports,gi=i("63CM"),_i=(gi.a,{directives:{TransferDom:gi.a},components:{Loading:fi,Group:H,Cell:Xt},created:function(){this.fetchData()},data:function(){return{fetch:!1,hint:"加载中...",aItems:[],bItems:[]}},methods:{fetchData:function(){var t=this;console.log("fetch data"),this.fetch=!0,d().then(function(e){for(var i in e)"99"===e[i].type?t.aItems.unshift(e[i]):(e[i].code.includes("https")?(e[i].link=e[i].code.split(" ")[1],e[i].code=e[i].code.split(" ")[0],e[i].clickAble=!0):(e[i].link="",e[i].clickAble=!1),t.bItems.unshift(e[i]));t.fetch=!1})}}}),wi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("loading",{attrs:{show:t.fetch,text:t.hint}})],1),t._v(" "),i("group",{attrs:{title:"99元VIP专属邀请码"}},t._l(t.aItems,function(e){return i("cell",{key:e.code,attrs:{title:e.code}},[i("svg",{directives:[{name:"show",rawName:"v-show",value:"0"===e.used,expression:"item.used === '0'"}],staticClass:"vux-x-icon vux-x-icon-ios-checkmark cell-x-icon",attrs:{type:"ios-checkmark",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 512 512"}},[i("path",{attrs:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-32.1 281.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z"}})]),t._v(" "),i("svg",{directives:[{name:"show",rawName:"v-show",value:"0"!==e.used,expression:"item.used !== '0'"}],staticClass:"vux-x-icon vux-x-icon-ios-close cell-x-icon",attrs:{type:"ios-close",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 512 512"}},[i("path",{staticClass:"st0",attrs:{d:"M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0s81.2-213 0-294.2zM352 340.2L340.2 352l-84.4-84.2-84 83.8-11.8-11.8 84-83.8-84-83.8 11.8-11.8 84 83.8 84.4-84.2 11.8 11.8-84.4 84.2 84.4 84.2z"}})])])}),1),t._v(" "),i("group",{attrs:{title:"49元VIP专属邀请码"}},t._l(t.bItems,function(e){return i("cell",{key:e.code,attrs:{title:e.code,"is-link":e.clickAble,link:e.link}},[i("svg",{directives:[{name:"show",rawName:"v-show",value:"0"===e.used,expression:"item.used === '0'"}],staticClass:"vux-x-icon vux-x-icon-ios-checkmark cell-x-icon",attrs:{type:"ios-checkmark",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 512 512"}},[i("path",{attrs:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-32.1 281.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z"}})]),t._v(" "),i("svg",{directives:[{name:"show",rawName:"v-show",value:"0"!==e.used,expression:"item.used !== '0'"}],staticClass:"vux-x-icon vux-x-icon-ios-close cell-x-icon",attrs:{type:"ios-close",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 512 512"}},[i("path",{staticClass:"st0",attrs:{d:"M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0s81.2-213 0-294.2zM352 340.2L340.2 352l-84.4-84.2-84 83.8-11.8-11.8 84-83.8-84-83.8 11.8-11.8 84 83.8 84.4-84.2 11.8 11.8-84.4 84.2 84.4 84.2z"}})])])}),1)],1)},xi=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vux-demo"},[s("img",{staticClass:"logo",attrs:{src:i("ge4Q"),link:"/"}}),t._v(" "),s("h1",[t._v(" 逍遥游模式邀请码 ")])])}],bi={render:wi,staticRenderFns:xi},yi=bi,Si=i("VU/8"),Ci=_,ki=Si(_i,yi,!1,Ci,null,null),Vi=ki.exports;w.a.use(y.a);var $i=[{name:"Home",path:"/",component:Le},{name:"Result",path:"/result",component:li},{name:"InviteCode",path:"/invcode",component:Vi}],Ei=new y.a({routes:$i});b.a.attach(document.body),w.a.config.productionTip=!1,new w.a({router:Ei,render:function(t){return t(B)}}).$mount("#app-box")},QVru:function(t,e){},SWMe:function(t,e){},V38A:function(t,e){},ge4Q:function(t,e,i){t.exports=i.p+"static/img/vux_logo.6043f16.png"},kAp1:function(t,e){},lKTj:function(t,e){},mA8H:function(t,e){},poDd:function(t,e){},v75J:function(t,e){}},["NHnr"]);