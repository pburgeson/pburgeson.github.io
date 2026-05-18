exports.ids = ["786"];
exports.modules = {
34669(module) {
// Exports
module.exports = {
	"sidebar": `sidebar_re4s`,
	"sidebarItemTitle": `sidebarItemTitle_pO2u`,
	"sidebarItemList": `sidebarItemList_Yudw`,
	"sidebarItem": `sidebarItem__DBe`,
	"sidebarItemLink": `sidebarItemLink_mo7H`,
	"sidebarItemLinkActive": `sidebarItemLinkActive_I1ZP`,
	"yearGroupHeading": `yearGroupHeading_rMGB`
};


},
3265(module) {
// Exports
module.exports = {
	"yearGroupHeading": `yearGroupHeading_QT03`
};


},
70448(module) {
// Exports
module.exports = {
	"tag": `tag_zVej`,
	"tagRegular": `tagRegular_sFm0`,
	"tagWithCount": `tagWithCount_h2kH`
};


},
26216(module) {
// Exports
module.exports = {
	"tag": `tag_Nnez`
};


},
16505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  e7: () => (useBlogPost),
  "in": () => (BlogPostProvider),
  x: () => (useBlogMetadata)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_theme_common_internal__rspack_import_3 = __webpack_require__(52260);
/* import */ var _docusaurus_useRouteContext__rspack_import_2 = __webpack_require__(78491);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function useBlogMetadata() {
    const routeContext = (0,_docusaurus_useRouteContext__rspack_import_2/* ["default"] */.A)();
    const blogMetadata = routeContext?.data?.blogMetadata;
    if (!blogMetadata) {
        throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");
    }
    return blogMetadata;
}
const Context = /*#__PURE__*/ react__rspack_import_1.createContext(null);
/**
 * Note: we don't use `PropBlogPostContent` as context value on purpose.
 * Metadata is currently stored inside the MDX component, but we may want to
 * change that in the future.
 */ function useContextValue({ content, isBlogPostPage }) {
    return (0,react__rspack_import_1.useMemo)(()=>({
            metadata: content.metadata,
            frontMatter: content.frontMatter,
            assets: content.assets,
            toc: content.toc,
            isBlogPostPage
        }), [
        content,
        isBlogPostPage
    ]);
}
/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the blog post to the children tree.
 */ function BlogPostProvider({ children, content, isBlogPostPage = false }) {
    const contextValue = useContextValue({
        content,
        isBlogPostPage
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
/**
 * Returns the data of the currently browsed blog post. Gives access to
 * front matter, metadata, TOC, etc.
 * When swizzling a low-level component (e.g. the "Edit this page" link)
 * and you need some extra metadata, you don't have to drill the props
 * all the way through the component tree: simply use this hook instead.
 */ function useBlogPost() {
    const blogPost = (0,react__rspack_import_1.useContext)(Context);
    if (blogPost === null) {
        throw new _docusaurus_theme_common_internal__rspack_import_3/* .ReactContextError */.dV('BlogPostProvider');
    }
    return blogPost;
}


},
23549(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Gx: () => (/* reexport safe */ _sidebarUtils__rspack_import_2.Gx),
  J_: () => (/* reexport safe */ _structuredDataUtils__rspack_import_1.J),
  Ki: () => (/* reexport safe */ _sidebarUtils__rspack_import_2.Ki),
  OU: () => (/* reexport safe */ _sidebarUtils__rspack_import_2.OU),
  e7: () => (/* reexport safe */ _contexts__rspack_import_0.e7),
  "in": () => (/* reexport safe */ _contexts__rspack_import_0["in"]),
  kJ: () => (/* reexport safe */ _structuredDataUtils__rspack_import_1.k),
  x: () => (/* reexport safe */ _contexts__rspack_import_0.x)
});
/* import */ var _contexts__rspack_import_0 = __webpack_require__(16505);
/* import */ var _structuredDataUtils__rspack_import_1 = __webpack_require__(79421);
/* import */ var _sidebarUtils__rspack_import_2 = __webpack_require__(92172);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




},
92172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Gx: () => (useVisibleBlogSidebarItems),
  Ki: () => (groupBlogSidebarItemsByYear),
  OU: () => (BlogSidebarItemList)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_router__rspack_import_4 = __webpack_require__(56347);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(80618);
/* import */ var _docusaurus_theme_common_internal__rspack_import_3 = __webpack_require__(19209);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function isVisible(item, pathname) {
    if (item.unlisted && !(0,_docusaurus_theme_common_internal__rspack_import_3/* .isSamePath */.ys)(item.permalink, pathname)) {
        return false;
    }
    return true;
}
/**
 * Return the visible blog sidebar items to display.
 * Unlisted items are filtered.
 */ function useVisibleBlogSidebarItems(items) {
    const { pathname } = (0,_docusaurus_router__rspack_import_4/* .useLocation */.zy)();
    return (0,react__rspack_import_1.useMemo)(()=>items.filter((item)=>isVisible(item, pathname)), [
        items,
        pathname
    ]);
}
function groupBlogSidebarItemsByYear(items) {
    const groupedByYear = (0,_docusaurus_theme_common__rspack_import_5/* .groupBy */.$z)(items, (item)=>{
        return `${new Date(item.date).getFullYear()}`;
    });
    // "as" is safe here
    // see https://github.com/microsoft/TypeScript/pull/56805#issuecomment-2196526425
    const entries = Object.entries(groupedByYear);
    // We have to use entries because of https://x.com/sebastienlorber/status/1806371668614369486
    // Objects with string/number keys are automatically sorted asc...
    // Even if keys are strings like "2024"
    // We want descending order for years
    // Alternative: using Map.groupBy (not affected by this "reordering")
    entries.reverse();
    return entries;
}
function BlogSidebarItemList({ items, ulClassName, liClassName, linkClassName, linkActiveClassName }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        className: ulClassName,
        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                className: liClassName,
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                    isNavLink: true,
                    to: item.permalink,
                    className: linkClassName,
                    activeClassName: linkActiveClassName,
                    children: item.title
                })
            }, item.permalink))
    });
}


},
79421(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  J: () => (useBlogPostStructuredData),
  k: () => (useBlogListPageStructuredData)
});
/* import */ var _docusaurus_useBaseUrl__rspack_import_0 = __webpack_require__(66497);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_1 = __webpack_require__(10898);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(23549);
/* import */ var _contexts__rspack_import_3 = __webpack_require__(16505);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



const convertDate = (dateMs)=>new Date(dateMs).toISOString();
function getBlogPost(blogPostContent, siteConfig, withBaseUrl) {
    const { assets, frontMatter, metadata } = blogPostContent;
    const { date, title, description, lastUpdatedAt } = metadata;
    const image = assets.image ?? frontMatter.image;
    const keywords = frontMatter.keywords ?? [];
    const blogUrl = `${siteConfig.url}${metadata.permalink}`;
    const dateModified = lastUpdatedAt ? convertDate(lastUpdatedAt) : undefined;
    return {
        '@type': 'BlogPosting',
        '@id': blogUrl,
        mainEntityOfPage: blogUrl,
        url: blogUrl,
        headline: title,
        name: title,
        description,
        datePublished: date,
        ...dateModified ? {
            dateModified
        } : {},
        ...getAuthor(metadata.authors),
        ...getImage(image, withBaseUrl, title),
        ...keywords ? {
            keywords
        } : {}
    };
}
function getAuthor(authors) {
    const authorsStructuredData = authors.map(createPersonStructuredData);
    return {
        author: authorsStructuredData.length === 1 ? authorsStructuredData[0] : authorsStructuredData
    };
}
function getImage(image, withBaseUrl, title) {
    return image ? {
        image: createImageStructuredData({
            imageUrl: withBaseUrl(image, {
                absolute: true
            }),
            caption: `title image for the blog post: ${title}`
        })
    } : {};
}
function useBlogListPageStructuredData(props) {
    const { siteConfig } = (0,_docusaurus_useDocusaurusContext__rspack_import_1/* ["default"] */.A)();
    const { withBaseUrl } = (0,_docusaurus_useBaseUrl__rspack_import_0/* .useBaseUrlUtils */.hH)();
    const { metadata: { blogDescription, blogTitle, permalink } } = props;
    const url = `${siteConfig.url}${permalink}`;
    // details on structured data support: https://schema.org/Blog
    return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': url,
        mainEntityOfPage: url,
        headline: blogTitle,
        description: blogDescription,
        blogPost: props.items.map((blogItem)=>getBlogPost(blogItem.content, siteConfig, withBaseUrl))
    };
}
function useBlogPostStructuredData() {
    const blogMetadata = (0,_docusaurus_plugin_content_blog_client__rspack_import_2/* .useBlogMetadata */.x)();
    const { assets, metadata } = (0,_contexts__rspack_import_3/* .useBlogPost */.e7)();
    const { siteConfig } = (0,_docusaurus_useDocusaurusContext__rspack_import_1/* ["default"] */.A)();
    const { withBaseUrl } = (0,_docusaurus_useBaseUrl__rspack_import_0/* .useBaseUrlUtils */.hH)();
    const { date, title, description, frontMatter, lastUpdatedAt } = metadata;
    const image = assets.image ?? frontMatter.image;
    const keywords = frontMatter.keywords ?? [];
    const dateModified = lastUpdatedAt ? convertDate(lastUpdatedAt) : undefined;
    const url = `${siteConfig.url}${metadata.permalink}`;
    // details on structured data support: https://schema.org/BlogPosting
    // BlogPosting is one of the structured data types that Google explicitly
    // supports: https://developers.google.com/search/docs/appearance/structured-data/article#structured-data-type-definitions
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': url,
        mainEntityOfPage: url,
        url,
        headline: title,
        name: title,
        description,
        datePublished: date,
        ...dateModified ? {
            dateModified
        } : {},
        ...getAuthor(metadata.authors),
        ...getImage(image, withBaseUrl, title),
        ...keywords ? {
            keywords
        } : {},
        isPartOf: {
            '@type': 'Blog',
            '@id': `${siteConfig.url}${blogMetadata.blogBasePath}`,
            name: blogMetadata.blogTitle
        }
    };
}
/** @returns A {@link https://schema.org/Person} constructed from the {@link Author} */ function createPersonStructuredData(author) {
    return {
        '@type': 'Person',
        ...author.name ? {
            name: author.name
        } : {},
        ...author.title ? {
            description: author.title
        } : {},
        ...author.url ? {
            url: author.url
        } : {},
        ...author.email ? {
            email: author.email
        } : {},
        ...author.imageURL ? {
            image: author.imageURL
        } : {}
    };
}
/** @returns A {@link https://schema.org/ImageObject} */ function createImageStructuredData({ imageUrl, caption }) {
    return {
        '@type': 'ImageObject',
        '@id': imageUrl,
        url: imageUrl,
        contentUrl: imageUrl,
        caption
    };
}


},
4888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(78328);
/* import */ var _theme_BlogSidebar__rspack_import_3 = __webpack_require__(30926);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function BlogLayout(props) {
    const { sidebar, toc, children, ...layoutProps } = props;
    const hasSidebar = sidebar && sidebar.items.length > 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        ...layoutProps,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "container margin-vert--lg",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogSidebar__rspack_import_3/* ["default"] */.A, {
                        sidebar: sidebar
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                        className: (0,clsx__rspack_import_4/* ["default"] */.A)('col', {
                            'col--7': hasSidebar,
                            'col--9 col--offset-1': !hasSidebar
                        }),
                        children: children
                    }),
                    toc && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "col col--2",
                        children: toc
                    })
                ]
            })
        })
    });
}


},
49472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(61022);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(23549);
/* import */ var _theme_Heading__rspack_import_3 = __webpack_require__(72072);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function BlogSidebarYearGroup({ year, yearGroupHeadingClassName, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        role: "group",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_3/* ["default"] */.A, {
                as: "h3",
                className: yearGroupHeadingClassName,
                children: year
            }),
            children
        ]
    });
}
function BlogSidebarContent({ items, yearGroupHeadingClassName, ListComponent }) {
    const themeConfig = (0,_docusaurus_theme_common__rspack_import_4/* .useThemeConfig */.p)();
    if (themeConfig.blog.sidebar.groupByYear) {
        const itemsByYear = (0,_docusaurus_plugin_content_blog_client__rspack_import_2/* .groupBlogSidebarItemsByYear */.Ki)(items);
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: itemsByYear.map(([year, yearItems])=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogSidebarYearGroup, {
                    year: year,
                    yearGroupHeadingClassName: yearGroupHeadingClassName,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ListComponent, {
                        items: yearItems
                    })
                }, year))
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ListComponent, {
            items: items
        });
    }
}
/* export default */ const __rspack_default_export = (/*#__PURE__*/(0,react__rspack_import_1.memo)(BlogSidebarContent));


},
99669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_3 = __webpack_require__(23549);
/* import */ var _theme_BlogSidebar_Content__rspack_import_4 = __webpack_require__(49472);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(34669);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





const ListComponent = ({ items })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_blog_client__rspack_import_3/* .BlogSidebarItemList */.OU, {
        items: items,
        ulClassName: (0,clsx__rspack_import_6/* ["default"] */.A)((_styles_module_css__rspack_import_5_default().sidebarItemList), 'clean-list'),
        liClassName: (_styles_module_css__rspack_import_5_default().sidebarItem),
        linkClassName: (_styles_module_css__rspack_import_5_default().sidebarItemLink),
        linkActiveClassName: (_styles_module_css__rspack_import_5_default().sidebarItemLinkActive)
    });
};
function BlogSidebarDesktop({ sidebar }) {
    const items = (0,_docusaurus_plugin_content_blog_client__rspack_import_3/* .useVisibleBlogSidebarItems */.Gx)(sidebar.items);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("aside", {
        className: "col col--3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
            className: (0,clsx__rspack_import_6/* ["default"] */.A)((_styles_module_css__rspack_import_5_default().sidebar), 'thin-scrollbar'),
            "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                id: 'theme.blog.sidebar.navAriaLabel',
                message: 'Blog recent posts navigation',
                description: 'The ARIA label for recent posts in the blog sidebar'
            }),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (0,clsx__rspack_import_6/* ["default"] */.A)((_styles_module_css__rspack_import_5_default().sidebarItemTitle), 'margin-bottom--md'),
                    children: sidebar.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogSidebar_Content__rspack_import_4/* ["default"] */.A, {
                    items: items,
                    ListComponent: ListComponent,
                    yearGroupHeadingClassName: (_styles_module_css__rspack_import_5_default().yearGroupHeading)
                })
            ]
        })
    });
}
/* export default */ const __rspack_default_export = (/*#__PURE__*/(0,react__rspack_import_1.memo)(BlogSidebarDesktop));


},
2801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(23549);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(17000);
/* import */ var _theme_BlogSidebar_Content__rspack_import_3 = __webpack_require__(49472);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(3265);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const ListComponent = ({ items })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_blog_client__rspack_import_2/* .BlogSidebarItemList */.OU, {
        items: items,
        ulClassName: "menu__list",
        liClassName: "menu__list-item",
        linkClassName: "menu__link",
        linkActiveClassName: "menu__link--active"
    });
};
function BlogSidebarMobileSecondaryMenu({ sidebar }) {
    const items = (0,_docusaurus_plugin_content_blog_client__rspack_import_2/* .useVisibleBlogSidebarItems */.Gx)(sidebar.items);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogSidebar_Content__rspack_import_3/* ["default"] */.A, {
        items: items,
        ListComponent: ListComponent,
        yearGroupHeadingClassName: (_styles_module_css__rspack_import_4_default().yearGroupHeading)
    });
}
function BlogSidebarMobile(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_5/* .NavbarSecondaryMenuFiller */.GX, {
        component: BlogSidebarMobileSecondaryMenu,
        props: props
    });
}
/* export default */ const __rspack_default_export = (/*#__PURE__*/(0,react__rspack_import_1.memo)(BlogSidebarMobile));


},
30926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogSidebar)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(53741);
/* import */ var _theme_BlogSidebar_Desktop__rspack_import_2 = __webpack_require__(99669);
/* import */ var _theme_BlogSidebar_Mobile__rspack_import_3 = __webpack_require__(2801);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function BlogSidebar({ sidebar }) {
    const windowSize = (0,_docusaurus_theme_common__rspack_import_4/* .useWindowSize */.l)();
    if (!sidebar?.items.length) {
        return null;
    }
    // Mobile sidebar doesn't need to be server-rendered
    if (windowSize === 'mobile') {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogSidebar_Mobile__rspack_import_3/* ["default"] */.A, {
            sidebar: sidebar
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogSidebar_Desktop__rspack_import_2/* ["default"] */.A, {
        sidebar: sidebar
    });
}


},
73084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BlogTagsListPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_8 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(29116);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(34308);
/* import */ var _docusaurus_theme_common__rspack_import_9 = __webpack_require__(88287);
/* import */ var _theme_BlogLayout__rspack_import_2 = __webpack_require__(4888);
/* import */ var _theme_TagsListByLetter__rspack_import_3 = __webpack_require__(18090);
/* import */ var _theme_SearchMetadata__rspack_import_4 = __webpack_require__(54175);
/* import */ var _theme_Heading__rspack_import_5 = __webpack_require__(72072);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function BlogTagsListPage({ tags, sidebar }) {
    const title = (0,_docusaurus_theme_common__rspack_import_6/* .translateTagsPageTitle */.b)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_theme_common__rspack_import_7/* .HtmlClassNameProvider */.e3, {
        className: (0,clsx__rspack_import_8/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_9/* .ThemeClassNames.wrapper.blogPages */.G.wrapper.blogPages, _docusaurus_theme_common__rspack_import_9/* .ThemeClassNames.page.blogTagsListPage */.G.page.blogTagsListPage),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_7/* .PageMetadata */.be, {
                title: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_SearchMetadata__rspack_import_4/* ["default"] */.A, {
                tag: "blog_tags_list"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_BlogLayout__rspack_import_2/* ["default"] */.A, {
                sidebar: sidebar,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_5/* ["default"] */.A, {
                        as: "h1",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_TagsListByLetter__rspack_import_3/* ["default"] */.A, {
                        tags: tags
                    })
                ]
            })
        ]
    });
}


},
51154(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Tag)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(70448);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function Tag({ permalink, label, count, description }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        rel: "tag",
        href: permalink,
        title: description,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)((_styles_module_css__rspack_import_3_default().tag), count ? (_styles_module_css__rspack_import_3_default().tagWithCount) : (_styles_module_css__rspack_import_3_default().tagRegular)),
        children: [
            label,
            count && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                children: count
            })
        ]
    });
}


},
18090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (TagsListByLetter)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(29116);
/* import */ var _theme_Tag__rspack_import_2 = __webpack_require__(51154);
/* import */ var _theme_Heading__rspack_import_3 = __webpack_require__(72072);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(26216);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TagLetterEntryItem({ letterEntry }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("article", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_3/* ["default"] */.A, {
                as: "h2",
                id: letterEntry.letter,
                children: letterEntry.letter
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                className: "padding--none",
                children: letterEntry.tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                        className: (_styles_module_css__rspack_import_4_default().tag),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Tag__rspack_import_2/* ["default"] */.A, {
                            ...tag
                        })
                    }, tag.permalink))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("hr", {})
        ]
    });
}
function TagsListByLetter({ tags }) {
    const letterList = (0,_docusaurus_theme_common__rspack_import_5/* .listTagsByLetters */.Q)(tags);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "margin-vert--lg",
        children: letterList.map((letterEntry)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TagLetterEntryItem, {
                letterEntry: letterEntry
            }, letterEntry.letter))
    });
}


},
29116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Q: () => (listTagsByLetters),
  b: () => (translateTagsPageTitle)
});
/* import */ var _docusaurus_Translate__rspack_import_0 = __webpack_require__(61826);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
const translateTagsPageTitle = ()=>(0,_docusaurus_Translate__rspack_import_0/* .translate */.T)({
        id: 'theme.tags.tagsPageTitle',
        message: 'Tags',
        description: 'The title of the tag list page'
    });
function getTagLetter(tag) {
    return tag[0].toUpperCase();
}
/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */ function listTagsByLetters(tags) {
    const groups = {};
    Object.values(tags).forEach((tag)=>{
        const initial = getTagLetter(tag.label);
        groups[initial] ??= [];
        groups[initial].push(tag);
    });
    return Object.entries(groups)// Sort letters
    .sort(([letter1], [letter2])=>letter1.localeCompare(letter2)).map(([letter, letterTags])=>{
        // Sort tags inside a letter
        const sortedTags = letterTags.sort((tag1, tag2)=>tag1.label.localeCompare(tag2.label));
        return {
            letter,
            tags: sortedTags
        };
    });
} //# sourceMappingURL=tagsUtils.js.map


},

};
;