"use strict";
exports.ids = ["958"];
exports.modules = {
93927(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_past_projects_cycloidaldrive_md_05b_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_past_projects_cycloidaldrive_md_05b_json__rspack_import_0 = __webpack_require__(52476);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Cycloidal Drive';

const assets = {

};



const toc = [{
  "value": "Background",
  "id": "background",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Project Process",
  "id": "project-process",
  "level": 2
}, {
  "value": "Creating the Cycloidal Gear Profile",
  "id": "creating-the-cycloidal-gear-profile",
  "level": 3
}, {
  "value": "Making a Prototype",
  "id": "making-a-prototype",
  "level": 3
}, {
  "value": "Making the Real Gearbox",
  "id": "making-the-real-gearbox",
  "level": 3
}, {
  "value": "Final Gearbox for the Go Kart",
  "id": "final-gearbox-for-the-go-kart",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "cycloidal-drive",
        children: "Cycloidal Drive"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A (hopefully) short project to create a 3D printed cycloidal drive for an electric go-kart."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In 2019, I acquired the go-kart my wife used as a kid.  It had a 10 hp gas engine and high top speed.  Far too powerful for my young son.  I used an old ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.teknic.com/model-info/CPM-MCVC-3432P-RLS/",
        children: "teknic servo motor"
      }), " and converted it to an electric go-kart.  The servo motor doesn't have the torque to push my son up any grade or through the grass.  I want to design a cycloidal gearbox to increase the torque.  I may find that 3D printed parts don't cut it, but we'll cross that bridge when we get to it."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Go Kart",
        src: (__webpack_require__(26734)/* ["default"] */.A) + "",
        width: "640",
        height: "480"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Fits inline and no larger than NEMA 34 mountings"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "3D printed construction with purchased hardware and minimal machined components"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "20:1 gear reduction"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Design scalable down to 10:1 gear reduction"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "2 cycloidal discs to reduce vibration"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "project-process",
      children: "Project Process"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The project required that I learn substantially more about cycloidal drives and their complexities.  Like all things in life, the challenge was in all the details' execution rather than the high-level design.  Once the cycloidal gear profile was created, all the challenges were in making a mostly 3D-printed gearbox."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "creating-the-cycloidal-gear-profile",
      children: "Creating the Cycloidal Gear Profile"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Cycloidal drives require a particular profile.  After picking through ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.researchgate.net/publication/324392041_Determination_of_Real_Clearances_Between_Cycloidal_Speed_Reducer_Elements_by_the_Application_of_Heuristic_Optimization",
        children: "this research paper"
      }), ", I found an explicit equation for the cycloidal gear profile.  Playing with parameters in an ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.desmos.com/calculator",
        children: "online graphing calculator"
      }), " gave reasonable-looking gear profiles for a 10:1 and a 20:1 gear reduction.  The equations for these profiles were complex enough to get saved as a text file in the git repo to make future development easier."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "making-a-prototype",
      children: "Making a Prototype"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["With a mathematically functional gear profile in hand, it was time for me to make a real gearbox.  I opted to start small and make a low-fidelity, hand-operated mock-up to verify the gear profile's functionality.  The CAD was done in Fusion 360 and can be found ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://a360.co/2CluaLq",
        children: "here"
      }), ".  I had to change filament spools before the 3D printer could complete all the parts.  This change created an excellent two-tone prototype that made it easier to see what was going on in the gearbox.  It worked well enough to demonstrate the concept.  The tolerances were far too loose to be a functional gearbox.  With lessons learned, I moved on to bigger and better gearboxes."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Hand Turned Gear",
        src: (__webpack_require__(35908)/* ["default"] */.A) + "",
        width: "640",
        height: "480"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "making-the-real-gearbox",
      children: "Making the Real Gearbox"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The CAD modeling for the real gearbox began reasonably smoothly as I had a working gearbox.  The problems that I ran into were based entirely on reducing costs.  As I looked for bearings available off the shelf, I found that small-diameter bears are not cheap.  It turns out that there is a reason most gearboxes are expensive: tight tolerances and costly bearings.  To limit costs, I opted for bronze bushings instead of rolling element bearings.  After completing the CAD found ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://a360.co/33AocBz",
        children: "here"
      }), ", the 3D printer began its work.  The printing went smoothly.  Assembly went less smoothly.  There were multiple fit issues due to the variation in 3D printing tolerance on my low-cost, consumer-grade printer.  A vice and hammer took care of the assembly problems.  Surprising no one, bronze bushings have substantially more drag than rolling element bearings.  The assembled gearbox did not come close to rotating."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Cycloidal Final Parts",
        src: (__webpack_require__(60130)/* ["default"] */.A) + "",
        width: "640",
        height: "480"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "final-gearbox-for-the-go-kart",
      children: "Final Gearbox for the Go Kart"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "At this point, I had spent as much on parts for a cycloidal gearbox as a cheap planetary gearbox costs direct from China.  Having gained the design experience but being unable to redesign and rebuild the cycloidal gearbox without significantly more money, I opted to cut ties with the project.  The overarching goal was to make my son's go-kart more functional.  Wanting to avoid a sunk cost fallacy, I humbled myself. I bought the cheap planetary gearbox from Amazon.  4 weeks later, the go-kart was operational again, and my son was thoroughly enjoying it."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Cyloidal Altnerative",
        src: (__webpack_require__(90712)/* ["default"] */.A) + "",
        width: "1024",
        height: "768"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
35908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/Hand_Turned_Gear-40902ddb8f06e3871272d55b5f8faaec.jpg");

},
90712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cycloidal_alternative-ad27aa94d58260e6352c32c03fd3a96b.jpg");

},
60130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/cycloidal_final_parts-10c046c31f095d96e2815c3fde21478a.jpg");

},
26734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/gokart-c37458dfdf93baf2006fcb994af893ca.jpg");

},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},
52476(module) {
module.exports = JSON.parse('{"id":"past-projects/cycloidaldrive","title":"Cycloidal Drive","description":"A (hopefully) short project to create a 3D printed cycloidal drive for an electric go-kart.","source":"@site/docs/past-projects/cycloidaldrive.md","sourceDirName":"past-projects","slug":"/past-projects/cycloidaldrive","permalink":"/docs/past-projects/cycloidaldrive","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"DIY Glass","permalink":"/docs/past-projects/diyglass"},"next":{"title":"3D Scanner","permalink":"/docs/past-projects/3dscanner"}}')

},

};
;