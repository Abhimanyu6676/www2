import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/FacebookRounded"
import YouTubeIcon from "@mui/icons-material/YouTube"
import WhatsAppIcon from "@mui/icons-material/WhatsappRounded"
import Button from "../../Button"
//@ts-ignore
import * as styles from "./mobileHeader.module.css"
import { primartMenu } from "."
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

type Props = {}
export const MobileHeader = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon/icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <div className={styles.mobileBlockContainer}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Button
          onClick={() => {
            setShowDrawer(!showDrawer)
          }}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MenuIcon fontSize="large" style={{ color: "#000000" }} />
        </Button>
        <Img fluid={data.icon.childImageSharp.fluid} style={{ width: 50 }} />
      </div>

      <div // drawer container
        className={styles.drawer}
        style={{
          position: "fixed",
          top: 0,
          left: showDrawer ? "0vw" : "-90vw",
          //left: 0,
          width: "90vw",
          height: "100vh",
          backgroundColor: "white",
          zIndex: 10,
          boxShadow: "-1px 2px 18px -1px rgba(0,0,0,0.75)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div // close button container
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => {
              setShowDrawer(!showDrawer)
            }}
            style={{ marginTop: 10, marginRight: 10 }}
          >
            <CloseIcon fontSize="large" style={{ color: "#000000" }} />
          </Button>
        </div>
        <div // primary menu items container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            position: "relative",
            marginLeft: 20,
            flex: 1,
          }}
        >
          {primartMenu.map((item, index) => {
            return (
              <Link
                key={index + "_"}
                to={item.link}
                style={{
                  marginTop: index == 0 ? 0 : 20,
                  textDecoration: "none",
                }}
              >
                <h2>{item.text}</h2>
              </Link>
            )
          })}
        </div>
        <div // bottom icon container
          style={{
            marginBottom: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div // icon container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InstagramIcon style={Styles.socialIcons} />
            <FacebookIcon style={Styles.socialIcons} />
            <WhatsAppIcon style={Styles.socialIcons} />
            {/* <YouTubeIcon style={Styles.socialIcons} /> */}
          </div>
          <p style={{ color: "#999999", marginTop: 10 }}>v 2.2.13</p>
        </div>
      </div>
    </div>
  )
}

const Styles = {
  socialIcons: {
    color: "#999999",
    fontSize: 25,
    margin: "0px 10px",
  },
}
