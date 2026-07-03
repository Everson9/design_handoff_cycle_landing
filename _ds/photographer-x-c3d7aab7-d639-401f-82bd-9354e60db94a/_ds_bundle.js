/* @ds-bundle: {"format":4,"namespace":"PhotographerX_c3d7aa","components":[{"name":"ArticleCard","sourcePath":"components/cards/ArticleCard.jsx"},{"name":"PortfolioCard","sourcePath":"components/cards/PortfolioCard.jsx"},{"name":"ServiceItem","sourcePath":"components/cards/ServiceItem.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"MetaBadge","sourcePath":"components/core/MetaBadge.jsx"},{"name":"SectionTitle","sourcePath":"components/core/SectionTitle.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/cards/ArticleCard.jsx":"93563573c828","components/cards/PortfolioCard.jsx":"a0e25cab37db","components/cards/ServiceItem.jsx":"2574b40d0c42","components/core/Button.jsx":"9ca371984d8d","components/core/MetaBadge.jsx":"6384d932dbca","components/core/SectionTitle.jsx":"8d4117d27ea7","components/forms/Input.jsx":"2f23acc8962f","components/navigation/NavBar.jsx":"b000505c94d0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PhotographerX_c3d7aa = window.PhotographerX_c3d7aa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ArticleCard.jsx
try { (() => {
function ArticleCard({
  image,
  category,
  title,
  date,
  href = '#',
  style: extraStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    cursor: 'pointer',
    ...extraStyle
  };
  const imgWrapStyle = {
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: '16/10',
    backgroundColor: 'var(--color-bg-surface)',
    marginBottom: '16px'
  };
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    transform: hovered ? 'scale(1.04)' : 'scale(1)',
    filter: 'brightness(0.8)'
  };
  const metaStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px'
  };
  const categoryStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-medium)',
    letterSpacing: 'var(--tracking-widest)',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)'
  };
  const dotStyle = {
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-text-muted)'
  };
  const dateStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    color: 'var(--color-text-muted)'
  };
  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--font-normal)',
    letterSpacing: 'var(--tracking-tight)',
    lineHeight: 'var(--leading-snug)',
    color: hovered ? 'var(--color-text-secondary)' : 'var(--color-text-primary)',
    margin: 0,
    transition: 'color 0.2s ease'
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: containerStyle,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: imgWrapStyle
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: imgStyle
  })), /*#__PURE__*/React.createElement("div", {
    style: metaStyle
  }, category && /*#__PURE__*/React.createElement("span", {
    style: categoryStyle
  }, category), category && date && /*#__PURE__*/React.createElement("div", {
    style: dotStyle
  }), date && /*#__PURE__*/React.createElement("span", {
    style: dateStyle
  }, date)), /*#__PURE__*/React.createElement("h3", {
    style: titleStyle
  }, title));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PortfolioCard.jsx
try { (() => {
function PortfolioCard({
  image,
  title,
  description,
  camera,
  location,
  date,
  href = '#',
  aspectRatio = '4/3'
}) {
  const [hovered, setHovered] = React.useState(false);
  const cardStyle = {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    aspectRatio,
    backgroundColor: 'var(--color-bg-surface)',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  const imgStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    transform: hovered ? 'scale(1.04)' : 'scale(1)',
    filter: 'brightness(0.85)'
  };
  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'var(--overlay-full)',
    transition: 'opacity 0.3s ease',
    opacity: hovered ? 1 : 0.85
  };
  const metaRowStyle = {
    position: 'absolute',
    top: '16px',
    left: '16px',
    right: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px'
  };
  const contentStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px'
  };
  const titleStyle = {
    margin: '0 0 6px',
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-2xl)',
    fontWeight: 'var(--font-light)',
    letterSpacing: 'var(--tracking-tight)',
    lineHeight: 'var(--leading-tight)',
    color: 'var(--color-text-primary)'
  };
  const descStyle = {
    margin: 0,
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-normal)',
    color: 'var(--color-text-secondary)',
    lineHeight: 'var(--leading-normal)',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  };

  // Inline MetaBadge to avoid cross-file dep issues
  const Badge = ({
    icon,
    label
  }) => {
    const ICONS = {
      camera: /*#__PURE__*/React.createElement("svg", {
        width: "11",
        height: "11",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "13",
        r: "4"
      })),
      location: /*#__PURE__*/React.createElement("svg", {
        width: "11",
        height: "11",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "10",
        r: "3"
      })),
      calendar: /*#__PURE__*/React.createElement("svg", {
        width: "11",
        height: "11",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "18",
        rx: "2"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "16",
        y1: "2",
        x2: "16",
        y2: "6"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "8",
        y1: "2",
        x2: "8",
        y2: "6"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "3",
        y1: "10",
        x2: "21",
        y2: "10"
      }))
    };
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '100px',
        padding: '4px 10px',
        color: '#fff',
        fontFamily: 'var(--font-body)',
        fontSize: '11px',
        lineHeight: 1
      }
    }, ICONS[icon], label);
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: cardStyle,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: imgStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: overlayStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: metaRowStyle
  }, camera && /*#__PURE__*/React.createElement(Badge, {
    icon: "camera",
    label: camera
  }), location && /*#__PURE__*/React.createElement(Badge, {
    icon: "location",
    label: location
  }), date && /*#__PURE__*/React.createElement(Badge, {
    icon: "calendar",
    label: date
  })), /*#__PURE__*/React.createElement("div", {
    style: contentStyle
  }, /*#__PURE__*/React.createElement("h3", {
    style: titleStyle
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: descStyle
  }, description)));
}
Object.assign(__ds_scope, { PortfolioCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PortfolioCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceItem.jsx
try { (() => {
function ServiceItem({
  number,
  title,
  description,
  style: extraStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  const containerStyle = {
    padding: '24px 20px',
    borderTop: '1px solid var(--color-border)',
    transition: 'border-color 0.2s ease',
    borderTopColor: hovered ? 'var(--color-text-muted)' : 'var(--color-border)',
    ...extraStyle
  };
  const numberStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-normal)',
    letterSpacing: 'var(--tracking-wider)',
    color: 'var(--color-text-muted)',
    marginBottom: '12px'
  };
  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--font-normal)',
    letterSpacing: 'var(--tracking-tight)',
    color: 'var(--color-text-primary)',
    margin: '0 0 8px'
  };
  const descStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-normal)',
    lineHeight: 'var(--leading-relaxed)',
    color: 'var(--color-text-secondary)',
    margin: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: containerStyle,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: numberStyle
  }, number), /*#__PURE__*/React.createElement("h3", {
    style: titleStyle
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: descStyle
  }, description));
}
Object.assign(__ds_scope, { ServiceItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'outlined',
  size = 'md',
  href,
  onClick,
  disabled = false,
  type = 'button'
}) {
  const [hovered, setHovered] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--font-medium)',
    fontSize: 'var(--text-xs)',
    letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background 0.2s ease, color 0.2s ease',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      padding: '7px 20px'
    },
    md: {
      padding: '11px 28px'
    },
    lg: {
      padding: '15px 40px',
      fontSize: 'var(--text-sm)'
    }
  };
  const getVariantStyle = () => {
    if (variant === 'outlined') {
      return {
        borderColor: 'var(--color-text-primary)',
        color: hovered ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
        backgroundColor: hovered ? 'var(--color-white)' : 'transparent'
      };
    }
    if (variant === 'solid') {
      return {
        borderColor: 'var(--color-white)',
        color: hovered ? 'var(--color-text-primary)' : 'var(--color-text-inverse)',
        backgroundColor: hovered ? 'transparent' : 'var(--color-white)'
      };
    }
    if (variant === 'ghost') {
      return {
        borderColor: 'transparent',
        color: hovered ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
        backgroundColor: 'transparent'
      };
    }
    return {};
  };
  const style = {
    ...base,
    ...sizes[size],
    ...getVariantStyle()
  };
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      style: style,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false)
    }, children);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    style: style,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/MetaBadge.jsx
try { (() => {
const ICONS = {
  camera: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4"
  })),
  location: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  calendar: /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  }))
};
function MetaBadge({
  icon = 'camera',
  label,
  style: extraStyle
}) {
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(0,0,0,0.55)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 'var(--radius-pill)',
    padding: '5px 12px',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-normal)',
    letterSpacing: 'var(--tracking-normal)',
    lineHeight: 1,
    ...extraStyle
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, ICONS[icon] || ICONS.camera, label);
}
Object.assign(__ds_scope, { MetaBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MetaBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTitle.jsx
try { (() => {
function SectionTitle({
  eyebrow,
  title,
  align = 'left',
  titleSize = 'lg',
  showRule = true,
  style: extraStyle
}) {
  const sizes = {
    sm: 'var(--text-2xl)',
    md: 'var(--text-3xl)',
    lg: 'var(--text-4xl)',
    xl: 'var(--text-5xl)'
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: align === 'center' ? 'center' : 'flex-start',
    gap: '12px',
    textAlign: align,
    ...extraStyle
  };
  const eyebrowStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-medium)',
    letterSpacing: 'var(--tracking-widest)',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)'
  };
  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: sizes[titleSize],
    fontWeight: 'var(--font-light)',
    letterSpacing: 'var(--tracking-tight)',
    lineHeight: 'var(--leading-tight)',
    color: 'var(--color-text-primary)',
    margin: 0
  };
  const ruleStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };
  const lineStyle = {
    width: '48px',
    height: '1px',
    backgroundColor: 'var(--color-text-muted)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: containerStyle
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: eyebrowStyle
  }, eyebrow), showRule ? /*#__PURE__*/React.createElement("div", {
    style: ruleStyle
  }, /*#__PURE__*/React.createElement("h2", {
    style: titleStyle
  }, title), /*#__PURE__*/React.createElement("div", {
    style: lineStyle
  })) : /*#__PURE__*/React.createElement("h2", {
    style: titleStyle
  }, title));
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required = false,
  multiline = false,
  rows = 4,
  style: extraStyle
}) {
  const [focused, setFocused] = React.useState(false);
  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    ...extraStyle
  };
  const labelStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-medium)',
    letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)'
  };
  const fieldStyle = {
    width: '100%',
    padding: '14px 16px',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: focused ? 'var(--color-text-secondary)' : 'var(--color-border)',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-normal)',
    color: 'var(--color-text-primary)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    resize: multiline ? 'vertical' : undefined,
    boxSizing: 'border-box',
    WebkitAppearance: 'none'
  };
  const commonProps = {
    name,
    placeholder,
    value,
    onChange,
    required,
    style: fieldStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapStyle
  }, label && /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, label, required && ' *'), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, commonProps)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, commonProps)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const CameraIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "13",
  r: "4"
}));
function NavBar({
  brand = 'Photography X',
  links = [{
    label: 'Home',
    href: '#'
  }, {
    label: 'About',
    href: '#'
  }, {
    label: 'Albums',
    href: '#'
  }, {
    label: 'Store',
    href: '#'
  }],
  ctaLabel = 'Contact',
  ctaHref = '#',
  transparent = false
}) {
  const [ctaHovered, setCtaHovered] = React.useState(false);
  const navStyle = {
    position: transparent ? 'absolute' : 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    height: '72px',
    backgroundColor: transparent ? 'transparent' : 'var(--color-bg-base)',
    borderBottom: transparent ? 'none' : '1px solid var(--color-border-subtle)'
  };
  const brandStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-medium)',
    letterSpacing: 'var(--tracking-wide)',
    color: 'var(--color-text-primary)',
    textDecoration: 'none'
  };
  const linksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };
  const linkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-normal)',
    color: 'var(--color-text-secondary)',
    textDecoration: 'none',
    letterSpacing: 'var(--tracking-normal)',
    transition: 'color 0.15s ease'
  };
  const ctaStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '9px 24px',
    border: '1px solid var(--color-text-primary)',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-medium)',
    letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: ctaHovered ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
    backgroundColor: ctaHovered ? 'var(--color-white)' : 'transparent',
    transition: 'background 0.2s ease, color 0.2s ease',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: navStyle
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: brandStyle
  }, /*#__PURE__*/React.createElement(CameraIcon, null), brand), /*#__PURE__*/React.createElement("ul", {
    style: linksStyle
  }, links.map((link, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: link.href,
    style: linkStyle
  }, link.label)))), /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    style: ctaStyle,
    onMouseEnter: () => setCtaHovered(true),
    onMouseLeave: () => setCtaHovered(false)
  }, ctaLabel));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.PortfolioCard = __ds_scope.PortfolioCard;

__ds_ns.ServiceItem = __ds_scope.ServiceItem;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.MetaBadge = __ds_scope.MetaBadge;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
