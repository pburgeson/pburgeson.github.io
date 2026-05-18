exports.ids = ["766"];
exports.modules = {
86175(module) {
// Exports
module.exports = {
	"admonition": `admonition_xJq3`,
	"admonitionHeading": `admonitionHeading_Gvgb`,
	"admonitionIcon": `admonitionIcon_Rf37`,
	"admonitionContent": `admonitionContent_BuS1`
};


},
51720(module) {
// Exports
module.exports = {
	"authorCol": `authorCol_Hf19`,
	"imageOnlyAuthorRow": `imageOnlyAuthorRow_pa_O`,
	"imageOnlyAuthorCol": `imageOnlyAuthorCol_G86a`
};


},
50968(module) {
// Exports
module.exports = {
	"container": `container_mt6G`
};


},
99202(module) {
// Exports
module.exports = {
	"title": `title_f1Hy`
};


},
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
52022(module) {
// Exports
module.exports = {
	"authorSocials": `authorSocials_rSDt`,
	"authorSocialLink": `authorSocialLink_owbf`,
	"authorSocialIcon": `authorSocialIcon_XYv3`
};


},
57339(module) {
// Exports
module.exports = {
	"authorImage": `authorImage_XqGP`,
	"author-as-h1": `author-as-h1_n9oJ`,
	"author-as-h2": `author-as-h2_gXvM`,
	"authorDetails": `authorDetails_lV9A`,
	"authorName": `authorName_yefp`,
	"authorTitle": `authorTitle_nd0D`,
	"authorBlogPostCount": `authorBlogPostCount_iiJ5`
};


},
28864(module) {
// Exports
module.exports = {
	"copyButtonCopied": `copyButtonCopied_Vdqa`,
	"copyButtonIcons": `copyButtonIcons_IEyt`,
	"copyButtonIcon": `copyButtonIcon_TrPX`,
	"copyButtonSuccessIcon": `copyButtonSuccessIcon_cVMy`
};


},
84259(module) {
// Exports
module.exports = {
	"wordWrapButtonIcon": `wordWrapButtonIcon_b1P5`,
	"wordWrapButtonEnabled": `wordWrapButtonEnabled_uzNF`
};


},
69588(module) {
// Exports
module.exports = {
	"buttonGroup": `buttonGroup_M5ko`
};


},
11702(module) {
// Exports
module.exports = {
	"codeBlockContainer": `codeBlockContainer_Ckt0`
};


},
36128(module) {
// Exports
module.exports = {
	"codeBlock": `codeBlock_bY9V`,
	"codeBlockStandalone": `codeBlockStandalone_MEMb`,
	"codeBlockLines": `codeBlockLines_e6Vv`,
	"codeBlockLinesWithNumbering": `codeBlockLinesWithNumbering_o6Pm`
};


},
17851(module) {
// Exports
module.exports = {
	"codeBlockContent": `codeBlockContent_QJqH`,
	"codeBlockTitle": `codeBlockTitle_OeMC`,
	"codeBlock": `codeBlock_a8dz`
};


},
73083(module) {
// Exports
module.exports = {
	"codeLine": `codeLine_lJS_`,
	"codeLineNumber": `codeLineNumber_Tfdd`,
	"codeLineContent": `codeLineContent_feaV`
};


},
23406(module) {
// Exports
module.exports = {
	"details": `details_b_Ee`
};


},
70901(module) {
// Exports
module.exports = {
	"lastUpdated": `lastUpdated_JAkA`,
	"noPrint": `noPrint_WFHX`
};


},
21930(module) {
// Exports
module.exports = {
	"iconEdit": `iconEdit_Z9Sw`
};


},
10020(module) {
// Exports
module.exports = {
	"blueskySvg": `blueskySvg_AzZw`
};


},
94824(module) {
// Exports
module.exports = {
	"githubSvg": `githubSvg_Uu4N`
};


},
67727(module) {
// Exports
module.exports = {
	"instagramSvg": `instagramSvg_YC40`
};


},
21675(module) {
// Exports
module.exports = {
	"linkedinSvg": `linkedinSvg_FCgI`
};


},
13420(module) {
// Exports
module.exports = {
	"threadsSvg": `threadsSvg_PTXY`
};


},
88451(module) {
// Exports
module.exports = {
	"xSvg": `xSvg_y3PF`
};


},
8081(module) {
// Exports
module.exports = {
	"img": `img_ev3q`
};


},
47691(module) {
// Exports
module.exports = {
	"containsTaskList": `containsTaskList_mC6p`
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
84088(module) {
// Exports
module.exports = {
	"tags": `tags_jXut`,
	"tag": `tag_QGVx`
};


},
26062(module) {
// Exports
module.exports = {
	"details": `details_lb9f`,
	"isBrowser": `isBrowser_bmU9`,
	"collapsibleContent": `collapsibleContent_i85q`
};


},
18426(module, exports) {
/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


},
9526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BrowserOnly)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_useIsBrowser__rspack_import_2 = __webpack_require__(19863);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly({ children, fallback }) {
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_2/* ["default"] */.A)();
    if (isBrowser) {
        if (typeof children !== 'function' && "production" === 'development') {}
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: children?.()
        });
    }
    return fallback ?? null;
}


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
32369(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconDanger)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconDanger(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 12 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
        })
    });
}


},
12198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconInfo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconInfo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 14 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
        })
    });
}


},
79862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconNote)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconNote(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 14 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
        })
    });
}


},
68469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconTip)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconTip(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 12 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
        })
    });
}


},
23884(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconCaution)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconCaution(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
        })
    });
}


},
79379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(88287);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(86175);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function AdmonitionContainer({ type, className, children, id }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.common.admonition */.G.common.admonition, _docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.common.admonitionType */.G.common.admonitionType(type), (_styles_module_css__rspack_import_2_default().admonition), className),
        id: id,
        children: children
    });
}
function AdmonitionHeading({ icon, title }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (_styles_module_css__rspack_import_2_default().admonitionHeading),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                className: (_styles_module_css__rspack_import_2_default().admonitionIcon),
                children: icon
            }),
            title
        ]
    });
}
function AdmonitionContent({ children }) {
    return children ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (_styles_module_css__rspack_import_2_default().admonitionContent),
        children: children
    }) : null;
}
function AdmonitionLayout(props) {
    const { type, icon, title, children, className, id } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(AdmonitionContainer, {
        type: type,
        className: className,
        id: id,
        children: [
            title || icon ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionHeading, {
                title: title,
                icon: icon
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionContent, {
                children: children
            })
        ]
    });
}


},
56132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeCaution)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(79379);
/* import */ var _theme_Admonition_Icon_Warning__rspack_import_4 = __webpack_require__(23884);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--warning';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Warning__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.caution",
        description: "The default label used for the Caution admonition (:::caution)",
        children: "caution"
    })
};
// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
function AdmonitionTypeCaution(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
29798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeDanger)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(79379);
/* import */ var _theme_Admonition_Icon_Danger__rspack_import_4 = __webpack_require__(32369);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--danger';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Danger__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.danger",
        description: "The default label used for the Danger admonition (:::danger)",
        children: "danger"
    })
};
function AdmonitionTypeDanger(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
27033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeInfo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(79379);
/* import */ var _theme_Admonition_Icon_Info__rspack_import_4 = __webpack_require__(12198);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--info';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Info__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.info",
        description: "The default label used for the Info admonition (:::info)",
        children: "info"
    })
};
function AdmonitionTypeInfo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
83381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeNote)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(79379);
/* import */ var _theme_Admonition_Icon_Note__rspack_import_4 = __webpack_require__(79862);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--secondary';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Note__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.note",
        description: "The default label used for the Note admonition (:::note)",
        children: "note"
    })
};
function AdmonitionTypeNote(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
47460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeTip)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(79379);
/* import */ var _theme_Admonition_Icon_Tip__rspack_import_4 = __webpack_require__(68469);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--success';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Tip__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.tip",
        description: "The default label used for the Tip admonition (:::tip)",
        children: "tip"
    })
};
function AdmonitionTypeTip(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
52789(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeWarning)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(79379);
/* import */ var _theme_Admonition_Icon_Warning__rspack_import_4 = __webpack_require__(23884);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--warning';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Warning__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.warning",
        description: "The default label used for the Warning admonition (:::warning)",
        children: "warning"
    })
};
function AdmonitionTypeWarning(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
34245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _theme_Admonition_Type_Note__rspack_import_2 = __webpack_require__(83381);
/* import */ var _theme_Admonition_Type_Tip__rspack_import_3 = __webpack_require__(47460);
/* import */ var _theme_Admonition_Type_Info__rspack_import_4 = __webpack_require__(27033);
/* import */ var _theme_Admonition_Type_Warning__rspack_import_5 = __webpack_require__(52789);
/* import */ var _theme_Admonition_Type_Danger__rspack_import_6 = __webpack_require__(29798);
/* import */ var _theme_Admonition_Type_Caution__rspack_import_7 = __webpack_require__(56132);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






const admonitionTypes = {
    note: _theme_Admonition_Type_Note__rspack_import_2/* ["default"] */.A,
    tip: _theme_Admonition_Type_Tip__rspack_import_3/* ["default"] */.A,
    info: _theme_Admonition_Type_Info__rspack_import_4/* ["default"] */.A,
    warning: _theme_Admonition_Type_Warning__rspack_import_5/* ["default"] */.A,
    danger: _theme_Admonition_Type_Danger__rspack_import_6/* ["default"] */.A
};
// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases = {
    secondary: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Note__rspack_import_2/* ["default"] */.A, {
            title: "secondary",
            ...props
        }),
    important: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Info__rspack_import_4/* ["default"] */.A, {
            title: "important",
            ...props
        }),
    success: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Tip__rspack_import_3/* ["default"] */.A, {
            title: "success",
            ...props
        }),
    caution: _theme_Admonition_Type_Caution__rspack_import_7/* ["default"] */.A
};
/* export default */ const __rspack_default_export = ({
    ...admonitionTypes,
    ...admonitionAliases
});


},
92320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Admonition)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(65441);
/* import */ var _theme_Admonition_Types__rspack_import_2 = __webpack_require__(34245);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function getAdmonitionTypeComponent(type) {
    const component = _theme_Admonition_Types__rspack_import_2/* ["default"] */.A[type];
    if (component) {
        return component;
    }
    console.warn(`No admonition component found for admonition type "${type}". Using Info as fallback.`);
    return _theme_Admonition_Types__rspack_import_2/* ["default"].info */.A.info;
}
function Admonition(unprocessedProps) {
    const props = (0,_docusaurus_theme_common__rspack_import_3/* .processAdmonitionProps */.c)(unprocessedProps);
    const AdmonitionTypeComponent = getAdmonitionTypeComponent(props.type);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionTypeComponent, {
        ...props
    });
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
24553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogListPaginator)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _theme_PaginatorNavLink__rspack_import_3 = __webpack_require__(17174);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function BlogListPaginator(props) {
    const { metadata } = props;
    const { previousPage, nextPage } = metadata;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
        className: "pagination-nav",
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.blog.paginator.navAriaLabel',
            message: 'Blog list page navigation',
            description: 'The ARIA label for the blog pagination'
        }),
        children: [
            previousPage && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                permalink: previousPage,
                title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.blog.paginator.newerEntries",
                    description: "The label used to navigate to the newer blog posts page (previous page)",
                    children: "Newer entries"
                })
            }),
            nextPage && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                permalink: nextPage,
                title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.blog.paginator.olderEntries",
                    description: "The label used to navigate to the older blog posts page (next page)",
                    children: "Older entries"
                }),
                isNext: true
            })
        ]
    });
}


},
16379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function BlogPostItemContainer({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("article", {
        className: className,
        children: children
    });
}


},
63885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_utils_common__rspack_import_4 = __webpack_require__(5248);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(23549);
/* import */ var _theme_MDXContent__rspack_import_3 = __webpack_require__(46318);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function BlogPostItemContent({ children, className }) {
    const { isBlogPostPage } = (0,_docusaurus_plugin_content_blog_client__rspack_import_2/* .useBlogPost */.e7)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        // This ID is used for the feed generation to locate the main content
        id: isBlogPostPage ? _docusaurus_utils_common__rspack_import_4.blogPostContainerID : undefined,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('markdown', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXContent__rspack_import_3/* ["default"] */.A, {
            children: children
        })
    });
}


},
97069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemFooterReadMoreLink)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _docusaurus_Link__rspack_import_3 = __webpack_require__(95310);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function ReadMoreLabel() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
            id: "theme.blog.post.readMore",
            description: "The label used in blog post item excerpts to link to full blog posts",
            children: "Read more"
        })
    });
}
function BlogPostItemFooterReadMoreLink(props) {
    const { blogPostTitle, ...linkProps } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_3/* ["default"] */.A, {
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            message: 'Read more about {title}',
            id: 'theme.blog.post.readMoreLabel',
            description: 'The ARIA label for the link to full blog posts from excerpts'
        }, {
            title: blogPostTitle
        }),
        ...linkProps,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ReadMoreLabel, {})
    });
}


},
53543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemFooter)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(34164);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(23549);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(88287);
/* import */ var _theme_EditMetaRow__rspack_import_3 = __webpack_require__(97277);
/* import */ var _theme_TagsListInline__rspack_import_4 = __webpack_require__(56306);
/* import */ var _theme_BlogPostItem_Footer_ReadMoreLink__rspack_import_5 = __webpack_require__(97069);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function BlogPostItemFooter() {
    const { metadata, isBlogPostPage } = (0,_docusaurus_plugin_content_blog_client__rspack_import_2/* .useBlogPost */.e7)();
    const { tags, title, editUrl, hasTruncateMarker, lastUpdatedBy, lastUpdatedAt } = metadata;
    // A post is truncated if it's in the "list view" and it has a truncate marker
    const truncatedPost = !isBlogPostPage && hasTruncateMarker;
    const tagsExists = tags.length > 0;
    const renderFooter = tagsExists || truncatedPost || editUrl;
    if (!renderFooter) {
        return null;
    }
    // BlogPost footer - details view
    if (isBlogPostPage) {
        const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("footer", {
            className: "docusaurus-mt-lg",
            children: [
                tagsExists && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (0,clsx__rspack_import_6/* ["default"] */.A)('row', 'margin-top--sm', _docusaurus_theme_common__rspack_import_7/* .ThemeClassNames.blog.blogFooterEditMetaRow */.G.blog.blogFooterEditMetaRow),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_TagsListInline__rspack_import_4/* ["default"] */.A, {
                            tags: tags
                        })
                    })
                }),
                canDisplayEditMetaRow && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_EditMetaRow__rspack_import_3/* ["default"] */.A, {
                    className: (0,clsx__rspack_import_6/* ["default"] */.A)('margin-top--sm', _docusaurus_theme_common__rspack_import_7/* .ThemeClassNames.blog.blogFooterEditMetaRow */.G.blog.blogFooterEditMetaRow),
                    editUrl: editUrl,
                    lastUpdatedAt: lastUpdatedAt,
                    lastUpdatedBy: lastUpdatedBy
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("footer", {
            className: "row docusaurus-mt-lg",
            children: [
                tagsExists && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (0,clsx__rspack_import_6/* ["default"] */.A)('col', {
                        'col--9': truncatedPost
                    }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_TagsListInline__rspack_import_4/* ["default"] */.A, {
                        tags: tags
                    })
                }),
                truncatedPost && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (0,clsx__rspack_import_6/* ["default"] */.A)('col text--right', {
                        'col--3': tagsExists
                    }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Footer_ReadMoreLink__rspack_import_5/* ["default"] */.A, {
                        blogPostTitle: title,
                        to: metadata.permalink
                    })
                })
            ]
        });
    }
}


},
32410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemHeaderAuthors)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(23549);
/* import */ var _theme_Blog_Components_Author__rspack_import_3 = __webpack_require__(21279);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(51720);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// Component responsible for the authors layout
function BlogPostItemHeaderAuthors({ className }) {
    const { metadata: { authors }, assets } = (0,_docusaurus_plugin_content_blog_client__rspack_import_2/* .useBlogPost */.e7)();
    const authorsCount = authors.length;
    if (authorsCount === 0) {
        return null;
    }
    const imageOnly = authors.every(({ name })=>!name);
    const singleAuthor = authors.length === 1;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('margin-top--md margin-bottom--sm', imageOnly ? (_styles_module_css__rspack_import_4_default().imageOnlyAuthorRow) : 'row', className),
        children: authors.map((author, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: (0,clsx__rspack_import_5/* ["default"] */.A)(!imageOnly && (singleAuthor ? 'col col--12' : 'col col--6'), imageOnly ? (_styles_module_css__rspack_import_4_default().imageOnlyAuthorCol) : (_styles_module_css__rspack_import_4_default().authorCol)),
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Blog_Components_Author__rspack_import_3/* ["default"] */.A, {
                    author: {
                        ...author,
                        // Handle author images using relative paths
                        imageURL: assets.authorsImageUrls[idx] ?? author.imageURL
                    }
                })
            }, idx))
    });
}


},
40194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemHeaderInfo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(16497);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(27954);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_3 = __webpack_require__(23549);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(50968);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
    const { selectMessage } = (0,_docusaurus_theme_common__rspack_import_5/* .usePluralForm */.W)();
    return (readingTimeFloat)=>{
        const readingTime = Math.ceil(readingTimeFloat);
        return selectMessage(readingTime, (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.blog.post.readingTime.plurals',
            description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One min read|{readingTime} min read'
        }, {
            readingTime
        }));
    };
}
function ReadingTime({ readingTime }) {
    const readingTimePlural = useReadingTimePlural();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: readingTimePlural(readingTime)
    });
}
function DateTime({ date, formattedDate }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("time", {
        dateTime: date,
        children: formattedDate
    });
}
function Spacer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: ' · '
    });
}
function BlogPostItemHeaderInfo({ className }) {
    const { metadata } = (0,_docusaurus_plugin_content_blog_client__rspack_import_3/* .useBlogPost */.e7)();
    const { date, readingTime } = metadata;
    const dateTimeFormat = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useDateTimeFormat */.i)({
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formatDate = (blogDate)=>dateTimeFormat.format(new Date(blogDate));
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)((_styles_module_css__rspack_import_4_default().container), 'margin-vert--md', className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DateTime, {
                date: date,
                formattedDate: formatDate(date)
            }),
            typeof readingTime !== 'undefined' && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Spacer, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ReadingTime, {
                        readingTime: readingTime
                    })
                ]
            })
        ]
    });
}


},
35536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemHeaderTitle)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_3 = __webpack_require__(23549);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(99202);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function BlogPostItemHeaderTitle({ className }) {
    const { metadata, isBlogPostPage } = (0,_docusaurus_plugin_content_blog_client__rspack_import_3/* .useBlogPost */.e7)();
    const { permalink, title } = metadata;
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TitleHeading, {
        className: (0,clsx__rspack_import_5/* ["default"] */.A)((_styles_module_css__rspack_import_4_default().title), className),
        children: isBlogPostPage ? title : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
            to: permalink,
            children: title
        })
    });
}


},
61805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemHeader)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _theme_BlogPostItem_Header_Title__rspack_import_2 = __webpack_require__(35536);
/* import */ var _theme_BlogPostItem_Header_Info__rspack_import_3 = __webpack_require__(40194);
/* import */ var _theme_BlogPostItem_Header_Authors__rspack_import_4 = __webpack_require__(32410);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function BlogPostItemHeader() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("header", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Header_Title__rspack_import_2/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Header_Info__rspack_import_3/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Header_Authors__rspack_import_4/* ["default"] */.A, {})
        ]
    });
}


},
77731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(34164);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(23549);
/* import */ var _theme_BlogPostItem_Container__rspack_import_3 = __webpack_require__(16379);
/* import */ var _theme_BlogPostItem_Header__rspack_import_4 = __webpack_require__(61805);
/* import */ var _theme_BlogPostItem_Content__rspack_import_5 = __webpack_require__(63885);
/* import */ var _theme_BlogPostItem_Footer__rspack_import_6 = __webpack_require__(53543);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






// apply a bottom margin in list view
function useContainerClassName() {
    const { isBlogPostPage } = (0,_docusaurus_plugin_content_blog_client__rspack_import_2/* .useBlogPost */.e7)();
    return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}
function BlogPostItem({ children, className }) {
    const containerClassName = useContainerClassName();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_BlogPostItem_Container__rspack_import_3/* ["default"] */.A, {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)(containerClassName, className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Header__rspack_import_4/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Content__rspack_import_5/* ["default"] */.A, {
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Footer__rspack_import_6/* ["default"] */.A, {})
        ]
    });
}


},
50284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItems)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(23549);
/* import */ var _theme_BlogPostItem__rspack_import_3 = __webpack_require__(77731);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function BlogPostItems({ items, component: BlogPostItemComponent = _theme_BlogPostItem__rspack_import_3/* ["default"] */.A }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: items.map(({ content: BlogPostContent })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_blog_client__rspack_import_2/* .BlogPostProvider */["in"], {
                content: BlogPostContent,
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogPostItemComponent, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogPostContent, {})
                })
            }, BlogPostContent.metadata.permalink))
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
20149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BlogTagsPostsPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_12 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _docusaurus_theme_common__rspack_import_11 = __webpack_require__(34308);
/* import */ var _docusaurus_theme_common__rspack_import_13 = __webpack_require__(88287);
/* import */ var _docusaurus_theme_common_internal__rspack_import_10 = __webpack_require__(79365);
/* import */ var _docusaurus_Link__rspack_import_3 = __webpack_require__(95310);
/* import */ var _theme_BlogLayout__rspack_import_4 = __webpack_require__(4888);
/* import */ var _theme_BlogListPaginator__rspack_import_5 = __webpack_require__(24553);
/* import */ var _theme_SearchMetadata__rspack_import_6 = __webpack_require__(54175);
/* import */ var _theme_BlogPostItems__rspack_import_7 = __webpack_require__(50284);
/* import */ var _theme_ContentVisibility_Unlisted__rspack_import_8 = __webpack_require__(41250);
/* import */ var _theme_Heading__rspack_import_9 = __webpack_require__(72072);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 











function BlogTagsPostsPageMetadata({ tag }) {
    const title = (0,_docusaurus_theme_common_internal__rspack_import_10/* .useBlogTagsPostsPageTitle */.ZD)(tag);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_11/* .PageMetadata */.be, {
                title: title,
                description: tag.description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_SearchMetadata__rspack_import_6/* ["default"] */.A, {
                tag: "blog_tags_posts"
            })
        ]
    });
}
function BlogTagsPostsPageContent({ tag, items, sidebar, listMetadata }) {
    const title = (0,_docusaurus_theme_common_internal__rspack_import_10/* .useBlogTagsPostsPageTitle */.ZD)(tag);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_BlogLayout__rspack_import_4/* ["default"] */.A, {
        sidebar: sidebar,
        children: [
            tag.unlisted && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_ContentVisibility_Unlisted__rspack_import_8/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("header", {
                className: "margin-bottom--xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_9/* ["default"] */.A, {
                        as: "h1",
                        children: title
                    }),
                    tag.description && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: tag.description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_3/* ["default"] */.A, {
                        href: tag.allTagsPath,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.tags.tagsPageLink",
                            description: "The label of the link targeting the tag list page",
                            children: "View All Tags"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItems__rspack_import_7/* ["default"] */.A, {
                items: items
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogListPaginator__rspack_import_5/* ["default"] */.A, {
                metadata: listMetadata
            })
        ]
    });
}
function BlogTagsPostsPage(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_theme_common__rspack_import_11/* .HtmlClassNameProvider */.e3, {
        className: (0,clsx__rspack_import_12/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_13/* .ThemeClassNames.wrapper.blogPages */.G.wrapper.blogPages, _docusaurus_theme_common__rspack_import_13/* .ThemeClassNames.page.blogTagPostListPage */.G.page.blogTagPostListPage),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogTagsPostsPageMetadata, {
                ...props
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogTagsPostsPageContent, {
                ...props
            })
        ]
    });
}


},
93844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogAuthorSocials)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_17 = __webpack_require__(34164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _theme_Icon_Socials_Twitter__rspack_import_3 = __webpack_require__(80824);
/* import */ var _theme_Icon_Socials_GitHub__rspack_import_4 = __webpack_require__(37538);
/* import */ var _theme_Icon_Socials_X__rspack_import_5 = __webpack_require__(79599);
/* import */ var _theme_Icon_Socials_StackOverflow__rspack_import_6 = __webpack_require__(75801);
/* import */ var _theme_Icon_Socials_LinkedIn__rspack_import_7 = __webpack_require__(28775);
/* import */ var _theme_Icon_Socials_Default__rspack_import_8 = __webpack_require__(55910);
/* import */ var _theme_Icon_Socials_Bluesky__rspack_import_9 = __webpack_require__(39958);
/* import */ var _theme_Icon_Socials_Instagram__rspack_import_10 = __webpack_require__(49243);
/* import */ var _theme_Icon_Socials_Threads__rspack_import_11 = __webpack_require__(57070);
/* import */ var _theme_Icon_Socials_YouTube__rspack_import_12 = __webpack_require__(20278);
/* import */ var _theme_Icon_Socials_Mastodon__rspack_import_13 = __webpack_require__(34394);
/* import */ var _theme_Icon_Socials_Twitch__rspack_import_14 = __webpack_require__(64794);
/* import */ var _theme_Icon_Socials_Email__rspack_import_15 = __webpack_require__(5039);
/* import */ var _styles_module_css__rspack_import_16 = __webpack_require__(52022);
/* import */ var _styles_module_css__rspack_import_16_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_16);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
















const SocialPlatformConfigs = {
    twitter: {
        Icon: _theme_Icon_Socials_Twitter__rspack_import_3/* ["default"] */.A,
        label: 'Twitter'
    },
    github: {
        Icon: _theme_Icon_Socials_GitHub__rspack_import_4/* ["default"] */.A,
        label: 'GitHub'
    },
    stackoverflow: {
        Icon: _theme_Icon_Socials_StackOverflow__rspack_import_6/* ["default"] */.A,
        label: 'Stack Overflow'
    },
    linkedin: {
        Icon: _theme_Icon_Socials_LinkedIn__rspack_import_7/* ["default"] */.A,
        label: 'LinkedIn'
    },
    x: {
        Icon: _theme_Icon_Socials_X__rspack_import_5/* ["default"] */.A,
        label: 'X'
    },
    bluesky: {
        Icon: _theme_Icon_Socials_Bluesky__rspack_import_9/* ["default"] */.A,
        label: 'Bluesky'
    },
    instagram: {
        Icon: _theme_Icon_Socials_Instagram__rspack_import_10/* ["default"] */.A,
        label: 'Instagram'
    },
    threads: {
        Icon: _theme_Icon_Socials_Threads__rspack_import_11/* ["default"] */.A,
        label: 'Threads'
    },
    mastodon: {
        Icon: _theme_Icon_Socials_Mastodon__rspack_import_13/* ["default"] */.A,
        label: 'Mastodon'
    },
    youtube: {
        Icon: _theme_Icon_Socials_YouTube__rspack_import_12/* ["default"] */.A,
        label: 'YouTube'
    },
    twitch: {
        Icon: _theme_Icon_Socials_Twitch__rspack_import_14/* ["default"] */.A,
        label: 'Twitch'
    },
    email: {
        Icon: _theme_Icon_Socials_Email__rspack_import_15/* ["default"] */.A,
        label: 'Email'
    }
};
function getSocialPlatformConfig(platformKey) {
    return SocialPlatformConfigs[platformKey] ?? {
        Icon: _theme_Icon_Socials_Default__rspack_import_8/* ["default"] */.A,
        label: platformKey
    };
}
function SocialLink({ platform, link }) {
    const { Icon, label } = getSocialPlatformConfig(platform);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        className: (_styles_module_css__rspack_import_16_default().authorSocialLink),
        href: link,
        title: label,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Icon, {
            className: (0,clsx__rspack_import_17/* ["default"] */.A)((_styles_module_css__rspack_import_16_default().authorSocialIcon))
        })
    });
}
function BlogAuthorSocials({ author }) {
    const entries = Object.entries(author.socials ?? {});
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (_styles_module_css__rspack_import_16_default().authorSocials),
        children: entries.map(([platform, linkUrl])=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SocialLink, {
                platform: platform,
                link: linkUrl
            }, platform);
        })
    });
}


},
21279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogAuthor)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(34164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _theme_Blog_Components_Author_Socials__rspack_import_3 = __webpack_require__(93844);
/* import */ var _theme_Heading__rspack_import_4 = __webpack_require__(72072);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(57339);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function MaybeLink(props) {
    if (props.href) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
            ...props
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: props.children
    });
}
function AuthorTitle({ title }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
        className: (_styles_module_css__rspack_import_5_default().authorTitle),
        title: title,
        children: title
    });
}
function AuthorName({ name, as }) {
    if (!as) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
            className: (_styles_module_css__rspack_import_5_default().authorName),
            translate: "no",
            children: name
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_4/* ["default"] */.A, {
            as: as,
            className: (_styles_module_css__rspack_import_5_default().authorName),
            translate: "no",
            children: name
        });
    }
}
function AuthorBlogPostCount({ count }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        className: (0,clsx__rspack_import_6/* ["default"] */.A)((_styles_module_css__rspack_import_5_default().authorBlogPostCount)),
        children: count
    });
}
// Note: in the future we might want to have multiple "BlogAuthor" components
// Creating different display modes with the "as" prop may not be the best idea
// Explainer: https://kyleshevlin.com/prefer-multiple-compositions/
// For now, we almost use the same design for all cases, so it's good enough
function BlogAuthor({ as, author, className, count }) {
    const { name, title, url, imageURL, email, page } = author;
    const link = page?.permalink || url || email && `mailto:${email}` || undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,clsx__rspack_import_6/* ["default"] */.A)('avatar margin-bottom--sm', className, (_styles_module_css__rspack_import_5_default())[`author-as-${as}`]),
        children: [
            imageURL && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(MaybeLink, {
                href: link,
                className: "avatar__photo-link",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                    className: (0,clsx__rspack_import_6/* ["default"] */.A)('avatar__photo', (_styles_module_css__rspack_import_5_default().authorImage)),
                    src: imageURL,
                    alt: name
                })
            }),
            (name || title) && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (0,clsx__rspack_import_6/* ["default"] */.A)('avatar__intro', (_styles_module_css__rspack_import_5_default().authorDetails)),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "avatar__name",
                        children: [
                            name && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(MaybeLink, {
                                href: link,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AuthorName, {
                                    name: name,
                                    as: as
                                })
                            }),
                            count !== undefined && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AuthorBlogPostCount, {
                                count: count
                            })
                        ]
                    }),
                    !!title && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AuthorTitle, {
                        title: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Blog_Components_Author_Socials__rspack_import_3/* ["default"] */.A, {
                        author: author
                    })
                ]
            })
        ]
    });
}


},
42979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_2 = __webpack_require__(34164);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function CodeBlockButton({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        type: "button",
        ...props,
        className: (0,clsx__rspack_import_2/* ["default"] */.A)('clean-btn', className)
    });
}


},
76794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CopyButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_8 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _docusaurus_theme_common_internal__rspack_import_7 = __webpack_require__(71643);
/* import */ var _theme_CodeBlock_Buttons_Button__rspack_import_3 = __webpack_require__(42979);
/* import */ var _theme_Icon_Copy__rspack_import_4 = __webpack_require__(71417);
/* import */ var _theme_Icon_Success__rspack_import_5 = __webpack_require__(35723);
/* import */ var _styles_module_css__rspack_import_6 = __webpack_require__(28864);
/* import */ var _styles_module_css__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_6);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function title() {
    return (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.CodeBlock.copy',
        message: 'Copy',
        description: 'The copy button label on code blocks'
    });
}
function ariaLabel(isCopied) {
    return isCopied ? (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.CodeBlock.copied',
        message: 'Copied',
        description: 'The copied button label on code blocks'
    }) : (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.CodeBlock.copyButtonAriaLabel',
        message: 'Copy code to clipboard',
        description: 'The ARIA label for copy code blocks button'
    });
}
async function copyToClipboard(text) {
    // The clipboard API is only defined in secure contexts (HTTPS / localhost).
    // See https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text);
    }
    // Fall back to copy-text-to-clipboard for non-secure contexts (e.g. HTTP
    // on a local network). The fallback is lazily loaded to avoid bundle
    // overhead for the common HTTPS case.
    const { default: copy } = await __webpack_require__.e(/* import() */ "693").then(__webpack_require__.bind(__webpack_require__, 33436));
    return copy(text);
}
function useCopyButton() {
    const { metadata: { code } } = (0,_docusaurus_theme_common_internal__rspack_import_7/* .useCodeBlockContext */.Ph)();
    const [isCopied, setIsCopied] = (0,react__rspack_import_1.useState)(false);
    const copyTimeout = (0,react__rspack_import_1.useRef)(undefined);
    const copyCode = (0,react__rspack_import_1.useCallback)(()=>{
        copyToClipboard(code).then(()=>{
            setIsCopied(true);
            copyTimeout.current = window.setTimeout(()=>{
                setIsCopied(false);
            }, 1000);
        });
    // Errors are intentionally not caught so they remain unhandled and can
    // be captured by observability tools (e.g. Sentry, PostHog).
    }, [
        code
    ]);
    (0,react__rspack_import_1.useEffect)(()=>()=>window.clearTimeout(copyTimeout.current), []);
    return {
        copyCode,
        isCopied
    };
}
function CopyButton({ className }) {
    const { copyCode, isCopied } = useCopyButton();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Buttons_Button__rspack_import_3/* ["default"] */.A, {
        "aria-label": ariaLabel(isCopied),
        title: title(),
        className: (0,clsx__rspack_import_8/* ["default"] */.A)(className, (_styles_module_css__rspack_import_6_default().copyButton), isCopied && (_styles_module_css__rspack_import_6_default().copyButtonCopied)),
        onClick: copyCode,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
            className: (_styles_module_css__rspack_import_6_default().copyButtonIcons),
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Copy__rspack_import_4/* ["default"] */.A, {
                    className: (_styles_module_css__rspack_import_6_default().copyButtonIcon)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Success__rspack_import_5/* ["default"] */.A, {
                    className: (_styles_module_css__rspack_import_6_default().copyButtonSuccessIcon)
                })
            ]
        })
    });
}


},
48535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (WordWrapButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(71643);
/* import */ var _theme_CodeBlock_Buttons_Button__rspack_import_3 = __webpack_require__(42979);
/* import */ var _theme_Icon_WordWrap__rspack_import_4 = __webpack_require__(78592);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(84259);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function WordWrapButton({ className }) {
    const { wordWrap } = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useCodeBlockContext */.Ph)();
    const canShowButton = wordWrap.isEnabled || wordWrap.isCodeScrollable;
    if (!canShowButton) {
        return false;
    }
    const title = (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.CodeBlock.wordWrapToggle',
        message: 'Toggle word wrap',
        description: 'The title attribute for toggle word wrapping button of code block lines'
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Buttons_Button__rspack_import_3/* ["default"] */.A, {
        onClick: ()=>wordWrap.toggle(),
        className: (0,clsx__rspack_import_7/* ["default"] */.A)(className, wordWrap.isEnabled && (_styles_module_css__rspack_import_5_default().wordWrapButtonEnabled)),
        "aria-label": title,
        title: title,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_WordWrap__rspack_import_4/* ["default"] */.A, {
            className: (_styles_module_css__rspack_import_5_default().wordWrapButtonIcon),
            "aria-hidden": "true"
        })
    });
}


},
13662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockButtons)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(34164);
/* import */ var _docusaurus_BrowserOnly__rspack_import_2 = __webpack_require__(9526);
/* import */ var _theme_CodeBlock_Buttons_CopyButton__rspack_import_3 = __webpack_require__(76794);
/* import */ var _theme_CodeBlock_Buttons_WordWrapButton__rspack_import_4 = __webpack_require__(48535);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(69588);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





// Code block buttons are not server-rendered on purpose
// Adding them to the initial HTML is useless and expensive (due to JSX SVG)
// They are hidden by default and require React  to become interactive
function CodeBlockButtons({ className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_BrowserOnly__rspack_import_2/* ["default"] */.A, {
        children: ()=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (0,clsx__rspack_import_6/* ["default"] */.A)(className, (_styles_module_css__rspack_import_5_default().buttonGroup)),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Buttons_WordWrapButton__rspack_import_4/* ["default"] */.A, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Buttons_CopyButton__rspack_import_3/* ["default"] */.A, {})
                ]
            })
    });
}


},
75412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(67810);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(88287);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(71643);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(11702);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function CodeBlockContainer({ as: As, ...props }) {
    const prismTheme = (0,_docusaurus_theme_common__rspack_import_3/* .usePrismTheme */.A)();
    const prismCssVariables = (0,_docusaurus_theme_common_internal__rspack_import_4/* .getPrismCssVariables */.M$)(prismTheme);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(As, {
        ...props,
        style: prismCssVariables,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_2_default().codeBlockContainer), _docusaurus_theme_common__rspack_import_6/* .ThemeClassNames.common.codeBlock */.G.common.codeBlock)
    });
}


},
98854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockJSX)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _theme_CodeBlock_Container__rspack_import_2 = __webpack_require__(75412);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(36128);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// TODO Docusaurus v4: move this component at the root?
// This component only handles a rare edge-case: <pre><MyComp/></pre> in MDX
// <pre> tags in markdown map to CodeBlocks. They may contain JSX children.
// When children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Container__rspack_import_2/* ["default"] */.A, {
        as: "pre",
        tabIndex: 0,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)((_styles_module_css__rspack_import_3_default().codeBlockStandalone), 'thin-scrollbar', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
            className: (_styles_module_css__rspack_import_3_default().codeBlockLines),
            children: children
        })
    });
}


},
96249(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockString)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(61022);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(71643);
/* import */ var _docusaurus_theme_common_internal__rspack_import_5 = __webpack_require__(14885);
/* import */ var _theme_CodeBlock_Layout__rspack_import_2 = __webpack_require__(32919);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function useCodeBlockMetadata(props) {
    const { prism } = (0,_docusaurus_theme_common__rspack_import_3/* .useThemeConfig */.p)();
    return (0,_docusaurus_theme_common_internal__rspack_import_4/* .createCodeBlockMetadata */.mU)({
        code: props.children,
        className: props.className,
        metastring: props.metastring,
        magicComments: prism.magicComments,
        defaultLanguage: prism.defaultLanguage,
        language: props.language,
        title: props.title,
        showLineNumbers: props.showLineNumbers
    });
}
// TODO Docusaurus v4: move this component at the root?
function CodeBlockString(props) {
    const metadata = useCodeBlockMetadata(props);
    const wordWrap = (0,_docusaurus_theme_common_internal__rspack_import_5/* .useCodeWordWrap */.f)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common_internal__rspack_import_4/* .CodeBlockContextProvider */.l8, {
        metadata: metadata,
        wordWrap: wordWrap,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Layout__rspack_import_2/* ["default"] */.A, {})
    });
}


},
91698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(71643);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(67810);
/* import */ var prism_react_renderer__rspack_import_2 = __webpack_require__(71765);
/* import */ var _theme_CodeBlock_Line__rspack_import_3 = __webpack_require__(90815);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(36128);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






// TODO Docusaurus v4: remove useless forwardRef
const Pre = /*#__PURE__*/ react__rspack_import_1.forwardRef((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("pre", {
        ref: ref,
        /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */ tabIndex: 0,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_4_default().codeBlock), 'thin-scrollbar')
    });
});
function Code(props) {
    const { metadata } = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useCodeBlockContext */.Ph)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_4_default().codeBlockLines), metadata.lineNumbersStart !== undefined && (_styles_module_css__rspack_import_4_default().codeBlockLinesWithNumbering)),
        style: {
            ...props.style,
            counterReset: metadata.lineNumbersStart === undefined ? undefined : `line-count ${metadata.lineNumbersStart - 1}`
        }
    });
}
function CodeBlockContent({ className: classNameProp }) {
    const { metadata, wordWrap } = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useCodeBlockContext */.Ph)();
    const prismTheme = (0,_docusaurus_theme_common__rspack_import_7/* .usePrismTheme */.A)();
    const { code, language, lineNumbersStart, lineClassNames } = metadata;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(prism_react_renderer__rspack_import_2/* .Highlight */.f4, {
        theme: prismTheme,
        code: code,
        language: language,
        children: ({ className, style, tokens: lines, getLineProps, getTokenProps })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Pre, {
                ref: wordWrap.codeBlockRef,
                className: (0,clsx__rspack_import_5/* ["default"] */.A)(classNameProp, className),
                style: style,
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Code, {
                    children: lines.map((line, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Line__rspack_import_3/* ["default"] */.A, {
                            line: line,
                            getLineProps: getLineProps,
                            getTokenProps: getTokenProps,
                            classNames: lineClassNames[i],
                            showLineNumbers: lineNumbersStart !== undefined
                        }, i))
                })
            })
    });
}


},
32919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(71643);
/* import */ var _theme_CodeBlock_Container__rspack_import_2 = __webpack_require__(75412);
/* import */ var _theme_CodeBlock_Title__rspack_import_8 = __webpack_require__(92949);
/* import */ var _theme_CodeBlock_Content__rspack_import_3 = __webpack_require__(91698);
/* import */ var _theme_CodeBlock_Buttons__rspack_import_4 = __webpack_require__(13662);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(17851);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function CodeBlockLayout({ className }) {
    const { metadata } = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useCodeBlockContext */.Ph)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_CodeBlock_Container__rspack_import_2/* ["default"] */.A, {
        as: "div",
        className: (0,clsx__rspack_import_7/* ["default"] */.A)(className, metadata.className),
        children: [
            metadata.title && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: (_styles_module_css__rspack_import_5_default().codeBlockTitle),
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Title__rspack_import_8/* ["default"] */.A, {
                    children: metadata.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_5_default().codeBlockContent),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Content__rspack_import_3/* ["default"] */.A, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Buttons__rspack_import_4/* ["default"] */.A, {})
                ]
            })
        ]
    });
}


},
76785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockLineToken)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Pass-through components that users can swizzle and customize
function CodeBlockLineToken({ line, token, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        ...props
    });
}


},
90815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockLine)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _theme_CodeBlock_Line_Token__rspack_import_2 = __webpack_require__(76785);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(73083);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// This <br/ seems useful when the line has no content to prevent collapsing.
// For code blocks with "diff" languages, this makes the empty lines collapse to
// zero height lines, which is undesirable.
// See also https://github.com/facebook/docusaurus/pull/11565
function LineBreak() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {});
}
// Replaces single lines with '\n' by '' so that we don't end up with
// duplicate line breaks (the '\n' + the artificial <br/> above)
// see also https://github.com/facebook/docusaurus/pull/11565
function fixLineBreak(line) {
    const singleLineBreakToken = line.length === 1 && line[0].content === '\n' ? line[0] : undefined;
    if (singleLineBreakToken) {
        return [
            {
                ...singleLineBreakToken,
                content: ''
            }
        ];
    }
    return line;
}
function CodeBlockLine({ line: lineProp, classNames, showLineNumbers, getLineProps, getTokenProps }) {
    const line = fixLineBreak(lineProp);
    const lineProps = getLineProps({
        line,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(classNames, showLineNumbers && (_styles_module_css__rspack_import_3_default().codeLine))
    });
    const lineTokens = line.map((token, key)=>{
        const tokenProps = getTokenProps({
            token
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Line_Token__rspack_import_2/* ["default"] */.A, {
            ...tokenProps,
            line: line,
            token: token,
            children: tokenProps.children
        }, key);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        ...lineProps,
        children: [
            showLineNumbers ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: (_styles_module_css__rspack_import_3_default().codeLineNumber)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: (_styles_module_css__rspack_import_3_default().codeLineContent),
                        children: lineTokens
                    })
                ]
            }) : lineTokens,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LineBreak, {})
        ]
    });
}


},
92949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockTitle)
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Just a pass-through component that users can swizzle and customize
function CodeBlockTitle({ children }) {
    return children;
}


},
45908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlock)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_useIsBrowser__rspack_import_2 = __webpack_require__(19863);
/* import */ var _theme_CodeBlock_Content_Element__rspack_import_3 = __webpack_require__(98854);
/* import */ var _theme_CodeBlock_Content_String__rspack_import_4 = __webpack_require__(96249);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */ function maybeStringifyChildren(children) {
    if (react__rspack_import_1.Children.toArray(children).some((el)=>/*#__PURE__*/ (0,react__rspack_import_1.isValidElement)(el))) {
        return children;
    }
    // The children is now guaranteed to be one/more plain strings
    return Array.isArray(children) ? children.join('') : children;
}
function CodeBlock({ children: rawChildren, ...props }) {
    // The Prism theme on SSR is always the default theme but the site theme can
    // be in a different mode. React hydration doesn't update DOM styles that come
    // from SSR. Hence force a re-render after mounting to apply the current
    // relevant styles.
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_2/* ["default"] */.A)();
    const children = maybeStringifyChildren(rawChildren);
    const CodeBlockComp = typeof children === 'string' ? _theme_CodeBlock_Content_String__rspack_import_4/* ["default"] */.A : _theme_CodeBlock_Content_Element__rspack_import_3/* ["default"] */.A;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CodeBlockComp, {
        ...props,
        children: children
    }, String(isBrowser));
}


},
94230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeInline)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Simple component used to render inline code blocks
// its purpose is to be swizzled and customized
// MDX 1 used to have a inlineCode comp, see https://mdxjs.com/migrating/v2/
function CodeInline(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
        ...props
    });
}


},
41250(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Unlisted)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(83276);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(88287);
/* import */ var _theme_Admonition__rspack_import_2 = __webpack_require__(92320);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function UnlistedBanner({ className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition__rspack_import_2/* ["default"] */.A, {
        type: "caution",
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .UnlistedBannerTitle */.Rc, {}),
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(className, _docusaurus_theme_common__rspack_import_5/* .ThemeClassNames.common.unlistedBanner */.G.common.unlistedBanner),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .UnlistedBannerMessage */.Uh, {})
    });
}
function Unlisted(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .UnlistedMetadata */.AE, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(UnlistedBanner, {
                ...props
            })
        ]
    });
}


},
65236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Details)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_theme_common_Details__rspack_import_2 = __webpack_require__(76092);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(23406);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';
function Details({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common_Details__rspack_import_2/* .Details */.B, {
        ...props,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(InfimaClasses, (_styles_module_css__rspack_import_3_default().details), props.className)
    });
}


},
97277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (EditMetaRow)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _theme_EditThisPage__rspack_import_2 = __webpack_require__(89017);
/* import */ var _theme_LastUpdated__rspack_import_3 = __webpack_require__(72165);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(70901);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function EditMetaRow({ className, editUrl, lastUpdatedAt, lastUpdatedBy }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('row', className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: (0,clsx__rspack_import_5/* ["default"] */.A)('col', (_styles_module_css__rspack_import_4_default().noPrint)),
                children: editUrl && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_EditThisPage__rspack_import_2/* ["default"] */.A, {
                    editUrl: editUrl
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: (0,clsx__rspack_import_5/* ["default"] */.A)('col', (_styles_module_css__rspack_import_4_default().lastUpdated)),
                children: (lastUpdatedAt || lastUpdatedBy) && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_LastUpdated__rspack_import_3/* ["default"] */.A, {
                    lastUpdatedAt: lastUpdatedAt,
                    lastUpdatedBy: lastUpdatedBy
                })
            })
        ]
    });
}


},
89017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (EditThisPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(88287);
/* import */ var _docusaurus_Link__rspack_import_3 = __webpack_require__(95310);
/* import */ var _theme_Icon_Edit__rspack_import_4 = __webpack_require__(93024);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function EditThisPage({ editUrl }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_3/* ["default"] */.A, {
        to: editUrl,
        className: _docusaurus_theme_common__rspack_import_5/* .ThemeClassNames.common.editThisPage */.G.common.editThisPage,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Edit__rspack_import_4/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                id: "theme.common.editThisPage",
                description: "The link label to edit the current page",
                children: "Edit this page"
            })
        ]
    });
}


},
71417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconCopy)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconCopy(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
        })
    });
}


},
93024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconEdit)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(21930);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function IconEdit({ className, ...restProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        fill: "currentColor",
        height: "20",
        width: "20",
        viewBox: "0 0 40 40",
        className: (0,clsx__rspack_import_3/* ["default"] */.A)((_styles_module_css__rspack_import_2_default().iconEdit), className),
        "aria-hidden": "true",
        ...restProps,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("g", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
            })
        })
    });
}


},
39958(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var clsx__rspack_import_2 = __webpack_require__(34164);
/* import */ var _styles_module_css__rspack_import_1 = __webpack_require__(10020);
/* import */ var _styles_module_css__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_1);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// SVG Source: https://svgl.app/
function Bluesky(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 256 226",
        style: {
            '--dark': '#0085ff',
            '--light': '#0085ff'
        },
        ...props,
        className: (0,clsx__rspack_import_2/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_1_default().blueskySvg)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            d: "M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686 11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068-9.138 32.654-42.436 40.983-72.057 35.942 51.775 8.812 64.946 38 36.501 67.187-54.021 55.433-77.644-13.908-83.696-31.676-1.11-3.257-1.63-4.78-1.637-3.485-.008-1.296-.527.228-1.637 3.485-6.052 17.768-29.675 87.11-83.696 31.676-28.445-29.187-15.274-58.375 36.5-67.187-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116 0-13.028 34.314-.727 55.491 15.172Z"
        })
    });
}
/* export default */ const __rspack_default_export = (Bluesky);


},
55910(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // SVG Source: https://github.com/tabler/tabler-icons
function DefaultSocial(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M1.2 12a10.8 10.8 0 1 0 21.6 0a10.8 10.8 0 0 0 -21.6 0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M1.92 8.4h20.16"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M1.92 15.6h20.16"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M11.4 1.2a20.4 20.4 0 0 0 0 21.6"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M12.6 1.2a20.4 20.4 0 0 1 0 21.6"
            })
        ]
    });
}
/* export default */ const __rspack_default_export = (DefaultSocial);


},
5039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // SVG Source: https://github.com/tabler/tabler-icons
function Email(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                stroke: "none",
                d: "M0 0h24v24H0z"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M7.2 12a4.8 4.8 0 1 0 9.6 0 4.8 4.8 0 1 0-9.6 0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M16.8 12v1.8a3 3 0 0 0 6 0V12a10.8 10.8 0 1 0-6.6 9.936"
            })
        ]
    });
}
/* export default */ const __rspack_default_export = (Email);


},
37538(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var clsx__rspack_import_2 = __webpack_require__(34164);
/* import */ var _styles_module_css__rspack_import_1 = __webpack_require__(94824);
/* import */ var _styles_module_css__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_1);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// SVG Source: https://svgl.app/
function GitHub(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 256 250",
        preserveAspectRatio: "xMidYMid",
        style: {
            '--dark': '#000',
            '--light': '#fff'
        },
        ...props,
        className: (0,clsx__rspack_import_2/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_1_default().githubSvg)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            d: "M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
        })
    });
}
/* export default */ const __rspack_default_export = (GitHub);


},
49243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var clsx__rspack_import_2 = __webpack_require__(34164);
/* import */ var _styles_module_css__rspack_import_1 = __webpack_require__(67727);
/* import */ var _styles_module_css__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_1);



// SVG Source: https://svgl.app/
function Instagram(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 256 256",
        style: {
            '--dark': '#000',
            '--light': '#fff'
        },
        ...props,
        className: (0,clsx__rspack_import_2/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_1_default().instagramSvg)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            d: "M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
        })
    });
}
/* export default */ const __rspack_default_export = (Instagram);


},
28775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var clsx__rspack_import_2 = __webpack_require__(34164);
/* import */ var _styles_module_css__rspack_import_1 = __webpack_require__(21675);
/* import */ var _styles_module_css__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_1);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// SVG Source: https://svgl.app/
function LinkedIn(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 256 256",
        style: {
            '--dark': '#0a66c2',
            '--light': '#ffffffe6'
        },
        ...props,
        className: (0,clsx__rspack_import_2/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_1_default().linkedinSvg)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            d: "M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
        })
    });
}
/* export default */ const __rspack_default_export = (LinkedIn);


},
34394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// SVG Source: https://svgl.app/
function Mastodon(props) {
    const gradientId = (0,react__rspack_import_1.useId)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 61 65",
        width: "1em",
        height: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                fill: `url(#${gradientId})`,
                d: "M60.754 14.39C59.814 7.406 53.727 1.903 46.512.836 45.294.656 40.682 0 29.997 0h-.08C19.23 0 16.938.656 15.72.836 8.705 1.873 2.299 6.82.745 13.886c-.748 3.48-.828 7.338-.689 10.877.198 5.075.237 10.142.697 15.197a71.482 71.482 0 0 0 1.664 9.968c1.477 6.056 7.458 11.096 13.317 13.152a35.718 35.718 0 0 0 19.484 1.028 28.365 28.365 0 0 0 2.107-.576c1.572-.5 3.413-1.057 4.766-2.038a.154.154 0 0 0 .062-.118v-4.899a.146.146 0 0 0-.055-.111.145.145 0 0 0-.122-.028 54 54 0 0 1-12.644 1.478c-7.328 0-9.298-3.478-9.863-4.925a15.258 15.258 0 0 1-.857-3.882.142.142 0 0 1 .178-.145 52.976 52.976 0 0 0 12.437 1.477c1.007 0 2.012 0 3.02-.026 4.213-.119 8.654-.334 12.8-1.144.103-.02.206-.038.295-.065 6.539-1.255 12.762-5.196 13.394-15.176.024-.393.083-4.115.083-4.523.003-1.386.446-9.829-.065-15.017Z"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                fill: "#fff",
                d: "M50.394 22.237v17.35H43.52V22.749c0-3.545-1.478-5.353-4.483-5.353-3.303 0-4.958 2.139-4.958 6.364v9.217h-6.835V23.76c0-4.225-1.657-6.364-4.96-6.364-2.988 0-4.48 1.808-4.48 5.353v16.84H10.93V22.237c0-3.545.905-6.362 2.715-8.45 1.868-2.082 4.317-3.152 7.358-3.152 3.519 0 6.178 1.354 7.951 4.057l1.711 2.871 1.714-2.871c1.773-2.704 4.432-4.056 7.945-4.056 3.038 0 5.487 1.069 7.36 3.152 1.81 2.085 2.712 4.902 2.71 8.449Z"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("linearGradient", {
                    id: gradientId,
                    x1: 30.5,
                    x2: 30.5,
                    y1: 0,
                    y2: 65,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("stop", {
                            stopColor: "#6364FF"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("stop", {
                            offset: 1,
                            stopColor: "#563ACC"
                        })
                    ]
                })
            })
        ]
    });
}
/* export default */ const __rspack_default_export = (Mastodon);


},
75801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // SVG Source: https://svgl.app/
function StackOverflow(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 169.61 200",
        width: "1em",
        height: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",
                fill: "#bcbbbb"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",
                fill: "#f48024"
            })
        ]
    });
}
/* export default */ const __rspack_default_export = (StackOverflow);


},
57070(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var clsx__rspack_import_2 = __webpack_require__(34164);
/* import */ var _styles_module_css__rspack_import_1 = __webpack_require__(13420);
/* import */ var _styles_module_css__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_1);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// SVG Source: https://svgl.app/
function Threads(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": "Threads",
        viewBox: "0 0 192 192",
        width: "1em",
        fill: "none",
        height: "1em",
        style: {
            '--dark': '#000',
            '--light': '#fff'
        },
        ...props,
        className: (0,clsx__rspack_import_2/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_1_default().threadsSvg)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            d: "M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.194 47.292 9.642 32.788 28.08 19.882 44.485 13.224 67.315 13.001 95.932L13 96v.067c.224 28.617 6.882 51.447 19.788 67.854C47.292 182.358 68.882 191.806 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-24.723-24.553ZM98.44 129.507c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.461-16.735 1.966-.114 3.895-.169 5.79-.169 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.58 28.713-23.802 29.274Z"
        })
    });
}
/* export default */ const __rspack_default_export = (Threads);


},
64794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);

// SVG Source: https://svgl.app/
function Twitch(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        x: 0,
        y: 0,
        viewBox: "0 0 2400 2800",
        width: "1em",
        height: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "m2200 1300-400 400h-400l-350 350v-350H600V200h1600z",
                fill: "#fff"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                        d: "M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z",
                        fill: "#9146ff"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                        d: "M1700 550h200v600h-200zM1150 550h200v600h-200z",
                        fill: "#9146ff"
                    })
                ]
            })
        ]
    });
}
/* export default */ const __rspack_default_export = (Twitch);


},
80824(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // SVG Source: https://svgl.app/
function Twitter(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 209",
        width: "1em",
        height: "1em",
        preserveAspectRatio: "xMidYMid",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            d: "M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",
            fill: "#55acee"
        })
    });
}
/* export default */ const __rspack_default_export = (Twitter);


},
79599(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var clsx__rspack_import_2 = __webpack_require__(34164);
/* import */ var _styles_module_css__rspack_import_1 = __webpack_require__(88451);
/* import */ var _styles_module_css__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_1);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// SVG Source: https://svgl.app/
function X(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 1200 1227",
        style: {
            '--dark': '#000',
            '--light': '#fff'
        },
        ...props,
        className: (0,clsx__rspack_import_2/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_1_default().xSvg)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            d: "M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
        })
    });
}
/* export default */ const __rspack_default_export = (X);


},
20278(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);

// SVG Source: https://svgl.app/
function YouTube(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
        viewBox: "0 0 256 180",
        width: "1em",
        height: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z",
                fill: "red"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                fill: "#FFF",
                d: "m102.421 128.06 66.328-38.418-66.328-38.418z"
            })
        ]
    });
}
/* export default */ const __rspack_default_export = (YouTube);


},
35723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconSuccess)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconSuccess(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        })
    });
}


},
78592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconWordWrap)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconWordWrap(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
        })
    });
}


},
72165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (LastUpdated)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(88287);
/* import */ var _docusaurus_theme_common_internal__rspack_import_3 = __webpack_require__(27954);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function LastUpdatedAtDate({ lastUpdatedAt }) {
    const atDate = new Date(lastUpdatedAt);
    const dateTimeFormat = (0,_docusaurus_theme_common_internal__rspack_import_3/* .useDateTimeFormat */.i)({
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formattedLastUpdatedAt = dateTimeFormat.format(atDate);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.lastUpdated.atDate",
        description: "The words used to describe on which date a page has been last updated",
        values: {
            date: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("time", {
                    dateTime: atDate.toISOString(),
                    itemProp: "dateModified",
                    children: formattedLastUpdatedAt
                })
            })
        },
        children: ' on {date}'
    });
}
function LastUpdatedByUser({ lastUpdatedBy }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.lastUpdated.byUser",
        description: "The words used to describe by who the page has been last updated",
        values: {
            user: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: lastUpdatedBy
            })
        },
        children: ' by {user}'
    });
}
function LastUpdated({ lastUpdatedAt, lastUpdatedBy }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
        className: _docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.common.lastUpdated */.G.common.lastUpdated,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                id: "theme.lastUpdated.lastUpdatedAtBy",
                description: "The sentence used to display when a page has been last updated, and by who",
                values: {
                    atDate: lastUpdatedAt ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LastUpdatedAtDate, {
                        lastUpdatedAt: lastUpdatedAt
                    }) : '',
                    byUser: lastUpdatedBy ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LastUpdatedByUser, {
                        lastUpdatedBy: lastUpdatedBy
                    }) : ''
                },
                children: 'Last updated{atDate}{byUser}'
            }),
             false && /*#__PURE__*/ 0
        ]
    });
}


},
5577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXA)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(95310);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(11976);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function MDXA(props) {
    // MDX Footnotes have ids such as <a id="user-content-fn-1-953011" ...>
    const anchorTargetClassName = (0,_docusaurus_theme_common__rspack_import_3/* .useAnchorTargetClassName */.v)(props.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        ...props,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(anchorTargetClassName, props.className)
    });
}


},
71092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXCode)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _theme_CodeBlock__rspack_import_2 = __webpack_require__(45908);
/* import */ var _theme_CodeInline__rspack_import_3 = __webpack_require__(94230);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function shouldBeInline(props) {
    return(// empty code blocks have no props.children,
    // see https://github.com/facebook/docusaurus/pull/9704
    typeof props.children !== 'undefined' && react__rspack_import_1.Children.toArray(props.children).every((el)=>typeof el === 'string' && !el.includes('\n')));
}
function MDXCode(props) {
    return shouldBeInline(props) ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeInline__rspack_import_3/* ["default"] */.A, {
        ...props
    }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock__rspack_import_2/* ["default"] */.A, {
        ...props
    });
}


},
87303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXDetails)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _theme_Details__rspack_import_2 = __webpack_require__(65236);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function MDXDetails(props) {
    const items = react__rspack_import_1.Children.toArray(props.children);
    // Split summary item from the rest to pass it as a separate prop to the
    // Details theme component
    const summary = items.find((item)=>/*#__PURE__*/ react__rspack_import_1.isValidElement(item) && item.type === 'summary');
    const children = /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: items.filter((item)=>item !== summary)
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Details__rspack_import_2/* ["default"] */.A, {
        ...props,
        summary: summary,
        children: children
    });
}


},
4667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXHeading)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _theme_Heading__rspack_import_2 = __webpack_require__(72072);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function MDXHeading(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_2/* ["default"] */.A, {
        ...props
    });
}


},
52921(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXImg)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(8081);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function transformImgClassName(className) {
    return (0,clsx__rspack_import_3/* ["default"] */.A)(className, (_styles_module_css__rspack_import_2_default().img));
}
function MDXImg(props) {
    return(// eslint-disable-next-line jsx-a11y/alt-text
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        decoding: "async",
        loading: "lazy",
        ...props,
        className: transformImgClassName(props.className)
    }));
}


},
82858(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXLi)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(34164);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_2 = __webpack_require__(41345);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(11976);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function MDXLi(props) {
    // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
    (0,_docusaurus_useBrokenLinks__rspack_import_2/* ["default"] */.A)().collectAnchor(props.id);
    const anchorTargetClassName = (0,_docusaurus_theme_common__rspack_import_3/* .useAnchorTargetClassName */.v)(props.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(anchorTargetClassName, props.className),
        ...props
    });
}


},
67952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXPre)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function MDXPre(props) {
    // With MDX 2, this element is only used for fenced code blocks
    // It always receives a MDXComponents/Code as children
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: props.children
    });
}


},
9623(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXUl)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(47691);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function transformUlClassName(className) {
    // Fix https://github.com/facebook/docusaurus/issues/9098
    if (typeof className === 'undefined') {
        return undefined;
    }
    return (0,clsx__rspack_import_3/* ["default"] */.A)(className, // This class is set globally by GitHub/MDX. We keep the global class, and
    // add another class to get a task list without the default ul styling
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    className?.includes('contains-task-list') && (_styles_module_css__rspack_import_2_default().containsTaskList));
}
function MDXUl(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        ...props,
        className: transformUlClassName(props.className)
    });
}


},
2081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Head__rspack_import_2 = __webpack_require__(53572);
/* import */ var _theme_MDXComponents_Code__rspack_import_3 = __webpack_require__(71092);
/* import */ var _theme_MDXComponents_A__rspack_import_4 = __webpack_require__(5577);
/* import */ var _theme_MDXComponents_Pre__rspack_import_5 = __webpack_require__(67952);
/* import */ var _theme_MDXComponents_Details__rspack_import_6 = __webpack_require__(87303);
/* import */ var _theme_MDXComponents_Heading__rspack_import_7 = __webpack_require__(4667);
/* import */ var _theme_MDXComponents_Ul__rspack_import_8 = __webpack_require__(9623);
/* import */ var _theme_MDXComponents_Li__rspack_import_9 = __webpack_require__(82858);
/* import */ var _theme_MDXComponents_Img__rspack_import_10 = __webpack_require__(52921);
/* import */ var _theme_Admonition__rspack_import_11 = __webpack_require__(92320);
/* import */ var _theme_Mermaid__rspack_import_12 = __webpack_require__(19034);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 











const MDXComponents = {
    Head: _docusaurus_Head__rspack_import_2/* ["default"] */.A,
    details: _theme_MDXComponents_Details__rspack_import_6/* ["default"] */.A,
    Details: _theme_MDXComponents_Details__rspack_import_6/* ["default"] */.A,
    code: _theme_MDXComponents_Code__rspack_import_3/* ["default"] */.A,
    a: _theme_MDXComponents_A__rspack_import_4/* ["default"] */.A,
    pre: _theme_MDXComponents_Pre__rspack_import_5/* ["default"] */.A,
    ul: _theme_MDXComponents_Ul__rspack_import_8/* ["default"] */.A,
    li: _theme_MDXComponents_Li__rspack_import_9/* ["default"] */.A,
    img: _theme_MDXComponents_Img__rspack_import_10/* ["default"] */.A,
    h1: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h1",
            ...props
        }),
    h2: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h2",
            ...props
        }),
    h3: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h3",
            ...props
        }),
    h4: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h4",
            ...props
        }),
    h5: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h5",
            ...props
        }),
    h6: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h6",
            ...props
        }),
    admonition: _theme_Admonition__rspack_import_11/* ["default"] */.A,
    mermaid: _theme_Mermaid__rspack_import_12/* ["default"] */.A
};
/* export default */ const __rspack_default_export = (MDXComponents);


},
46318(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _theme_MDXComponents__rspack_import_2 = __webpack_require__(2081);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function MDXContent({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_mdx_js_react__rspack_import_3/* .MDXProvider */.x, {
        components: _theme_MDXComponents__rspack_import_2/* ["default"] */.A,
        children: children
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
56306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (TagsListInline)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(34164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _theme_Tag__rspack_import_3 = __webpack_require__(51154);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(84088);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TagsListInline({ tags }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.tags.tagsListLabel",
                    description: "The label alongside a tag list",
                    children: "Tags:"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                className: (0,clsx__rspack_import_5/* ["default"] */.A)((_styles_module_css__rspack_import_4_default().tags), 'padding--none', 'margin-left--sm'),
                children: tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                        className: (_styles_module_css__rspack_import_4_default().tag),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Tag__rspack_import_3/* ["default"] */.A, {
                            ...tag
                        })
                    }, tag.permalink))
            })
        ]
    });
}


},
76092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  B: () => (Details)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(34164);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_2 = __webpack_require__(41345);
/* import */ var _docusaurus_useIsBrowser__rspack_import_3 = __webpack_require__(19863);
/* import */ var _Collapsible__rspack_import_5 = __webpack_require__(39510);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(26062);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function isInSummary(node) {
    if (!node) {
        return false;
    }
    return node.tagName === 'SUMMARY' || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
    if (!node) {
        return false;
    }
    return node === parent || hasParent(node.parentElement, parent);
}
/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */ function Details({ summary, children, ...props }) {
    (0,_docusaurus_useBrokenLinks__rspack_import_2/* ["default"] */.A)().collectAnchor(props.id);
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_3/* ["default"] */.A)();
    const detailsRef = (0,react__rspack_import_1.useRef)(null);
    const { collapsed, setCollapsed } = (0,_Collapsible__rspack_import_5/* .useCollapsible */.u)({
        initialState: !props.open
    });
    // Use a separate state for the actual details prop, because it must be set
    // only after animation completes, otherwise close animations won't work
    const [open, setOpen] = (0,react__rspack_import_1.useState)(props.open);
    const summaryElement = /*#__PURE__*/ react__rspack_import_1.isValidElement(summary) ? summary : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("summary", {
        children: summary ?? 'Details'
    });
    return(// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("details", {
        ...props,
        ref: detailsRef,
        open: open,
        "data-collapsed": collapsed,
        className: (0,clsx__rspack_import_6/* ["default"] */.A)((_styles_module_css__rspack_import_4_default().details), isBrowser && (_styles_module_css__rspack_import_4_default().isBrowser), props.className),
        onMouseDown: (e)=>{
            const target = e.target;
            // Prevent a double-click to highlight summary text
            if (isInSummary(target) && e.detail > 1) {
                e.preventDefault();
            }
        },
        onClick: (e)=>{
            e.stopPropagation(); // For isolation of multiple nested details/summary
            const target = e.target;
            const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
            if (!shouldToggle) {
                return;
            }
            e.preventDefault();
            if (collapsed) {
                setCollapsed(false);
                setOpen(true);
            } else {
                setCollapsed(true);
            // Don't do this, it breaks close animation!
            // setOpen(false);
            }
        },
        children: [
            summaryElement,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_Collapsible__rspack_import_5/* .Collapsible */.N, {
                lazy: false,
                collapsed: collapsed,
                onCollapseTransitionEnd: (newCollapsed)=>{
                    setCollapsed(newCollapsed);
                    setOpen(!newCollapsed);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (_styles_module_css__rspack_import_4_default().collapsibleContent),
                    children: children
                })
            })
        ]
    }));
} //# sourceMappingURL=index.js.map


},
14885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  f: () => (useCodeWordWrap)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var _useMutationObserver__rspack_import_1 = __webpack_require__(43181);


// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef, callback) {
    const [hiddenTabElement, setHiddenTabElement] = (0,react__rspack_import_0.useState)();
    const updateHiddenTabElement = (0,react__rspack_import_0.useCallback)(()=>{
        // No need to observe non-hidden tabs
        // + we want to force a re-render when a tab becomes visible
        setHiddenTabElement(codeBlockRef.current?.closest('[role=tabpanel][hidden]'));
    }, [
        codeBlockRef,
        setHiddenTabElement
    ]);
    (0,react__rspack_import_0.useEffect)(()=>{
        updateHiddenTabElement();
    }, [
        updateHiddenTabElement
    ]);
    (0,_useMutationObserver__rspack_import_1/* .useMutationObserver */.P)(hiddenTabElement, (mutations)=>{
        mutations.forEach((mutation)=>{
            if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                callback();
                updateHiddenTabElement();
            }
        });
    }, {
        attributes: true,
        characterData: false,
        childList: false,
        subtree: false
    });
}
function useCodeWordWrap() {
    const [isEnabled, setIsEnabled] = (0,react__rspack_import_0.useState)(false);
    const [isCodeScrollable, setIsCodeScrollable] = (0,react__rspack_import_0.useState)(false);
    const codeBlockRef = (0,react__rspack_import_0.useRef)(null);
    const toggle = (0,react__rspack_import_0.useCallback)(()=>{
        const codeElement = codeBlockRef.current.querySelector('code');
        if (isEnabled) {
            codeElement.removeAttribute('style');
        } else {
            codeElement.style.whiteSpace = 'pre-wrap';
            // When code wrap is enabled, we want to avoid a scrollbar in any case
            // Ensure that very very long words/strings/tokens still wrap
            codeElement.style.overflowWrap = 'anywhere';
        }
        setIsEnabled((value)=>!value);
    }, [
        codeBlockRef,
        isEnabled
    ]);
    const updateCodeIsScrollable = (0,react__rspack_import_0.useCallback)(()=>{
        const { scrollWidth, clientWidth } = codeBlockRef.current;
        const isScrollable = scrollWidth > clientWidth || codeBlockRef.current.querySelector('code').hasAttribute('style');
        setIsCodeScrollable(isScrollable);
    }, [
        codeBlockRef
    ]);
    useTabBecameVisibleCallback(codeBlockRef, updateCodeIsScrollable);
    (0,react__rspack_import_0.useEffect)(()=>{
        updateCodeIsScrollable();
    }, [
        isEnabled,
        updateCodeIsScrollable
    ]);
    (0,react__rspack_import_0.useEffect)(()=>{
        window.addEventListener('resize', updateCodeIsScrollable, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('resize', updateCodeIsScrollable);
        };
    }, [
        updateCodeIsScrollable
    ]);
    return {
        codeBlockRef,
        isEnabled,
        isCodeScrollable,
        toggle
    };
} //# sourceMappingURL=useCodeWordWrap.js.map


},
43181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  P: () => (useMutationObserver)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var _utils_reactUtils__rspack_import_1 = __webpack_require__(52260);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const DefaultOptions = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
function useMutationObserver(target, callback, options = DefaultOptions) {
    const stableCallback = (0,_utils_reactUtils__rspack_import_1/* .useEvent */._q)(callback);
    // MutationObserver options are not nested much
    // so this should be to memo options in 99%
    // TODO handle options.attributeFilter array
    const stableOptions = (0,_utils_reactUtils__rspack_import_1/* .useShallowMemoObject */.Be)(options);
    (0,react__rspack_import_0.useEffect)(()=>{
        const observer = new MutationObserver(stableCallback);
        if (target) {
            observer.observe(target, stableOptions);
        }
        return ()=>observer.disconnect();
    }, [
        target,
        stableCallback,
        stableOptions
    ]);
} //# sourceMappingURL=useMutationObserver.js.map


},
67810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (usePrismTheme)
});
/* import */ var _contexts_colorMode__rspack_import_1 = __webpack_require__(83941);
/* import */ var _utils_useThemeConfig__rspack_import_0 = __webpack_require__(61022);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

/**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */ function usePrismTheme() {
    const { prism } = (0,_utils_useThemeConfig__rspack_import_0/* .useThemeConfig */.p)();
    const { colorMode } = (0,_contexts_colorMode__rspack_import_1/* .useColorMode */.G)();
    const lightModeTheme = prism.theme;
    const darkModeTheme = prism.darkTheme || lightModeTheme;
    const prismTheme = colorMode === 'dark' ? darkModeTheme : lightModeTheme;
    return prismTheme;
} //# sourceMappingURL=usePrismTheme.js.map


},
79365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Y4: () => (BlogAuthorNoPostsLabel),
  ZD: () => (useBlogTagsPostsPageTitle),
  np: () => (BlogAuthorsListViewAllLabel),
  uz: () => (translateBlogAuthorsListPageTitle),
  wI: () => (useBlogAuthorPageTitle)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _utils_usePluralForm__rspack_import_3 = __webpack_require__(16497);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


// Only used locally
function useBlogPostsPlural() {
    const { selectMessage } = (0,_utils_usePluralForm__rspack_import_3/* .usePluralForm */.W)();
    return (count)=>selectMessage(count, (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.blog.post.plurals',
            description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One post|{count} posts'
        }, {
            count
        }));
}
function useBlogTagsPostsPageTitle(tag) {
    const blogPostsPlural = useBlogPostsPlural();
    return (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.blog.tagTitle',
        description: 'The title of the page for a blog tag',
        message: '{nPosts} tagged with "{tagName}"'
    }, {
        nPosts: blogPostsPlural(tag.count),
        tagName: tag.label
    });
}
function useBlogAuthorPageTitle(author) {
    const blogPostsPlural = useBlogPostsPlural();
    return (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.blog.author.pageTitle',
        description: 'The title of the page for a blog author',
        message: '{authorName} - {nPosts}'
    }, {
        nPosts: blogPostsPlural(author.count),
        authorName: author.name || author.key
    });
}
const translateBlogAuthorsListPageTitle = ()=>(0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.blog.authorsList.pageTitle',
        message: 'Authors',
        description: 'The title of the authors page'
    });
function BlogAuthorsListViewAllLabel() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.blog.authorsList.viewAll",
        description: "The label of the link targeting the blog authors page",
        children: "View all authors"
    });
}
function BlogAuthorNoPostsLabel() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.blog.author.noPosts",
        description: "The text for authors with 0 blog post",
        children: "This author has not written any posts yet."
    });
} //# sourceMappingURL=blogTranslations.js.map


},
83276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  AE: () => (UnlistedMetadata),
  Rc: () => (UnlistedBannerTitle),
  TT: () => (DraftBannerMessage),
  Uh: () => (UnlistedBannerMessage),
  Yh: () => (DraftBannerTitle)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(61826);
/* import */ var _docusaurus_Head__rspack_import_3 = __webpack_require__(53572);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function UnlistedBannerTitle() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.unlistedBanner.title",
        description: "The unlisted content banner title",
        children: "Unlisted page"
    });
}
function UnlistedBannerMessage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.unlistedBanner.message",
        description: "The unlisted content banner message",
        children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it."
    });
}
// TODO Docusaurus v4 breaking change (since it's v3 public theme-common API :/)
//  Move this to theme/ContentVisibility/Unlisted
function UnlistedMetadata() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Head__rspack_import_3/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
        })
    });
}
function DraftBannerTitle() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.draftBanner.title",
        description: "The draft content banner title",
        children: "Draft page"
    });
}
function DraftBannerMessage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.draftBanner.message",
        description: "The draft content banner message",
        children: "This page is a draft. It will only be visible in dev and be excluded from the production build."
    });
} //# sourceMappingURL=contentVisibilityTranslations.js.map


},
27954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  i: () => (useDateTimeFormat)
});
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_0 = __webpack_require__(10898);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useCalendar() {
    const { i18n: { currentLocale, localeConfigs } } = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)();
    return localeConfigs[currentLocale].calendar;
}
function useDateTimeFormat(options = {}) {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)();
    const calendar = useCalendar();
    return new Intl.DateTimeFormat(currentLocale, {
        calendar,
        ...options
    });
} //# sourceMappingURL=IntlUtils.js.map


},
65441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  c: () => (processAdmonitionProps)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
    const items = react__rspack_import_1.Children.toArray(children);
    const mdxAdmonitionTitleWrapper = items.find((item)=>/*#__PURE__*/ react__rspack_import_1.isValidElement(item) && item.type === 'mdxAdmonitionTitle');
    const rest = items.filter((item)=>item !== mdxAdmonitionTitleWrapper);
    const mdxAdmonitionTitle = mdxAdmonitionTitleWrapper?.props.children;
    return {
        mdxAdmonitionTitle,
        rest: rest.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: rest
        }) : null
    };
}
function processAdmonitionProps(props) {
    const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(props.children);
    const title = props.title ?? mdxAdmonitionTitle;
    return {
        ...props,
        // Do not return "title: undefined" prop
        // this might create unwanted props overrides when merging props
        // For example: {...default,...props}
        ...title && {
            title
        },
        children: rest
    };
} //# sourceMappingURL=admonitionUtils.js.map


},
71643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  M$: () => (getPrismCssVariables),
  Ph: () => (useCodeBlockContext),
  l8: () => (CodeBlockContextProvider),
  mU: () => (createCodeBlockMetadata)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(34164);
/* import */ var parse_numeric_range__rspack_import_2 = __webpack_require__(18426);
/* import */ var parse_numeric_range__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range__rspack_import_2);
/* import */ var _reactUtils__rspack_import_4 = __webpack_require__(52260);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



const codeBlockTitleRegex = /title=(?<quote>["'])(?<title>.*?)\1/;
const metastringLinesRangeRegex = /\{(?<range>[\d,-]+)\}/;
// Supported types of highlight comments
const popularCommentPatterns = {
    js: {
        start: '\\/\\/',
        end: ''
    },
    jsBlock: {
        start: '\\/\\*',
        end: '\\*\\/'
    },
    jsx: {
        start: '\\{\\s*\\/\\*',
        end: '\\*\\/\\s*\\}'
    },
    bash: {
        start: '#',
        end: ''
    },
    html: {
        start: '<!--',
        end: '-->'
    }
};
const commentPatterns = {
    ...popularCommentPatterns,
    // minor comment styles
    lua: {
        start: '--',
        end: ''
    },
    wasm: {
        start: '\\;\\;',
        end: ''
    },
    tex: {
        start: '%',
        end: ''
    },
    vb: {
        start: "['‘’]",
        end: ''
    },
    vbnet: {
        start: "(?:_\\s*)?['‘’]",
        end: ''
    },
    rem: {
        start: '[Rr][Ee][Mm]\\b',
        end: ''
    },
    f90: {
        start: '!',
        end: ''
    },
    ml: {
        start: '\\(\\*',
        end: '\\*\\)'
    },
    cobol: {
        start: '\\*>',
        end: ''
    }
};
const popularCommentTypes = Object.keys(popularCommentPatterns);
function getCommentPattern(languages, magicCommentDirectives) {
    // To be more reliable, the opening and closing comment must match
    const commentPattern = languages.map((lang)=>{
        const { start, end } = commentPatterns[lang];
        return `(?:${start}\\s*(${magicCommentDirectives.flatMap((d)=>[
                d.line,
                d.block?.start,
                d.block?.end
            ].filter(Boolean)).join('|')})\\s*${end})`;
    }).join('|');
    // White space is allowed, but otherwise it should be on it's own line
    return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}
/**
 * Select comment styles based on language
 */ function getAllMagicCommentDirectiveStyles(lang, magicCommentDirectives) {
    switch(lang){
        case 'js':
        case 'javascript':
        case 'ts':
        case 'typescript':
            return getCommentPattern([
                'js',
                'jsBlock'
            ], magicCommentDirectives);
        case 'jsx':
        case 'tsx':
            return getCommentPattern([
                'js',
                'jsBlock',
                'jsx'
            ], magicCommentDirectives);
        case 'html':
            return getCommentPattern([
                'js',
                'jsBlock',
                'html'
            ], magicCommentDirectives);
        case 'python':
        case 'py':
        case 'bash':
            return getCommentPattern([
                'bash'
            ], magicCommentDirectives);
        case 'markdown':
        case 'md':
            // Text uses HTML, front matter uses bash
            return getCommentPattern([
                'html',
                'jsx',
                'bash'
            ], magicCommentDirectives);
        case 'tex':
        case 'latex':
        case 'matlab':
            return getCommentPattern([
                'tex'
            ], magicCommentDirectives);
        case 'lua':
        case 'haskell':
            return getCommentPattern([
                'lua'
            ], magicCommentDirectives);
        case 'sql':
            return getCommentPattern([
                'lua',
                'jsBlock'
            ], magicCommentDirectives);
        case 'wasm':
            return getCommentPattern([
                'wasm'
            ], magicCommentDirectives);
        case 'vb':
        case 'vba':
        case 'visual-basic':
            return getCommentPattern([
                'vb',
                'rem'
            ], magicCommentDirectives);
        case 'vbnet':
            return getCommentPattern([
                'vbnet',
                'rem'
            ], magicCommentDirectives);
        case 'batch':
            return getCommentPattern([
                'rem'
            ], magicCommentDirectives);
        case 'basic':
            return getCommentPattern([
                'rem',
                'f90'
            ], magicCommentDirectives);
        case 'fsharp':
            return getCommentPattern([
                'js',
                'ml'
            ], magicCommentDirectives);
        case 'ocaml':
        case 'sml':
            return getCommentPattern([
                'ml'
            ], magicCommentDirectives);
        case 'fortran':
            return getCommentPattern([
                'f90'
            ], magicCommentDirectives);
        case 'cobol':
            return getCommentPattern([
                'cobol'
            ], magicCommentDirectives);
        default:
            // All popular comment types
            return getCommentPattern(popularCommentTypes, magicCommentDirectives);
    }
}
function parseCodeBlockTitle(metastring) {
    return metastring?.match(codeBlockTitleRegex)?.groups.title ?? '';
}
function getMetaLineNumbersStart(metastring) {
    const showLineNumbersMeta = metastring?.split(' ').find((str)=>str.startsWith('showLineNumbers'));
    if (showLineNumbersMeta) {
        if (showLineNumbersMeta.startsWith('showLineNumbers=')) {
            const value = showLineNumbersMeta.replace('showLineNumbers=', '');
            return parseInt(value, 10);
        }
        return 1;
    }
    return undefined;
}
function getLineNumbersStart({ showLineNumbers, metastring }) {
    const defaultStart = 1;
    if (typeof showLineNumbers === 'boolean') {
        return showLineNumbers ? defaultStart : undefined;
    }
    if (typeof showLineNumbers === 'number') {
        return showLineNumbers;
    }
    return getMetaLineNumbersStart(metastring);
}
// TODO Docusaurus v4: remove, only kept for internal retro-compatibility
//  See https://github.com/facebook/docusaurus/pull/11153
function containsLineNumbers(metastring) {
    return Boolean(metastring?.includes('showLineNumbers'));
}
function parseCodeLinesFromMetastring(code, { metastring, magicComments }) {
    // Highlighted lines specified in props: don't parse the content
    if (metastring && metastringLinesRangeRegex.test(metastring)) {
        const linesRange = metastring.match(metastringLinesRangeRegex).groups.range;
        if (magicComments.length === 0) {
            throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
        }
        const metastringRangeClassName = magicComments[0].className;
        const lines = parse_numeric_range__rspack_import_2_default()(linesRange).filter((n)=>n > 0).map((n)=>[
                n - 1,
                [
                    metastringRangeClassName
                ]
            ]);
        return {
            lineClassNames: Object.fromEntries(lines),
            code
        };
    }
    return null;
}
function parseCodeLinesFromContent(code, params) {
    const { language, magicComments } = params;
    if (language === undefined) {
        return {
            lineClassNames: {},
            code
        };
    }
    const directiveRegex = getAllMagicCommentDirectiveStyles(language, magicComments);
    // Go through line by line
    const lines = code.split(/\r?\n/);
    const blocks = Object.fromEntries(magicComments.map((d)=>[
            d.className,
            {
                start: 0,
                range: ''
            }
        ]));
    const lineToClassName = Object.fromEntries(magicComments.filter((d)=>d.line).map(({ className, line })=>[
            line,
            className
        ]));
    const blockStartToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map(({ className, block })=>[
            block.start,
            className
        ]));
    const blockEndToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map(({ className, block })=>[
            block.end,
            className
        ]));
    for(let lineNumber = 0; lineNumber < lines.length;){
        const line = lines[lineNumber];
        const match = line.match(directiveRegex);
        if (!match) {
            // Lines without directives are unchanged
            lineNumber += 1;
            continue;
        }
        const directive = match.slice(1).find((item)=>item !== undefined);
        if (lineToClassName[directive]) {
            blocks[lineToClassName[directive]].range += `${lineNumber},`;
        } else if (blockStartToClassName[directive]) {
            blocks[blockStartToClassName[directive]].start = lineNumber;
        } else if (blockEndToClassName[directive]) {
            blocks[blockEndToClassName[directive]].range += `${blocks[blockEndToClassName[directive]].start}-${lineNumber - 1},`;
        }
        lines.splice(lineNumber, 1);
    }
    const lineClassNames = {};
    Object.entries(blocks).forEach(([className, { range }])=>{
        parse_numeric_range__rspack_import_2_default()(range).forEach((l)=>{
            lineClassNames[l] ??= [];
            lineClassNames[l].push(className);
        });
    });
    return {
        code: lines.join('\n'),
        lineClassNames
    };
}
/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 */ function parseLines(code, params) {
    // Historical behavior: we remove last line break
    const newCode = code.replace(/\r?\n$/, '');
    // Historical behavior: we try one strategy after the other
    // we don't support mixing metastring ranges + magic comments
    return parseCodeLinesFromMetastring(newCode, {
        ...params
    }) ?? parseCodeLinesFromContent(newCode, {
        ...params
    });
}
/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */ function parseClassNameLanguage(className) {
    if (!className) {
        return undefined;
    }
    const languageClassName = className.split(' ').find((str)=>str.startsWith('language-'));
    return languageClassName?.replace(/language-/, '');
}
// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
    return language?.toLowerCase();
}
function getLanguage(params) {
    return normalizeLanguage(params.language ?? parseClassNameLanguage(params.className) ?? params.defaultLanguage) ?? 'text'; // There's always a language, required by Prism;
}
/**
 * This ensures that we always have the code block language as className
 * For MDX code blocks this is provided automatically by MDX
 * For JSX code blocks, the language gets added by this function
 * This ensures both cases lead to a consistent HTML output
 */ function ensureLanguageClassName({ className, language }) {
    return (0,clsx__rspack_import_3/* ["default"] */.A)(className, language && !className?.includes(`language-${language}`) && `language-${language}`);
}
function createCodeBlockMetadata(params) {
    const language = getLanguage({
        language: params.language,
        defaultLanguage: params.defaultLanguage,
        className: params.className
    });
    const { lineClassNames, code } = parseLines(params.code, {
        metastring: params.metastring,
        magicComments: params.magicComments,
        language
    });
    const className = ensureLanguageClassName({
        className: params.className,
        language
    });
    const title = parseCodeBlockTitle(params.metastring) || params.title;
    const lineNumbersStart = getLineNumbersStart({
        showLineNumbers: params.showLineNumbers,
        metastring: params.metastring
    });
    return {
        codeInput: params.code,
        code,
        className,
        language,
        title,
        lineNumbersStart,
        lineClassNames
    };
}
function getPrismCssVariables(prismTheme) {
    const mapping = {
        color: '--prism-color',
        backgroundColor: '--prism-background-color'
    };
    const properties = {};
    Object.entries(prismTheme.plain).forEach(([key, value])=>{
        const varName = mapping[key];
        if (varName && typeof value === 'string') {
            properties[varName] = value;
        }
    });
    return properties;
}
const CodeBlockContext = /*#__PURE__*/ (0,react__rspack_import_1.createContext)(null);
function CodeBlockContextProvider({ metadata, wordWrap, children }) {
    // Should we optimize this in 2 contexts?
    // Unlike metadata, wordWrap is stateful and likely to trigger re-renders
    const value = (0,react__rspack_import_1.useMemo)(()=>{
        return {
            metadata,
            wordWrap
        };
    }, [
        metadata,
        wordWrap
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CodeBlockContext.Provider, {
        value: value,
        children: children
    });
}
function useCodeBlockContext() {
    const value = (0,react__rspack_import_1.useContext)(CodeBlockContext);
    if (value === null) {
        throw new _reactUtils__rspack_import_4/* .ReactContextError */.dV('CodeBlockContextProvider');
    }
    return value;
} //# sourceMappingURL=codeBlockUtils.js.map


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
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
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

};
;