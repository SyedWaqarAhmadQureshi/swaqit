(this["webpackJsonpreact-consulting-theme"]=this["webpackJsonpreact-consulting-theme"]||[]).push([[13],{57:function(e,i,a){"use strict";i.a=a.p+"static/media/page-banner.f232595e.jpg"},58:function(e,i,a){"use strict";var s=a(57),t=(a(3),a(0));i.a=e=>{let{pageTitle:i="",title:a=""}=e;return Object(t.jsx)("section",{className:"page-banner",style:{backgroundImage:"url(".concat(s.a,")")},children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-lg-12",children:Object(t.jsx)("div",{className:"page-content",children:Object(t.jsx)("h2",{children:i})})})})})})}},68:function(e,i,a){"use strict";var s=a(3),t=a.p+"static/media/1.769d8ac8.jpg",n=a.p+"static/media/2.0321ee64.jpg",l=a.p+"static/media/3.7b6865e8.jpg",c=a.p+"static/media/4.d07ca131.jpg",o=a.p+"static/media/5.0e602b5f.jpg",d=a(0);const r=[{id:1,image:n,name:"Consulting",company:"Rosalina Print Co.",link:"/"},{id:2,image:l,name:"Consulting",company:"Rosalina Print Co.",link:"/"},{id:3,image:c,name:"Consulting",company:"Rosalina Print Co.",link:"/"},{id:4,image:o,name:"Consulting",company:"Rosalina Print Co.",link:"/"}];i.a=()=>Object(d.jsx)("section",{className:"portfolio-section-2 ps-color",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(d.jsxs)("div",{className:"work-title",children:[Object(d.jsxs)("div",{className:"sub-title",children:[Object(d.jsx)("span",{className:"border-left bl-3"}),"Case Study"]}),Object(d.jsx)("h3",{className:"sec-title",children:"Our Portfolio"}),Object(d.jsx)("i",{className:"fa fa-long-arrow-right"})]})}),Object(d.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(d.jsxs)("div",{className:"work-item work-item-2",children:[Object(d.jsx)("img",{src:t,alt:""}),Object(d.jsxs)("div",{className:"work-detail",children:[Object(d.jsx)(s.b,{className:"cate",to:"/",children:"Consulting"}),Object(d.jsx)("h4",{children:Object(d.jsx)(s.b,{to:"/",children:"Rosalina Print Co."})})]})]})})]}),Object(d.jsx)("div",{className:"row",children:null===r||void 0===r?void 0:r.map((e=>Object(d.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(d.jsxs)("div",{className:"work-item work-item-2",children:[Object(d.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:""}),Object(d.jsxs)("div",{className:"work-detail",children:[Object(d.jsx)(s.b,{className:"cate",to:null===e||void 0===e?void 0:e.link,children:null===e||void 0===e?void 0:e.name}),Object(d.jsx)("h4",{children:Object(d.jsx)(s.b,{to:null===e||void 0===e?void 0:e.link,children:null===e||void 0===e?void 0:e.company})})]})]})},null===e||void 0===e?void 0:e.id)))})]})})},70:function(e,i,a){"use strict";var s=a.p+"static/media/author.b3d88cac.png",t=a.p+"static/media/author-2.9d12830a.png",n=a(16),l=a.n(n),c=a(1),o=a(0);const d=[{id:1,review:"\u201c Online proofing smart review allows pages within multi page documents to be treated as .Aproove was built to be content - based rather than proof - based.\u201d",stars:5,authorName:"Kane D William",designation:"CEO, Print Co.",authorImage:s},{id:2,review:"\u201c Online proofing smart review allows pages within multi page documents to be treated as .Aproove was built to be content - based rather than proof - based.\u201d",stars:5,authorName:"Rosalina D William",designation:"CEO, Print Co.",authorImage:t},{id:3,review:"\u201c Online proofing smart review allows pages within multi page documents to be treated as .Aproove was built to be content - based rather than proof - based.\u201d",stars:5,authorName:"Thomas D William",designation:"CEO, Print Co.",authorImage:s},{id:4,review:"\u201c Online proofing smart review allows pages within multi page documents to be treated as .Aproove was built to be content - based rather than proof - based.\u201d",stars:5,authorName:"Kane D William",designation:"CEO, Print Co.",authorImage:t}];class r extends c.Component{constructor(e){super(e),this.state={nav1:null,nav2:null}}componentDidMount(){this.setState({nav1:this.slider1,nav2:this.slider2})}render(){return Object(o.jsx)("section",{className:"testimonial-section ab-tesimonial",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-lg-12",children:[Object(o.jsx)(l.a,{className:"testimonial-slider",asNavFor:this.state.nav2,ref:e=>this.slider1=e,autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,infinite:!0,centerMode:!0,centerPadding:0,children:null===d||void 0===d?void 0:d.map((e=>Object(o.jsxs)("div",{className:"testimonial-item",children:[Object(o.jsxs)("div",{className:"testi-author",children:[Object(o.jsx)("div",{className:"test-shape-1"}),Object(o.jsx)("img",{src:e.authorImage,alt:""}),Object(o.jsx)("div",{className:"test-shape-2"})]}),Object(o.jsxs)("div",{className:"testi-quote",children:[Object(o.jsx)("div",{className:"rating",children:Array.from(Array(e.stars),((e,i)=>Object(o.jsx)("i",{className:"fa fa-star"},i)))}),Object(o.jsx)("p",{children:"\u201c Online proofing smart review allows pages within multi page documents to be treated as . Aproove was built to be content-based rather than proof-based. \u201d"})]})]},null===e||void 0===e?void 0:e.id)))}),Object(o.jsx)(l.a,{className:"slider-nav",asNavFor:this.state.nav1,ref:e=>this.slider2=e,slidesToShow:3,swipeToSlide:!0,focusOnSelect:!0,slidesToShow:3,slidesToScroll:1,dots:!1,arrows:!1,centerMode:!0,centerPadding:0,focusOnSelect:!0,slide:"ul",responsive:[{breakpoint:767,settings:{slidesToShow:1}}],children:null===d||void 0===d?void 0:d.map((e=>Object(o.jsx)("div",{role:"presentation",children:Object(o.jsxs)("div",{className:"author-meta",children:[Object(o.jsx)("h5",{children:e.authorName}),Object(o.jsx)("p",{className:"designation",children:e.designation})]})},null===e||void 0===e?void 0:e.id)))})]})})})})}}i.a=r},97:function(e,i,a){"use strict";a.r(i);var s=a(58),t=a(68),n=a(3),l=a.p+"static/media/team-1.d6a98f6c.jpg",c=a.p+"static/media/team-2.5976bb89.jpg",o=a.p+"static/media/team-3.755bc0e4.jpg",d=a(0);const r=[{id:1,name:"Rosalina D. William",designation:"Founder",image:l,link:"/"},{id:2,name:"Miranda H. Halim",designation:"CEO",image:c,link:"/"},{id:3,name:"Twinkel K. Khannnb",designation:"Consultant",image:o,link:"/"}];var m=()=>Object(d.jsx)("section",{className:"team-section folio-team",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:null===r||void 0===r?void 0:r.map((e=>Object(d.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(d.jsxs)("div",{className:"team-member",children:[Object(d.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:""}),Object(d.jsxs)("div",{className:"team-detail",children:[Object(d.jsx)("p",{className:"designation",children:null===e||void 0===e?void 0:e.designation}),Object(d.jsx)("h4",{children:Object(d.jsx)(n.b,{to:null===e||void 0===e?void 0:e.link,children:null===e||void 0===e?void 0:e.name})})]})]})},null===e||void 0===e?void 0:e.id)))})})}),j=a(70);i.default=()=>Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.a,{pageTitle:"Portfolio Page",title:"Portfolio"}),Object(d.jsx)(t.a,{}),Object(d.jsx)(j.a,{}),Object(d.jsx)(m,{})]})}}]);
//# sourceMappingURL=13.1b02369f.chunk.js.map