// // Extra small devices (portrait phones, less than 576px)
// @media (max-width: 575.98px) { ... }

// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) and (max-width: 767.98px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) and (max-width: 991.98px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) and (max-width: 1199.98px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }


export default {
    up() {

    },
    down(size) {
        const sizes = {
            xs: "576px",
            sm: "768px",
            md: "992px",
            lg: "1200px",
            xl: "1650px"    
        }
        return `@media (max-width: ${sizes[size]})`
    }
}


