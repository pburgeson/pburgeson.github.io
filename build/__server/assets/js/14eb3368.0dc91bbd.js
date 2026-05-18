exports.ids = ["234"];
exports.modules = {
63801(module) {
// Exports
module.exports = {
	"breadcrumbHomeIcon": `breadcrumbHomeIcon_YNFT`
};


},
13928(module) {
// Exports
module.exports = {
	"breadcrumbsContainer": `breadcrumbsContainer_Z_bl`
};


},
80036(module) {
// Exports
module.exports = {
	"docCardListItem": `docCardListItem_W1sv`
};


},
19143(module) {
// Exports
module.exports = {
	"cardDescription": `cardDescription_L2fP`
};


},
80137(module) {
// Exports
module.exports = {
	"cardTitleIcon": `cardTitleIcon_GcdP`
};


},
61471(module) {
// Exports
module.exports = {
	"cardTitleText": `cardTitleText_nuEl`
};


},
89591(module) {
// Exports
module.exports = {
	"cardTitle": `cardTitle_mcqP`
};


},
45001(module) {
// Exports
module.exports = {
	"cardContainer": `cardContainer_KhuF`
};


},
1902(module) {
// Exports
module.exports = {
	"generatedIndexPage": `generatedIndexPage_vN6x`,
	"title": `title_kItE`
};


},
31280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  D: () => (useBreadcrumbsStructuredData)
});
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_0 = __webpack_require__(10898);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useBreadcrumbsStructuredData({ breadcrumbs }) {
    const { siteConfig } = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)();
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs// We filter breadcrumb items without links, they are not allowed
        // See also https://github.com/facebook/docusaurus/issues/9319#issuecomment-2643560845
        .filter((breadcrumb)=>breadcrumb.href).map((breadcrumb, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: breadcrumb.label,
                item: `${siteConfig.url}${breadcrumb.href}`
            }))
    };
}


},
913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (HomeBreadcrumbItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _docusaurus_useBaseUrl__rspack_import_3 = __webpack_require__(66497);
/* import */ var _docusaurus_Translate__rspack_import_4 = __webpack_require__(61826);
/* import */ var _theme_Icon_Home__rspack_import_5 = __webpack_require__(57895);
/* import */ var _styles_module_css__rspack_import_6 = __webpack_require__(63801);
/* import */ var _styles_module_css__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_6);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function HomeBreadcrumbItem() {
    const homeHref = (0,_docusaurus_useBaseUrl__rspack_import_3/* ["default"] */.Ay)('/');
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        className: "breadcrumbs__item",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
            "aria-label": (0,_docusaurus_Translate__rspack_import_4/* .translate */.T)({
                id: 'theme.docs.breadcrumbs.home',
                message: 'Home page',
                description: 'The ARIA label for the home page in the breadcrumbs'
            }),
            className: "breadcrumbs__link",
            href: homeHref,
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Home__rspack_import_5/* ["default"] */.A, {
                className: (_styles_module_css__rspack_import_6_default().breadcrumbHomeIcon)
            })
        })
    });
}


},
96220(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocBreadcrumbsStructuredData)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Head__rspack_import_2 = __webpack_require__(53572);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_3 = __webpack_require__(31280);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function DocBreadcrumbsStructuredData(props) {
    const structuredData = (0,_docusaurus_plugin_content_docs_client__rspack_import_3/* .useBreadcrumbsStructuredData */.D)({
        breadcrumbs: props.breadcrumbs
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Head__rspack_import_2/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
            type: "application/ld+json",
            children: JSON.stringify(structuredData)
        })
    });
}


},
11218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocBreadcrumbs)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_10 = __webpack_require__(88287);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_8 = __webpack_require__(88260);
/* import */ var _docusaurus_theme_common_internal__rspack_import_9 = __webpack_require__(19209);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _docusaurus_Translate__rspack_import_3 = __webpack_require__(61826);
/* import */ var _theme_DocBreadcrumbs_Items_Home__rspack_import_4 = __webpack_require__(913);
/* import */ var _theme_DocBreadcrumbs_StructuredData__rspack_import_5 = __webpack_require__(96220);
/* import */ var _styles_module_css__rspack_import_6 = __webpack_require__(13928);
/* import */ var _styles_module_css__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_6);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 









// TODO move to design system folder
function BreadcrumbsItemLink({ children, href, isLast }) {
    const className = 'breadcrumbs__link';
    if (isLast) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
            className: className,
            children: children
        });
    }
    return href ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        className: className,
        href: href,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
            children: children
        })
    }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        className: className,
        children: children
    });
}
// TODO move to design system folder
function BreadcrumbsItem({ children, active }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)('breadcrumbs__item', {
            'breadcrumbs__item--active': active
        }),
        children: children
    });
}
function DocBreadcrumbs() {
    const breadcrumbs = (0,_docusaurus_plugin_content_docs_client__rspack_import_8/* .useSidebarBreadcrumbs */.OF)();
    const homePageRoute = (0,_docusaurus_theme_common_internal__rspack_import_9/* .useHomePageRoute */.Dt)();
    if (!breadcrumbs) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocBreadcrumbs_StructuredData__rspack_import_5/* ["default"] */.A, {
                breadcrumbs: breadcrumbs
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("nav", {
                className: (0,clsx__rspack_import_7/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_10/* .ThemeClassNames.docs.docBreadcrumbs */.G.docs.docBreadcrumbs, (_styles_module_css__rspack_import_6_default().breadcrumbsContainer)),
                "aria-label": (0,_docusaurus_Translate__rspack_import_3/* .translate */.T)({
                    id: 'theme.docs.breadcrumbs.navAriaLabel',
                    message: 'Breadcrumbs',
                    description: 'The ARIA label for the breadcrumbs'
                }),
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                    className: "breadcrumbs",
                    children: [
                        homePageRoute && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocBreadcrumbs_Items_Home__rspack_import_4/* ["default"] */.A, {}),
                        breadcrumbs.map((item, idx)=>{
                            const isLast = idx === breadcrumbs.length - 1;
                            const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href;
                            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BreadcrumbsItem, {
                                active: isLast,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BreadcrumbsItemLink, {
                                    href: href,
                                    isLast: isLast,
                                    children: item.label
                                })
                            }, idx);
                        })
                    ]
                })
            })
        ]
    });
}


},
90670(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocCardList)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_4 = __webpack_require__(88260);
/* import */ var _theme_DocCard__rspack_import_2 = __webpack_require__(33626);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(80036);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocCardListForCurrentSidebarCategory({ className }) {
    const items = (0,_docusaurus_plugin_content_docs_client__rspack_import_4/* .useCurrentSidebarSiblings */.a4)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocCardList, {
        items: items,
        className: className
    });
}
function DocCardListItem({ item }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("article", {
        className: (0,clsx__rspack_import_5/* ["default"] */.A)((_styles_module_css__rspack_import_3_default().docCardListItem), 'col col--6'),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocCard__rspack_import_2/* ["default"] */.A, {
            item: item
        })
    });
}
function DocCardList(props) {
    const { items, className } = props;
    if (!items) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocCardListForCurrentSidebarCategory, {
            ...props
        });
    }
    const filteredItems = (0,_docusaurus_plugin_content_docs_client__rspack_import_4/* .filterDocCardListItems */.d1)(items);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('row', className),
        children: filteredItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocCardListItem, {
                item: item
            }, index))
    });
}


},
21507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocCardDescription)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(88287);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(19143);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocCardDescription({ description }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)('text--truncate', _docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.docs.docCard.description */.G.docs.docCard.description, (_styles_module_css__rspack_import_2_default().cardDescription)),
        title: description,
        children: description
    });
}


},
30385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocCardHeadingIcon)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(88287);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(80137);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocCardHeadingIcon({ icon }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.docs.docCard.icon */.G.docs.docCard.icon, (_styles_module_css__rspack_import_2_default().cardTitleIcon)),
        children: icon
    });
}


},
88267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocCardHeadingText)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(88287);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(61471);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocCardHeadingText({ title }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)('text--truncate', _docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.docs.docCard.title */.G.docs.docCard.title, (_styles_module_css__rspack_import_2_default().cardTitleText)),
        children: title
    });
}


},
8603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocCardHeading)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(88287);
/* import */ var _theme_Heading__rspack_import_2 = __webpack_require__(72072);
/* import */ var _theme_DocCard_Heading_Icon__rspack_import_3 = __webpack_require__(30385);
/* import */ var _theme_DocCard_Heading_Text__rspack_import_4 = __webpack_require__(88267);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(89591);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocCardHeading({ item, title, icon }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Heading__rspack_import_2/* ["default"] */.A, {
        as: "h2",
        className: (0,clsx__rspack_import_6/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_7/* .ThemeClassNames.docs.docCard.heading */.G.docs.docCard.heading, (_styles_module_css__rspack_import_5_default().cardTitle)),
        title: title,
        children: [
            icon && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocCard_Heading_Icon__rspack_import_3/* ["default"] */.A, {
                item: item,
                icon: icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocCard_Heading_Text__rspack_import_4/* ["default"] */.A, {
                item: item,
                title: title
            })
        ]
    });
}


},
57289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocCardLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(34164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(88287);
/* import */ var _theme_DocCard_Heading__rspack_import_3 = __webpack_require__(8603);
/* import */ var _theme_DocCard_Description__rspack_import_4 = __webpack_require__(21507);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(45001);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function Container({ className, href, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        href: href,
        className: (0,clsx__rspack_import_6/* ["default"] */.A)('card padding--lg', _docusaurus_theme_common__rspack_import_7/* .ThemeClassNames.docs.docCard.container */.G.docs.docCard.container, (_styles_module_css__rspack_import_5_default().cardContainer), className),
        children: children
    });
}
function DocCardLayout({ item, className, href, icon, title, description }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(Container, {
        href: href,
        className: className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocCard_Heading__rspack_import_3/* ["default"] */.A, {
                item: item,
                icon: icon,
                title: title
            }),
            description && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocCard_Description__rspack_import_4/* ["default"] */.A, {
                item: item,
                description: description
            })
        ]
    });
}


},
33626(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocCard)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_5 = __webpack_require__(88260);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(5123);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(22486);
/* import */ var _docusaurus_isInternalUrl__rspack_import_3 = __webpack_require__(58310);
/* import */ var _theme_DocCard_Layout__rspack_import_2 = __webpack_require__(57289);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function getFallbackEmojiIcon(item) {
    if (item.type === 'category') {
        return '🗃';
    }
    return (0,_docusaurus_isInternalUrl__rspack_import_3/* ["default"] */.A)(item.href) ? '📄️' : '🔗';
}
function getIconTitleProps(item) {
    const extracted = (0,_docusaurus_theme_common_internal__rspack_import_4/* .extractLeadingEmoji */.k)(item.label);
    const emoji = extracted.emoji ?? getFallbackEmojiIcon(item);
    return {
        icon: emoji,
        title: extracted.rest.trim()
    };
}
function CardCategory({ item }) {
    const href = (0,_docusaurus_plugin_content_docs_client__rspack_import_5/* .findFirstSidebarItemLink */.Nr)(item);
    const categoryItemsPlural = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useDocCardDescriptionCategoryItemsPlural */.E)();
    // Unexpected: categories that don't have a link have been filtered upfront
    if (!href) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocCard_Layout__rspack_import_2/* ["default"] */.A, {
        item: item,
        className: item.className,
        href: href,
        description: item.description ?? categoryItemsPlural(item.items.length),
        ...getIconTitleProps(item)
    });
}
function CardLink({ item }) {
    const doc = (0,_docusaurus_plugin_content_docs_client__rspack_import_5/* .useDocById */.cC)(item.docId ?? undefined);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocCard_Layout__rspack_import_2/* ["default"] */.A, {
        item: item,
        className: item.className,
        href: item.href,
        description: item.description ?? doc?.description,
        ...getIconTitleProps(item)
    });
}
function DocCard({ item }) {
    switch(item.type){
        case 'link':
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CardLink, {
                item: item
            });
        case 'category':
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CardCategory, {
                item: item
            });
        default:
            throw new Error(`unknown item type ${JSON.stringify(item)}`);
    }
}


},
12180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DocCategoryGeneratedIndexPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_theme_common__rspack_import_10 = __webpack_require__(34308);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_11 = __webpack_require__(88260);
/* import */ var _docusaurus_useBaseUrl__rspack_import_2 = __webpack_require__(66497);
/* import */ var _theme_DocCardList__rspack_import_3 = __webpack_require__(90670);
/* import */ var _theme_DocPaginator__rspack_import_4 = __webpack_require__(76783);
/* import */ var _theme_DocVersionBanner__rspack_import_5 = __webpack_require__(15886);
/* import */ var _theme_DocVersionBadge__rspack_import_6 = __webpack_require__(95587);
/* import */ var _theme_DocBreadcrumbs__rspack_import_7 = __webpack_require__(11218);
/* import */ var _theme_Heading__rspack_import_8 = __webpack_require__(72072);
/* import */ var _styles_module_css__rspack_import_9 = __webpack_require__(1902);
/* import */ var _styles_module_css__rspack_import_9_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_9);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 










function DocCategoryGeneratedIndexPageMetadata({ categoryGeneratedIndex }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_10/* .PageMetadata */.be, {
        title: categoryGeneratedIndex.title,
        description: categoryGeneratedIndex.description,
        keywords: categoryGeneratedIndex.keywords,
        // TODO `require` this?
        image: (0,_docusaurus_useBaseUrl__rspack_import_2/* ["default"] */.Ay)(categoryGeneratedIndex.image)
    });
}
function DocCategoryGeneratedIndexPageContent({ categoryGeneratedIndex }) {
    const category = (0,_docusaurus_plugin_content_docs_client__rspack_import_11/* .useCurrentSidebarCategory */.$S)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (_styles_module_css__rspack_import_9_default().generatedIndexPage),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocVersionBanner__rspack_import_5/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocBreadcrumbs__rspack_import_7/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocVersionBadge__rspack_import_6/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_8/* ["default"] */.A, {
                        as: "h1",
                        className: (_styles_module_css__rspack_import_9_default().title),
                        children: categoryGeneratedIndex.title
                    }),
                    categoryGeneratedIndex.description && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: categoryGeneratedIndex.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("article", {
                className: "margin-top--lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocCardList__rspack_import_3/* ["default"] */.A, {
                    items: category.items,
                    className: (_styles_module_css__rspack_import_9_default().list)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("footer", {
                className: "margin-top--md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocPaginator__rspack_import_4/* ["default"] */.A, {
                    previous: categoryGeneratedIndex.navigation.previous,
                    next: categoryGeneratedIndex.navigation.next
                })
            })
        ]
    });
}
function DocCategoryGeneratedIndexPage(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocCategoryGeneratedIndexPageMetadata, {
                ...props
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocCategoryGeneratedIndexPageContent, {
                ...props
            })
        ]
    });
}


},
76783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocPaginator)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _theme_PaginatorNavLink__rspack_import_3 = __webpack_require__(17174);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocPaginator(props) {
    const { className, previous, next } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(className, 'pagination-nav'),
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.paginator.navAriaLabel',
            message: 'Docs pages',
            description: 'The ARIA label for the docs pagination'
        }),
        children: [
            previous && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                ...previous,
                subLabel: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.docs.paginator.previous",
                    description: "The label used to navigate to the previous doc",
                    children: "Previous"
                })
            }),
            next && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                ...next,
                subLabel: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.docs.paginator.next",
                    description: "The label used to navigate to the next doc",
                    children: "Next"
                }),
                isNext: true
            })
        ]
    });
}


},
95587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocVersionBadge)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(88287);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_3 = __webpack_require__(70921);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocVersionBadge({ className }) {
    const versionMetadata = (0,_docusaurus_plugin_content_docs_client__rspack_import_3/* .useDocsVersion */.r)();
    if (versionMetadata.badge) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
            className: (0,clsx__rspack_import_4/* ["default"] */.A)(className, _docusaurus_theme_common__rspack_import_5/* .ThemeClassNames.docs.docVersionBadge */.G.docs.docVersionBadge, 'badge badge--secondary'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                id: "theme.docs.versionBadge.label",
                values: {
                    versionLabel: versionMetadata.label
                },
                children: 'Version: {versionLabel}'
            })
        });
    }
    return null;
}


},
15886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocVersionBanner)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(34164);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_2 = __webpack_require__(10898);
/* import */ var _docusaurus_Link__rspack_import_3 = __webpack_require__(95310);
/* import */ var _docusaurus_Translate__rspack_import_4 = __webpack_require__(61826);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_5 = __webpack_require__(80216);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(88287);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_6 = __webpack_require__(42086);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_9 = __webpack_require__(70921);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function UnreleasedVersionLabel({ siteTitle, versionMetadata }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_4/* ["default"] */.A, {
        id: "theme.docs.versions.unreleasedVersionLabel",
        description: "The label used to tell the user that he's browsing an unreleased doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: versionMetadata.label
            })
        },
        children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.'
    });
}
function UnmaintainedVersionLabel({ siteTitle, versionMetadata }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_4/* ["default"] */.A, {
        id: "theme.docs.versions.unmaintainedVersionLabel",
        description: "The label used to tell the user that he's browsing an unmaintained doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: versionMetadata.label
            })
        },
        children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'
    });
}
const BannerLabelComponents = {
    unreleased: UnreleasedVersionLabel,
    unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
    const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BannerLabelComponent, {
        ...props
    });
}
function LatestVersionSuggestionLabel({ versionLabel, to, onClick }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_4/* ["default"] */.A, {
        id: "theme.docs.versions.latestVersionSuggestionLabel",
        description: "The label used to tell the user to check the latest version",
        values: {
            versionLabel,
            latestVersionLink: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_3/* ["default"] */.A, {
                    to: to,
                    onClick: onClick,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_4/* ["default"] */.A, {
                        id: "theme.docs.versions.latestVersionLinkLabel",
                        description: "The label used for the latest version suggestion link label",
                        children: "latest version"
                    })
                })
            })
        },
        children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'
    });
}
function DocVersionBannerEnabled({ className, versionMetadata }) {
    const { siteConfig: { title: siteTitle } } = (0,_docusaurus_useDocusaurusContext__rspack_import_2/* ["default"] */.A)();
    const { pluginId } = (0,_docusaurus_plugin_content_docs_client__rspack_import_5/* .useActivePlugin */.vT)({
        failfast: true
    });
    const getVersionMainDoc = (version)=>version.docs.find((doc)=>doc.id === version.mainDocId);
    const { savePreferredVersionName } = (0,_docusaurus_plugin_content_docs_client__rspack_import_6/* .useDocsPreferredVersion */.g1)(pluginId);
    const { latestDocSuggestion, latestVersionSuggestion } = (0,_docusaurus_plugin_content_docs_client__rspack_import_5/* .useDocVersionSuggestions */.HW)(pluginId);
    // Try to link to same doc in latest version (not always possible), falling
    // back to main doc of latest version
    const latestVersionSuggestedDoc = latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)(className, _docusaurus_theme_common__rspack_import_8/* .ThemeClassNames.docs.docVersionBanner */.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
        role: "alert",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BannerLabel, {
                    siteTitle: siteTitle,
                    versionMetadata: versionMetadata
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "margin-top--md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LatestVersionSuggestionLabel, {
                    versionLabel: latestVersionSuggestion.label,
                    to: latestVersionSuggestedDoc.path,
                    onClick: ()=>savePreferredVersionName(latestVersionSuggestion.name)
                })
            })
        ]
    });
}
function DocVersionBanner({ className }) {
    const versionMetadata = (0,_docusaurus_plugin_content_docs_client__rspack_import_9/* .useDocsVersion */.r)();
    if (versionMetadata.banner) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocVersionBannerEnabled, {
            className: className,
            versionMetadata: versionMetadata
        });
    }
    return null;
}


},
57895(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconHome)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconHome(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
            fill: "currentColor"
        })
    });
}


},
17174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (PaginatorNavLink)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function PaginatorNavLink(props) {
    const { permalink, title, subLabel, isNext } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
        to: permalink,
        children: [
            subLabel && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "pagination-nav__sublabel",
                children: subLabel
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "pagination-nav__label",
                children: title
            })
        ]
    });
}


},
22486(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  E: () => (useDocCardDescriptionCategoryItemsPlural)
});
/* import */ var _docusaurus_Translate__rspack_import_0 = __webpack_require__(61826);
/* import */ var _utils_usePluralForm__rspack_import_1 = __webpack_require__(16497);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function useDocCardDescriptionCategoryItemsPlural() {
    const { selectMessage } = (0,_utils_usePluralForm__rspack_import_1/* .usePluralForm */.W)();
    return (count)=>selectMessage(count, (0,_docusaurus_Translate__rspack_import_0/* .translate */.T)({
            message: '1 item|{count} items',
            id: 'theme.docs.DocCard.categoryDescription.plurals',
            description: 'The default description for a category card in the generated index about how many items this category includes'
        }, {
            count
        }));
} //# sourceMappingURL=docsTranslations.js.map


},
5123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  k: () => (extractLeadingEmoji)
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const segmenter = new Intl.Segmenter(undefined, {
    granularity: 'grapheme'
});
/**
 * This method splits "⚠️ Hello World" into "⚠️" + " Hello World".
 * It is quite strict and dumb, only useful to handle best-effort heuristics.
 * It only extracts a leading emoji if it is the first grapheme of the string.
 * It only extracts one emoji, even if multiples are present.
 * It doesn't trim the remaining string.
 * If you need something more clever, it should be built on top.
 * @param input
 */ function extractLeadingEmoji(input) {
    const it = segmenter.segment(input)[Symbol.iterator]();
    // const first = segmenter.segment(input).containing(0)?.segment;
    const grapheme = it.next().value?.segment;
    if (!grapheme) {
        return {
            emoji: null,
            rest: input
        };
    }
    // Leading grapheme contains an emoji (covers flags/ZWJ/skin tones)
    if (!/\p{Extended_Pictographic}/u.test(grapheme) && !/\p{Emoji}/u.test(grapheme)) {
        return {
            emoji: null,
            rest: input
        };
    }
    return {
        emoji: grapheme,
        rest: input.slice(grapheme.length)
    };
} //# sourceMappingURL=emojiUtils.js.map


},
16497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  W: () => (usePluralForm)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_1 = __webpack_require__(10898);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms = [
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other'
];
function sortPluralForms(pluralForms) {
    return OrderedPluralForms.filter((pf)=>pluralForms.includes(pf));
}
// Hardcoded english/fallback implementation
const EnglishPluralForms = {
    locale: 'en',
    pluralForms: sortPluralForms([
        'one',
        'other'
    ]),
    select: (count)=>count === 1 ? 'one' : 'other'
};
function createLocalePluralForms(locale) {
    const pluralRules = new Intl.PluralRules(locale);
    return {
        locale,
        pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
        select: (count)=>pluralRules.select(count)
    };
}
/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */ function useLocalePluralForms() {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__rspack_import_1/* ["default"] */.A)();
    return (0,react__rspack_import_0.useMemo)(()=>{
        try {
            return createLocalePluralForms(currentLocale);
        } catch (err) {
            console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);
            return EnglishPluralForms;
        }
    }, [
        currentLocale
    ]);
}
function selectPluralMessage(pluralMessages, count, localePluralForms) {
    const separator = '|';
    const parts = pluralMessages.split(separator);
    if (parts.length === 1) {
        return parts[0];
    }
    if (parts.length > localePluralForms.pluralForms.length) {
        console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);
    }
    const pluralForm = localePluralForms.select(count);
    const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm);
    // In case of not enough plural form messages, we take the last one (other)
    // instead of returning undefined
    return parts[Math.min(pluralFormIndex, parts.length - 1)];
}
/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */ function usePluralForm() {
    const localePluralForm = useLocalePluralForms();
    return {
        selectMessage: (count, pluralMessages)=>selectPluralMessage(pluralMessages, count, localePluralForm)
    };
} //# sourceMappingURL=usePluralForm.js.map


},

};
;