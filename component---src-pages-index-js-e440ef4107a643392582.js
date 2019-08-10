(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(321),i=a(88),s=(a(28),a(371)),l=a(616),c=a(612),p=a(367),u=a(368),d=a(370),m=a(369),g=a.n(m),h=a(611),f=a(244),v=(a(16),a(17),a(9),a(43),a(31),a(449)),b=a.n(v),E=a(463),y=a.n(E),C=a(475),S=a.n(C),P=a(477),N=a.n(P),O=a(416),F=a(365),w=a(423);var k=[];function _(e){var t=e.classes,a=e.inputRef,n=void 0===a?function(){}:a,o=e.ref,i=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["classes","inputRef","ref"]);return r.a.createElement(O.a,Object.assign({fullWidth:!0,InputProps:{inputRef:function(e){o(e),n(e)},classes:{input:t.input}}},i))}function x(e,t){var a=t.query,n=t.isHighlighted,o=S()(e.label,a),i=N()(e.label,o);return r.a.createElement(w.a,{selected:n,component:"div"},r.a.createElement("div",null,i.map(function(e){return r.a.createElement("span",{key:e.text,style:{fontWeight:e.highlight?500:400}},e.text)})))}function B(e){var t=b()(e.trim()).toLowerCase(),a=t.length,n=0;return 0===a?[]:k.filter(function(e){var r=n<5&&e.label.slice(0,a).toLowerCase()===t;return r&&(n+=1),r})}function j(e){return e.label}var A=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleSuggestionsFetchRequested=function(e){var t=e.value;a.setState({setSuggestions:B(t)})},a.handleSuggestionsClearRequested=function(){a.setState({setSuggestions:[]})},a.handleChange=function(e){return function(t,n){var r,o=n.newValue;a.setState(((r={})[e]=o,r))}},a.state={popper:"",setSuggestions:[],anchorEl:null,single:""},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.classes,t={renderInputComponent:_,suggestions:this.state.setSuggestions,onSuggestionsFetchRequested:this.handleSuggestionsFetchRequested,onSuggestionsClearRequested:this.handleSuggestionsClearRequested,getSuggestionValue:j,renderSuggestion:x};return r.a.createElement("div",{className:e.root},r.a.createElement(y.a,Object.assign({},t,{inputProps:{classes:e,id:this.props.id,label:this.props.label,placeholder:this.props.placeholder,value:this.state.single,onChange:this.handleChange("single")},theme:{container:e.container,suggestionsContainerOpen:e.suggestionsContainerOpen,suggestionsList:e.suggestionsList,suggestion:e.suggestion},renderSuggestionsContainer:function(e){return r.a.createElement(F.a,Object.assign({},e.containerProps,{square:!0}),e.children)}})))},n}(r.a.Component),T=Object(f.a)(function(e){return{root:{height:50,flexGrow:1},container:{position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"},divider:{height:e.spacing(2)}}})(A);var D=r.a.forwardRef(function(e,t){return r.a.createElement(h.a,Object.assign({direction:"up",ref:t},e))}),I=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).saveForm=function(){document.getElementById("createOrderForm").getElementsByTagName("input");var e={};e.phone=document.getElementById("phone").value,e.buyerName=document.getElementById("buyerName").value,e.deliveryAddress=document.getElementById("deliveryAddress").value,e.price=parseFloat(document.getElementById("price").value),e.shippingCost=parseFloat(document.getElementById("shippingCost").value),e.orderedProduct=document.getElementById("orderedProduct").value,e.status=1,e.created=(new Date).getTime(),a.props.onClose(),a.props.onSave(e)},a.state={open:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(l.a,{fullScreen:!0,open:this.props.open,onClose:this.props.onClose,TransitionComponent:D},r.a.createElement(c.a,{className:e.appBar},r.a.createElement(p.a,null,r.a.createElement(u.a,{edge:"start",color:"inherit",onClick:this.props.onClose,"aria-label":"close"},r.a.createElement(g.a,null)),r.a.createElement(d.a,{variant:"h6",className:e.title},this.props.title),r.a.createElement(s.a,{color:"inherit",onClick:this.saveForm},"Simpan"))),r.a.createElement("form",{id:"createOrderForm",className:e.container,noValidate:!0,autoComplete:"off"},r.a.createElement(T,{id:"phone",label:"No Telp Pembeli",placeholder:"No Telp Pembeli"}),r.a.createElement(O.a,{id:"buyerName",label:"Nama Pembeli",fullWidth:!0,className:e.textField,margin:"normal"}),r.a.createElement(O.a,{id:"deliveryAddress",label:"Alamat Pemesan",multiline:!0,fullWidth:!0,rowsMax:"6",className:e.textField,margin:"normal"}),r.a.createElement(O.a,{id:"price",label:"Harga Barang",type:"number",fullWidth:!0,className:e.textField,margin:"normal"}),r.a.createElement(O.a,{id:"shippingCost",label:"Ongkos Kirim",type:"number",fullWidth:!0,className:e.textField,margin:"normal"}),r.a.createElement(O.a,{id:"orderedProduct",label:"Pesanan",multiline:!0,fullWidth:!0,rowsMax:"6",className:e.textField,margin:"normal"}))))},n}(r.a.Component),R=Object(f.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})(I);var q=r.a.forwardRef(function(e,t){return r.a.createElement(h.a,Object.assign({direction:"up",ref:t},e))}),W=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={open:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.classes,t=[],a=0,n=[];return this.props.labels.forEach(function(o,i){n.push(r.a.createElement("div",{key:"page"+i,className:e.row},r.a.createElement("div",{className:"line"},o.nama),r.a.createElement("div",{className:"line"},o.telp),r.a.createElement("div",{className:"line"},o.alamat))),12===++a&&(t.push(r.a.createElement("div",{key:"pages"+t.length},r.a.createElement("div",{className:e.spacer}),r.a.createElement("div",{className:e.printedPage},n))),n=[],a=0)}),n.length>0&&t.push(r.a.createElement("div",{key:"pages"+t.length},r.a.createElement("div",{className:e.spacer}),r.a.createElement("div",{className:e.printedPage},n))),r.a.createElement("div",null,r.a.createElement(l.a,{fullScreen:!0,open:this.props.open,onClose:this.props.onClose,TransitionComponent:q},r.a.createElement(c.a,{className:e.appBar},r.a.createElement(p.a,null,r.a.createElement(u.a,{edge:"start",color:"inherit",onClick:this.props.onClose,"aria-label":"close"},r.a.createElement(g.a,null)))),r.a.createElement("div",null,t)))},n}(r.a.Component),L=Object(f.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},printedPage:{height:1380,width:1060,clear:"both",marginBottom:116},spacer:{clear:"both",height:10},divider:{clear:"both"},row:{padding:10,borderColor:"#000",borderWidth:1,borderStyle:"solid",border:1,height:208,width:508,float:"left",textAlign:"center",verticalAlign:"middle"},printArea:{position:"absolute",top:1400,left:0,height:80,fontWeight:"bolder"}}})(W),M=a(482),H=a.n(M);var z=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={data:[],openCreateFormState:!1,openPrintState:!1,printData:[]},t.refreshData=function(){var e=t.props.firebase.firestore(),a=[];e.collection("order").orderBy("created","desc").get().then(function(e){e.docs.forEach(function(e){var t=new Date(e.data().created),n=t.getDate(),r=t.getMonth()+1,o=t.getFullYear();n<10&&(n="0"+n),r<10&&(r="0"+r),a.push({orderId:e.id,buyerName:e.data().buyerName,orderDate:n+"/"+r+"/"+o,deliveryAddress:e.data().deliveryAddress,orderedProduct:e.data().orderedProduct,phone:e.data().phone,price:e.data().price,shippingCost:e.data().shippingCost,status:e.data().status,total:e.data().price+e.data().shippingCost})}),t.setState({data:a})})},t.openCreateForm=function(){t.setState({openCreateFormState:!0})},t.closeCreateForm=function(){t.setState({openCreateFormState:!1})},t.saveCreateForm=function(e){t.props.firebase.firestore().collection("order").add(e),t.refreshData()},t.openPrint=function(){t.setState({openPrintState:!0})},t.closePrint=function(){t.setState({openPrintState:!1})},t.printButton=function(e){var a=[];e.forEach(function(e,t){a.push({nama:e.buyerName,telp:e.phone,alamat:e.deliveryAddress})}),t.setState({openPrintState:!0,printData:a})},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){this.refreshData()},o.render=function(){var e=this;return r.a.createElement("div",null,r.a.createElement(H.a,{columns:[{title:"No. Pesanan",field:"orderId"},{title:"Tanggal Pemesanan",field:"orderDate"},{title:"Nama Pemesan",field:"buyerName"},{title:"No. telp",field:"phone"},{title:"Alamat pengiriman",field:"deliveryAddress"},{title:"Harga Pembelian",field:"price"},{title:"Ongkos Kirim",field:"shippingCost"},{title:"Total Harga",field:"total"},{title:"Status Pemesanan",field:"status",lookup:{1:"Belum diproses",2:"Proses packing",3:"Proses Kirim",4:"Sampai Tujuan"}}],data:this.state.data,actions:[{icon:"add",tooltip:"Tambah Pesanan",isFreeAction:!0,onClick:function(t){return e.openCreateForm()}},{tooltip:"Print label",icon:"print",onClick:function(t,a){return e.printButton(a)}}],options:{selection:!0,pageSize:20,pageSizeOptions:[20,50,100]},title:""}),r.a.createElement(R,{open:this.state.openCreateFormState,onClose:this.closeCreateForm,onSave:this.saveCreateForm,title:"Tambah Pesanan"}),r.a.createElement(L,{open:this.state.openPrintState,onClose:this.closePrint,labels:this.state.printData}))},n}(n.Component),K=Object(i.b)(z);var V=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).signOut=function(){t.props.firebase.auth().signOut()},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("button",{style:{marginLeft:10,borderRadius:"0.5rem",backgroundColor:"#fff",border:"2px solid #ffa400",fontFamily:"sans-serif",padding:"0.5rem 0.5rem",color:"#0f0f0f"},onClick:this.signOut},"Sign Out")},n}(n.Component),G=Object(i.b)(V);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(K,null),r.a.createElement(G,null))}},321:function(e,t,a){"use strict";var n=a(322),r=a(0),o=a.n(r),i=a(346),s=a.n(i),l=a(123),c=a(122);a(237);t.a=function(e){var t=e.children;return o.a.createElement(l.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(c.a,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})}},322:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-e440ef4107a643392582.js.map