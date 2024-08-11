import { colors } from "./utils/services";
// import { withStyles } from "@mui/material/styles";
import Button from "@mui/material/Button";

const handleScroll = () => {
  window.scroll({
    top: 600,
    left: 0,
    behavior: "smooth",
  });
};
export default {
  // gridHover,
  // gridNoHover,
  handleScroll,
  // ColorButton,
  cardRadius: {
    borderRadius: "5px",
  },
  colorWhite: {
    color: colors.secondary,
  },
  colorPrimary: {
    color: colors.primary,
  },
  colorYellow: {
    color: colors.yellow,
  },
  colorGrey: {
    color: colors.grey,
  },
  colorBlue: {
    color: colors.blue,
  },
  blackBG: {
    background: "#000",
  },
  whiteBG: {
    background: "#fff",
  },
  colorTransparent: {
    background: colors.transparent,
  },
  boldTxt: {
    fontStyle: "bold",
  },
  feildRadius: {
    borderRadius: "5px",
  },
  greyBG: {
    background: "#111",
  },
  blueBG: {
    background: "#3e4e6d",
  },
  italicTxt: {
    fontStyle: "italic",
  },
  marginTop: {
    marginTop: "60px",
  },
  padding5: {
    padding: "5%",
  },
  padding1: {
    padding: "1%",
  },
  paddingLR: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  paddingRight5: {
    paddingRight: "5px",
  },
  spacingVertical: {
    padding: "100px 0",
  },

  leftTxt: {
    textAlign: "left",
  },

  centerTxt: {
    textAlign: "center",
  },
  banner: {
    paddingTop: "40px",
    height: "100vh",
    zIndex: 1000,
    overflow: "hidden",
  },
  deafultButton: {
    padding: "5px 20px",
    marginTop: "20px",
  },

  fixed: {
    position: "sticky",
    top: 0,
  },
  section01: {
    padding: "5%",
    color: colors.secondary,
    minHeight: "100vh",
    zIndex: 500,
    background: "#111",
  },
  section01Content: {
    background: "#000",
    padding: "5%",
    textAlign: "center",
  },
  marginBottom: {
    marginBottom: "50px",
  },
  section02: {
    background: "#111",
    padding: "0 5%",
    minHeight: "80vh",
  },
  translucentContainer: {
    background: colors.translucentBG,
    padding: "20px",
  },
  fullHt: {
    minHeight: "100vh",
    background: "#fff",
  },
  fullHtNoBG: { height: "100vh" },
  highZ: {
    zIndex: 10000,
  },
  imgWidth: {
    width: "100%",
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    padding: "8px",
    background: "rgb(11 57 201 / 75%)",
    zIndex: 20000,
  },
  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    paddingTop: "120px",
    width: "100%",
    background: "#000",
  },
  footer: {
    position:"fixed",
    bottom:0,
    padding: "4px",
    background: "#fff",
    textAlign: "center",
  },
  spacing: (value) => `${value * 8}px`,
  //form styles
  formFieldContainer: {
    height: "85px",
    overflow: "visible",
    marginBottom: "10px",
  },
  verticalScroll: {
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "280px",
  },
  whiteColor: { color: colors.white },
  err: { color: colors.err },
  err2: { color: colors.err, marginLeft: "10px" },
  special: { display: "inline-block", width: "5%", textAlign: "center" },
  countryContainer: { display: "inline-block", width: "15%" },
  mobileContainer: { display: "inline-block", width: "75%" },
};
