//import layout1Settings from './Layout1/Layout1Settings'
import { themes } from '../Theme/initThemes'

export const LayoutSettings = {
    activeTheme: "company", 
    perfectScrollbar: true,
    themes: themes,
    footer: {
      show: true,
      fixed: false,
      theme: "red"
    }
   /*layoutSettings: {
      leftSidebar: {
        show: true,
        mode: "full", // full, close, compact, mobile,
        theme: "slateDark1", // View all valid theme colors inside Theme/themeColors.js
        bgImgURL: "/assets/sidebar/sidebar-bg-dark.jpg",
      },
      topbar: {
        show: true,
        fixed: true,
        theme: "whiteBlue", // View all valid theme colors inside Theme/themeColors.js
      },
    },
    }*/
  
  }
