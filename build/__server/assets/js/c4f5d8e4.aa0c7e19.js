exports.ids = ["823"];
exports.modules = {
33552(module) {
// Exports
module.exports = {
	"features": `features_t9lD`,
	"featureImg": `featureImg_d9Ri`
};


},
86947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/Headshot-2019-Cropped-2183f1ee330dbc6a4ac9e4886ca7954a.jpg");

},
90834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (HomepageFeatures)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var _theme_Heading__rspack_import_1 = __webpack_require__(72072);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(33552);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);




const FeatureList = [
    {
        title: 'Hi!',
        img: (__webpack_require__(86947)/* ["default"] */.A),
        sections: [
            {
                heading: "I'm Paul",
                body: [
                    'I am an engineer and I love building things. Going through the process of understanding a problem, concepting ideas, iterating designs, and finally creating an end result is thrilling. There are few things more satisfying than finally hitting on that simple, elegant solution after hours of thought.',
                    'I love learning new things. The preferred approach is dive in and try it. Different endeavors significantly afield my schooling have included flying, CNC machining, glass making, artificial intelligence, and mindfulness. Learning by working through real problems has proven to be far more valuable than just reading about concepts. It is incredibly exciting when concepts that were in books are demonstrated in the real world with a clear understanding of what is at play.'
                ]
            },
            {
                heading: 'Personal Life',
                body: [
                    'Spending time with my wife and son outside is far and above my favorite past time. We particularly enjoy the Boundary Waters in Minnesota and the beach at St George Island in Florida. When I’m not tinkering in my garage or outdoors with my family, you might find me flying recreationally, working on rebuilding a Velocity SERG, or acting as an Assistant Scoutmaster for Troop 303.'
                ]
            }
        ]
    }
];
function Feature({ img, title, sections }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)('col col--12'),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "text--center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                    src: img,
                    className: (_styles_module_css__rspack_import_2_default().featureImg),
                    alt: title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "text--center padding-horiz--md",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_1/* ["default"] */.A, {
                        as: "h1",
                        children: title
                    }),
                    sections.map((section, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            style: {
                                marginBottom: '2rem'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_1/* ["default"] */.A, {
                                    as: "h2",
                                    children: section.heading
                                }),
                                section.body.map((paragraph, pIdx)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        style: {
                                            marginBottom: '1rem'
                                        },
                                        children: paragraph
                                    }, pIdx))
                            ]
                        }, idx))
                ]
            })
        ]
    });
}
/*const FeatureList = [
  {
    title: "Hi!  I'm Paul",
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    sections: [
      { 
        heading: 'First Point', 
        body: [
          'This is the first paragraph of the first section.',
          'This is the second paragraph of that same section.'
        ] 
      },
      { 
        heading: 'Second Point', 
        body: ['Just one paragraph here.'] 
      }
    ]
    
    )
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}*/ function HomepageFeatures() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: (_styles_module_css__rspack_import_2_default().features),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "row",
                children: FeatureList.map((props, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Feature, {
                        ...props
                    }, idx))
            })
        })
    });
}


},
37176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Home)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_1 = __webpack_require__(10898);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(78328);
/* import */ var _site_src_components_HomepageFeatures__rspack_import_3 = __webpack_require__(90834);




function HomepageHeader() {
/*const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );*/ }
function Home() {
    const { siteConfig } = (0,_docusaurus_useDocusaurusContext__rspack_import_1/* ["default"] */.A)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        title: `Paul Burgeson`,
        description: "Personal website for Paul Burgeson",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HomepageHeader, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_site_src_components_HomepageFeatures__rspack_import_3/* ["default"] */.A, {})
            })
        ]
    });
}


},

};
;